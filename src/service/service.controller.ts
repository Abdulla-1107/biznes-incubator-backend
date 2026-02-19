import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceCategory } from 'generated/prisma/enums';
import { ApiQuery } from '@nestjs/swagger';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  // POST /services
  @Post()
  create(@Body() dto: CreateServiceDto) {
    return this.serviceService.create(dto);
  }

  // GET /services?category=TECHNICAL&isActive=true
  @Get()
  @ApiQuery({
    name: 'category',
    required: false, // optional qilish
    enum: ServiceCategory, // agar enum bo‘lsa
  })
  @ApiQuery({
    name: 'isActive',
    required: false, // optional qilish
    type: Boolean,
  })
  findAll(
    @Query('category') category?: ServiceCategory,
    @Query('isActive') isActive?: string,
  ) {
    const parsedIsActive =
      isActive === 'true' ? true : isActive === 'false' ? false : undefined;

    return this.serviceService.findAll(category, parsedIsActive);
  }

  // GET /services/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  // PATCH /services/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto) {
    return this.serviceService.update(id, dto);
  }

  // DELETE /services/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
