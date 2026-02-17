import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceCategory } from 'generated/prisma/enums';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateServiceDto) {
    return this.prisma.service.create({
      data: dto,
    });
  }

  findAll(category?: ServiceCategory, isActive?: boolean) {
    return this.prisma.service.findMany({
      where: {
        ...(category && { category }),
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(id: string) {
    const service = await this.prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new NotFoundException(`Service #${id} not found`);
    }

    return service;
  }

  async update(id: string, dto: UpdateServiceDto) {
    await this.findOne(id);

    return this.prisma.service.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.service.delete({
      where: { id },
    });
  }
}
