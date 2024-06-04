import { Controller, Logger } from '@nestjs/common';
import { MessageappService } from './messageapp.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { MessageEnum } from '@app/messagelib/enums/message.enum';

@Controller()
export class MessageappController {
  constructor(private readonly messageappService: MessageappService) {}

  @MessagePattern(MessageEnum.USER_CREATED_MESSAGE_QUEUE)
  async userCreatedNotification(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ): Promise<string> {
    Logger.debug('ContextMessage', context.getMessage());
    Logger.debug('NotificationMessageReceived', data);
    return await this.messageappService.getHello();
  }
}
