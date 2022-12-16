import { Controller, Get, Param, Query } from '@nestjs/common';
import { Problema1Service } from '../../services/problema1/problema1.service';
@Controller('problema1')
export class Problema1Controller {
  constructor(private problema1Service: Problema1Service) { }
  @Get()
  multiplicar(@Query('x') x = 5, @Query('y') y = 10): string {
    return this.problema1Service.multiplicar(x, y);
  }
}
