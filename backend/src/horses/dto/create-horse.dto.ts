import { IsNotEmpty } from 'class-validator';

export class CreateHorseDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  dob: string;
  sex: string;
  isPregnant: boolean
  dueDate: string;
}
