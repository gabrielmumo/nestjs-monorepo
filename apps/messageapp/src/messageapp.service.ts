import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageappService {
  async getHello(): Promise<string> {
    return await 'Message sent';
  }
}
