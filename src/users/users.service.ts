import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Inyectamos el repositorio de usuarios
  ) {}

  // Método para crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear una nueva instancia de usuario con los datos del DTO
    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword, // Usamos la contraseña hasheada
    });

    // Guardar el usuario en la base de datos
    return this.usersRepository.save(user);
  }

  // Otros métodos para encontrar, actualizar y eliminar usuarios pueden ir aquí
}
