import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TagsDto {
  @ApiProperty({
    description: 'Nombre del tag',
    example: 'Importante',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
