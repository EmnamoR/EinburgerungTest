// src/screens/PracticeModeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal, ScrollView, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import { useLanguage } from '../context/LanguageContext';
import { useBookmarks } from '../context/BookmarkContext';
import { questions as originalQuestions } from '../data/questions';
import { RootStackParamList } from '../types/navigation';
import { useProgress } from '../context/ProgressContext';
import { getStateById } from '../constants/States';

const LAST_QUESTION_INDEX_KEY = 'lastQuestionIndex';

type PracticeModeRouteProp = RouteProp<RootStackParamList, 'PracticeMode'>;

// Language options including OFF option
const languages = [
  { code: 'off', name: 'OFF' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'uk', name: 'Українська' },
  { code: 'ru', name: 'Русский' },
  { code: 'pl', name: 'Polski' },
  { code: 'fa', name: 'فارسی' },
];

// Category definitions (same as HomeScreen)
const categories = [
  {
    id: 'politics',
    title: 'Politics & Government',
    filter: (q: any) => q.category === 'politics'
  },
  {
    id: 'history',
    title: 'German History',
    filter: (q: any) => q.category === 'history'
  },
  {
    id: 'society',
    title: 'Society & Culture',
    filter: (q: any) => q.category === 'society' || q.category === 'culture'
  },
  {
    id: 'holocaust',
    title: 'Holocaust & WWII',
    filter: (q: any) => q.category === 'holocaust' ||
      (q.category === 'history' &&
        (q.question?.de?.toLowerCase().includes('holocaust') ||
          q.question?.de?.toLowerCase().includes('nationalsozial') ||
          q.question?.de?.toLowerCase().includes('hitler') ||
          q.question?.de?.toLowerCase().includes('judenverfolgung')))
  }
];

// Image handling component
const QuestionImage = ({ source }: { source: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <View style={styles.imageContainer}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.accent} />
        </View>
      )}
      <Image
        source={source}
        style={styles.questionImage}
        resizeMode="contain"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
      {hasError && (
        <View style={styles.errorContainer}>
          <Feather name="alert-circle" size={24} color={colors.text.secondary} />
          <Text style={styles.errorText}>Failed to load image</Text>
        </View>
      )}
    </View>
  );
};

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const PracticeModeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<PracticeModeRouteProp>();
  const { selectedLanguage, setLanguage } = useLanguage();
  const { bookmarkedQuestions, toggleBookmark, isBookmarked } = useBookmarks();
  const { updateQuestionProgress, clearAllProgress } = useProgress();

  // Get parameters from route
  const bundeslandId = route.params?.bundesland;
  const categoryId = route.params?.category;
  const questionId = route.params?.questionId;

  // Get selected state info
  const selectedState = bundeslandId ? getStateById(bundeslandId) : null;

  // States
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, number>>({});

  // Remove duplicate questions
  const getUniqueQuestions = (questions: any[]) => {
    const seen = new Set();
    return questions.filter(q => {
      if (seen.has(q.id)) {
        console.log(`Removing duplicate question ID: ${q.id}`);
        return false;
      }
      seen.add(q.id);
      return true;
    });
  };

  // Filter questions based on parameters
  const getFilteredQuestions = () => {
    // First, remove duplicates
    const uniqueQuestions = getUniqueQuestions(originalQuestions);
    console.log(`Cleaned ${originalQuestions.length} questions down to ${uniqueQuestions.length} unique`);

    let filteredQuestions = uniqueQuestions;

    // Filter by category if specified
    if (categoryId) {
      console.log(`Filtering questions for category: ${categoryId}`);
      const categoryDef = categories.find(c => c.id === categoryId);
      if (categoryDef) {
        filteredQuestions = filteredQuestions.filter(categoryDef.filter);
        console.log(`Found ${filteredQuestions.length} questions for category ${categoryId}`);
      }
    }
    // Filter by Bundesland if specified
    else if (bundeslandId) {
      // Show only questions for the selected Bundesland
      console.log(`Filtering questions for bundesland: ${bundeslandId}`);
      filteredQuestions = filteredQuestions.filter(q => q.federalState === bundeslandId);
      console.log(`Found ${filteredQuestions.length} questions for ${bundeslandId}`);
    }
    // Show only general questions (no federalState) for main practice
    else {
      console.log('Filtering general questions (no federalState)');
      filteredQuestions = filteredQuestions.filter(q => !q.federalState);
      console.log(`Found ${filteredQuestions.length} general questions`);
    }

    return filteredQuestions;
  };

  useEffect(() => {
    const filteredQuestions = getFilteredQuestions();
    setQuestions(filteredQuestions);
  }, [bundeslandId, categoryId]);

  useEffect(() => {
    loadAnsweredQuestions();
  }, [bundeslandId, categoryId]);

  useEffect(() => {
    saveAnsweredQuestions();
  }, [answeredQuestions]);

  // Update questions when parameters change
  useEffect(() => {
    const filteredQuestions = getFilteredQuestions();
    setQuestions(filteredQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    // Reset answered questions for new filter
    setAnsweredQuestions({});
  }, [bundeslandId, categoryId]);

  useEffect(() => {
    if (questionId && questions.length > 0) {
      const index = questions.findIndex(q => q.id === questionId);
      if (index !== -1) {
        setCurrentQuestionIndex(index);
      }
    }
  }, [questionId, questions]);

  const loadAnsweredQuestions = async () => {
    try {
      // Use different storage key for each mode
      let storageKey = 'answeredQuestions';
      if (bundeslandId) {
        storageKey = `answeredQuestions_${bundeslandId}`;
      } else if (categoryId) {
        storageKey = `answeredQuestions_${categoryId}`;
      }

      const savedAnswers = await AsyncStorage.getItem(storageKey);
      if (savedAnswers) {
        setAnsweredQuestions(JSON.parse(savedAnswers));
      } else {
        setAnsweredQuestions({});
      }
    } catch (error) {
      console.log('Error loading answered questions:', error);
      setAnsweredQuestions({});
    }
  };

  const saveAnsweredQuestions = async () => {
    try {
      let storageKey = 'answeredQuestions';
      if (bundeslandId) {
        storageKey = `answeredQuestions_${bundeslandId}`;
      } else if (categoryId) {
        storageKey = `answeredQuestions_${categoryId}`;
      }

      await AsyncStorage.setItem(storageKey, JSON.stringify(answeredQuestions));
    } catch (error) {
      console.log('Error saving answered questions:', error);
    }
  };

  const getHeaderTitle = () => {
    if (categoryId) {
      const categoryDef = categories.find(c => c.id === categoryId);
      return categoryDef ? `${categoryDef.title} (${questions.length})` : `Category (${questions.length})`;
    }
    if (selectedState) {
      return `${selectedState.name} (${questions.length})`;
    }
    return 'Practice Mode';
  };

  // Handle case when no questions are available
  if (questions.length === 0) {
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
          <Text style={styles.headerTitle}>
            {getHeaderTitle()}
          </Text>
          <View style={styles.headerRight} />
        </View>
        <View style={styles.emptyContainer}>
          <Feather name="alert-circle" size={48} color={colors.text.secondary} />
          <Text style={styles.emptyTitle}>No Questions Available</Text>
          <Text style={styles.emptySubtitle}>
            {selectedState
              ? `No questions found for ${selectedState.name}. This Bundesland may not have specific questions yet.`
              : categoryId
                ? 'No questions found for this category.'
                : 'No questions available for practice'}
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const panGesture = Gesture.Pan()
    .onEnd((e) => {
      if (e.velocityX > 0 && currentQuestionIndex > 0) {
        handleQuestionChange(currentQuestionIndex - 1);
      } else if (e.velocityX < 0 && currentQuestionIndex < questions.length - 1) {
        handleQuestionChange(currentQuestionIndex + 1);
      }
    })
    .activeOffsetX([-20, 20]);

  const handleQuestionChange = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const getTranslatedText = (text: any) => {
    if (!text || !selectedLanguage || selectedLanguage === 'off') return '';
    return text[selectedLanguage] || text.en || text.de;
  };

  const handleAnswerSelect = async (answerId: number) => {
    const isCorrect = currentQuestion.correctAnswer === answerId;

    try {
      // Only update main progress context for general questions (no federalState and no category)
      if (!answeredQuestions[currentQuestion.id] && !bundeslandId && !categoryId) {
        // This is a general question, update main progress
        await updateQuestionProgress(currentQuestion.id, isCorrect);
      }

      // Update local state
      setSelectedAnswer(answerId);
      setAnsweredQuestions(prev => ({
        ...prev,
        [currentQuestion.id]: answerId
      }));

      // Save to AsyncStorage with appropriate key
      const updatedAnswers = {
        ...answeredQuestions,
        [currentQuestion.id]: answerId,
      };

      let storageKey = 'answeredQuestions';
      if (bundeslandId) {
        storageKey = `answeredQuestions_${bundeslandId}`;
      } else if (categoryId) {
        storageKey = `answeredQuestions_${categoryId}`;
      }

      await AsyncStorage.setItem(storageKey, JSON.stringify(updatedAnswers));
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const getReadinessLevel = (isCorrect: boolean) => {
    return isCorrect ? colors.success : colors.error;
  };

  const renderAnswerButton = (answer: any) => {
    const isSelected = answeredQuestions[currentQuestion.id] === answer.id;
    const isCorrectAnswer = answer.id === currentQuestion.correctAnswer;
    const hasAnswered = answeredQuestions[currentQuestion.id] !== undefined;

    // Determine styling based on state
    let buttonStyle = [styles.answerButton];
    let iconName = null;
    let iconColor = null;

    if (hasAnswered) {
      if (isSelected) {
        // User selected this answer
        if (isCorrectAnswer) {
          // Selected and correct - green
          buttonStyle.push(styles.correctAnswer);
          iconName = "check-circle";
          iconColor = colors.success;
        } else {
          // Selected but wrong - red
          buttonStyle.push(styles.wrongAnswer);
          iconName = "x-circle";
          iconColor = colors.error;
        }
      } else if (isCorrectAnswer) {
        // Not selected but this is the correct answer - show in green
        buttonStyle.push(styles.correctAnswer);
        iconName = "check-circle";
        iconColor = colors.success;
      }
    }

    return (
      <TouchableOpacity
        key={answer.id}
        style={buttonStyle}
        onPress={() => handleAnswerSelect(answer.id)}
        disabled={hasAnswered}
      >
        <View style={styles.answerContent}>
          <Text style={[
            styles.answerText,
            (isSelected || (hasAnswered && isCorrectAnswer)) && styles.selectedAnswerText
          ]}>
            {answer.text.de}
          </Text>
          {selectedLanguage !== 'off' && (
            <Text style={styles.translationText}>
              {getTranslatedText(answer.text)}
            </Text>
          )}
        </View>
        {iconName && (
          <Feather name={iconName} size={20} color={iconColor} />
        )}
      </TouchableOpacity>
    );
  };

  const handleBookmarkToggle = () => {
    toggleBookmark(currentQuestion.id);
  };

  const handleResetProgress = async () => {
    try {
      // Clear local state
      setAnsweredQuestions({});
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);

      // Clear the local storage for this specific practice session
      let storageKey = 'answeredQuestions';
      if (bundeslandId) {
        storageKey = `answeredQuestions_${bundeslandId}`;
      } else if (categoryId) {
        storageKey = `answeredQuestions_${categoryId}`;
      }

      await AsyncStorage.removeItem(storageKey);

      // If this is general practice (no bundesland and no category), also clear main progress
      if (!bundeslandId && !categoryId) {
        await clearAllProgress();
      }

      console.log('Progress reset successfully');
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  };

  const handleShuffleQuestions = () => {
    const shuffledQuestions = shuffleArray(getFilteredQuestions());
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setAnsweredQuestions({});
    setSelectedAnswer(null);

    // Clear storage for this mode
    let storageKey = 'answeredQuestions';
    if (bundeslandId) {
      storageKey = `answeredQuestions_${bundeslandId}`;
    } else if (categoryId) {
      storageKey = `answeredQuestions_${categoryId}`;
    }

    AsyncStorage.removeItem(storageKey);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={24} color={colors.text.primary} />
            <Text style={styles.backText}>Home</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {getHeaderTitle()}
          </Text>
          <View style={styles.headerRight} />
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} / {questions.length}
          </Text>
        </View>

        {/* Language Selector - Now includes OFF option */}
        <View style={styles.languageSelectorContainer}>
          <TouchableOpacity
            style={styles.languageSelector}
            onPress={() => setShowLanguageModal(true)}
          >
            <Text style={styles.translationLabel}>Translation:</Text>
            <Text style={styles.languageText}>
              {selectedLanguage === 'off' ? 'OFF' : selectedLanguage?.toUpperCase() || 'EN'}
            </Text>
            <Feather name="chevron-down" size={16} color={colors.accent} />
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <GestureDetector gesture={panGesture}>
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.questionCard}>
                <View style={styles.questionHeader}>
                  <View style={styles.questionHeaderButtons}>
                    <TouchableOpacity
                      onPress={handleBookmarkToggle}
                      style={styles.headerButton}
                    >
                      <Feather
                        name={currentQuestion && isBookmarked(currentQuestion.id) ? "bookmark" : "bookmark"}
                        size={24}
                        color={currentQuestion && isBookmarked(currentQuestion.id) ? colors.accent : colors.text.secondary}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleResetProgress}
                      style={styles.headerButton}
                    >
                      <Feather name="refresh-cw" size={20} color={colors.accent} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleShuffleQuestions}
                      style={styles.headerButton}
                    >
                      <Feather name="shuffle" size={20} color={colors.accent} />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.questionText}>
                  {currentQuestion.question.de}
                </Text>

                {selectedLanguage !== 'off' && (
                  <Text style={styles.translationText}>
                    {getTranslatedText(currentQuestion.question)}
                  </Text>
                )}

                {/* Image if exists */}
                {currentQuestion.image && (
                  <QuestionImage
                    source={
                      typeof currentQuestion.image === 'string'
                        ? { uri: currentQuestion.image }
                        : currentQuestion.image
                    }
                  />
                )}

                <View style={styles.answersContainer}>
                  {currentQuestion.answers.map(renderAnswerButton)}
                </View>

                {answeredQuestions[currentQuestion.id] !== undefined && (
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      if (currentQuestionIndex === questions.length - 1) {
                        // On last question, go to previous if
                        if (currentQuestionIndex > 0) {
                          setCurrentQuestionIndex(prevIndex => prevIndex - 1);
                          setSelectedAnswer(null);
                        }
                      } else {
                        // On any other question, go to next
                        handleNextQuestion();
                      }
                    }}
                  >
                    <Text style={styles.nextButtonText}>
                      {currentQuestionIndex === questions.length - 1 ? 'Previous Question' : 'Next Question'}
                    </Text>
                    <Feather
                      name={currentQuestionIndex === questions.length - 1 ? "chevron-left" : "chevron-right"}
                      size={20}
                      color="white"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </GestureDetector>
        </View>

        {/* Pagination */}
        <View style={styles.paginationWrapper}>
          <View style={styles.paginationContainer}>
            <TouchableOpacity
              style={styles.paginationArrow}
              onPress={() => handleQuestionChange(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
            >
              <Feather
                name="chevron-left"
                size={24}
                color={currentQuestionIndex === 0 ? colors.text.secondary : colors.accent}
              />
            </TouchableOpacity>
            <Text style={styles.paginationText}>
              {currentQuestionIndex + 1} of {questions.length}
            </Text>
            <TouchableOpacity
              style={styles.paginationArrow}
              onPress={() => handleQuestionChange(Math.min(questions.length - 1, currentQuestionIndex + 1))}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              <Feather
                name="chevron-right"
                size={24}
                color={currentQuestionIndex === questions.length - 1 ? colors.text.secondary : colors.accent}
              />
            </TouchableOpacity>
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
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
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
    textAlign: 'center',
    flex: 1,
  },
  headerRight: {
    width: 60,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    marginRight: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  languageSelectorContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  translationLabel: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  languageText: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  questionHeaderButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 12,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
    lineHeight: 26,
  },
  translationText: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 20,
    lineHeight: 20,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    zIndex: 1,
  },
  questionImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  errorText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.text.secondary,
  },
  answersContainer: {
    gap: 12,
  },
  answerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  selectedAnswer: {
    borderColor: colors.accent,
    backgroundColor: `${colors.accent}05`,
  },
  correctAnswer: {
    borderColor: colors.success,
    backgroundColor: `${colors.success}10`,
  },
  wrongAnswer: {
    borderColor: colors.error,
    backgroundColor: `${colors.error}10`,
  },
  answerContent: {
    flex: 1,
  },
  answerText: {
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 4,
  },
  selectedAnswerText: {
    fontWeight: '500',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    gap: 8,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  paginationWrapper: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  paginationArrow: {
    padding: 8,
  },
  paginationText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '500',
  },
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
    marginBottom: 18,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  languageOption: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: '#F8F9FA',
  },
  selectedLanguageOption: {
    backgroundColor: `${colors.accent}15`,
  },
  languageOptionText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  selectedLanguageOptionText: {
    color: colors.accent,
    fontWeight: '500',
  },
  // Empty state styles
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default PracticeModeScreen;