import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { BranchModule } from './branch/branch.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config/dist';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: `.env` }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    QuizModule,
    BranchModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
