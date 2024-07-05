import { Module } from '@nestjs/common';
import { IntegrationController } from './integration.controller';
import { IntegrationService } from './integration.service';
import { GloballibModule } from '@app/globallib';
import { IntegrationlibModule } from '@app/integrationlib';
import { SumsubIntegrationlibService } from '@app/integrationlib/sumsub/services/sumsub.integrationlib.service';

@Module({
  imports: [GloballibModule, IntegrationlibModule],
  controllers: [IntegrationController],
  providers: [IntegrationService, SumsubIntegrationlibService],
})
export class IntegrationModule {}
