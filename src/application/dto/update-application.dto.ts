import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/swagger'; // ← mapped-types emas!
import { CreateApplicationDto } from './create-application.dto';
import { ApplicationStatus } from 'generated/prisma/enums';

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {
  @ApiPropertyOptional({
    enum: ApplicationStatus,
    example: ApplicationStatus.REVIEWING,
  })
  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;
}
