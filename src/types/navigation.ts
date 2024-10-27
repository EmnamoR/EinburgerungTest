import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  TestSimulation: undefined;
  PracticeMode: { questionId: string } | undefined;
  BookmarkedQuestions: undefined;
  Settings: undefined;
  SavedQuestions: undefined;
  HistoricalDates: undefined;
  QuestionDetail: { questionId: string };
  StateSelection: undefined;
  LanguageSelection: undefined;

};

// export type ScreenProps = {
//   navigation: any; // We'll properly type this in each screen
// };



export type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;
