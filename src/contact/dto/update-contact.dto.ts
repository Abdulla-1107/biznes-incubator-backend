import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import { ContactStatus } from 'generated/prisma/enums';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiPropertyOptional({
    enum: ContactStatus,
    example: ContactStatus.IN_PROGRESS,
  })
  @IsOptional()
  @IsEnum(ContactStatus)
  status?: ContactStatus;

  @ApiPropertyOptional({
    example: "Ko'rib chiqilmoqda, tez orada javob beramiz",
  })
  @IsOptional()
  @IsString()
  adminNote?: string;
}
