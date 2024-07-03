import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './app.service';
import { GloballibModule } from '@app/globallib';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/userlib/entities/user.entity';
import { abstractServiceProvider } from '@app/userlib/services/abstract.service.provider';
import { UserlibModule } from '@app/userlib';

@Module({
  imports: [GloballibModule, UserlibModule, TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [UserService, abstractServiceProvider],
})
export class AppModule {}
