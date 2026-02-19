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
import { MentorService } from './mentor.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { MentorSpecialization } from 'generated/prisma/enums';
import { ApiQuery } from '@nestjs/swagger';

@Controller('mentors')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  // POST /mentors
  @Post()
  create(@Body() dto: CreateMentorDto) {
    return this.mentorService.create(dto);
  }

  // GET /mentors?specialization=BUSINESS&isActive=true
  @Get()
  @ApiQuery({
    name: 'specialization',
    required: false, // optional qilish
    enum: MentorSpecialization, // agar enum bo‘lsa
  })
  @ApiQuery({
    name: 'isActive',
    required: false, // optional qilish
    type: Boolean,
  })
  findAll(
    @Query('specialization') specialization?: MentorSpecialization,
    @Query('isActive') isActive?: string,
  ) {
    const parsedIsActive =
      isActive === 'true' ? true : isActive === 'false' ? false : undefined;

    return this.mentorService.findAll(specialization, parsedIsActive);
  }

  // GET /mentors/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mentorService.findOne(id);
  }

  // PATCH /mentors/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMentorDto) {
    return this.mentorService.update(id, dto);
  }

  // DELETE /mentors/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mentorService.remove(id);
  }
}
