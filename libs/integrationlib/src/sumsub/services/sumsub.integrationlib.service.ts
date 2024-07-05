import { Injectable } from '@nestjs/common';
import {
  SumsubIssueTokenDto,
  SumsubIssuedTokenDto,
} from '../dtos/sumsub.issue.token.dto';
import { SumsubIntegrationlibClient } from '../client/sumsub.integrationlib.client';

@Injectable()
export class SumsubIntegrationlibService {
  constructor(private readonly sumsubClient: SumsubIntegrationlibClient) {}

  async issueToken(
    issueTokenDto: SumsubIssueTokenDto,
  ): Promise<SumsubIssuedTokenDto> {
    return await this.sumsubClient.generateToken(issueTokenDto);
  }
}
