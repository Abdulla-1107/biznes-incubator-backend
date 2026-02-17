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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactStatus } from 'generated/prisma/enums';

@ApiTags('Contact')
@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // POST /contacts
  @ApiOperation({ summary: 'Yangi xabar yuborish' })
  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactService.create(dto);
  }

  // GET /contacts?status=NEW
  @ApiOperation({ summary: 'Barcha xabarlarni olish' })
  @Get()
  findAll(@Query('status') status?: ContactStatus) {
    return this.contactService.findAll(status);
  }

  // GET /contacts/:id
  @ApiOperation({ summary: 'Bitta xabarni olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  // PATCH /contacts/:id
  @ApiOperation({ summary: 'Xabar statusini yangilash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateContactDto) {
    return this.contactService.update(id, dto);
  }

  // DELETE /contacts/:id
  @ApiOperation({ summary: "Xabarni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
