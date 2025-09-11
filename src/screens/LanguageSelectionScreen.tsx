import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../constants/Colors';

const languages = [
  { code: 'off', name: 'OFF (No Translation)' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'uk', name: 'Українська' },
  { code: 'ru', name: 'Русский' },
  { code: 'pl', name: 'Polski' },
  { code: 'fa', name: 'فارسی' },
];

export const LanguageSelectionScreen = () => {
  const navigation = useNavigation();
  const { selectedLanguage, setLanguage } = useLanguage();

  const handleLanguageSelect = (languageCode: string) => {
    setLanguage(languageCode as any);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color={colors.text.primary} />
          <Text style={styles.backText}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Language</Text>
        <View style={styles.headerRight} />
      </View>
      
      <View style={styles.content}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.code}
            style={[
              styles.languageItem,
              selectedLanguage === language.code && styles.selectedLanguageItem
            ]}
            onPress={() => handleLanguageSelect(language.code)}
          >
            <Text style={[
              styles.languageText,
              selectedLanguage === language.code && styles.selectedLanguageText
            ]}>
              {language.name}
            </Text>
            {selectedLanguage === language.code && (
              <Feather name="check" size={20} color={colors.accent} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  backText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
  headerRight: {
    width: 60,
  },
  content: {
    padding: 16,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedLanguageItem: {
    backgroundColor: `${colors.accent}10`,
  },
  languageText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  selectedLanguageText: {
    color: colors.accent,
    fontWeight: '500',
  },
});

export default LanguageSelectionScreen;