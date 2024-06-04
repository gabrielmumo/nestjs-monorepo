import { Module } from '@nestjs/common';
import { MessagelibService } from './messagelib.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SES_HOST,
        port: process.env.SES_PORT,
        ignoreTLS: false,
        secure: false,
        auth: {
          user: process.env.SES_SMTP_USERNAME,
          pass: process.env.SES_SMTP_PASSWORD,
        },
      },
      preview: false,
      template: {
        dir: './libs/messagelib/templates/',
      },
    }),
  ],
  providers: [MessagelibService],
  exports: [MessagelibService],
})
export class MessagelibModule {}
