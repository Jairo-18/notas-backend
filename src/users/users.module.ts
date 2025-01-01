import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';

import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto]), // Asegúrate de que TypeOrmModule está configurado con la entidad User
  ],
  controllers: [UsersController],
  providers: [UsersService], // Asegúrate de registrar el servicio
})
export class UsersModule {}
