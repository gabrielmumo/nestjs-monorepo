import {
  SumsubIssueTokenDto,
  SumsubIssuedTokenDto,
} from '@app/integrationlib/sumsub/dtos/sumsub.issue.token.dto';
import { SumsubIntegrationlibService } from '@app/integrationlib/sumsub/services/sumsub.integrationlib.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IntegrationService {
  constructor(private sumsubIntegrationService: SumsubIntegrationlibService) {}

  async issueSumsubToken(
    issueTokenDto: SumsubIssueTokenDto,
  ): Promise<SumsubIssuedTokenDto> {
    return await this.sumsubIntegrationService.issueToken(issueTokenDto);
  }
}
