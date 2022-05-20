import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SessionGuard } from './session.guard';

export const UseGoogleGuard = () => {
  return applyDecorators(UseGuards(AuthGuard('google'), SessionGuard));
};
