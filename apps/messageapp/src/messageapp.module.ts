import { Module } from '@nestjs/common';
import { MessageappController } from './messageapp.controller';
import { MessageappService } from './messageapp.service';
import { GloballibModule } from '@app/globallib';
import { MessagelibModule } from '@app/messagelib';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [GloballibModule, MessagelibModule],
  controllers: [MessageappController],
  providers: [MessageappService, ConfigService],
})
export class MessageappModule {}
