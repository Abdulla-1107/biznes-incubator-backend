import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { MentorSpecialization } from 'generated/prisma/enums';

@Injectable()
export class MentorService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateMentorDto) {
    return this.prisma.mentor.create({
      data: dto,
    });
  }

  findAll(specialization?: MentorSpecialization, isActive?: boolean) {
    return this.prisma.mentor.findMany({
      where: {
        ...(specialization && { specialization }),
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: [{ isFeatured: 'desc' }, { sortOrder: 'asc' }],
    });
  }

  async findOne(id: string) {
    const mentor = await this.prisma.mentor.findUnique({
      where: { id },
    });

    if (!mentor) {
      throw new NotFoundException(`Mentor #${id} not found`);
    }

    return mentor;
  }

  async update(id: string, dto: UpdateMentorDto) {
    await this.findOne(id);

    return this.prisma.mentor.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.mentor.delete({
      where: { id },
    });
  }
}
