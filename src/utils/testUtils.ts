import { Question } from "../types/question";

const generateTest = (questions: Question[], stateId: string): Question[] => {
    // Filter questions by type
    const generalQuestions = questions.filter(q => !q.federalState);
    const stateQuestions = questions.filter(q => q.federalState === stateId);
  
    // Ensure we have enough questions
    if (generalQuestions.length < 30) {
      throw new Error(`Not enough general questions. Required: 30, Found: ${generalQuestions.length}`);
    }
    if (stateQuestions.length < 3) {
      throw new Error(`Not enough questions for state ${stateId}. Required: 3, Found: ${stateQuestions.length}`);
    }
  
    // Get random questions
    const selectedGeneralQuestions = shuffleArray(generalQuestions).slice(0, 30);
    const selectedStateQuestions = shuffleArray(stateQuestions).slice(0, 3);
  
    // Combine and shuffle all selected questions
    return shuffleArray([...selectedGeneralQuestions, ...selectedStateQuestions]);
  };
  

// Helper function to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };