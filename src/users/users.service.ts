import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserDto)
    private readonly userRepository: Repository<UserDto>,
  ) {}

  create(UserDto: UserDto) {
    const user = this.userRepository.create(UserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
