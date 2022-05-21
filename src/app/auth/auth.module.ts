import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { SessionSerializer } from './services/session-serializer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from '../../entities/session.entity';
import { PassportModule } from '@nestjs/passport';
import { User } from '../../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session, User]), PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [GoogleStrategy, SessionSerializer, AuthService],
})
export class AuthModule {}
