import { Test, TestingModule } from '@nestjs/testing';
import { Problema4Controller } from './problema4.controller';

describe('Problema4Controller', () => {
  let controller: Problema4Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Problema4Controller],
    }).compile();

    controller = module.get<Problema4Controller>(Problema4Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
