import { AddonCategoriesService } from './addon-categories.service';
import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AddonCategoriesModel } from 'src/database/models/addon-categories-model';

@Controller('brands/:brandId/addon-categories')
export class AddonCategoriesController {
  constructor(private addonCategoriesService: AddonCategoriesService) {}

  @Post()
  async create(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() props: Partial<AddonCategoriesModel>,
  ) {
    const newAddon = await this.addonCategoriesService.create(brandId, props);
    return newAddon;
  }
}
