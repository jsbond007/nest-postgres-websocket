import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Horse extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dob: string;

  @Column()
  sex: string;

  @Column()
  isPregnant: boolean

  @Column()
  dueDate: string;
}
