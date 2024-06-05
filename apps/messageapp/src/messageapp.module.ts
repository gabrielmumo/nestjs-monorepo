import { Module } from '@nestjs/common';
import { MessageappController } from './messageapp.controller';
import { MessageappService } from './messageapp.service';
import { GloballibModule } from '@app/globallib';
import { MessagelibModule } from '@app/messagelib';
import { EmailService } from '@app/messagelib/services/messagelib.email.service';

@Module({
  imports: [GloballibModule, MessagelibModule],
  controllers: [MessageappController],
  providers: [MessageappService, EmailService],
})
export class MessageappModule {}
