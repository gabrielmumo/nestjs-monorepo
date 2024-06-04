import { Test, TestingModule } from '@nestjs/testing';
import { MessageappController } from './messageapp.controller';
import { MessageappService } from './messageapp.service';

describe('MessageappController', () => {
  let messageappController: MessageappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageappController],
      providers: [MessageappService],
    }).compile();

    messageappController = app.get<MessageappController>(MessageappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messageappController.getHello()).toBe('Hello World!');
    });
  });
});
