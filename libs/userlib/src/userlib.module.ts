import { Module } from '@nestjs/common';
import { UserlibService } from './userlib.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { abstractServiceProvider } from './services/abstract.service.provider';

@Module({
  imports: [
    // Cada librería debe tener esto en su propio módulo.
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserlibService, abstractServiceProvider],
  exports: [UserlibService],
})
export class UserlibModule {}
