import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AddonsModel } from 'src/database/models/addons-model';
import { AddonsService } from './addons.service';

@Controller('brands/:brandId/addons')
export class AddonsController {
  constructor(private addonsService: AddonsService) {}

  @Post()
  async create(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() props: Partial<AddonsModel>,
  ) {
    const newAddon = await this.addonsService.create(brandId, props);
    return newAddon;
  }

  @Get()
  async getAll(@Param('brandId', new ParseIntPipe()) brandId: number) {
    const addons = await this.addonsService.findAll(brandId);
    return addons;
  }

  @Get('/:id')
  async getOne(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('id', new ParseIntPipe()) id: number,
  ) {
    const addon = await this.addonsService.findOne(brandId, id);
    return addon;
  }

  @Patch('/:id')
  async update(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('id', new ParseIntPipe()) id: number,
    @Body() props: Partial<AddonsModel>,
  ) {
    const updatedAddon = await this.addonsService.update(brandId, id, props);
    return updatedAddon;
  }

  @Delete('/:id')
  async deleteOne(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('id', new ParseIntPipe()) id: number,
  ) {
    await this.addonsService.delete(brandId, id);
    return 'Deleted successfully';
  }
}
