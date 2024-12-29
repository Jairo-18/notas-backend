import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entity/note.entity';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { SessionToken } from './entity/SessionToken.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note, SessionToken])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
