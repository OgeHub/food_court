import { Module } from '@nestjs/common';
import { AddonsController } from './addons/addons.controller';
import { AddonsService } from './addons/addons.service';
import { AddonsModule } from './addons/addons.module';
import { AddonCategoriesController } from './addon-categories/addon-categories.controller';
import { AddonCategoriesModule } from './addon-categories/addon-categories.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AddonsModule, AddonCategoriesModule, DatabaseModule],
  controllers: [AddonsController, AddonCategoriesController],
  providers: [AddonsService],
})
export class AppModule {}
