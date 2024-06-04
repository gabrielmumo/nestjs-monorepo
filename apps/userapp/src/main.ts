import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQEnum } from '@app/globallib/enums/rmq.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQP_HOST],
        queue: RMQEnum.USERS_QUEUE,
      },
    },
  );
  app.listen();
}
bootstrap();
