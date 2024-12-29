import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Cambia si usas Docker u otro host
      port: 5432, // Puerto por defecto de PostgreSQL
      username: 'postgres', // Tu usuario de PostgreSQL
      password: 'postgres', // Contraseña de tu usuario
      database: 'notas_app', // Nombre de la base de datos
      autoLoadEntities: true, // Carga automáticamente las entidades registradas
      synchronize: true, // Sincroniza los modelos con la BD (solo para desarrollo)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
