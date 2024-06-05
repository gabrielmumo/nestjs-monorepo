import { MessageDto } from '@app/globallib/dtos/message.dto';
import { MessageEnum } from '@app/messagelib/enums/message.enum';
import { EmailMessageService } from '@app/messagelib/services/message.email.service';
import { CreatedUserDto } from '@app/userlib/dtos/user.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MessageappService {
  constructor(private emailService: EmailMessageService<CreatedUserDto>) {}

  handleUserCreatedMessage(user: CreatedUserDto) {
    const message: MessageDto<CreatedUserDto> =
      new MessageDto<CreatedUserDto>();
    message.context = user;
    message.to = user.username;
    message.template = MessageEnum.USER_CREATED_EMAIL_MESSAGE_TEMPLATE;
    message.title = MessageEnum.USER_CREATED_EMAIL_MESSAGE_TITLE;
    this.emailService.sendMessage(message);
    Logger.debug(MessageappService.name, 'Message sent');
  }
}
