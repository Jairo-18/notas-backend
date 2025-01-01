import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
  IsInt,
} from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    type: Number,
    description: 'ID de la nota',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({
    description: 'ID del usuario asociado a la nota',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @ApiProperty({
    description: 'Título de la nota',
    example: 'Mi primera nota',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Contenido de la nota',
    example: 'Este es el contenido de la nota.',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Fecha de creación de la nota',
    example: '2025-01-01T12:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  created_at?: string;

  @ApiProperty({
    description: 'Fecha de actualización de la nota',
    example: '2025-01-01T12:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  updated_at?: string;
}
