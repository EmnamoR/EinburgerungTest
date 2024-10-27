import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SettingsScreenNavigationProp } from '../types/navigation';

export const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const { selectedLanguage } = useLanguage();
  const [showTranslations, setShowTranslations] = useState(true);
  const [enableSound, setEnableSound] = useState(false);
  const [enableVibration, setEnableVibration] = useState(true);

  const handleToggleSetting = async (
    setting: string,
    value: boolean,
    setter: (value: boolean) => void
  ) => {
    try {
      await AsyncStorage.setItem(setting, JSON.stringify(value));
      setter(value);
    } catch (error) {
      console.error(`Error saving ${setting}:`, error);
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
        {/* Language Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language Settings</Text>
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => navigation.navigate('LanguageSelection')}
          >
            <View style={styles.settingLeft}>
              <Feather name="globe" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Translation Language</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>
                {selectedLanguage?.toUpperCase() || 'EN'}
              </Text>
              <Feather name="chevron-right" size={20} color={colors.text.secondary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Display Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Display Settings</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Feather name="type" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Show Translations</Text>
            </View>
            <Switch
              value={showTranslations}
              onValueChange={(value) => 
                handleToggleSetting('showTranslations', value, setShowTranslations)
              }
              trackColor={{ false: '#767577', true: `${colors.accent}50` }}
              thumbColor={showTranslations ? colors.accent : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Feedback Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Feedback Settings</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Feather name="volume-2" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Sound Effects</Text>
            </View>
            <Switch
              value={enableSound}
              onValueChange={(value) => 
                handleToggleSetting('enableSound', value, setEnableSound)
              }
              trackColor={{ false: '#767577', true: `${colors.accent}50` }}
              thumbColor={enableSound ? colors.accent : '#f4f3f4'}
            />
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Feather name="smartphone" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Vibration</Text>
            </View>
            <Switch
              value={enableVibration}
              onValueChange={(value) => 
                handleToggleSetting('enableVibration', value, setEnableVibration)
              }
              trackColor={{ false: '#767577', true: `${colors.accent}50` }}
              thumbColor={enableVibration ? colors.accent : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Study Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Study Progress</Text>
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => {}}
          >
            <View style={styles.settingLeft}>
              <Feather name="refresh-ccw" size={20} color={colors.accent} />
              <Text style={styles.settingText}>Reset Progress</Text>
            </View>
            <Feather name="chevron-right" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

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
});

export default SettingsScreen;