import { Controller, Get, Post, Body,Put, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { HorseService } from './horse.service';
import { CreateHorseDto } from './dto/create-horse.dto';
import { Horse } from './horse.entity';

@Controller('horses')
export class HorseController {
  constructor(private horseService: HorseService) {}

  @Get()
  getHorses(): Promise<Horse[]> {
    return this.horseService.getHorses();
  }

  @Get('/:id')
  getHorseById(@Param('id', ParseIntPipe) id: number): Promise<Horse> {
    return this.horseService.getHorseById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addHorse(@Body() addHorseDto: CreateHorseDto): Promise<Horse> {
    return this.horseService.addHorse(addHorseDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.horseService.deleteHorse(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateHorseDto: CreateHorseDto) {
    return this.horseService.updateHorse(+id, updateHorseDto);
  }

}
