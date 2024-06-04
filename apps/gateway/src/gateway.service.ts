import { CreateUserDto, CreatedUserDto } from '@app/userlib/dtos/user.dto';
import { UserEnum } from '@app/userlib/enums/user.enum';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(
    @Inject(UserEnum.CLIENT_PROXY) private rabbitmqClient: ClientProxy,
  ) {}

  async publishSignupMessage(user: CreateUserDto): Promise<CreatedUserDto> {
    const result = await lastValueFrom(
      this.rabbitmqClient.send(UserEnum.USER_CREATED_QUEUE, user),
    );
    Logger.debug('RMQ Result', result);
    return result;
  }
}
