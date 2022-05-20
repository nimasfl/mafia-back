import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const UseGoogleGuard = () => {
  return applyDecorators(UseGuards(AuthGuard('google')));
};
