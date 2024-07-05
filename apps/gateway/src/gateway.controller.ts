import {
  Body,
  Controller,
  Query,
  Post,
  UsePipes,
  ValidationPipe,
  Logger,
} from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { UserEnum } from '@app/userlib/enums/user.enum';
import { CreateUserDto, CreatedUserDto } from '@app/userlib/dtos/user.dto';
import { SumsubEnum } from '@app/integrationlib/sumsub/enums/sumsub.enum';
import {
  SumsubIssueTokenDto,
  SumsubIssuedTokenDto,
} from '@app/integrationlib/sumsub/dtos/sumsub.issue.token.dto';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post(UserEnum.USER_CONTROLLER_PATH)
  @UsePipes(new ValidationPipe())
  async signup(@Body() user: CreateUserDto): Promise<CreatedUserDto> {
    return await this.gatewayService.publishSignupMessage(user);
  }

  @Post(SumsubEnum.SUMSUB_ISSUE_TOKEN_PATH)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  async issueSumsubToken(
    @Query() issueTokenDto: SumsubIssueTokenDto,
  ): Promise<SumsubIssuedTokenDto> {
    Logger.debug('GetTokenUser', issueTokenDto.userId);
    Logger.debug('GetTokenLevel', issueTokenDto.levelName);
    Logger.debug('GetTokenTTLS', issueTokenDto.ttlInSecs);
    return await this.gatewayService.publishSumsubTokenMessage(issueTokenDto);
  }
}
