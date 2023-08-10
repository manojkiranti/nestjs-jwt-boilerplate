import { Expose } from 'class-transformer';

export class QuizDto {
  @Expose()
  title: string;

  @Expose()
  description: string;
}
