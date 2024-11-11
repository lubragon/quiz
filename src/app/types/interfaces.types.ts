
export interface Pergunta {
    id: number;
    pergunta: string;
    respostas: { texto: string; isCorrect: boolean }[];
  }

  