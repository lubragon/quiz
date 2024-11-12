import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizGameRoutingModule } from './quiz-routing.module';
import { QuizGameComponent } from './quiz-game/quiz-game.component';
import { QuizMenuComponent } from './quiz-menu/quiz-menu.component';


@NgModule({
  declarations: [
    QuizGameComponent,
    QuizMenuComponent
  ],
  imports: [
    CommonModule,
    QuizGameRoutingModule
  ]
})
export class QuizGameModule { }
