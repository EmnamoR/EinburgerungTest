// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, ProgressBar, ActionButton, IconButton } from '../components';
import { colors } from '../constants/Colors';
import { RootStackParamList } from '../types/navigation';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leben in Deutschland</Text>
        <View style={styles.headerIcons}>
          <IconButton 
            name="globe" 
            onPress={() => navigation.navigate('Settings')}
            color={colors.accent}
          />
          <IconButton 
            name="settings" 
            onPress={() => navigation.navigate('Settings')}
            color={colors.accent}
          />
        </View>
      </View>

      <View style={styles.content}>
        {/* Progress Section */}
        <Card>
          <View style={styles.progressHeader}>
            <View style={styles.progressTitleContainer}>
              <IconButton name="activity" size={20} color={colors.accent} onPress={() => {}} />
              <Text style={styles.progressTitle}>Test Readiness</Text>
            </View>
            <Text style={styles.progressPercentage}>3%</Text>
          </View>
          
          <ProgressBar progress={3} />
          
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Mastered</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>302</Text>
              <Text style={styles.statLabel}>Remaining</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Starred</Text>
            </View>
          </View>
        </Card>

        {/* Main Actions */}
        <Card>
          <View style={styles.actionContainer}>
            <IconButton name="clock" size={24} color={colors.accent} onPress={() => {}} />
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Simulate Test</Text>
              <Text style={styles.actionSubtitle}>
                33 questions • 60 minutes • 17 correct to pass
              </Text>
              <ActionButton 
                title="Start Test Simulation"
                onPress={() => navigation.navigate('TestSimulation')}
              />
            </View>
          </View>
        </Card>

        <Card>
          <View style={styles.actionContainer}>
            <IconButton name="book" size={24} color={colors.accent} onPress={() => {}} />
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Practice Mode</Text>
              <Text style={styles.actionSubtitle}>
                Study all 300 questions at your own pace
              </Text>
              <ActionButton 
                title="Start Practice"
                onPress={() => navigation.navigate('PracticeMode')}
                variant="outlined"
              />
            </View>
          </View>
        </Card>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Card style={styles.quickActionCard}>
            <IconButton name="bookmark" size={24} color={colors.accent} onPress={() => {}} />
            <Text style={styles.quickActionTitle}>Saved Questions</Text>
            <Text style={styles.quickActionSubtitle}>Quick access</Text>
          </Card>
          
          <Card style={styles.quickActionCard}>
            <IconButton name="calendar" size={24} color={colors.accent} onPress={() => {}} />
            <Text style={styles.quickActionTitle}>Historical Dates</Text>
            <Text style={styles.quickActionSubtitle}>Date questions</Text>
          </Card>
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
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
  },
  progressPercentage: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.accent,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.accent,
  },
  statLabel: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 16,
  },
  quickActionCard: {
    flex: 1,
    alignItems: 'center',
  },
  quickActionTitle: {
    fontSize: 14,
    color: colors.text.primary,
    marginTop: 8,
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
});

export default HomeScreen;