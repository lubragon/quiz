import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HttpClientModule } from '@angular/common/http'; 
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home-component/home-component';
import { LoginComponent } from './pages/login/login.component';

const Container = [
  WrapperComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
    ...Container,
    HomeComponent,
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
