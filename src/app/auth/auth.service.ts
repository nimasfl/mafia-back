import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req: any) {
    if (!req.user) {
      return 'no user from google';
    }
    return {
      message: 'user found',
      data: req.user,
    };
  }
}
