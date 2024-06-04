import { Test, TestingModule } from '@nestjs/testing';
import { AwsIntegrationlibService } from './aws.integrationlib.service';

describe('IntegrationlibService', () => {
  let service: AwsIntegrationlibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwsIntegrationlibService],
    }).compile();

    service = module.get<AwsIntegrationlibService>(AwsIntegrationlibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
