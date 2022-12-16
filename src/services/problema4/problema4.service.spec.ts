import { Test, TestingModule } from '@nestjs/testing';
import { Problema4Service } from './problema4.service';

describe('Problema4Service', () => {
  let service: Problema4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Problema4Service],
    }).compile();

    service = module.get<Problema4Service>(Problema4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
