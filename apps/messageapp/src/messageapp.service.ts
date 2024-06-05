import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as pug from 'pug';

@Injectable()
export class MessageappService {
  private readonly logger = new Logger(MessageappService.name);
  constructor(
    private mailService: MailerService,
    private readonly configService: ConfigService,
  ) {}
  async getHello(): Promise<string> {
    const html = pug.renderFile('./libs/messagelib/templates/notification.pug');
    await this.mailService.sendMail({
      to: 'gabriel.munera@b2crypto.com',
      from: this.configService.get('SES_FROM_MAIL'),
      subject: 'User Created',
      html: html,
    });
    return await html;
  }
}
