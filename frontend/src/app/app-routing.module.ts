import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'horse',
    pathMatch: 'full'
    
  },
  {
    path:'horse',
    loadChildren: () => import('./horse-management/horse-management.module').then(m => m.HorseManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
