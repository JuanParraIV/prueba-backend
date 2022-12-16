import { Test, TestingModule } from '@nestjs/testing';
import { Problema2Controller } from './problema2.controller';

describe('ProblemasController', () => {
  let controller: Problema2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Problema2Controller],
    }).compile();

    controller = module.get<Problema2Controller>(Problema2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
