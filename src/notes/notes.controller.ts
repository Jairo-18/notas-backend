import { Controller, Post, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/notes.dto'; // Importa el DTO de notas

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }
}
