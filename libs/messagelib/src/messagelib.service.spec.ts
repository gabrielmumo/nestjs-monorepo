import { Test, TestingModule } from '@nestjs/testing';
import { MessagelibService } from './messagelib.service';

describe('MessagelibService', () => {
  let service: MessagelibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagelibService],
    }).compile();

    service = module.get<MessagelibService>(MessagelibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
