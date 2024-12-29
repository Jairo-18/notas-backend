import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ description: 'El título de la nota' })
  title: string;

  @ApiProperty({ description: 'El contenido de la nota' })
  content: string;

  @ApiProperty({ description: 'ID del usuario que creó la nota' })
  user_id: number;
}
