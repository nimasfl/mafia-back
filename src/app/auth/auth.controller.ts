import { Controller, Get, Req } from '@nestjs/common';
import { UseGoogleGuard } from './guards/use-google.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGoogleGuard()
  async googleAuth(@Req() req: Request) {}

  @Get('/google/callback')
  @UseGoogleGuard()
  async googleAuthRedirect(@Req() req: Request) {
    return this.authService.googleLogin(req);
  }

  @UseGoogleGuard()
  @Get('/test')
  test(@Req() req: Request) {
    return req.user;
  }
}
