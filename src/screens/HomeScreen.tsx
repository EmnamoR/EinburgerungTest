// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import { useBookmarks } from '../context/BookmarkContext';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProgress } from '../context/ProgressContext';
import { questions } from '../data/questions';
import { germanStates, GermanState } from '../constants/States';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const { bookmarkedQuestions } = useBookmarks();
  const { getMasteredCount, getRemainingCount, getProgress, reloadProgress } = useProgress();

  const [selectedBundesland, setSelectedBundesland] = useState<GermanState | null>(null);
  const [showBundeslandModal, setShowBundeslandModal] = useState(false);
  const [bundeslandCompleted, setBundeslandCompleted] = useState(0);

  const [stats, setStats] = useState({
    mastered: 0,
    remaining: 300,
    starred: bookmarkedQuestions.length || 0,
    progress: 0,
  });

  // Category definitions
  const categories = [
    {
      id: 'politics',
      title: 'Politics & Government',
      subtitle: 'Political system, democracy, elections',
      icon: 'users',
      color: colors.primary,
      filter: (q: any) => q.category === 'politics'
    },
    {
      id: 'history',
      title: 'German History',
      subtitle: 'Important historical events and periods',
      icon: 'book-open',
      color: '#8B5A2B',
      filter: (q: any) => q.category === 'history'
    },
    {
      id: 'society',
      title: 'Society & Culture',
      subtitle: 'Social norms, culture, daily life',
      icon: 'home',
      color: '#2E7D32',
      filter: (q: any) => q.category === 'society' || q.category === 'culture'
    },
    {
      id: 'holocaust',
      title: 'Holocaust & WWII',
      subtitle: 'Historical remembrance and education',
      icon: 'clock',
      color: '#5D4037',
      filter: (q: any) => q.category === 'holocaust' || 
                         (q.category === 'history' && 
                          (q.question?.de?.toLowerCase().includes('holocaust') ||
                           q.question?.de?.toLowerCase().includes('nationalsozial') ||
                           q.question?.de?.toLowerCase().includes('hitler') ||
                           q.question?.de?.toLowerCase().includes('judenverfolgung')))
    }
  ];

  // Get completed questions count for a specific Bundesland
  const getBundeslandCompleted = async (bundeslandId: string) => {
    try {
      const storageKey = `answeredQuestions_${bundeslandId}`;
      const savedAnswers = await AsyncStorage.getItem(storageKey);
      if (savedAnswers) {
        const answers = JSON.parse(savedAnswers);
        const completed = Object.keys(answers).length;
        console.log(`${bundeslandId}: ${completed} questions completed`);
        return completed;
      }
    } catch (error) {
      console.log(`Error loading progress for ${bundeslandId}:`, error);
    }
    return 0;
  };

  // Get question count for a category
  const getCategoryCount = (categoryFilter: (q: any) => boolean) => {
    return questions.filter(categoryFilter).length;
  };

  // Update stats when screen comes into focus and when bookmarks change
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', updateStats);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    updateStats();
  }, [reloadProgress, bookmarkedQuestions]);

  const updateStats = () => {
    setStats({
      mastered: getMasteredCount(),
      remaining: getRemainingCount(),
      starred: bookmarkedQuestions.length,
      progress: getProgress(),
    });
  };

  // Update Bundesland progress when selection changes
  useEffect(() => {
    if (selectedBundesland) {
      getBundeslandCompleted(selectedBundesland.id).then(count => {
        setBundeslandCompleted(count);
      });
    }
  }, [selectedBundesland]);

  useFocusEffect(
    React.useCallback(() => {
      const updateAllData = async () => {
        // Reload the main progress data
        await reloadProgress();

        // Update general stats
        setStats({
          mastered: getMasteredCount(),
          remaining: getRemainingCount(),
          starred: bookmarkedQuestions.length,
          progress: getProgress(),
        });

        // Update Bundesland progress if one is selected
        if (selectedBundesland) {
          const completed = await getBundeslandCompleted(selectedBundesland.id);
          setBundeslandCompleted(completed);
        }
      };

      updateAllData();
    }, [getMasteredCount, getRemainingCount, getProgress, reloadProgress, bookmarkedQuestions.length, selectedBundesland])
  );

  const getReadinessLevel = (progress: number) => {
    if (progress >= 80) return colors.success;
    if (progress >= 60) return colors.warning;
    return colors.error;
  };

  const getReadinessMessage = (progress: number) => {
    if (progress >= 80) return {
      icon: "check-circle",
      message: "You are ready for the test!",
      color: colors.success
    };
    if (progress >= 60) return {
      icon: "alert-circle",
      message: "Keep practicing to improve your readiness",
      color: colors.warning
    };
    return {
      icon: "info",
      message: "More practice recommended before taking the test",
      color: colors.error
    };
  };

  const readinessInfo = getReadinessMessage(stats.progress);

  const handleBundeslandSelect = (bundesland: GermanState) => {
    setSelectedBundesland(bundesland);
    setShowBundeslandModal(false);
  };

  const handleCategoryPress = (category: any) => {
    // Navigate to a category-specific practice mode
    // For now, we'll use the existing PracticeMode with a category parameter
    // You might want to create a dedicated CategoryPracticeScreen later
    navigation.navigate('PracticeMode', { category: category.id });
  };

  const renderBundeslandItem = ({ item }: { item: GermanState }) => (
    <TouchableOpacity
      style={[
        styles.bundeslandItem,
        selectedBundesland?.id === item.id && styles.selectedBundeslandItem
      ]}
      onPress={() => handleBundeslandSelect(item)}
    >
      <View style={styles.bundeslandInfo}>
        <Text style={styles.bundeslandFlag}>{item.flag}</Text>
        <View style={styles.bundeslandTextInfo}>
          <Text style={[
            styles.bundeslandName,
            selectedBundesland?.id === item.id && styles.selectedBundeslandName
          ]}>
            {item.name}
          </Text>
          <Text style={styles.bundeslandQuestions}>
            {questions.filter(q => q.federalState === item.id).length} Questions
          </Text>
        </View>
      </View>
      {selectedBundesland?.id === item.id && (
        <Feather name="check" size={20} color={colors.primary} />
      )}
    </TouchableOpacity>
  );

  const renderCategoryCard = (category: any) => (
    <TouchableOpacity 
      key={category.id}
      style={[styles.categoryCard, { borderColor: `${category.color}30` }]}
      onPress={() => handleCategoryPress(category)}
    >
      <View style={[styles.categoryIcon, { backgroundColor: `${category.color}15` }]}>
        <Feather name={category.icon} size={20} color={category.color} />
      </View>
      <View style={styles.categoryContent}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
        <Text style={[styles.categoryCount, { color: category.color }]}>
          {getCategoryCount(category.filter)} questions
        </Text>
      </View>
      <Feather name="chevron-right" size={20} color={colors.text.secondary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leben in Deutschland</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => {
            // For now, just log since LanguageSelection screen doesn't exist
            console.log('Language selection pressed - screen not implemented');
          }}>
            <Feather name="globe" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="activity" size={20} color={colors.primary} />
              <Text style={styles.cardTitle}>Test Readiness</Text>
            </View>
            <Text style={[
              styles.progressPercentage,
              { color: getReadinessLevel(stats.progress) }
            ]}>
              {stats.progress}%
            </Text>
          </View>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${stats.progress}%`,
                  backgroundColor: getReadinessLevel(stats.progress)
                }
              ]}
            />
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={[
                styles.statNumber,
                { color: colors.primary }
              ]}>
                {stats.mastered}
              </Text>
              <Text style={styles.statLabel}>Mastered</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[
                styles.statNumber,
                { color: colors.primary }
              ]}>
                {stats.remaining}
              </Text>
              <Text style={styles.statLabel}>Remaining</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[
                styles.statNumber,
                { color: colors.primary }
              ]}>
                {stats.starred}
              </Text>
              <Text style={styles.statLabel}>Starred</Text>
            </View>
          </View>

          <View style={[
            styles.readinessMessage,
            { backgroundColor: `${readinessInfo.color}10` }
          ]}>
            <Feather
              name={readinessInfo.icon as any}
              size={16}
              color={readinessInfo.color}
            />
            <Text style={[styles.readinessText, { color: readinessInfo.color }]}>
              {readinessInfo.message}
            </Text>
          </View>
        </View>

        {/* Practice Mode Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Feather name="book" size={20} color={colors.primary} />
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

        {/* Bundesländer Selection Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="map" size={20} color={colors.primary} />
              <Text style={styles.cardTitle}>Bundesland Questions</Text>
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            Practice questions specific to your Bundesland
          </Text>

          <TouchableOpacity
            style={styles.bundeslandSelector}
            onPress={() => setShowBundeslandModal(true)}
          >
            <View style={styles.bundeslandSelectorContent}>
              <Feather name="map-pin" size={18} color={colors.primary} />
              <Text style={styles.bundeslandSelectorText}>
                {selectedBundesland ? selectedBundesland.name : 'Select Bundesland'}
              </Text>
            </View>
            <Feather name="chevron-down" size={20} color={colors.text.secondary} />
          </TouchableOpacity>

          {selectedBundesland && (
            <View style={styles.selectedBundeslandInfo}>
              <View style={styles.bundeslandStatsContainer}>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>
                    {questions.filter(q => q.federalState === selectedBundesland.id).length}
                  </Text>
                  <Text style={styles.statLabel}>Total</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>{bundeslandCompleted}</Text>
                  <Text style={styles.statLabel}>Completed</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>
                    {questions.filter(q => q.federalState === selectedBundesland.id).length - bundeslandCompleted}
                  </Text>
                  <Text style={styles.statLabel}>Remaining</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => {
                  if (selectedBundesland) {
                    navigation.navigate('PracticeMode', { bundesland: selectedBundesland.id });
                  }
                }}
              >
                <Text style={styles.buttonText}>
                  Practice {selectedBundesland.name} Questions
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Test Simulation Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            {/* <Feather name="clock" size={24} color={colors.primary} /> */}
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

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('BookmarkedQuestions')}
          >
            <Feather name="star" size={24} color={colors.primary} />
            <Text style={styles.quickActionTitle}>Saved Questions</Text>
            <Text style={styles.quickActionSubtitle}>Review starred items</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionCard}
            onPress={() => navigation.navigate('HistoricalDates')}
          >
            <Feather name="calendar" size={24} color={colors.primary} />
            <Text style={styles.quickActionTitle}>Historic Dates</Text>
            <Text style={styles.quickActionSubtitle}>Important dates</Text>
          </TouchableOpacity>
        </View>

        {/* Study Categories Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="grid" size={20} color={colors.primary} />
              <Text style={styles.cardTitle}>Study by Category</Text>
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            Focus your study on specific topics
          </Text>
          
          <View style={styles.categoriesContainer}>
            {categories.map(renderCategoryCard)}
          </View>
        </View>
      </ScrollView>

      {/* Bundesland Selection Modal */}
      <Modal
        visible={showBundeslandModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowBundeslandModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Bundesland</Text>
              <TouchableOpacity onPress={() => setShowBundeslandModal(false)}>
                <Feather name="x" size={24} color={colors.text.primary} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={germanStates}
              keyExtractor={(item) => item.id}
              renderItem={renderBundeslandItem}
              showsVerticalScrollIndicator={false}
              style={styles.bundeslandList}
            />
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
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
    justifyContent: 'space-between',
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
    // textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
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
    borderColor: colors.primary,
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
  readinessMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF5F5',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  readinessText: {
    fontSize: 14,
    flex: 1,
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
  // Category styles
  categoriesContainer: {
    gap: 12,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderWidth: 1,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 2,
  },
  categorySubtitle: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 11,
    fontWeight: '500',
  },
  // premiumIcon: {
  //   marginLeft: 6,
  // },
  // Bundesland-specific styles
  bundeslandSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  bundeslandSelectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bundeslandSelectorText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '500',
  },
  selectedBundeslandInfo: {
    marginTop: 16,
    padding: 16,
    backgroundColor: `${colors.primary}08`,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${colors.primary}20`,
  },
  bundeslandStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
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
  bundeslandList: {
    maxHeight: 400,
  },
  bundeslandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#F8F9FA',
  },
  selectedBundeslandItem: {
    backgroundColor: `${colors.primary}15`,
    borderWidth: 1,
    borderColor: `${colors.primary}30`,
  },
  bundeslandInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bundeslandFlag: {
    fontSize: 20,
    marginRight: 12,
  },
  bundeslandTextInfo: {
    flex: 1,
  },
  bundeslandName: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 2,
  },
  selectedBundeslandName: {
    color: colors.primary,
  },
  bundeslandQuestions: {
    fontSize: 12,
    color: colors.text.secondary,
  },
});

export default HomeScreen;