import { Component, Input, OnInit } from '@angular/core';
import { QuizGameService } from '../../../services/quizGame/quizGame.service';
import { Pergunta } from '../../../types/interfaces.types';


@Component({
  selector: 'app-quiz-pergunta',
  templateUrl: './quiz-pergunta.component.html',
  styleUrl: './quiz-pergunta.component.scss'
})
export class QuizPerguntaComponent {
 
  @Input() pergunta: Pergunta | undefined;

}