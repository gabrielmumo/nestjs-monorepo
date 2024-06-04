import { Test, TestingModule } from '@nestjs/testing';
import { IntegrationlibService } from './integrationlib.service';

describe('IntegrationlibService', () => {
  let service: IntegrationlibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntegrationlibService],
    }).compile();

    service = module.get<IntegrationlibService>(IntegrationlibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
