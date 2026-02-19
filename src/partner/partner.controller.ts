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
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PartnerType } from 'generated/prisma/enums';
import { ApiQuery } from '@nestjs/swagger';

@Controller('partners')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  // POST /partners
  @Post()
  create(@Body() dto: CreatePartnerDto) {
    return this.partnerService.create(dto);
  }

  // GET /partners?type=INVESTOR&isActive=true
  @Get()
   @ApiQuery({
      name: 'type',
      required: false, // optional qilish
      enum: PartnerType, // agar enum bo‘lsa
    })
    @ApiQuery({
      name: 'isActive',
      required: false, // optional qilish
      type: Boolean,
    })
  findAll(
    @Query('type') type?: PartnerType,
    @Query('isActive') isActive?: string,
  ) {
    const parsedIsActive =
      isActive === 'true' ? true : isActive === 'false' ? false : undefined;

    return this.partnerService.findAll(type, parsedIsActive);
  }

  // GET /partners/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerService.findOne(id);
  }

  // PATCH /partners/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePartnerDto) {
    return this.partnerService.update(id, dto);
  }

  // DELETE /partners/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }
}
