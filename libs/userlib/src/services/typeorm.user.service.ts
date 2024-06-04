import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AbstractService } from '../../../globallib/src/services/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class TypeormUserService implements AbstractService<User> {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {}

  save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
