import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacarSoloComponent } from './placar-solo/placar-solo.component';

const routes: Routes = [

  {
    path: 'solo',
    component: PlacarSoloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacarRoutingModule { }
