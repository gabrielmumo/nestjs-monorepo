import { Module } from '@nestjs/common';
import { IntegrationlibService } from './integrationlib.service';

@Module({
  providers: [IntegrationlibService],
  exports: [IntegrationlibService],
})
export class IntegrationlibModule {}
