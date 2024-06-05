import { AbstractMessageService } from '@app/globallib/services/abstract.message.service';
import { Injectable } from '@nestjs/common';
import { MessageDto } from '../dtos/message.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailMessageService<C> extends AbstractMessageService<C> {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {
    super();
  }

  sendMessage(message: MessageDto<C>): void {
    this.mailerService.sendMail({
      to: message.to,
      from: this.configService.get('SES_FROM_MAIL'),
      subject: message.title,
      html: this.compileTemplate(message.template, message.context),
    });
  }
}
