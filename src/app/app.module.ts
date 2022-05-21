import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from '../config/typeorm.config';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeormConfig)],
  controllers: [AppController],
})
export class AppModule {}
