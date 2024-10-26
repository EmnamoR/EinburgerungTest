// src/components/LanguageSelector.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { languages } from '../constants/language';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../constants/Colors';
import { Language } from '../types/language';

export const LanguageSelector = () => {
  const { selectedLanguage, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Translation Language</Text>
      <View style={styles.languageGrid}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageButton,
              selectedLanguage === lang.code && styles.selectedLanguage,
            ]}
            onPress={() => setLanguage(lang.code as Language)}
          >
            <Text style={[
              styles.languageText,
              selectedLanguage === lang.code && styles.selectedLanguageText,
              lang.code === 'ar' || lang.code === 'fa' ? styles.rtlText : null,
            ]}>
              {lang.nativeName}
            </Text>
            {selectedLanguage === lang.code && (
              <Feather name="check" size={16} color={colors.white} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 12,
  },
  languageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  selectedLanguage: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  languageText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  selectedLanguageText: {
    color: colors.white,
  },
  rtlText: {
    textAlign: 'right',
  },
});