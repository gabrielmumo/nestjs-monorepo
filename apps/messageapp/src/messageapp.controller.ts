import { Controller, Logger } from '@nestjs/common';
import { MessageappService } from './messageapp.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { MessageEnum } from '@app/messagelib/enums/message.enum';
import { CreatedUserDto } from '@app/userlib/dtos/user.dto';

@Controller()
export class MessageappController {
  constructor(private readonly messageappService: MessageappService) {}

  // Pasar a event pattern
  @EventPattern(MessageEnum.USER_CREATED_MESSAGE_QUEUE)
  handleUserCreatedMessage(
    @Payload() user: CreatedUserDto,
    @Ctx() context: RmqContext,
  ) {
    Logger.debug('ContextMessage', context.getMessage());
    Logger.debug('NotificationMessageReceived', user);
    this.messageappService.handleUserCreatedMessage(user);
  }
}
