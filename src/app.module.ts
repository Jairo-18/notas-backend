import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // Asegúrate de importar UsersModule
import { User } from './users/entity/user.entity';
import { SessionToken } from './notes/entity/SessionToken.entity';
import { Note } from './notes/entity/note.entity';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // O el tipo de base de datos que estés usando
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Cambia según tu configuración
      password: 'postgres', // Cambia según tu configuración
      database: 'notas_app', // Cambia según tu configuración
      entities: [User, SessionToken, Note], // Asegúrate de que tu entidad User esté registrada
      synchronize: true, // No usar en producción
    }),
    UsersModule,
    NotesModule, // Asegúrate de importar UsersModule
  ],
})
export class AppModule {}
