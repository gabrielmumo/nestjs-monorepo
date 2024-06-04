import { Module } from '@nestjs/common';
import { MessageappController } from './messageapp.controller';
import { MessageappService } from './messageapp.service';
import { GloballibModule } from '@app/globallib';

@Module({
  imports: [GloballibModule],
  controllers: [MessageappController],
  providers: [MessageappService],
})
export class MessageappModule {}
