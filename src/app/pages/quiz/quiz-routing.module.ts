import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { QuizMenuComponent } from './quiz-menu/quiz-menu.component';
import { QuizGameComponent } from './quiz-game/quiz-game.component';


const routes: Routes = [
  {
    path: 'menu',
    component: QuizMenuComponent
  },
  {
    path: 'game',
    component: QuizGameComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizGameRoutingModule { }