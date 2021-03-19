import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorseComponent } from './horse/horse.component';
import { ModifyHorseComponent } from './modify-horse/modify-horse.component';



const routes: Routes = [
  {
    path: '',
    component: HorseComponent
  },
  {
      path:'add',
      component:ModifyHorseComponent
  },
  {
      path:':id/edit',
      component:ModifyHorseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorseRoutingModule { }