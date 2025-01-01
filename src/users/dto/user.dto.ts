import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Nombre de usuario',
    example: 'johndoe',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'johndoe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'securepassword',
  })
  @IsNotEmpty()
  @IsString()
  password_hash: string;

  @ApiProperty({
    description: 'Fecha de creación del usuario',
    example: '2025-01-01T12:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  created_at?: string;

  @ApiProperty({
    description: 'Fecha de actualización del usuario',
    example: '2025-01-01T12:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  updated_at?: string;
}
