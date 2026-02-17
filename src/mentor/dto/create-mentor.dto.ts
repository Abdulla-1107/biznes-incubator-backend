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
import { MentorSpecialization } from 'generated/prisma/enums';

export class CreateMentorDto {
  @ApiProperty({ example: 'Jasur Toshmatov' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    enum: MentorSpecialization,
    example: MentorSpecialization.BUSINESS,
  })
  @IsEnum(MentorSpecialization)
  specialization: MentorSpecialization;

  @ApiPropertyOptional({ example: 'jasur@gmail.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'https://storage.com/photo.jpg' })
  @IsOptional()
  @IsUrl()
  photoUrl?: string;

  @ApiPropertyOptional({ example: 'https://linkedin.com/in/jasur' })
  @IsOptional()
  @IsUrl()
  linkedinUrl?: string;

  @ApiPropertyOptional({ example: '10 yillik tajribaga ega biznes mentor' })
  @IsOptional()
  @IsString()
  bioUz?: string;

  @ApiPropertyOptional({
    example: 'Business mentor with 10 years of experience',
  })
  @IsOptional()
  @IsString()
  bioEn?: string;

  @ApiPropertyOptional({ example: 'Бизнес-ментор с 10-летним опытом' })
  @IsOptional()
  @IsString()
  bioRu?: string;

  @ApiPropertyOptional({ example: 'Bosh direktor' })
  @IsOptional()
  @IsString()
  positionUz?: string;

  @ApiPropertyOptional({ example: 'CEO' })
  @IsOptional()
  @IsString()
  positionEn?: string;

  @ApiPropertyOptional({ example: 'Генеральный директор' })
  @IsOptional()
  @IsString()
  positionRu?: string;

  @ApiPropertyOptional({ example: 'Texno Holding' })
  @IsOptional()
  @IsString()
  companyUz?: string;

  @ApiPropertyOptional({ example: 'Techno Holding' })
  @IsOptional()
  @IsString()
  companyEn?: string;

  @ApiPropertyOptional({ example: 'Техно Холдинг' })
  @IsOptional()
  @IsString()
  companyRu?: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  experienceYears?: number;

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
