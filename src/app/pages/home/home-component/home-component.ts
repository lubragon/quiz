import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToQuiz(){
    this.router.navigate(['/quiz/menu'])
  }

}
