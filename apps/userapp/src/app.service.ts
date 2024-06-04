import { CreateUserDto } from '@app/userlib/dtos/user.dto';
import { User } from '@app/userlib/entities/user.entity';
import { AbstractService } from '@app/globallib/services/abstract.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { MessageEnum } from '@app/messagelib/enums/message.enum';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    private abstractService: AbstractService<User>,
    @Inject(MessageEnum.CLIENT_PROXY) private rabbitmqClient: ClientProxy,
  ) {}

  async signup(user: CreateUserDto) {
    const created = this.abstractService.save(this.toEntity(user));
    await this.publishUserCreatedMessage(
      `User ${user.username} has been created.`,
    );
    return created;
  }

  toEntity(user: CreateUserDto): User {
    return new User(user.username, user.password, user.name, user.lastname);
  }

  async publishUserCreatedMessage(message: string): Promise<string> {
    const result = await lastValueFrom(
      this.rabbitmqClient.send(MessageEnum.USER_CREATED_MESSAGE_QUEUE, message),
    );
    Logger.debug('RMQ-UserCreatedNotification', result);
    return result;
  }
}
