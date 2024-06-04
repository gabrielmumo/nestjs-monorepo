import { Injectable } from '@nestjs/common';
import { AbstractService } from '../../../globallib/src/services/abstract.service';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class FakeormUserService implements AbstractService<User> {
  //We use this constructor to make sure project compiles
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {}

  save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
