import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/services/users.service';
import { Users } from '../users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<Users | undefined> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new BadRequestException();
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException();
    return user;
  }

  async generateToken(reqUser: Users) {
    const user = await this.userService.getUserById(reqUser.id);
    const payload = { username: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);
    user['accessToken'] = access_token;
    user['tokenType'] = 'Bearer';
    user['userId'] = user.id;
    return user;
  }
}
