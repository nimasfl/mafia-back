import { applyDecorators, CanActivate, ExecutionContext, Injectable, UseGuards } from '@nestjs/common';

@Injectable()
class UseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    return req.isAuthenticated();
  }
}

export const AuthGuard = () => {
  return applyDecorators(UseGuards(UseAuthGuard));
};
