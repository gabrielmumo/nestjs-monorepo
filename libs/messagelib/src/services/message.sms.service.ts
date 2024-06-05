import { AbstractMessageService } from '@app/globallib/services/abstract.message.service';
import { Logger } from '@nestjs/common';
import { MessageDto } from '../dtos/message.dto';

export class SMSMessageService<C> extends AbstractMessageService<C> {
  sendMessage(message: MessageDto<C>): void {
    const content: string = super.compileTemplate(
      message.template,
      message.context,
    );
    Logger.debug(SMSMessageService.name, content);
  }
}
