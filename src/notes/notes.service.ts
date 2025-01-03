import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNoteDto } from './dto/notes.dto'; // Importa el DTO de notas

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository()
    private notesRepository: Repository<>, // Inyectamos el repositorio de notas
  ) {}

  // Método para crear una nueva nota
  async create(createNoteDto: CreateNoteDto): Promise<s> {
    const note = this.notesRepository.create(createNoteDto); // Crea una nueva instancia de la entidad Note con el DTO
    return this.notesRepository.save(note); // Guarda la nueva nota en la base de datos
  }

  // Otros métodos para obtener, actualizar y eliminar notas pueden ir aquí
}
