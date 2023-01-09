import { Model } from 'objection';
import Knex from 'knex';
import { config } from '../../knexfile';
import { AddonsModel } from './models/addons-model';
import { AddonCategoriesModel } from './models/addon-categories-model';
import { Global, Module } from '@nestjs/common';

const models = [AddonsModel, AddonCategoriesModel];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const db = Knex(config.development);
      Model.knex(db);
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
