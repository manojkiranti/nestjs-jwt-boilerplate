import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserRegisterRequestDto } from './dto/user-register-req.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Serialize(UserDto)
  @Post('register')
  userRegister(@Body() userRegister: UserRegisterRequestDto) {
    return this.usersService.userRegistration(userRegister);
  }
}
