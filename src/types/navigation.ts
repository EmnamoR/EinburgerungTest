export type RootStackParamList = {
  Home: undefined;
  TestSimulation: undefined;
  PracticeMode: undefined;
  Settings: undefined;
  SavedQuestions: undefined;
  HistoricalDates: undefined;
  QuestionDetail: { questionId: string };
  StateSelection: undefined;
  LanguageSelection: undefined;
};

export type ScreenProps = {
  navigation: any; // We'll properly type this in each screen
};