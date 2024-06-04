import { Test, TestingModule } from '@nestjs/testing';
import { GloballibService } from './globallib.service';

describe('GloballibService', () => {
  let service: GloballibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GloballibService],
    }).compile();

    service = module.get<GloballibService>(GloballibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
