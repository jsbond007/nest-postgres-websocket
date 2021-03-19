import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorseComponent } from './horse/horse.component';
import { HorseRoutingModule } from './horse-routing.module';
import { ModifyHorseComponent } from './modify-horse/modify-horse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HorseComponent, ModifyHorseComponent],
  imports: [
    CommonModule,
    HorseRoutingModule,
    FormsModule,
    
  ]
})
export class HorseManagementModule { }
