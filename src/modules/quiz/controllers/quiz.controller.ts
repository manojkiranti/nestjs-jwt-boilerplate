import {
  Body,
  Controller,
  Get,
  Param,
  HttpCode,
  Post,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
  UseGuards,
} from '@nestjs/common';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { QuizDto } from '../dto/quiz.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    const options: IPaginationOptions = {
      page,
      limit,
    };
    return this.quizService.getAllQuizWithPagination(options);
  }

  @Post('/')
  @HttpCode(201)
  @Serialize(QuizDto)
  createNewQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizData);
  }

  @Get('/:id')
  getQuizById(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuizById(id);
  }
}
