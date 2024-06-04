import { Controller, Logger } from '@nestjs/common';
import { UserService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { UserEnum } from '@app/userlib/enums/user.enum';
import { CreateUserDto, CreatedUserDto } from '@app/userlib/dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  @MessagePattern(UserEnum.USER_CREATED_QUEUE)
  signup(
    @Payload() user: CreateUserDto,
    @Ctx() context: RmqContext,
  ): Promise<CreatedUserDto> {
    Logger.debug('ContextMessage', context.getMessage());
    Logger.debug('CreateUserData', user);
    return this.appService.signup(user);
  }
}
