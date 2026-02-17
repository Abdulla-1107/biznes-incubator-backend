import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApplicationStatus } from 'generated/prisma/enums';

@Injectable()
export class ApplicationService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateApplicationDto) {
    return this.prisma.application.create({
      data: dto,
    });
  }

  findAll(status?: ApplicationStatus) {
    return this.prisma.application.findMany({
      where: status ? { status } : {},
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const application = await this.prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      throw new NotFoundException(`Application #${id} not found`);
    }

    return application;
  }

  async update(id: string, dto: UpdateApplicationDto) {
    await this.findOne(id); // mavjudligini tekshiradi

    return this.prisma.application.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.application.delete({
      where: { id },
    });
  }
}
