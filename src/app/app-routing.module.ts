import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuizComponent } from './components/quiz/quiz.component';




const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  {path: 'quiz', component: QuizComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
