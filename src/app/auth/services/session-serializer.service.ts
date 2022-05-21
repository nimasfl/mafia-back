import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: any) {
    done(null, user);
  }

  async deserializeUser(user, done) {
    console.log('deserialize User: ', user);
    // const userDB = await this.authService.findUser(user.discordId);
    // return userDB ? done(null, userDB) : done(null, null);
  }
}
