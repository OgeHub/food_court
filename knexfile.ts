import 'dotenv/config';
import type { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'food_court',
      user: 'postgres',
      password: 'Star@Excel_0476',
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
