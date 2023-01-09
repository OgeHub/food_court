import { ModelClass } from 'objection';
import { Inject, Injectable } from '@nestjs/common';
import { AddonCategoriesModel } from '../database/models/addon-categories-model';

@Injectable()
export class AddonCategoriesService {
  constructor(
    @Inject('AddonCategoriesModel')
    private modelClass: ModelClass<AddonCategoriesModel>,
  ) {}

  create(brandId: number, props: Partial<AddonCategoriesModel>) {
    return this.modelClass.query().insert(props).returning('*');
  }
}
