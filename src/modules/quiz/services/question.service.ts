import { Injectable } from '@nestjs/common';
import { Question } from '../entities/questions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuizService } from './quiz.service';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
    private quizService: QuizService,
  ) {}

  async saveQuestion(questionDto: CreateQuestionDto) {
    const slectedQuiz = await this.quizService.getQuizById(questionDto.quizId);
    const question = await this.questionRepo.create(questionDto);
    question.quiz = slectedQuiz;
    return await this.questionRepo.save(question);
  }

  async findQuestionById(id) {
    return await this.questionRepo.findOne({
      where: { id },
    });
  }
}
