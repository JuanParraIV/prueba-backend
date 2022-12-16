import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Problema1Controller } from '../controllers/problema1/problema1.controller';
import { Problema1Service } from '../services/problema1/problema1.service';
import { Problema2Controller } from 'src/controllers/problema2/problema2.controller';
import { Problema2Service } from 'src/services/problema2/problema2.service';
import { Problema4Controller } from 'src/controllers/problema4/problema4.controller';
import { Problema4Service } from 'src/services/problema4/problema4.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 3000,
      maxRedirects: 5,
    }),
  ],
  controllers: [Problema1Controller, Problema2Controller, Problema4Controller],
  providers: [Problema1Service, Problema2Service, Problema4Service],
})
export class ProblemasModule { }
