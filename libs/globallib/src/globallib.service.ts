import { Injectable } from '@nestjs/common';

@Injectable()
export class GloballibService {
  greetTheWorld(): string {
    return 'Hello world from the Global-Library';
  }
}
