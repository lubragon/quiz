import { Component, Input } from '@angular/core';
import { Pergunta } from '../../../types/interfaces.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-resultado',
  templateUrl: './quiz-resultado.component.html',
  styleUrl: './quiz-resultado.component.scss'
})
export class QuizResultadoComponent {
  constructor(private router: Router) {}


  @Input() pontuacao = 0;
  @Input() perguntas: Pergunta[] = [];

  voltarMenu(){
    this.router.navigate(['/home'])
  }

}
