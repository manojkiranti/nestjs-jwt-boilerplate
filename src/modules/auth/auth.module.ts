import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { jwtConfig } from 'src/config/jwt.config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.registerAsync(jwtConfig)],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
