import { Test, TestingModule } from '@nestjs/testing';
import { Problema1Controller } from './problema1.controller';

describe('ProblemasController', () => {
  let controller: Problema1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Problema1Controller],
    }).compile();

    controller = module.get<Problema1Controller>(Problema1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
