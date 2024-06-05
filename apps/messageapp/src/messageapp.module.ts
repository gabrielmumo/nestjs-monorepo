import { Module } from '@nestjs/common';
import { MessageappController } from './messageapp.controller';
import { MessageappService } from './messageapp.service';
import { GloballibModule } from '@app/globallib';
import { MessagelibModule } from '@app/messagelib';
import { EmailMessageService } from '@app/messagelib/services/message.email.service';

@Module({
  imports: [GloballibModule, MessagelibModule],
  controllers: [MessageappController],
  providers: [MessageappService, EmailMessageService],
})
export class MessageappModule {}
