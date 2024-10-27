import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import { useBookmarks } from '../context/BookmarkContext';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const { bookmarkedQuestions } = useBookmarks();

  // These values should come from your progress tracking system
  const stats = {
    mastered: 8,
    remaining: 302,
    starred: bookmarkedQuestions.length || 2,
    progress: 3,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leben in Deutschland</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="globe" size={24} color={colors.accent} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" size={24} color={colors.accent} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {/* Progress Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="activity" size={20} color={colors.accent} />
              <Text style={styles.cardTitle}>Test Readiness</Text>
            </View>
            <Text style={styles.progressPercentage}>{stats.progress}%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${stats.progress}%` }]} />
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{stats.mastered}</Text>
              <Text style={styles.statLabel}>Mastered</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{stats.remaining}</Text>
              <Text style={styles.statLabel}>Remaining</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{stats.starred}</Text>
              <Text style={styles.statLabel}>Starred</Text>
            </View>
          </View>
        </View>

        {/* Test Simulation Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Feather name="clock" size={24} color={colors.accent} />
            <Text style={styles.cardTitle}>Simulate Test</Text>
          </View>
          <Text style={styles.cardSubtitle}>
            33 questions • 60 minutes • 17 correct to pass
          </Text>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('TestSimulation')}
          >
            <Text style={styles.buttonText}>Start Test Simulation</Text>
          </TouchableOpacity>
        </View>

        {/* Practice Mode Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Feather name="book" size={24} color={colors.accent} />
            <Text style={styles.cardTitle}>Practice Mode</Text>
          </View>
          <Text style={styles.cardSubtitle}>
            Study all 300 questions at your own pace
          </Text>
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('PracticeMode')}
          >
            <Text style={styles.secondaryButtonText}>Start Practice</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity 
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('BookmarkedQuestions')}
          >
            <Feather name="star" size={24} color={colors.accent} />
            <Text style={styles.quickActionTitle}>Saved Questions</Text>
            <Text style={styles.quickActionSubtitle}>Review starred items</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('HistoricalDates')}
          >
            <Feather name="calendar" size={24} color={colors.accent} />
            <Text style={styles.quickActionTitle}>Historic Dates</Text>
            <Text style={styles.quickActionSubtitle}>Important dates</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 14,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 14,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 14,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.accent,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    marginVertical: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.accent,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: colors.text.secondary,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  secondaryButtonText: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '500',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 14,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
    marginTop: 6,
    textAlign: 'center',
  },
  quickActionSubtitle: {
    fontSize: 10,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default HomeScreen;