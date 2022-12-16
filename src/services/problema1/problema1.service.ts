import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { map } from 'rxjs';

@Injectable()
export class Problema1Service {
  constructor(private http: HttpService) {}
  multiplicar(x: number, y: number) {
    return `El resultado de ${x} * ${y} = ${Math.imul(x, y)}`;
  }
}
