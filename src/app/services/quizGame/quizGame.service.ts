import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pergunta } from '../../types/interfaces.types';


@Injectable({
  providedIn: 'root'
})
export class QuizGameService {
  private docPerguntas = 'assets/perguntas.json';

  constructor(private http: HttpClient) {}

  getPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(this.docPerguntas);
  }

}
