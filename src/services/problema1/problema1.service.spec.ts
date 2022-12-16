import { Test, TestingModule } from '@nestjs/testing';
import { Problema1Service } from './problema1.service';

describe('Problema1Service', () => {
  let service: Problema1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Problema1Service],
    }).compile();

    service = module.get<Problema1Service>(Problema1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
