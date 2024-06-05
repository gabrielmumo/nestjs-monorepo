import { MessageDto } from '@app/messagelib/dtos/message.dto';
import { Injectable } from '@nestjs/common';
import * as pug from 'pug';

@Injectable()
export abstract class AbstractMessageService<C> {
  abstract sendMessage(message: MessageDto<C>): void;

  compileTemplate(template: string, context: C): string {
    return pug.renderFile(`./libs/messagelib/templates/${template}`, context);
  }
}
