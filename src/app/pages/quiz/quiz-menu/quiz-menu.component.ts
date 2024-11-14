import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz-menu',
  templateUrl: './quiz-menu.component.html',
  styleUrl: './quiz-menu.component.scss'
})
export class QuizMenuComponent {
  constructor(private router: Router) {}

  navigateToQuizSeletor(){
    this.router.navigate(['/quiz/selecionar'])
  }


}
