import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateApplicationDto {
  @ApiProperty({ example: 'Sardor Rahimov' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'sardor@gmail.com' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'Sun energiyasidan foydalangan holda...' })
  @IsString()
  @IsNotEmpty()
  ideaDescription: string;

  @ApiPropertyOptional({ example: 'Agritech' })
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiPropertyOptional({ example: 3 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  teamSize?: number;

  @ApiPropertyOptional({ example: 50000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  investmentNeeded?: number;

  @ApiPropertyOptional({ example: 'https://storage.com/file.pdf' })
  @IsOptional()
  @IsString()
  fileUrl?: string;
}
