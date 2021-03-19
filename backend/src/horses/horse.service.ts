import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHorseDto } from './dto/create-horse.dto';
import { HorseRepository } from './horse.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Horse } from './horse.entity';

@Injectable()
export class HorseService {
  constructor(
    @InjectRepository(HorseRepository)
    private horseRepository: HorseRepository,
  ) {}

  async getHorses(): Promise<Horse[]> {
    return this.horseRepository.getHorses();
  }

  async getHorseById(id: number): Promise<Horse> {
    const found = await this.horseRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Horse with ID "${id}" not found`);
    }

    return found;
  }

  async addHorse(createHorseDto: CreateHorseDto): Promise<Horse> {
    return this.horseRepository.createHorse(createHorseDto);
  }

  async deleteHorse(id: number): Promise<boolean> {
    const result = await this.horseRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return true;
  }

  async updateHorse(id: number, updateHorseDto: any): Promise<any> {
    return await this.horseRepository.updateHorse(id, updateHorseDto);
  }


}
