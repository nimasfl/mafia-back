import { applyDecorators, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';

export const UseGoogleGuard = () => {
  return applyDecorators(UseGuards(GoogleAuthGuard));
};
