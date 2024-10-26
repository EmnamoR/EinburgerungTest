import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './src/types/navigation';
import { colors } from './src/constants/Colors';
import HomeScreen from './src/screens/HomeScreen';
import TestSimulationScreen from './src/screens/TestSimulationScreen';
import PracticeModeScreen from './src/screens/PracticeModeScreen';
import { LanguageProvider } from './src/context/LanguageContext';
// import SavedQuestionsScreen from './src/screens/SavedQuestionsScreen';
// import HistoricalDatesScreen from './src/screens/HistoricalDatesScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import StateSelectionScreen from './src/screens/StateSelectionScreen';
// import LanguageSelectionScreen from './src/screens/LanguageSelectionScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

// App.tsx
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Hide default header
            contentStyle: {
              backgroundColor: '#F5F1EA',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PracticeMode" component={PracticeModeScreen} />
          {/* Other screens */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}