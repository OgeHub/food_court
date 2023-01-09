import { Inject, Injectable } from '@nestjs/common';
import { AddonsModel } from '../database/models/addons-model';
import { ModelClass } from 'objection';

@Injectable()
export class AddonsService {
  constructor(
    @Inject('AddonsModel') private modelClass: ModelClass<AddonsModel>,
  ) {}

  create(brandId: number, props: Partial<AddonsModel>) {
    return this.modelClass.query().insert(props).returning('*');
  }

  findAll(brandId: number) {
    return this.modelClass.query();
  }

  findOne(brandId: number, id: number) {
    return this.modelClass.query().findById(id);
  }

  update(brandId: number, id: number, props: Partial<AddonsModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning('*')
      .first();
  }

  delete(brandId: number, id: number) {
    return this.modelClass.query().delete().where({ id }).returning('*');
  }
}
