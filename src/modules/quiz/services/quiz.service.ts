import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizRepo: Repository<Quiz>) {}
  async getAllQuiz() {
    return await this.quizRepo
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'question')
      .getMany();
  }

  async getAllQuizWithPagination(
    options: IPaginationOptions,
  ): Promise<Pagination<Quiz>> {
    const qb = this.quizRepo.createQueryBuilder('quiz');
    qb.orderBy('quiz.id', 'DESC');

    return paginate<Quiz>(qb, options);
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepo.save(quiz);
  }

  async getQuizById(id: number) {
    return await this.quizRepo
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'questions')
      .where('quiz.id = :id', { id })
      .getOne();
  }
}
