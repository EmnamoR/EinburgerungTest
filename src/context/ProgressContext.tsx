// src/context/ProgressContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface QuestionProgress {
  questionId: string;
  isCorrect: boolean;
  timestamp: number;
}

interface ProgressContextType {
  questionProgress: Record<string, QuestionProgress>;
  updateQuestionProgress: (questionId: string, isCorrect: boolean) => Promise<void>;
  getMasteredCount: () => number;
  getRemainingCount: () => number;
  getProgress: () => number;
  reloadProgress: () => Promise<void>;
  clearAllProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const PROGRESS_STORAGE_KEY = 'questionProgress';
const TOTAL_QUESTIONS = 300;

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [questionProgress, setQuestionProgress] = useState<Record<string, QuestionProgress>>({});

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem(PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        setQuestionProgress(parsedProgress);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const saveProgress = async (progress: Record<string, QuestionProgress>) => {
    try {
      await AsyncStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const updateQuestionProgress = async (questionId: string, isCorrect: boolean) => {
    const newProgress = {
      ...questionProgress,
      [questionId]: {
        questionId,
        isCorrect,
        timestamp: Date.now(),
      },
    };
    
    setQuestionProgress(newProgress);
    await saveProgress(newProgress);
  };

  const getMasteredCount = () => {
    return Object.values(questionProgress).filter(progress => progress.isCorrect).length;
  };

  const getRemainingCount = () => {
    return TOTAL_QUESTIONS - Object.keys(questionProgress).length;
  };

  const getProgress = () => {
    const totalAnswered = Object.keys(questionProgress).length;
    if (totalAnswered === 0) return 0;
    
    const correctAnswers = getMasteredCount();
    return Math.round((correctAnswers / TOTAL_QUESTIONS) * 100);
  };

  const reloadProgress = async () => {
    await loadProgress();
  };

  const clearAllProgress = async () => {
    try {
      await AsyncStorage.removeItem(PROGRESS_STORAGE_KEY);
      setQuestionProgress({});
    } catch (error) {
      console.error('Error clearing progress:', error);
      throw error;
    }
  };

  return (
    <ProgressContext.Provider value={{
      questionProgress,
      updateQuestionProgress,
      getMasteredCount,
      getRemainingCount,
      getProgress,
      reloadProgress,
      clearAllProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};