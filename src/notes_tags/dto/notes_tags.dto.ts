import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Notes_tagsDto {
  @ApiProperty({
    description: 'ID de la nota asociada',
    example: 1,
  })
  @IsNotEmpty()
  note_id: number;

  @ApiProperty({
    description: 'ID del tag asociado',
    example: 2,
  })
  @IsNotEmpty()
  tag_id: number;
}
