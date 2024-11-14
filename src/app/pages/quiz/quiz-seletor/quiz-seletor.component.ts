import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-seletor',
  templateUrl: './quiz-seletor.component.html',
  styleUrl: './quiz-seletor.component.scss'
})
export class QuizSeletorComponent {
  
  constructor(private router: Router) {}

  navigateToQuizGame(modalidade: string){
    this.router.navigate(['/quiz/game', {modalidade}])
  }


}
