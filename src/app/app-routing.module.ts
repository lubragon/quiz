import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeComponent } from './pages/home/home-component/home-component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  // { path: 'login', component:LoginComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full'},

  // { path: 'home', component:HomeComponent, },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  
  { path: 'base', redirectTo: '/base/usuario', pathMatch: 'full'},

  {
    path:'',
    component: WrapperComponent,

    children:[
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizGameModule)
      },
      {
        path:'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'placar',
        loadChildren: () => import('./pages/placar/placar.module').then(m => m.PlacarModule)
      }
    
    ]
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
