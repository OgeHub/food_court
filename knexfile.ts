import 'dotenv/config';
import type { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    ...knexSnakeCaseMappers(),
  },
};
