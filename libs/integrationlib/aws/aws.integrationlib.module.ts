import { Module } from '@nestjs/common';
import { AwsIntegrationlibService } from './aws.integrationlib.service';

@Module({
  providers: [AwsIntegrationlibService],
  exports: [AwsIntegrationlibService],
})
export class AwsIntegrationlibModule {}
