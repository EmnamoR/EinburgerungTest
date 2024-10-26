// src/types/question.ts
export type Language = 
  | 'de'
  | 'en'
  | 'ar'
  | 'tr'
  | 'uk'
  | 'ru'
  | 'pl'
  | 'fa';

export interface TranslatedText {
  de: string;
  en?: string;
  ar?: string;
  tr?: string;
  uk?: string;
  ru?: string;
  pl?: string;
  fa?: string;
}

export interface Answer {
  id: number;
  text: TranslatedText;
}

export interface Question {
  id: string;
  question: TranslatedText;
  answers: Answer[];
  correctAnswer: number;
  category: string;
}