import { Horse } from './horse.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateHorseDto } from './dto/create-horse.dto';

@EntityRepository(Horse)
export class HorseRepository extends Repository<Horse> {
  async getHorses(): Promise<Horse[]> {
    // const { status, search } = filterDto;
    const query = this.createQueryBuilder('horses');
    const horse = await query.getMany();
    return horse;
  }

  async createHorse(createHorseDto: CreateHorseDto): Promise<Horse> {
    const { name, dob, dueDate, sex, isPregnant } = createHorseDto;

    const horse = new Horse();
    horse.name = name;
    horse.dob = dob;
    horse.dueDate = dueDate;
    horse.sex = sex;
    horse.isPregnant = isPregnant;
    await horse.save();

    return horse;
  }

  async updateHorse(id:number,createHorseDto: CreateHorseDto): Promise<any> {
   const a = await this.createQueryBuilder()
    .createQueryBuilder()
    .update(Horse)
    .set(createHorseDto)
    .where("id = :id", { id: id })
    .execute();
    return a;
  }
}
