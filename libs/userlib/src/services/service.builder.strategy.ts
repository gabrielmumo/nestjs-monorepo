import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AbstractService } from '../../../globallib/src/services/abstract.service';

@Injectable()
export class BuilderStrategyService<T> {
  public builder: Map<string, AbstractService<T>> = new Map();

  constructor(
    @InjectRepository(User) private typeUserRepository: MongoRepository<User>,
    //@InjectRepository(Message) private typeMessageRepository: MongoRepository<Message>,
    @InjectRepository(User) private fakeRepository: MongoRepository<User>,
  ) {
    this.builder.set('typeorm', this.typeUserRepository);
    this.builder.set('fakeorm', this.fakeRepository);
  }

  // Debe resolver además del engine, también la entidad
  getService(orm: string): AbstractService<T> {
    return this.builder.get(orm);
  }

  getTypeormService(): AbstractService<T> {
    return this.typeUserRepository;
  }
}
