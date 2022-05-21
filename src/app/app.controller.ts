import { Controller, Get } from '@nestjs/common';
import { GetUser } from './auth/decorators/get-user.decorator';
import { User } from '../entities/user.entity';
import { AuthGuard } from './auth/guards/auth.guard';

@Controller()
export class AppController {
  @Get()
  @AuthGuard()
  get(@GetUser() user: User) {
    return user;
  }
}
