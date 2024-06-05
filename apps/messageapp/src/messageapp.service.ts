import { EmailService } from '@app/messagelib/services/messagelib.email.service';
import { CreatedUserDto } from '@app/userlib/dtos/user.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MessageappService {
  constructor(private emailService: EmailService) {}

  handleUserCreatedMessage(user: CreatedUserDto) {
    this.emailService.sendEmail(user);
    Logger.debug(MessageappService.name, 'Message sent');
  }
}
