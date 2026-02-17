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
