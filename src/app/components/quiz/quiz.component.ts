import { Component, Injectable, OnInit } from '@angular/core';
import { QuizGameService } from '../../services/quizGame/quizGame.service';


interface Pergunta {
  id: number;
  pergunta: string;
  respostas: { texto: string; correta: boolean }[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
  
})
export class QuizComponent implements OnInit{

  perguntas: Pergunta[] = [];
  perguntaAtual: Pergunta | undefined;
  indiceAtual = 0
  respostaCorreta: boolean | undefined;

  constructor(private quizService: QuizGameService) {}


  ngOnInit(): void {
    this.quizService.getPerguntas().subscribe((data) => {
      console.log(data); 
      this.perguntas = data;
      this.perguntaAtual = this.perguntas[this.indiceAtual];
    }, error => {
      console.error('Erro ao carregar perguntas:', error);
    });
  }

  responder(pergunta: Pergunta, resposta: {texto: string, correta: boolean}){
    this.respostaCorreta = resposta.correta;
  }

  proximaPergunta(): void 
  {
    setTimeout(() => {
      this.indiceAtual++;
      if (this.indiceAtual < this.perguntas.length) {
        this.perguntaAtual = this.perguntas[this.indiceAtual];
        this.respostaCorreta = undefined;
      } else {
        this.perguntaAtual = undefined;
      }
    }, 1000);
  }
}
