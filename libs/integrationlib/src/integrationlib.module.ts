import { Module } from '@nestjs/common';
import { IntegrationlibService } from './integrationlib.service';
import { SumsubIntegrationlibService } from './sumsub/services/sumsub.integrationlib.service';
import { SumsubIntegrationlibClient } from './sumsub/client/sumsub.integrationlib.client';

@Module({
  providers: [
    IntegrationlibService,
    SumsubIntegrationlibService,
    SumsubIntegrationlibClient,
  ],
  exports: [
    IntegrationlibService,
    SumsubIntegrationlibService,
    SumsubIntegrationlibClient,
  ],
})
export class IntegrationlibModule {}
