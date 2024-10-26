// src/screens/PracticeModeScreen.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  Modal,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import { useLanguage } from '../context/LanguageContext';
import { questions } from '../data/questions';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'uk', name: 'Українська' },
  { code: 'ru', name: 'Русский' },
  { code: 'pl', name: 'Polski' },
  { code: 'fa', name: 'فارسی' },
];

const { width } = Dimensions.get('window');


const PaginationBar = ({ 
    currentIndex, 
    totalQuestions, 
    onSelectQuestion 
  }: { 
    currentIndex: number;
    totalQuestions: number;
    onSelectQuestion: (index: number) => void;
  }) => {
    const centerIndex = Math.min(
      Math.max(2, currentIndex),
      totalQuestions - 3
    );
    const pages = Array.from(
      { length: 5 },
      (_, i) => centerIndex + i - 2
    ).filter(page => page >= 0 && page < totalQuestions);
  
    return (
      <View style={styles.paginationContainer}>
        <TouchableOpacity 
          style={styles.paginationArrow}
          onPress={() => onSelectQuestion(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
        >
          <Feather 
            name="chevron-left" 
            size={24} 
            color={currentIndex === 0 ? colors.text.secondary : colors.accent} 
          />
        </TouchableOpacity>
  
        <View style={styles.paginationNumbers}>
          {pages.map(pageNum => (
            <TouchableOpacity
              key={pageNum}
              style={[
                styles.paginationButton,
                currentIndex === pageNum && styles.paginationButtonActive
              ]}
              onPress={() => onSelectQuestion(pageNum)}
            >
              <Text style={[
                styles.paginationButtonText,
                currentIndex === pageNum && styles.paginationButtonTextActive
              ]}>
                {pageNum + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
  
        <TouchableOpacity 
          style={styles.paginationArrow}
          onPress={() => onSelectQuestion(Math.min(totalQuestions - 1, currentIndex + 1))}
          disabled={currentIndex === totalQuestions - 1}
        >
          <Feather 
            name="chevron-right" 
            size={24} 
            color={currentIndex === totalQuestions - 1 ? colors.text.secondary : colors.accent} 
          />
        </TouchableOpacity>
      </View>
    );
  };
  const PracticeModeScreen = () => {
    const navigation = useNavigation();
    const { selectedLanguage, setLanguage } = useLanguage();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const swipeableRef = useRef<Swipeable>(null);
  
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
    const handleQuestionChange = (index: number) => {
      setCurrentQuestionIndex(index);
      setSelectedAnswer(null);
      setShowAnswer(false);
      swipeableRef.current?.close();
    };
  
    const handleAnswerSelect = (answerId: number) => {
      setSelectedAnswer(answerId);
      setShowAnswer(true);
    };
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        handleQuestionChange(currentQuestionIndex + 1);
      }
    };
  
    const closeModal = () => {
      setShowLanguageModal(false);
    };
  
    const renderSwipeActions = (direction: 'left' | 'right') => {
      return (
        <View style={styles.swipeAction}>
          <Feather 
            name={direction === 'left' ? 'chevron-left' : 'chevron-right'} 
            size={24} 
            color={colors.accent} 
          />
        </View>
      );
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
  
          {/* Swipeable Content */}
          <Swipeable
            ref={swipeableRef}
            renderLeftActions={currentQuestionIndex > 0 ? () => renderSwipeActions('left') : undefined}
            renderRightActions={currentQuestionIndex < questions.length - 1 ? () => renderSwipeActions('right') : undefined}
            onSwipeableOpen={(direction) => {
              if (direction === 'left' && currentQuestionIndex > 0) {
                handleQuestionChange(currentQuestionIndex - 1);
              } else if (direction === 'right' && currentQuestionIndex < questions.length - 1) {
                handleQuestionChange(currentQuestionIndex + 1);
              }
            }}
            overshootLeft={false}
            overshootRight={false}
          >
            <ScrollView 
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
            >
              <View style={styles.questionCard}>
                <Text style={styles.questionText}>
                  {currentQuestion.question.de}
                </Text>
                <Text style={styles.translationText}>
                  {currentQuestion.question[selectedLanguage || 'en']}
                </Text>
  
                <View style={styles.answersContainer}>
                  {currentQuestion.answers.map((answer) => (
                    <TouchableOpacity
                      key={answer.id}
                      style={[
                        styles.answerButton,
                        selectedAnswer === answer.id && styles.selectedAnswer,
                        showAnswer && answer.id === currentQuestion.correctAnswer && styles.correctAnswer,
                        showAnswer && selectedAnswer === answer.id && 
                        selectedAnswer !== currentQuestion.correctAnswer && styles.wrongAnswer
                      ]}
                      onPress={() => handleAnswerSelect(answer.id)}
                      disabled={showAnswer}
                    >
                      <Text style={[
                        styles.answerText,
                        selectedAnswer === answer.id && styles.selectedAnswerText
                      ]}>
                        {answer.text.de}
                      </Text>
                      <Text style={styles.answerTranslation}>
                        {answer.text[selectedLanguage || 'en']}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
  
                {showAnswer && (
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
          </Swipeable>
  
          {/* Pagination */}
          <View style={styles.paginationWrapper}>
            <PaginationBar
              currentIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onSelectQuestion={handleQuestionChange}
            />
          </View>
  
          {/* Language Selection Modal */}
          <Modal
            visible={showLanguageModal}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}
          >
            <TouchableOpacity 
              style={styles.modalOverlay} 
              activeOpacity={1} 
              onPress={closeModal}
            >
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Select Language</Text>
                  <TouchableOpacity onPress={closeModal}>
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
                      closeModal();
                    }}
                  >
                    <Text style={styles.languageOptionText}>{lang.name}</Text>
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
      gap: 4,
    },
    backText: {
      fontSize: 16,
      color: colors.text.primary,
    },
    headerTitle: {
      fontSize: 16,
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
      fontSize: 14,
      color: colors.text.secondary,
      minWidth: 50,
      textAlign: 'right',
    },
    languageSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      marginHorizontal: 16,
      marginTop: 16,
      backgroundColor: '#F8F9FA',
      borderRadius: 8,
    },
    languageText: {
      fontSize: 16,
      color: colors.accent,
      fontWeight: '500',
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 20,
    },
    questionCard: {
      margin: 16,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 12,
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
      fontSize: 20,
      fontWeight: '600',
      color: colors.text.primary,
      marginBottom: 8,
    },
    translationText: {
      fontSize: 18,
      color: colors.text.secondary,
      marginBottom: 24,
      fontStyle: 'italic',
    },
    answersContainer: {
      gap: 12,
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
      fontSize: 16,
      color: colors.text.primary,
      marginBottom: 4,
    },
    selectedAnswerText: {
      color: colors.accent,
      fontWeight: '500',
    },
    answerTranslation: {
      fontSize: 14,
      color: colors.text.secondary,
    },
    nextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.accent,
        padding: 16,
        borderRadius: 8,
        marginTop: 20,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
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
        gap: 8,
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
        fontSize: 14,
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
    swipeAction: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
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
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.text.primary,
    },
    closeButton: {
        padding: 4,
    },
    languageOption: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#F8F9FA',
    },
    selectedLanguageOption: {
        backgroundColor: `${colors.accent}15`,
    },
    languageOptionText: {
        fontSize: 16,
        color: colors.text.primary,
    },
    selectedLanguageOptionText: {
        color: colors.accent,
        fontWeight: '500',
    },
});

export default PracticeModeScreen;