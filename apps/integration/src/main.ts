import { NestFactory } from '@nestjs/core';
import { IntegrationModule } from './integration.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQEnum } from '@app/globallib/enums/rmq.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    IntegrationModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQP_HOST],
        queue: RMQEnum.SUMSUB_QUEUE,
      },
    },
  );
  app.listen();
}
bootstrap();
