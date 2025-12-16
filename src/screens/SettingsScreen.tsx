// src/screens/SettingsScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { useBookmarks } from '../context/BookmarkContext';
import { useProgress } from '../context/ProgressContext';
import { colors } from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SettingsScreenNavigationProp } from '../types/navigation';

export const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const { selectedLanguage, setLanguage } = useLanguage();
  const { clearAllBookmarks } = useBookmarks();
  const { clearAllProgress } = useProgress();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

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

  // Load premium status on component mount
  useEffect(() => {
    loadPremiumStatus();
  }, []);

  const loadPremiumStatus = async () => {
    try {
      const premiumStatus = await AsyncStorage.getItem('isPremium');
      setIsPremium(premiumStatus === 'true');
    } catch (error) {
      console.log('Error loading premium status:', error);
    }
  };

  // Debug toggle for premium (remove in production)
  const togglePremiumDebug = async () => {
    const newStatus = !isPremium;
    setIsPremium(newStatus);
    await AsyncStorage.setItem('isPremium', newStatus.toString());
    Alert.alert('Debug', `Premium status changed to: ${newStatus ? 'Active' : 'Inactive'}`);
  };

  const handleResetProgress = () => {
    Alert.alert(
      'Reset All Progress',
      'This will completely reset your progress, bookmarks, and settings. This action cannot be undone. Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            try {
              // Clear all progress data
              await clearAllProgress();
              
              // Clear all bookmarks
              await clearAllBookmarks();
              
              // Reset language to English (not OFF)
              setLanguage('en');
              
              // Clear all bundesland-specific progress
              const keys = await AsyncStorage.getAllKeys();
              const progressKeys = keys.filter(key => 
                key.startsWith('answeredQuestions_') || 
                key === 'answeredQuestions' ||
                key === 'questionProgress' ||
                key === 'bookmarkedQuestions' ||
                key === 'showTranslations'
              );
              await AsyncStorage.multiRemove(progressKeys);
              
              Alert.alert('Success', 'All progress has been reset successfully.');
            } catch (error) {
              console.error('Error resetting progress:', error);
              Alert.alert('Error', 'Failed to reset progress. Please try again.');
            }
          },
        },
      ]
    );
  };

  const handlePremiumAction = () => {
    if (isPremium) {
      // Show premium management options
      Alert.alert(
        'Premium Active',
        'Your premium subscription is active. You have access to all premium features.',
        [
          {
            text: 'Manage Subscription',
            onPress: () => navigation.navigate('PremiumScreen')
          },
          {
            text: 'OK',
            style: 'cancel'
          }
        ]
      );
    } else {
      // Navigate to purchase screen
      navigation.navigate('PremiumScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color={colors.text.primary} />
          <Text style={styles.backText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        {/* Premium Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Premium</Text>
          
          <TouchableOpacity
            style={styles.settingItem}
            onPress={handlePremiumAction}
          >
            <View style={styles.settingLeft}>
              <Feather 
                name="star" 
                size={20} 
                color={isPremium ? "#FFD700" : colors.text.secondary} 
              />
              <Text style={styles.settingText}>
                {isPremium ? 'Premium Active' : 'Upgrade to Premium'}
              </Text>
            </View>
            <View style={styles.settingRight}>
              {isPremium ? (
                <View style={styles.premiumBadge}>
                  <Text style={styles.premiumBadgeText}>ACTIVE</Text>
                </View>
              ) : (
                <View style={styles.upgradeBadge}>
                  <Text style={styles.upgradeBadgeText}>UPGRADE</Text>
                </View>
              )}
              <Feather
                name="chevron-right"
                size={20}
                color={colors.text.secondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Language Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language Settings</Text>
          
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowLanguageModal(true)}
          >
            <View style={styles.settingLeft}>
              <Feather name="globe" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Translation Language</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>
                {selectedLanguage === 'off' ? 'OFF' : selectedLanguage?.toUpperCase() || 'EN'}
              </Text>
              <Feather
                name="chevron-right"
                size={20}
                color={colors.text.secondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Study Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Study Progress</Text>
          
          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleResetProgress}
          >
            <View style={styles.settingLeft}>
              <Feather name="rotate-ccw" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Reset All Progress</Text>
            </View>
            <Feather
              name="chevron-right"
              size={20}
              color={colors.text.secondary}
            />
          </TouchableOpacity>
        </View>

        {/* Debug Section (remove in production) */}
        {__DEV__ && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Debug (Development Only)</Text>
            
            <TouchableOpacity
              style={styles.settingItem}
              onPress={togglePremiumDebug}
            >
              <View style={styles.settingLeft}>
                <Feather name="settings" size={20} color={colors.accent} />
                <Text style={styles.settingText}>Toggle Premium Status</Text>
              </View>
              <Text style={styles.settingValue}>
                {isPremium ? 'Premium' : 'Free'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Feather name="info" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Version</Text>
            </View>
            <Text style={styles.settingValue}>1.0.0</Text>
          </View>
        </View>
      </View>

      {/* Language Selection Modal */}
      <Modal
        visible={showLanguageModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Language</Text>
              <TouchableOpacity onPress={() => setShowLanguageModal(false)}>
                <Feather name="x" size={24} color={colors.text.primary} />
              </TouchableOpacity>
            </View>
            {languages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={[
                  styles.languageOption,
                  selectedLanguage === language.code && styles.selectedLanguageOption
                ]}
                onPress={() => {
                  setLanguage(language.code);
                  setShowLanguageModal(false);
                }}
              >
                <Text style={[
                  styles.languageOptionText,
                  selectedLanguage === language.code && styles.selectedLanguageOptionText
                ]}>
                  {language.name}
                </Text>
                {selectedLanguage === language.code && (
                  <Feather name="check" size={20} color={colors.accent} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
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
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
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
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  settingText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  settingValue: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  premiumBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  premiumBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 0.5,
  },
  upgradeBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  upgradeBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 0.5,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#F8F9FA',
  },
  selectedLanguageOption: {
    backgroundColor: `${colors.accent}15`,
    borderWidth: 1,
    borderColor: `${colors.accent}30`,
  },
  languageOptionText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  selectedLanguageOptionText: {
    color: colors.accent,
    fontWeight: '500',
  },
});

export default SettingsScreen;