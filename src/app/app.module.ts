import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from '../config/typeorm.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeormConfig), PassportModule.register({ session: true })],
})
export class AppModule {}
