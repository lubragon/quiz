
export interface Pergunta {
    id: number;
    pergunta: string;
    respostas: { texto: string; isCorrect: boolean }[];
  }


export interface Usuario {
  id: number;
  nome: string;
  pontuacao: number;
}
  