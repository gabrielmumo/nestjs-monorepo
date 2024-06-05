import { CreateUserDto } from '@app/userlib/dtos/user.dto';
import { User } from '@app/userlib/entities/user.entity';
import { AbstractService } from '@app/globallib/services/abstract.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { MessageEnum } from '@app/messagelib/enums/message.enum';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    private abstractService: AbstractService<User>,
    @Inject(MessageEnum.CLIENT_PROXY) private rabbitmqClient: ClientProxy,
  ) {}

  signup(user: CreateUserDto) {
    const created = this.abstractService.save(this.toEntity(user));
    this.publishUserCreatedMessage(user);
    return created;
  }

  toEntity(user: CreateUserDto): User {
    return new User(user.username, user.password, user.name, user.lastname);
  }

  publishUserCreatedMessage(user: CreateUserDto) {
    const result = this.rabbitmqClient.emit(
      MessageEnum.USER_CREATED_MESSAGE_QUEUE,
      user,
    );
    Logger.debug('RMQ-UserCreatedNotification', result);
  }
}
