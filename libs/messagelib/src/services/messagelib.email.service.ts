import { CreatedUserDto } from '@app/userlib/dtos/user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as pug from 'pug';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(
    private mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  public sendEmail(user: CreatedUserDto) {
    this.mailerService.sendMail({
      to: user.username,
      from: this.configService.get('SES_FROM_MAIL'),
      subject: 'User Created',
      html: this.compileHtml(user),
    });
  }

  private compileHtml(user: CreatedUserDto) {
    return pug.renderFile('./libs/messagelib/templates/notification.pug', user);
  }
}
