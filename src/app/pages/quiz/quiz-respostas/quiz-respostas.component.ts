import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizGameService } from '../../../services/quizGame/quizGame.service';
import { Pergunta } from '../../../types/interfaces.types';

@Component({
  selector: 'app-quiz-respostas',
  templateUrl: './quiz-respostas.component.html',
  styleUrl: './quiz-respostas.component.scss'
})
export class QuizRespostasComponent{
  
  @Input() respostas: {texto: string; isCorrect: boolean}[] = [];
  @Input() isClicked: boolean = false;
  @Input() perguntaAtual: Pergunta  | undefined;


  @Output() responder = new EventEmitter<{texto: string; isCorrect: boolean}>;

  onResponder(resposta: {texto: string; isCorrect: boolean})
  {
    this.responder.emit(resposta)
  }

}
