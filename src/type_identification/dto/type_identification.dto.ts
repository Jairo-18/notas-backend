import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Type_identificationDto {
  @ApiProperty({
    description: 'Nombre del tipo de identificación',
    example: 'Cédula de ciudadanía',
  })
  @IsNotEmpty()
  @IsString()
  type_name: string;
}
