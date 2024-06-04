import { AbstractService } from '../../../globallib/src/services/abstract.service';
import { FakeormUserService } from './fakeorm.user.service';
import { TypeormUserService } from './typeorm.user.service';

export const abstractServiceProvider = {
  provide: AbstractService,
  useClass:
    process.env.DB_ENGINE === 'typeorm'
      ? TypeormUserService
      : FakeormUserService,
};
