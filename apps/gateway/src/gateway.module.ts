import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { GloballibModule } from '@app/globallib';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserEnum } from '@app/userlib/enums/user.enum';
import { RMQEnum } from '@app/globallib/enums/rmq.enum';
import { UserlibModule } from '@app/userlib';

@Module({
  imports: [
    GloballibModule,
    UserlibModule,
    ClientsModule.register([
      {
        name: UserEnum.CLIENT_PROXY,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_HOST],
          queue: RMQEnum.USERS_QUEUE,
        },
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
