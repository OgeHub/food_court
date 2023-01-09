import { BaseModel } from './base.model';
import { AddonCategoriesModel } from './addon-categories-model';
import { Model } from 'objection';

export class AddonsModel extends BaseModel {
  static tableName = 'addons';

  description: string;
  price: number;
  category: AddonCategoriesModel;

  static relationMappings = {
    category: {
      modelClass: AddonCategoriesModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'addonCategories.name',
        to: 'addons.categoryName',
      },
    },
  };
}
