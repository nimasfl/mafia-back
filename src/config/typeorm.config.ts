import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
  synchronize: true,
  autoLoadEntities: true,
};
