import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ServiceCategory } from 'generated/prisma/enums';

export class CreateServiceDto {
  @ApiProperty({ enum: ServiceCategory, example: ServiceCategory.TECHNICAL })
  @IsEnum(ServiceCategory)
  category: ServiceCategory;

  @ApiProperty({ example: 'Texnik yordam' })
  @IsString()
  @IsNotEmpty()
  titleUz: string;

  @ApiProperty({ example: 'Technical support' })
  @IsString()
  @IsNotEmpty()
  titleEn: string;

  @ApiProperty({ example: 'Техническая поддержка' })
  @IsString()
  @IsNotEmpty()
  titleRu: string;

  @ApiProperty({ example: "Texnik masalalar bo'yicha yordam beramiz" })
  @IsString()
  @IsNotEmpty()
  descriptionUz: string;

  @ApiProperty({ example: 'We provide help with technical issues' })
  @IsString()
  @IsNotEmpty()
  descriptionEn: string;

  @ApiProperty({ example: 'Помогаем с техническими вопросами' })
  @IsString()
  @IsNotEmpty()
  descriptionRu: string;

  @ApiPropertyOptional({ example: 'tech-icon.svg' })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiPropertyOptional({ example: 299.99 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isPremium?: boolean;

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
