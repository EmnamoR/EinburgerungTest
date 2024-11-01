import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './src/types/navigation';
import { LanguageProvider } from './src/context/LanguageContext';
import { BookmarkProvider } from './src/context/BookmarkContext';
import HomeScreen from './src/screens/HomeScreen';
import { BookmarkedQuestionsScreen } from './src/screens/BookmarkedQuestionsScreen';
import PracticeModeScreen from './src/screens/PracticeModeScreen';
import TestSimulationScreen from './src/screens/TestSimulationScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <BookmarkProvider>
          <NavigationContainer>
            <Stack.Navigator>
              
              <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="TestSimulation" 
                component={TestSimulationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="PracticeMode" 
                component={PracticeModeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="BookmarkedQuestions" 
                component={BookmarkedQuestionsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarkProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}