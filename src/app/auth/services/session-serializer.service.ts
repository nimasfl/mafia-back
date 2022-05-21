import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Done } from '../types/done.type';
import { User } from '../../../entities/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(user: User, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Done) {
    const dbUser = await this.authService.deserializeUser(user.id, user.email);
    return dbUser ? done(null, dbUser) : done(null, null);
  }
}
