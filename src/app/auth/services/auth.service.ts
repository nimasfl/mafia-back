import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

  async findOrCreate(user: Partial<User>) {
    if (!user || !user?.email) {
      throw new UnprocessableEntityException('cannot find or create user without email address');
    }
    const foundUser = await this.userRepo.findOne({
      where: {
        email: user.email,
      },
    });
    if (foundUser) {
      return foundUser;
    }
    return await this.userRepo.save(user);
  }

  async deserializeUser(id: number, email: string) {
    return await this.userRepo.findOne({
      where: {
        email,
        id,
      },
    });
  }
}
