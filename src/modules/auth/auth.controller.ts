import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Serialize(LoginDto)
  @Post('login')
  login(@Request() req) {
    return this.authService.generateToken(req.user);
  }
}
