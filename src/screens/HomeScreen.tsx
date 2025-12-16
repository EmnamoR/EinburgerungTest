// src/screens/HomeScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList, Animated } from 'react-native';
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
  const { getMasteredCount, getIncorrectCount, getRemainingCount, getProgress, reloadProgress } = useProgress();

  const [selectedBundesland, setSelectedBundesland] = useState<GermanState | null>(null);
  const [showBundeslandModal, setShowBundeslandModal] = useState(false);
  const [bundeslandCompleted, setBundeslandCompleted] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  const [stats, setStats] = useState({
    mastered: 0,
    incorrect: 0,
    remaining: 300,
    starred: bookmarkedQuestions.length || 0,
    progress: 0,
  });

  // Pulse animation for readiness icon
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.05, duration: 1200, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1.0, duration: 1200, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse]);

  // Load premium status
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

  // Reload premium status when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadPremiumStatus();
    }, [])
  );

  // Category definitions
  const categories = [
    {
      id: 'politics',
      title: 'Politics & Government',
      subtitle: 'Political system, democracy, elections',
      icon: 'users',
      color: colors.primary,
      isPremium: true,
      filter: (q: any) => q.category === 'politics'
    },
    {
      id: 'history',
      title: 'German History',
      subtitle: 'Important historical events and periods',
      icon: 'book-open',
      color: '#8B5A2B',
      isPremium: true,
      filter: (q: any) => q.category === 'history'
    },
    {
      id: 'society',
      title: 'Society & Culture',
      subtitle: 'Social norms, culture, daily life',
      icon: 'home',
      color: '#2E7D32',
      isPremium: true,
      filter: (q: any) => q.category === 'society' || q.category === 'culture'
    },
    {
      id: 'holocaust',
      title: 'Holocaust & WWII',
      subtitle: 'Historical remembrance and education',
      icon: 'clock',
      color: '#5D4037',
      isPremium: true,
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
      incorrect: getIncorrectCount(),
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
          incorrect: getIncorrectCount(),
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
    }, [getMasteredCount, getIncorrectCount, getRemainingCount, getProgress, reloadProgress, bookmarkedQuestions.length, selectedBundesland])
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

  const showPremiumModal = () => {
    // Navigate to premium upgrade screen
    navigation.navigate('PremiumScreen');
  };

  const handleCategoryPress = (category: any) => {
    if (category.isPremium && !isPremium) {
      showPremiumModal();
      return;
    }
    navigation.navigate('PracticeMode', { category: category.id });
  };

  const handleBundeslandPractice = () => {
    if (!isPremium) {
      showPremiumModal();
      return;
    }
    if (selectedBundesland) {
      navigation.navigate('PracticeMode', { bundesland: selectedBundesland.id });
    }
  };

  const handleTestSimulation = () => {
    if (!isPremium) {
      showPremiumModal();
      return;
    }
    navigation.navigate('TestSimulation');
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
      style={[
        styles.categoryCard, 
        { borderColor: `${category.color}30` },
        category.isPremium && !isPremium && styles.premiumDisabled
      ]}
      onPress={() => handleCategoryPress(category)}
    >
      <View style={[styles.categoryIcon, { backgroundColor: `${category.color}15` }]}>
        <Feather name={category.icon} size={20} color={category.color} />
      </View>
      <View style={styles.categoryContent}>
        <View style={styles.categoryTitleRow}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          {category.isPremium && (
            <Feather 
              name={isPremium ? "star" : "lock"} 
              size={14} 
              color={isPremium ? "#FFD700" : "#999"} 
            />
          )}
        </View>
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
        <Text style={styles.headerTitle}>🇩🇪 Leben in Deutschland</Text>
        <View style={styles.headerActions}>
          {/* {!isPremium && (
            <TouchableOpacity onPress={showPremiumModal} style={styles.premiumButton}>
              <Feather name="star" size={20} color="#FFD700" />
              <Text style={styles.premiumButtonText}>Premium</Text>
            </TouchableOpacity>
          )} */}
          <TouchableOpacity onPress={() => {
            console.log('Language selection pressed - screen not implemented');
          }}>
            <Feather name="globe" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* German Flag Ribbon */}
      <View style={styles.ribbonContainer}>
        <View style={styles.ribbonStripeBlack} />
        <View style={styles.ribbonStripeRed} />
        <View style={styles.ribbonStripeGold} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Brandenburg Gate Header */}
        <View style={styles.brandenburgContainer}>
          <Text style={styles.brandenburgGate}>🏛️</Text>
          <Text style={styles.brandenburgText}>German Citizenship Test Preparation</Text>
        </View>

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
                { color: colors.success }
              ]}>
                {stats.mastered}
              </Text>
              <Text style={styles.statLabel}>Mastered</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[
                styles.statNumber,
                { color: colors.warning }
              ]}>
                {stats.incorrect}
              </Text>
              <Text style={styles.statLabel}>Incorrect</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[
                styles.statNumber,
                { color: colors.text.secondary }
              ]}>
                {stats.remaining}
              </Text>
              <Text style={styles.statLabel}>Remaining</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[
                styles.statNumber,
                { color: colors.accent }
              ]}>
                {stats.starred}
              </Text>
              <Text style={styles.statLabel}>Starred</Text>
            </View>
          </View>

          <View style={styles.readinessMessage}>
            <Animated.View style={{ transform: [{ scale: pulse }] }}>
              <Feather
                name={readinessInfo.icon as any}
                size={16}
                color={readinessInfo.color}
              />
            </Animated.View>
            <Text style={[styles.readinessText, { color: readinessInfo.color }]}>
              {readinessInfo.message}
            </Text>
          </View>
        </View>

        {/* Practice Mode Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="book" size={20} color={colors.primary} />
              <Text style={styles.cardTitle}>Practice Mode</Text>
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            Study all {questions.length} questions at your own pace
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
              <Feather 
                name={isPremium ? "star" : "lock"} 
                size={16} 
                color={isPremium ? "#FFD700" : "#999"} 
                style={styles.premiumIcon} 
              />
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            Practice questions specific to your Bundesland
          </Text>

          <TouchableOpacity
            style={[
              styles.bundeslandSelector,
              !isPremium && styles.premiumDisabled
            ]}
            onPress={() => isPremium ? setShowBundeslandModal(true) : showPremiumModal()}
          >
            <View style={styles.bundeslandSelectorContent}>
              <Feather name="map-pin" size={18} color={colors.primary} />
              <Text style={styles.bundeslandSelectorText}>
                {selectedBundesland ? selectedBundesland.name : 'Select Bundesland'}
              </Text>
            </View>
            <Feather name="chevron-down" size={20} color={colors.text.secondary} />
          </TouchableOpacity>

          {selectedBundesland && isPremium && (
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
                onPress={handleBundeslandPractice}
              >
                <Text style={styles.buttonText}>
                  Practice {selectedBundesland.name} Questions
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {!isPremium && (
            <View style={styles.premiumPrompt}>
              <Text style={styles.premiumPromptText}>
                Unlock Bundesland-specific questions with Premium
              </Text>
            </View>
          )}
        </View>

        {/* Test Simulation Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="clock" size={24} color={colors.primary} />
              <Text style={styles.cardTitle}>Simulate Test</Text>
              <Feather 
                name={isPremium ? "star" : "lock"} 
                size={16} 
                color={isPremium ? "#FFD700" : "#999"} 
                style={styles.premiumIcon} 
              />
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            33 questions • 60 minutes • 17 correct to pass
          </Text>
          <TouchableOpacity
            style={[
              styles.primaryButton,
              !isPremium && styles.premiumDisabled
            ]}
            onPress={handleTestSimulation}
          >
            <Text style={styles.buttonText}>Start Test Simulation</Text>
          </TouchableOpacity>
          
          {!isPremium && (
            <View style={styles.premiumPrompt}>
              <Text style={styles.premiumPromptText}>
                Premium feature - Simulate real test conditions
              </Text>
            </View>
          )}
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
              <Feather 
                name={isPremium ? "star" : "lock"} 
                size={16} 
                color={isPremium ? "#FFD700" : "#999"} 
                style={styles.premiumIcon} 
              />
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            Focus your study on specific topics
          </Text>
          
          <View style={styles.categoriesContainer}>
            {categories.map(renderCategoryCard)}
          </View>

          {!isPremium && (
            <View style={styles.premiumPrompt}>
              <Text style={styles.premiumPromptText}>
                Unlock category-based study with Premium
              </Text>
            </View>
          )}
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
    letterSpacing: 0.2,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  premiumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  premiumButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F57C00',
  },
  ribbonContainer: {
    height: 9,
    width: '100%',
    flexDirection: 'column',
  },
  ribbonStripeBlack: { 
    flex: 1, 
    backgroundColor: '#000000' 
  },
  ribbonStripeRed: { 
    flex: 1, 
    backgroundColor: '#DD0000' 
  },
  ribbonStripeGold: { 
    flex: 1, 
    backgroundColor: '#FFCE00' 
  },
  brandenburgContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  brandenburgGate: {
    fontSize: 32,
    marginBottom: 8,
  },
  brandenburgText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  premiumBadgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  premiumBadgeHeaderText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#F57C00',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
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
    flex: 1,
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
    height: 6,
    backgroundColor: '#ECEFF4',
    borderRadius: 3,
    marginVertical: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
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
    padding: 8,
    marginHorizontal: 2,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 9,
    color: colors.text.secondary,
    textAlign: 'center',
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
    backgroundColor: '#F7FFF8',
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
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
    backgroundColor: '#F7F9FC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6EAF0',
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
  categoryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    flex: 1,
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
  premiumIcon: {
    marginLeft: 6,
  },
  premiumDisabled: {
    opacity: 0.6,
  },
  premiumPrompt: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#FFF8E1',
    borderRadius: 8,
    alignItems: 'center',
  },
  premiumPromptText: {
    fontSize: 12,
    color: '#F57C00',
    textAlign: 'center',
    fontWeight: '500',
  },
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
    backgroundColor: `${colors.primary}0D`,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${colors.primary}26`,
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