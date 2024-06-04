import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './app.service';
import { GloballibModule } from '@app/globallib';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/userlib/entities/user.entity';
import { abstractServiceProvider } from '@app/userlib/services/abstract.service.provider';
import { UserlibModule } from '@app/userlib';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessageEnum } from '@app/messagelib/enums/message.enum';
import { RMQEnum } from '@app/globallib/enums/rmq.enum';

@Module({
  imports: [
    GloballibModule,
    UserlibModule,
    TypeOrmModule.forFeature([User]),
    ClientsModule.register([
      {
        name: MessageEnum.CLIENT_PROXY,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_HOST],
          queue: RMQEnum.MESSAGES_QUEUE,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [UserService, abstractServiceProvider],
})
export class AppModule {}
