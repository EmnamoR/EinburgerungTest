// src/types/navigation.ts

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TestState } from './test';

export type RootStackParamList = {
  Home: undefined;
  TestSimulation: undefined;
  PracticeMode: { bundesland?: string; questionId?: string } | undefined;
  BookmarkedQuestions: undefined;
  Settings: undefined;
  SavedQuestions: undefined;
  HistoricalDates: undefined;
  PremiumScreen: undefined;
  QuestionDetail: { questionId: string };
  StateSelection: undefined;
  LanguageSelection: undefined;
  Results: { testState: TestState };
};

// Specific screen navigation types
export type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;
export type TestSimulationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TestSimulation'>;
export type ResultsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Results'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type PracticeModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PracticeMode'>;
export type BookmarkedQuestionsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookmarkedQuestions'>;
export type QuestionDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'QuestionDetail'>;
export type StateSelectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'StateSelection'>;
export type LanguageSelectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LanguageSelection'>;
export type HistoricalDatesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HistoricalDates'>;
export type PremiumScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PremiumScreen'>;