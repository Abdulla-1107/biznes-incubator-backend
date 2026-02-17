import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { StartupIndustry, StartupStage } from 'generated/prisma/enums';

@Injectable()
export class StartupService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateStartupDto) {
    return this.prisma.startup.create({
      data: dto,
    });
  }

  findAll(
    stage?: StartupStage,
    industry?: StartupIndustry,
    isActive?: boolean,
  ) {
    return this.prisma.startup.findMany({
      where: {
        ...(stage && { stage }),
        ...(industry && { industry }),
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: [{ isFeatured: 'desc' }, { sortOrder: 'asc' }],
    });
  }

  async findOne(id: string) {
    const startup = await this.prisma.startup.findUnique({
      where: { id },
    });

    if (!startup) {
      throw new NotFoundException(`Startup #${id} not found`);
    }

    return startup;
  }

  async update(id: string, dto: UpdateStartupDto) {
    await this.findOne(id);

    return this.prisma.startup.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.startup.delete({
      where: { id },
    });
  }
}
