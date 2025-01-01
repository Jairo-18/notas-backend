import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TokensService } from './token.service';
import { TokenDto } from './dto/token.dto';

@Controller('tokens')
export class TokenController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  create(@Body() TokenDto: TokenDto) {
    return this.tokensService.create(TokenDto);
  }

  @Get()
  findAll() {
    return this.tokensService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tokensService.remove(id);
  }
}
