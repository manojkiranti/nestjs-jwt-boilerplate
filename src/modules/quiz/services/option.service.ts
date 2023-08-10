import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '../entities/option.entity';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { QuestionService } from './question.service';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option) private optionRepo: Repository<Option>,
    private questionService: QuestionService,
  ) {}

  async saveOptionToQuestion(optionDto: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      optionDto.questionId,
    );
    const option = this.optionRepo.create(optionDto);
    option.question = question;
    return this.optionRepo.save(option);
  }
}
