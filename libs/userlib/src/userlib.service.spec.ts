import { Test, TestingModule } from '@nestjs/testing';
import { UserlibService } from './userlib.service';

describe('UserlibService', () => {
  let service: UserlibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserlibService],
    }).compile();

    service = module.get<UserlibService>(UserlibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
