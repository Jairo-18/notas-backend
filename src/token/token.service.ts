import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(TokenDto)
    private readonly tokenRepository: Repository<TokenDto>,
  ) {}

  create(TokenDto: TokenDto) {
    const token = this.tokenRepository.create(TokenDto);
    return this.tokenRepository.save(token);
  }

  findAll() {
    return this.tokenRepository.find();
  }

  remove(id: number) {
    return this.tokenRepository.delete(id);
  }
}
