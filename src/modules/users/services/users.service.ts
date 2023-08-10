import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from '../dto/user-register-req.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  async userRegistration(userRegister: UserRegisterRequestDto) {
    const user = await this.repo.create(userRegister);
    return await this.repo.save(user);
  }

  async getUserByEmail(email: string) {
    return await this.repo.findOne({ where: { email } });
  }

  async getUserById(id: number) {
    return await this.repo.findOne({ where: { id } });
  }
}
