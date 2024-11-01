import { Question } from "../types/question";

export const generateTest = (questions: Question[], stateId: string) => {
    // Separate general and state-specific questions
    const generalQuestions = questions.filter(q => !q.federalState);
    const stateQuestions = questions.filter(q => q.federalState === stateId);

    // Randomly select questions
    const randomGeneralQuestions = shuffleArray(generalQuestions).slice(0, 30);
    const randomStateQuestions = shuffleArray(stateQuestions).slice(0, 3);

    return [...randomGeneralQuestions, ...randomStateQuestions];
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