import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';
import { EventCategory, EventFormat } from 'generated/prisma/enums';

export class CreateEventDto {
  @ApiProperty({ example: 'Startuplar uchun pitch kuni' })
  @IsString()
  @IsNotEmpty()
  titleUz: string;

  @ApiProperty({ example: 'Pitch Day for Startups' })
  @IsString()
  @IsNotEmpty()
  titleEn: string;

  @ApiProperty({ example: 'День питча для стартапов' })
  @IsString()
  @IsNotEmpty()
  titleRu: string;

  @ApiProperty({
    example: "Eng yaxshi startuplar o'z g'oyalarini taqdim etadi",
  })
  @IsString()
  @IsNotEmpty()
  descriptionUz: string;

  @ApiProperty({ example: 'Top startups will present their ideas' })
  @IsString()
  @IsNotEmpty()
  descriptionEn: string;

  @ApiProperty({ example: 'Лучшие стартапы представят свои идеи' })
  @IsString()
  @IsNotEmpty()
  descriptionRu: string;

  @ApiProperty({ example: '2025-03-15T10:00:00.000Z' })
  @IsDateString()
  startDate: string;

  @ApiPropertyOptional({ enum: EventFormat, example: EventFormat.OFFLINE })
  @IsOptional()
  @IsEnum(EventFormat)
  format?: EventFormat;

  @ApiPropertyOptional({ enum: EventCategory, example: EventCategory.PITCH })
  @IsOptional()
  @IsEnum(EventCategory)
  category?: EventCategory;

  @ApiPropertyOptional({ example: 'Toshkent shahri, IT Park' })
  @IsOptional()
  @IsString()
  locationUz?: string;

  @ApiPropertyOptional({ example: 'Tashkent city, IT Park' })
  @IsOptional()
  @IsString()
  locationEn?: string;

  @ApiPropertyOptional({ example: 'Город Ташкент, IT Park' })
  @IsOptional()
  @IsString()
  locationRu?: string;

  @ApiPropertyOptional({ example: 'https://storage.com/cover.jpg' })
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;

  @ApiPropertyOptional({ example: 'https://zoom.us/j/123456789' })
  @IsOptional()
  @IsUrl()
  onlineLink?: string;

  @ApiPropertyOptional({ example: '2025-03-15T18:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: '2025-03-10T23:59:59.000Z' })
  @IsOptional()
  @IsDateString()
  registrationDeadline?: string;

  @ApiPropertyOptional({ example: 100 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxParticipants?: number;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isFree?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;
}
