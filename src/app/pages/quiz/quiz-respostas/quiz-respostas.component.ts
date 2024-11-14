import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pergunta, PossiveisRespostas } from '../../../types/interfaces.types';
import { OnChangeType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-quiz-respostas',
  templateUrl: './quiz-respostas.component.html',
  styleUrl: './quiz-respostas.component.scss'
})
export class QuizRespostasComponent implements OnChanges
{

  
  @Input() respostas: PossiveisRespostas[] = [];
  @Input() isClicked: boolean = false;
  @Input() perguntaAtual: Pergunta  | undefined;


  @Output() respostaOutput = new EventEmitter<PossiveisRespostas>;


  respostaSelecionada: PossiveisRespostas | null = null;



  ngOnChanges(changes: SimpleChanges): void {
    const checarMudanca = changes['perguntaAtual']?.currentValue
    if(checarMudanca){
      this.respostaSelecionada = null;
    }
  }

  onResponder(resposta: PossiveisRespostas)
  {
    this.respostaSelecionada = resposta;
    this.respostaOutput.emit(resposta)
  }

  getButtonClass(resposta: PossiveisRespostas): string {
    // Define todos os botões com style padrão caso nenhuma resposta seja selecionada
    if (!this.respostaSelecionada) {
      return 'respostaButton';
    }
  
    // Define style da resposta que foi selecionada
    if (this.respostaSelecionada === resposta) {
      return this.respostaSelecionada.isCorrect ? 'respostaButton correta' : 'respostaButton incorreta';
    }
  
    // Define style das respostas que não foram selecionadas
    return resposta.isCorrect ? 'respostaButton correta' : 'respostaButton';
  }



}