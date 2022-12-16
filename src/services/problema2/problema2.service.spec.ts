import { Test, TestingModule } from '@nestjs/testing';
import { Problema2Service } from './problema2.service';

describe('Problems1Service', () => {
  let service: Problema2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Problema2Service],
    }).compile();

    service = module.get<Problema2Service>(Problema2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
