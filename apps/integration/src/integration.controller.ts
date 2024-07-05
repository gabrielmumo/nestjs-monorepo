import { Controller, Logger } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { SumsubEnum } from '@app/integrationlib/sumsub/enums/sumsub.enum';
import {
  SumsubIssueTokenDto,
  SumsubIssuedTokenDto,
} from '@app/integrationlib/sumsub/dtos/sumsub.issue.token.dto';

@Controller()
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @MessagePattern(SumsubEnum.SUMSUB_ISSUE_TOKEN_QUEUE)
  async issueSumsubToken(
    @Payload() issueTokenDto: SumsubIssueTokenDto,
    @Ctx() context: RmqContext,
  ): Promise<SumsubIssuedTokenDto> {
    Logger.debug('ContextMessage', context.getMessage());
    Logger.debug('CreateUserData', issueTokenDto);
    return await this.integrationService.issueSumsubToken(issueTokenDto);
  }
}
