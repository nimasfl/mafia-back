import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  @Get('/google/login')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    return;
  }

  @Get('/google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Res() res: Response) {
    return res.redirect(process.env.REDIRECT_URL);
  }
}
