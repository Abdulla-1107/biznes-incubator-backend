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
import { StartupService } from './startup.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { StartupIndustry, StartupStage } from 'generated/prisma/enums';
import { ApiQuery } from '@nestjs/swagger';

@Controller('startups')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  // POST /startups
  @Post()
  create(@Body() dto: CreateStartupDto) {
    return this.startupService.create(dto);
  }

  // GET /startups?stage=MVP&industry=FINTECH&isActive=true
  @Get()
  @ApiQuery({
    name: 'stage',
    required: false, // optional qilish
    enum: StartupStage, // agar enum bo‘lsa
  })
  @ApiQuery({
    name: 'industry',
    required: false, // optional qilish
    enum: StartupIndustry, // agar enum bo‘lsa
  })
  @ApiQuery({
    name: 'isActive',
    required: false, // optional qilish
    type: Boolean,
  })
  findAll(
    @Query('stage') stage?: StartupStage,
    @Query('industry') industry?: StartupIndustry,
    @Query('isActive') isActive?: string,
  ) {
    const parsedIsActive =
      isActive === 'true' ? true : isActive === 'false' ? false : undefined;

    return this.startupService.findAll(stage, industry, parsedIsActive);
  }

  // GET /startups/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startupService.findOne(id);
  }

  // PATCH /startups/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStartupDto) {
    return this.startupService.update(id, dto);
  }

  // DELETE /startups/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startupService.remove(id);
  }
}
