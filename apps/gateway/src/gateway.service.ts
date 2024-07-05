import {
  SumsubIssueTokenDto,
  SumsubIssuedTokenDto,
} from '@app/integrationlib/sumsub/dtos/sumsub.issue.token.dto';
import { SumsubEnum } from '@app/integrationlib/sumsub/enums/sumsub.enum';
import { CreateUserDto, CreatedUserDto } from '@app/userlib/dtos/user.dto';
import { UserEnum } from '@app/userlib/enums/user.enum';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(
    @Inject(UserEnum.CLIENT_PROXY) private userRabbitmqClient: ClientProxy,
    @Inject(SumsubEnum.SUMSUB_CLIENT_PROXY)
    private sumsubRabbitmqClient: ClientProxy,
  ) {}

  async publishSignupMessage(user: CreateUserDto): Promise<CreatedUserDto> {
    const result = await lastValueFrom(
      this.userRabbitmqClient.send(UserEnum.USER_CREATED_QUEUE, user),
    );
    Logger.debug('RMQ Result', result);
    return result;
  }

  async publishSumsubTokenMessage(
    issueTokenDto: SumsubIssueTokenDto,
  ): Promise<SumsubIssuedTokenDto> {
    Logger.debug('Sending RMQ Message', 'Issue Token');
    const result = await lastValueFrom(
      this.sumsubRabbitmqClient.send(
        SumsubEnum.SUMSUB_ISSUE_TOKEN_QUEUE,
        issueTokenDto,
      ),
    );
    Logger.debug('RMQ Result', result);
    return result;
  }
}
