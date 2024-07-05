import { Test, TestingModule } from '@nestjs/testing';
import { SumsubIntegrationlibService } from './sumsub.integrationlib.service';

describe('IntegrationlibService', () => {
  let service: SumsubIntegrationlibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumsubIntegrationlibService],
    }).compile();

    service = module.get<SumsubIntegrationlibService>(
      SumsubIntegrationlibService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
