import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './entity/user.entity'; // Importa la entidad User
import { UsersService } from './users.service';
import { SessionToken } from 'src/notes/entity/SessionToken.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, SessionToken]), // Asegúrate de que TypeOrmModule está configurado con la entidad User
  ],
  controllers: [UsersController],
  providers: [UsersService], // Asegúrate de registrar el servicio
})
export class UsersModule {}
