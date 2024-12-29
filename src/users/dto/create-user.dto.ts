import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'El nombre del usuario' })
  name: string;

  @ApiProperty({ description: 'El email del usuario', uniqueItems: true })
  email: string;

  @ApiProperty({ description: 'La contraseña del usuario' })
  password: string;
}
