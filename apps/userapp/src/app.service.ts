import { CreateUserDto } from '@app/userlib/dtos/user.dto';
import { User } from '@app/userlib/entities/user.entity';
import { AbstractService } from '@app/globallib/services/abstract.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(private abstractService: AbstractService<User>) {}

  async signup(user: CreateUserDto) {
    const created = this.abstractService.save(this.toEntity(user));
    return created;
  }

  toEntity(user: CreateUserDto): User {
    return new User(user.username, user.password, user.name, user.lastname);
  }
}
