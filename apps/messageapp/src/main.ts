import { NestFactory } from '@nestjs/core';
import { MessageappModule } from './messageapp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQEnum } from '@app/globallib/enums/rmq.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MessageappModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQP_HOST],
        queue: RMQEnum.MESSAGES_QUEUE,
      },
    },
  );
  app.listen();
}
bootstrap();
