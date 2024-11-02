// src/types/test.ts

import { Question } from './question';

export interface TestState {
  questions: Question[];
  answers: Record<string, number>;
  timeRemaining: number;
  currentIndex: number;
  isComplete: boolean;
}

export interface TestResult {
  date: string;
  score: number;
  passed: boolean;
  timeUsed: number;
  answers: Record<string, number>;
  stateId: string;
}