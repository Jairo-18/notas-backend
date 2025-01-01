import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TokenDto {
  @ApiProperty({
    description: 'ID del usuario al que pertenece el token',
    example: 1,
  })
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({
    description: 'Token único generado',
    example: 'someUniqueTokenString',
  })
  @IsNotEmpty()
  @IsString()
  token: string;

  @ApiProperty({
    description: 'Fecha y hora de creación del token',
    example: '2025-01-01T00:00:00Z',
  })
  created_at: string;

  @ApiProperty({
    description: 'Fecha y hora de expiración del token',
    example: '2025-01-02T00:00:00Z',
  })
  expires_at: string;
}
