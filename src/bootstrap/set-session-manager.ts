import { INestApplication } from '@nestjs/common';
import session, { Store } from 'express-session';
import * as pgConnector from 'connect-pg-simple';
const pgStore = pgConnector(session());

export const SetSessionManager = (app: INestApplication) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      store: new pgStore({}),
    }),
  );
};
