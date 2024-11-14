
export interface Pergunta {
    id: number;
    pergunta: string;
    possiveisRespostas: PossiveisRespostas[];
  }

export interface PossiveisRespostas{
    texto: string; 
    isCorrect: boolean ;
}


export interface Usuario {
  id: number;
  nome: string;
  pontuacao: number;
}
  