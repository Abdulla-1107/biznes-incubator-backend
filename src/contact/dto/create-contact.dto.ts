import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
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

  @ApiPropertyOptional({ example: 'Hamkorlik haqida' })
  @IsOptional()
  @IsString()
  subject?: string;

  @ApiProperty({
    example: 'Sizning inkubatoringiz bilan hamkorlik qilmoqchimiz...',
  })
  @IsString()
  @IsNotEmpty()
  message: string;
}
