import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // Asegúrate de importar UsersModule

import { NotesModule } from './notes/notes.module';

import { TokenModule } from './token/token.module';
import { TypeIdentificationController } from './type_identification/type_identification.controller';
import { TypeIdentificationModule } from './type_identification/type_identification.module';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';
import { TagsModule } from './tags/tags.module';
import { NotesTagsModule } from './notes_tags/notes_tags.module';
import { UserDto } from './users/dto/user.dto';
import { TokenDto } from './token/dto/token.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // O el tipo de base de datos que estés usando
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Cambia según tu configuración
      password: 'postgres', // Cambia según tu configuración
      database: 'notas_app', // Cambia según tu configuración
      entities: [UserDto, TokenDto], // Asegúrate de que tu entidad User esté registrada
      synchronize: true, // No usar en producción
    }),
    UsersModule,
    NotesModule,
    TokenModule,
    TypeIdentificationModule,
    TagsModule,
    NotesTagsModule, // Asegúrate de importar UsersModule
  ],
  providers: [TagsService],
  controllers: [TypeIdentificationController, TagsController],
})
export class AppModule {}
