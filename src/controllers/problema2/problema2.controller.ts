import { Controller, Get, Param, ParseArrayPipe, Query } from '@nestjs/common';
import { Problema2Service } from '../../services/problema2/problema2.service';
@Controller('problema2')
export class Problema2Controller {
  constructor(private problema2Service: Problema2Service) { }

  @Get('primero')
  PokeTypeSum(@Query('type') type: string) {
    return this.problema2Service.PokeTypeSum(type);
  }

  @Get('tercer')
  async getPokeApiByName(@Query('name') name = 'bulbasaur') {
    return this.problema2Service.getPokeApiByName(name);
  }
  @Get('cuarto/:id')
  async getPokeApiById(@Param('id') id: number) {
    return this.problema2Service.getPokeApiById(id);
  }

  @Get('sexto/:id')
  async pokeMatchByType(@Param('id') id: number, @Query('type') type: string) {
    return this.problema2Service.pokeMatchByType(id, type);
  }

  @Get('quinto')
  async getOrderedPoke(
    @Query('lista', new ParseArrayPipe({ items: Number, separator: ',' }))
    lista: number[],
  ) {
    return this.problema2Service.getOrderedPoke(lista);
  }
}
