import { Module } from '@nestjs/common';
import { GloballibService } from './globallib.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [GloballibService],
  exports: [GloballibService],
})
export class GloballibModule {}
