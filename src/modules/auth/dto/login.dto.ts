import { Expose, Transform } from 'class-transformer';

export class LoginDto {
  @Expose()
  accessToken: string;

  @Transform(({ obj }) => obj.id)
  @Expose()
  userId: number;
}
