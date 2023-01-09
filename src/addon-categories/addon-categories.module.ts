import { Module, Global } from '@nestjs/common';
import { AddonCategoriesService } from './addon-categories.service';
import { AddonCategoriesController } from './addon-categories.controller';

@Global()
@Module({
  controllers: [AddonCategoriesController],
  providers: [AddonCategoriesService],
  exports: [AddonCategoriesService],
})
export class AddonCategoriesModule {}
