// src/screens/HistoricalDatesScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { questions } from '../data/questions';
import { colors } from '../constants/Colors';
import { RootStackParamList } from '../types/navigation';
import { Question } from '../types/question';

type HistoricalDatesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Language options for the modal
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

export const HistoricalDatesScreen = () => {
  const navigation = useNavigation<HistoricalDatesScreenNavigationProp>();
  const { selectedLanguage, setLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  // Filter questions that have date: true
  const historicalQuestions = questions.filter((question: Question) => question.date === true);

  const getTranslatedText = (text: any) => {
    if (!text || !selectedLanguage || selectedLanguage === 'off') return '';
    return text[selectedLanguage] || text.en || text.de;
  };

  const toggleExpanded = (questionId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedItems(newExpanded);
  };

  const handleAnswerSelect = (questionId: string, answerId: number) => {
    if (userAnswers[questionId] !== undefined) return; // Already answered
    
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const renderHistoricalQuestion = ({ item }: { item: Question }) => {
    const isExpanded = expandedItems.has(item.id);
    const userAnswer = userAnswers[item.id];
    const hasAnswered = userAnswer !== undefined;
    const isCorrect = hasAnswered && userAnswer === item.correctAnswer;

    return (
      <View style={styles.questionCard}>
        <TouchableOpacity
          style={styles.questionHeader}
          onPress={() => toggleExpanded(item.id)}
        >
          <View style={styles.questionHeaderContent}>
            <Text style={styles.questionText}>
              {item.question.de}
            </Text>
            {selectedLanguage !== 'off' && (
              <View style={styles.translationContainer}>
                                <Text style={styles.translationText}>
                  {getTranslatedText(item.question)}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.questionStatusContainer}>
            {hasAnswered && (
              <Feather 
                name={isCorrect ? "check-circle" : "x-circle"} 
                size={20} 
                color={isCorrect ? colors.success : colors.error} 
              />
            )}
            <Feather 
              name={isExpanded ? "chevron-up" : "chevron-down"} 
              size={20} 
              color={colors.text.secondary} 
            />
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.answersTitle}>
              {hasAnswered ? "Your answer:" : "Choose your answer:"}
            </Text>
            
            {item.answers.map((answer, index) => {
              const isSelected = userAnswer === answer.id;
              const isCorrectAnswer = answer.id === item.correctAnswer;
              const shouldShowAsCorrect = hasAnswered && isCorrectAnswer;
              const shouldShowAsWrong = hasAnswered && isSelected && !isCorrectAnswer;
              
              return (
                <TouchableOpacity
                  key={answer.id}
                  style={[
                    styles.answerItem,
                    shouldShowAsCorrect && styles.correctAnswerItem,
                    shouldShowAsWrong && styles.wrongAnswerItem,
                    isSelected && !hasAnswered && styles.selectedAnswerItem,
                  ]}
                  onPress={() => handleAnswerSelect(item.id, answer.id)}
                  disabled={hasAnswered}
                >
                  <View style={styles.answerContent}>
                    <Text style={[
                      styles.answerText,
                      shouldShowAsCorrect && styles.correctAnswerText,
                      shouldShowAsWrong && styles.wrongAnswerText,
                    ]}>
                      {String.fromCharCode(65 + index)}) {answer.text.de}
                    </Text>
                    {selectedLanguage !== 'off' && (
                      <View style={styles.answerTranslationContainer}>
                        <Text style={styles.answerTranslationText}>
                          {getTranslatedText(answer.text)}
                        </Text>
                      </View>
                    )}
                  </View>
                  
                  {/* Only show icons after answering */}
                  {hasAnswered && isCorrectAnswer && (
                    <Feather name="check-circle" size={16} color={colors.success} />
                  )}
                  {hasAnswered && isSelected && !isCorrectAnswer && (
                    <Feather name="x-circle" size={16} color={colors.error} />
                  )}
                </TouchableOpacity>
              );
            })}

            {/* Result feedback - only shown after answering */}
            {hasAnswered && (
              <View style={[
                styles.resultBox,
                isCorrect ? styles.correctResultBox : styles.wrongResultBox
              ]}>
                <View style={styles.resultHeader}>
                  <Feather 
                    name={isCorrect ? "check-circle" : "x-circle"} 
                    size={20} 
                    color={isCorrect ? colors.success : colors.error} 
                  />
                  <Text style={[
                    styles.resultTitle,
                    { color: isCorrect ? colors.success : colors.error }
                  ]}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </Text>
                </View>
                
                {/* Only show correct answer explanation if user was wrong */}
                {!isCorrect && (
                  <View style={styles.correctAnswerExplanation}>
                    <Text style={styles.explanationLabel}>The correct answer is:</Text>
                    <Text style={styles.explanationText}>
                      {item.answers.find(a => a.id === item.correctAnswer)?.text.de}
                    </Text>
                    {selectedLanguage !== 'off' && (
                      <Text style={styles.explanationTranslation}>
                        {getTranslatedText(item.answers.find(a => a.id === item.correctAnswer)?.text)}
                      </Text>
                    )}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
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
        <Text style={styles.headerTitle}>Historical Dates</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Language Selector */}
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

      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Feather name="info" size={20} color={colors.primary} />
          <Text style={styles.infoText}>
            {historicalQuestions.length} questions about important historical dates. Try to answer before seeing the solution!
          </Text>
        </View>

        <FlatList
          data={historicalQuestions}
          keyExtractor={(item) => item.id}
          renderItem={renderHistoricalQuestion}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
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
  // languageSelectorContainer: {
//   paddingHorizontal: 16,
  //   paddingVertical: 8,
  //   backgroundColor: 'white',
  //   borderBottomWidth: 1,
  //   borderBottomColor: colors.border,
  // },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
    languageText: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    padding: 12,
    backgroundColor: `${colors.primary}10`,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.primary,
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  questionHeaderContent: {
    flex: 1,
  },
  questionStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    lineHeight: 22,
  },
  translationContainer: {
    marginTop: 8,
  },
  translationLabel: {
    fontSize: 10,
    color: colors.text.secondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  translationText: {
    fontSize: 14,
    color: colors.text.secondary,
    fontStyle: 'italic',
    lineHeight: 18,
  },
  expandedContent: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  answersTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 12,
  },
  answerItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    marginBottom: 8,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedAnswerItem: {
    backgroundColor: `${colors.accent}05`,
    borderColor: colors.accent,
  },
  correctAnswerItem: {
    backgroundColor: `${colors.success}10`,
    borderColor: colors.success,
  },
  wrongAnswerItem: {
    backgroundColor: `${colors.error}10`,
    borderColor: colors.error,
  },
  answerContent: {
    flex: 1,
  },
  answerText: {
    fontSize: 14,
    color: colors.text.primary,
    lineHeight: 18,
  },
  correctAnswerText: {
    fontWeight: '500',
    color: colors.success,
  },
  wrongAnswerText: {
    color: colors.error,
  },
  answerTranslationContainer: {
    marginTop: 4,
  },
  answerTranslationLabel: {
    fontSize: 9,
    color: colors.text.secondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 1,
  },
  answerTranslationText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontStyle: 'italic',
    lineHeight: 16,
  },
  resultBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  correctResultBox: {
    backgroundColor: `${colors.success}15`,
    borderColor: `${colors.success}30`,
  },
  wrongResultBox: {
    backgroundColor: `${colors.error}15`,
    borderColor: `${colors.error}30`,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  correctAnswerExplanation: {
    marginTop: 8,
  },
  explanationLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  explanationText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 4,
  },
  explanationTranslation: {
    fontSize: 12,
    color: colors.text.secondary,
    fontStyle: 'italic',
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

export default HistoricalDatesScreen;