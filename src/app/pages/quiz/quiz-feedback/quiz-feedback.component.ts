import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-feedback',
  templateUrl: './quiz-feedback.component.html',
  styleUrl: './quiz-feedback.component.scss'
})
export class QuizFeedbackComponent {

  @Input() feedbackMensagem: string | undefined;

}
