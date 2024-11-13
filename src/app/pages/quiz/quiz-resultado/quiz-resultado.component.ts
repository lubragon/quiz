import { Component, Input } from '@angular/core';
import { Pergunta } from '../../../types/interfaces.types';

@Component({
  selector: 'app-quiz-resultado',
  templateUrl: './quiz-resultado.component.html',
  styleUrl: './quiz-resultado.component.scss'
})
export class QuizResultadoComponent {

  @Input() pontuacao = 0;
  @Input() perguntas: Pergunta[] = [];

}
