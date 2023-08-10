import { Controller, Body, Post } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from '../services/question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('')
  async saveQuestion(@Body() question: CreateQuestionDto) {
    return await this.questionService.saveQuestion(question);
  }
}
