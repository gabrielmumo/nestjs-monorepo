import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AbstractService<T> {
  abstract save(o: T): Promise<T>;
}
