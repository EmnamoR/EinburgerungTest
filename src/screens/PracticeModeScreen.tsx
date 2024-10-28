// src/screens/PracticeModeScreen.tsx
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  Modal,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import { useLanguage } from '../context/LanguageContext';
import { useBookmarks } from '../context/BookmarkContext';
import { questions } from '../data/questions';
import { RootStackParamList } from '../types/navigation';

type PracticeModeRouteProp = RouteProp<RootStackParamList, 'PracticeMode'>;


// Language options
const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'uk', name: 'Українська' },
  { code: 'ru', name: 'Русский' },
  { code: 'pl', name: 'Polski' },
  { code: 'fa', name: 'فارسی' },
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

const PracticeModeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<PracticeModeRouteProp>();
  const { selectedLanguage, setLanguage } = useLanguage();
  const { bookmarkedQuestions, toggleBookmark, isBookmarked } = useBookmarks();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, number>>({});


  useEffect(() => {
    loadAnsweredQuestions();
  }, []);

  useEffect(() => {
    saveAnsweredQuestions();
  }, [answeredQuestions]);
  useEffect(() => {
    const questionId = route.params?.questionId;
    if (questionId) {
      const index = questions.findIndex(q => q.id === questionId);
      if (index !== -1) {
        setCurrentQuestionIndex(index);
      }
    }
  }, [route.params?.questionId]);

  const loadAnsweredQuestions = async () => {
    try {
      const savedAnswers = await AsyncStorage.getItem('answeredQuestions');
      if (savedAnswers) {
        setAnsweredQuestions(JSON.parse(savedAnswers));
      }
    } catch (error) {
      console.log('Error loading answered questions:', error);
    }
  };

  const saveAnsweredQuestions = async () => {
    try {
      await AsyncStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
    } catch (error) {
      console.log('Error saving answered questions:', error);
    }
  };

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
    if (!text || !selectedLanguage) return '';
    return text[selectedLanguage] || text.en || text.de;
  };

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswer(answerId);
    setAnsweredQuestions(prevState => ({
      ...prevState,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleBookmarkToggle = () => {
    const currentQuestion = questions[currentQuestionIndex];
    toggleBookmark(currentQuestion.id);
  };

  const isAnswerCorrect = (answerId: number) => {
    return answerId === currentQuestion.correctAnswer;
  };

  const handleResetProgress = () => {
    setAnsweredQuestions({});
    setSelectedAnswer(null);
    setShowAnswer(false);
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
          <Text style={styles.headerTitle}>Practice Mode</Text>
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

        {/* Language Selector */}
        <TouchableOpacity 
          style={styles.languageSelector}
          onPress={() => setShowLanguageModal(true)}
        >
          <Feather name="globe" size={20} color={colors.accent} />
          <Text style={styles.languageText}>
            {selectedLanguage?.toUpperCase() || 'EN'}
          </Text>
        </TouchableOpacity>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <GestureDetector gesture={panGesture}>
            <ScrollView 
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.questionCard}>
                <TouchableOpacity 
                  onPress={handleBookmarkToggle} 
                  style={styles.bookmarkContainer}
                >
                  <Ionicons 
                    name={currentQuestion && isBookmarked(currentQuestion.id) ? "bookmark" : "bookmark-outline"}
                    size={24} 
                    color={colors.accent} 
                  />
                </TouchableOpacity>
                <Text style={styles.questionText}>
                  {currentQuestion.question.de}
                </Text>

                
                <Text style={styles.translationText}>
                  {getTranslatedText(currentQuestion.question)}
                </Text>

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
                  {currentQuestion.answers.map((answer) => (
                    <TouchableOpacity
                      key={answer.id}
                      style={[
                        styles.answerButton,
                        answeredQuestions[currentQuestion.id] === answer.id && styles.selectedAnswer,
                        answeredQuestions[currentQuestion.id] === answer.id && isAnswerCorrect(answer.id) && styles.correctAnswer,
                        answeredQuestions[currentQuestion.id] === answer.id && !isAnswerCorrect(answer.id) && styles.wrongAnswer,
                      ]}
                      onPress={() => handleAnswerSelect(answer.id)}
                      disabled={answeredQuestions[currentQuestion.id] !== undefined}
                    >
                      <Text style={[
                        styles.answerText,
                        answeredQuestions[currentQuestion.id] === answer.id && styles.selectedAnswerText,
                      ]}>
                        {answer.text.de}
                      </Text>
                      <Text style={styles.answerTranslation}>
                        {getTranslatedText(answer.text)}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {answeredQuestions[currentQuestion.id] !== undefined && (
                  <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={handleNextQuestion}
                  >
                    <Text style={styles.nextButtonText}>Next Question</Text>
                    <Feather name="chevron-right" size={20} color="white" />
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
            
            <View style={styles.paginationNumbers}>
              {Array.from({ length: 5 }, (_, i) => {
                const pageNum = currentQuestionIndex - 2 + i;
                if (pageNum < 0 || pageNum >= questions.length) return null;
                return (
                  <TouchableOpacity
                    key={pageNum}
                    style={[
                      styles.paginationButton,
                      currentQuestionIndex === pageNum && styles.paginationButtonActive
                    ]}
                    onPress={() => handleQuestionChange(pageNum)}
                  >
                    <Text style={[
                      styles.paginationButtonText,
                      currentQuestionIndex === pageNum && styles.paginationButtonTextActive
                    ]}>
                      {pageNum + 1}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

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
          <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1} 
            onPress={() => setShowLanguageModal(false)}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Language</Text>
                <TouchableOpacity onPress={() => setShowLanguageModal(false)}>
                  <Feather name="x" size={24} color={colors.text.primary} />
                </TouchableOpacity>
              </View>
              {languages.map((lang) => (
                <TouchableOpacity
                  key={lang.code}
                  style={[
                    styles.languageOption,
                    selectedLanguage === lang.code && styles.selectedLanguageOption
                  ]}
                  onPress={() => {
                    setLanguage(lang.code as any);
                    setShowLanguageModal(false);
                  }}
                >
                  <Text style={[
                    styles.languageOptionText,
                    selectedLanguage === lang.code && styles.selectedLanguageOptionText
                  ]}>
                    {lang.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F1EA',
    },
    bookmarkContainer: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 1,
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
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
    },
    progressBar: {
      flex: 1,
      height: 4,
      backgroundColor: '#E5E5E5',
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
      minWidth: 50,
      textAlign: 'right',
    },
    languageSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      padding: 12,
      marginHorizontal: 16,
      marginTop: 14,
      backgroundColor: '#F8F9FA',
      borderRadius: 8,
    },
    languageText: {
      fontSize: 14,
      color: colors.accent,
      fontWeight: '500',
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#F5F1EA',
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      padding: 16,
    },
    questionCard: {
      position: 'relative',
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 14,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    questionText: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text.primary,
      marginBottom: 6,
    },
    translationText: {
      fontSize: 16,
      color: colors.text.secondary,
      marginBottom: 24,
      fontStyle: 'italic',
    },
    imageContainer: {
      marginVertical: 16,
      height: 200,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      overflow: 'hidden',
    },
    questionImage: {
      width: '100%',
      height: '100%',
    },
    loadingContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    errorContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    errorText: {
      marginTop: 6,
      color: colors.text.secondary,
      fontSize: 12,
    },
    answersContainer: {
      gap: 10,
    },
    answerButton: {
      padding: 16,
      backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    selectedAnswer: {
      backgroundColor: `${colors.accent}15`,
      borderColor: colors.accent,
    },
    correctAnswer: {
      backgroundColor: `${colors.success}15`,
      borderColor: colors.success,
    },
    wrongAnswer: {
      backgroundColor: `${colors.error}15`,
      borderColor: colors.error,
    },
    answerText: {
      fontSize: 14,
      color: colors.text.primary,
      marginBottom: 4,
    },
    selectedAnswerText: {
      color: colors.accent,
      fontWeight: '500',
    },
    answerTranslation: {
      fontSize: 12,
      color: colors.text.secondary,
    },
    nextButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.accent,
      padding: 16,
      borderRadius: 8,
      marginTop: 18,
    },
    nextButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
      marginRight: 8,
    },
    paginationWrapper: {
      backgroundColor: 'white',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    paginationNumbers: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 6,
    },
    paginationButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F9FA',
    },
    paginationButtonActive: {
      backgroundColor: colors.accent,
    },
    paginationButtonText: {
      fontSize: 12,
      color: colors.text.primary,
    },
    paginationButtonTextActive: {
      color: 'white',
      fontWeight: '500',
    },
    paginationArrow: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
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
  });
  
  export default PracticeModeScreen