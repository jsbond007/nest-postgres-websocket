import { Module } from '@nestjs/common';
import { HorseModule } from './horses/horse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HorseModule,
  ],
})
export class AppModule {}
