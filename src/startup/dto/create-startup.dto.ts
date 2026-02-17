import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';
import { StartupIndustry, StartupStage } from 'generated/prisma/enums';

export class CreateStartupDto {
  @ApiProperty({ example: 'AgroTech' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'AgroTech' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @ApiProperty({ example: 'АгроТех' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: "Qishloq xo'jaligini raqamlashtiruvchi platforma" })
  @IsString()
  @IsNotEmpty()
  descriptionUz: string;

  @ApiProperty({ example: 'Platform for digitalizing agriculture' })
  @IsString()
  @IsNotEmpty()
  descriptionEn: string;

  @ApiProperty({ example: 'Платформа для цифровизации сельского хозяйства' })
  @IsString()
  @IsNotEmpty()
  descriptionRu: string;

  @ApiPropertyOptional({ enum: StartupStage, example: StartupStage.MVP })
  @IsOptional()
  @IsEnum(StartupStage)
  stage?: StartupStage;

  @ApiPropertyOptional({
    enum: StartupIndustry,
    example: StartupIndustry.AGRITECH,
  })
  @IsOptional()
  @IsEnum(StartupIndustry)
  industry?: StartupIndustry;

  @ApiPropertyOptional({ example: "Qishloq xo'jaligini raqamlashtirish" })
  @IsOptional()
  @IsString()
  shortDescriptionUz?: string;

  @ApiPropertyOptional({ example: 'Digitalizing agriculture' })
  @IsOptional()
  @IsString()
  shortDescriptionEn?: string;

  @ApiPropertyOptional({ example: 'Цифровизация сельского хозяйства' })
  @IsOptional()
  @IsString()
  shortDescriptionRu?: string;

  @ApiPropertyOptional({ example: 'https://storage.com/logo.png' })
  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @ApiPropertyOptional({ example: 'https://agrotech.uz' })
  @IsOptional()
  @IsUrl()
  websiteUrl?: string;

  @ApiPropertyOptional({ example: 'https://storage.com/pitch.pdf' })
  @IsOptional()
  @IsString()
  pitchDeck?: string;

  @ApiPropertyOptional({ example: 'Bobur Karimov' })
  @IsOptional()
  @IsString()
  founderName?: string;

  @ApiPropertyOptional({ example: 'bobur@agrotech.uz' })
  @IsOptional()
  @IsEmail()
  founderEmail?: string;

  @ApiPropertyOptional({ example: 5 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  teamSize?: number;

  @ApiPropertyOptional({ example: 2022 })
  @IsOptional()
  @IsNumber()
  foundedYear?: number;

  @ApiPropertyOptional({ example: 100000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  investmentRaised?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  sortOrder?: number;
}
