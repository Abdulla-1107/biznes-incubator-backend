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
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventCategory, EventFormat } from 'generated/prisma/enums';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // POST /events
  @Post()
  create(@Body() dto: CreateEventDto) {
    return this.eventService.create(dto);
  }

  // GET /events?format=ONLINE&category=WORKSHOP&isActive=true
  @Get()
  findAll(
    @Query('format') format?: EventFormat,
    @Query('category') category?: EventCategory,
    @Query('isActive') isActive?: string,
  ) {
    const parsedIsActive =
      isActive === 'true' ? true : isActive === 'false' ? false : undefined;

    return this.eventService.findAll(format, category, parsedIsActive);
  }

  // GET /events/upcoming
  @Get('upcoming')
  findUpcoming() {
    return this.eventService.findUpcoming();
  }

  // GET /events/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  // PATCH /events/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEventDto) {
    return this.eventService.update(id, dto);
  }

  // DELETE /events/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
