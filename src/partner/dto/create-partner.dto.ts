import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';
import { PartnerType } from 'generated/prisma/enums';

export class CreatePartnerDto {
  @ApiProperty({ example: 'Uzum Bank' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: PartnerType, example: PartnerType.INVESTOR })
  @IsEnum(PartnerType)
  type: PartnerType;

  @ApiPropertyOptional({ example: 'https://storage.com/logo.png' })
  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @ApiPropertyOptional({ example: 'https://uzumbank.uz' })
  @IsOptional()
  @IsUrl()
  websiteUrl?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  sortOrder?: number;
}
