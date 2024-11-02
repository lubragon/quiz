import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pergunta {
  id: number;
  pergunta: string;
  respostas: { texto: string; correta: boolean }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizGameService {
  private url = 'assets/perguntas.js';

  constructor(private http: HttpClient) {}

  getPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(this.url);
  }

}
