import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Notas API') // Título de la API
    .setDescription('La API para gestionar usuarios y notas') // Descripción de la API
    .setVersion('v1') // Versión de la API
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Habilitar la interfaz Swagger en el servidor
  SwaggerModule.setup('api', app, document); // La URL será http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
