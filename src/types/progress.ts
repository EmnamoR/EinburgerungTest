// src/types/progress.ts
export interface Progress {
    answeredQuestions: {
      [questionId: string]: {
        lastAnswered: string;
        correctCount: number;
        totalAttempts: number;
      }
    };
    testResults: TestResult[];
    lastUpdated: string;
  }
  
  export interface TestResult {
    date: string;
    score: number;
    passed: boolean;
    timeUsed: number;
    answers: Record<string, number>;
  }
