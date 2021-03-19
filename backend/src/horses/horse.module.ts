import { Module } from '@nestjs/common';
import { HorseController } from './horse.controller';
import { HorseService } from './horse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorseRepository } from './horse.repository';
import { SocketGateway } from './socket.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([HorseRepository]),
  ],
  controllers: [HorseController],
  providers: [HorseService,SocketGateway],
})
export class HorseModule {}
