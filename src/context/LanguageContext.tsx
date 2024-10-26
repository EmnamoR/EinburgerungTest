// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 
  | 'de'    // German (always shown as primary)
  | 'en'    // English
  | 'ar'    // Arabic
  | 'tr'    // Turkish
  | 'uk'    // Ukrainian
  | 'ru'    // Russian
  | 'pl'    // Polish
  | 'fa';   // Farsi

interface LanguageContextType {
  selectedLanguage: Language | null;
  setLanguage: (language: Language | null) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  selectedLanguage: 'en',
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  const setLanguage = async (language: Language | null) => {
    try {
      if (language) {
        await AsyncStorage.setItem('selectedLanguage', language);
        setSelectedLanguage(language);
      }
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  // Load saved language preference on mount
  React.useEffect(() => {
    const loadSavedLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (savedLanguage) {
          setSelectedLanguage(savedLanguage as Language);
        }
      } catch (error) {
        console.error('Error loading language:', error);
      }
    };

    loadSavedLanguage();
  }, []);

  const value = {
    selectedLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};