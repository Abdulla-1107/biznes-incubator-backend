import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventCategory, EventFormat } from 'generated/prisma/enums';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateEventDto) {
    return this.prisma.event.create({
      data: {
        ...dto,
        startDate: new Date(dto.startDate),
        endDate: dto.endDate ? new Date(dto.endDate) : undefined,
        registrationDeadline: dto.registrationDeadline
          ? new Date(dto.registrationDeadline)
          : undefined,
      },
    });
  }

  findAll(format?: EventFormat, category?: EventCategory, isActive?: boolean) {
    return this.prisma.event.findMany({
      where: {
        ...(format && { format }),
        ...(category && { category }),
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: { startDate: 'asc' },
    });
  }

  findUpcoming() {
    return this.prisma.event.findMany({
      where: {
        isActive: true,
        startDate: { gte: new Date() },
      },
      orderBy: { startDate: 'asc' },
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException(`Event #${id} not found`);
    }

    return event;
  }

  async update(id: string, dto: UpdateEventDto) {
    await this.findOne(id);

    return this.prisma.event.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.startDate && { startDate: new Date(dto.startDate) }),
        ...(dto.endDate && { endDate: new Date(dto.endDate) }),
        ...(dto.registrationDeadline && {
          registrationDeadline: new Date(dto.registrationDeadline),
        }),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.event.delete({
      where: { id },
    });
  }
}
