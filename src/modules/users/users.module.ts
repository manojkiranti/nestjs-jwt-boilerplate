import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
