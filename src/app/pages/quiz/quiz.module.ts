import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizGameRoutingModule } from './quiz-routing.module';
import { QuizGameComponent } from './quiz-game/quiz-game.component';
import { QuizMenuComponent } from './quiz-menu/quiz-menu.component';
import { QuizPerguntaComponent } from './quiz-pergunta/quiz-pergunta.component';
import { QuizRespostasComponent } from './quiz-respostas/quiz-respostas.component';
import { QuizFeedbackComponent } from './quiz-feedback/quiz-feedback.component';
import { QuizResultadoComponent } from './quiz-resultado/quiz-resultado.component';


@NgModule({
  declarations: [
    QuizGameComponent,
    QuizMenuComponent,
    QuizPerguntaComponent,
    QuizRespostasComponent,
    QuizFeedbackComponent,
    QuizResultadoComponent
  ],
  imports: [
    CommonModule,
    QuizGameRoutingModule
  ]
})
export class QuizGameModule { }
