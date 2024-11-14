import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pergunta } from '../../types/interfaces.types';


@Injectable({
  providedIn: 'root'
})
export class QuizGameService {
  private docPerguntas = 'assets/perguntas.json';

  constructor(private http: HttpClient) {}


  // Todo provavelmente assync, testar alguma forma de carregamento
  // Todo modalidade! Lidar
  getPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(this.docPerguntas)
    //.pipe(map(perguntas => perguntas.filter(pergunta => pergunta.modalidade === modalidade)));
  }

}
