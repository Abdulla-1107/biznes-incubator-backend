import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PartnerType } from 'generated/prisma/enums';

@Injectable()
export class PartnerService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePartnerDto) {
    return this.prisma.partner.create({
      data: dto,
    });
  }

  findAll(type?: PartnerType, isActive?: boolean) {
    return this.prisma.partner.findMany({
      where: {
        ...(type && { type }),
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(id: string) {
    const partner = await this.prisma.partner.findUnique({
      where: { id },
    });

    if (!partner) {
      throw new NotFoundException(`Partner #${id} not found`);
    }

    return partner;
  }

  async update(id: string, dto: UpdatePartnerDto) {
    await this.findOne(id);

    return this.prisma.partner.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.partner.delete({
      where: { id },
    });
  }
}
