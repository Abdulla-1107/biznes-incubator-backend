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
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApplicationStatus } from 'generated/prisma/enums';
import { ApiQuery } from '@nestjs/swagger';

@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  // POST /applications
  @Post()
  create(@Body() dto: CreateApplicationDto) {
    return this.applicationService.create(dto);
  }

  // GET /applications?status=PENDING
  @Get()
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ApplicationStatus,
  })
  findAll(@Query('status') status?: ApplicationStatus) {
    return this.applicationService.findAll(status);
  }
  // GET /applications/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationService.findOne(id);
  }

  // PATCH /applications/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateApplicationDto) {
    return this.applicationService.update(id, dto);
  }

  // DELETE /applications/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationService.remove(id);
  }
}
