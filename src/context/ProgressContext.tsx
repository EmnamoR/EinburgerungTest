// src/context/ProgressContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Progress {
  answeredQuestions: {
    [questionId: string]: {
      isCorrect: boolean;
      timestamp: string;
    }
  };
  testResults: any[];
  lastUpdated: string;
}

interface ProgressContextType {
  progress: Progress;
  updateQuestionProgress: (questionId: string, isCorrect: boolean) => Promise<void>;
  getMasteredCount: () => number;
  getRemainingCount: () => number;
  getProgress: () => number;
  reloadProgress: () => Promise<void>;
}

const PROGRESS_KEY = 'testProgress';
const TOTAL_QUESTIONS = 300;

const defaultProgress: Progress = {
  answeredQuestions: {},
  testResults: [],
  lastUpdated: new Date().toISOString(),
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>(defaultProgress);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem(PROGRESS_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const updateQuestionProgress = async (questionId: string, isCorrect: boolean) => {
    try {
      const newProgress = {
        ...progress,
        answeredQuestions: {
          ...progress.answeredQuestions,
          [questionId]: {
            isCorrect,
            timestamp: new Date().toISOString()
          }
        },
        lastUpdated: new Date().toISOString()
      };

      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const getMasteredCount = () => {
    return Object.values(progress.answeredQuestions).filter(q => q.isCorrect).length;
  };

  const getRemainingCount = () => {
    return TOTAL_QUESTIONS - getMasteredCount();
  };

  const getProgress = () => {
    const masteredCount = getMasteredCount();
    return Math.round((masteredCount / TOTAL_QUESTIONS) * 100);
  };

  const contextValue: ProgressContextType = {
    progress,
    updateQuestionProgress,
    getMasteredCount,
    getRemainingCount,
    getProgress,
    reloadProgress: loadProgress
  };

  return (
    <ProgressContext.Provider value={contextValue}>
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