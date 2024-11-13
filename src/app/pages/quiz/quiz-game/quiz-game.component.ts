import { Component, OnInit, signal, Signal } from '@angular/core';
import { QuizGameService } from '../../../services/quizGame/quizGame.service';
import { Pergunta } from '../../../types/interfaces.types';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz-game.component.html',
  styleUrl: './quiz-game.component.scss'
  
})
export class QuizGameComponent implements OnInit{

  perguntas: Pergunta[] = [];
  quizFinalizado = false;
  perguntaAtual: Pergunta  | undefined;
  indiceAtual = 0;
  respostaCorreta: boolean | undefined;
  feedbackMensagem: string | undefined;
  pontuacao = 0;

  isClicked = false;
  isLoading = false;

  constructor(private quizService: QuizGameService) {}


  ngOnInit(): void {
    this.isLoading = true;
    this.quizService.getPerguntas().subscribe((data) => {
      this.perguntas = data;
      this.perguntaAtual = this.perguntas[this.indiceAtual];
      this.isLoading = false;
    }, error => {
      console.error('Erro ao carregar perguntas:', error);
      this.isLoading = false;
    });
  }

  responder(resposta: {texto: string, isCorrect: boolean}){
    this.respostaCorreta = resposta.isCorrect;
    this.feedbackMensagem = this.respostaCorreta ? 'Resposta Correta!' : 'Resposta Incorreta!';

    if (this.respostaCorreta){
      console.log("Acertou!")
      this.pontuacao++
      this.isClicked = true
    }else{
      console.log("Errou")
      this.isClicked = true
    }

    setTimeout(() => 
      {
        this.feedbackMensagem = undefined;
        this.proximaPergunta();
      }, 1500)

  }

  proximaPergunta(): void 
  {
    setTimeout(() => {
      this.indiceAtual++;
      if (this.indiceAtual < this.perguntas.length) {
        this.perguntaAtual = this.perguntas[this.indiceAtual];
        this.respostaCorreta = undefined;
        this.isClicked = false;
      } else {
        this.perguntaAtual = undefined;
        this.quizFinalizado = true
      }
    }, 0);
  }
}
