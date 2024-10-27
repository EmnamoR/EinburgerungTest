import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from './Card';
import { colors } from '../constants/Colors';
import { useBookmarks } from '../context/BookmarkContext';
import { useLanguage } from '../context/LanguageContext';
import { Question } from '../types/question';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onSelectAnswer: (answerId: number) => void;
  showResult?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
}) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { selectedLanguage } = useLanguage();

  const getAnswerStyle = (answerId: number) => {
    if (!showResult) {
      return answerId === selectedAnswer ? styles.selectedAnswer : styles.answer;
    }
    
    if (answerId === question.correctAnswer) {
      return styles.correctAnswer;
    }
    
    if (answerId === selectedAnswer && answerId !== question.correctAnswer) {
      return styles.wrongAnswer;
    }
    
    return styles.answer;
  };

  const getAnswerTextStyle = (answerId: number) => {
    if (!showResult) {
      return answerId === selectedAnswer ? styles.selectedAnswerText : styles.answerText;
    }
    
    if (answerId === question.correctAnswer || 
        (answerId === selectedAnswer && answerId !== question.correctAnswer)) {
      return styles.highlightedAnswerText;
    }
    
    return styles.answerText;
  };

  return (
    <Card>
      {/* Question header with bookmark */}
      <View style={styles.questionHeader}>
        <View style={styles.questionSection}>
          <Text style={styles.question}>{question.question.de}</Text>
          {selectedLanguage && selectedLanguage !== 'de' && question.question[selectedLanguage] && (
            <Text style={styles.translationText}>
              {question.question[selectedLanguage]}
            </Text>
          )}
        </View>
        <TouchableOpacity 
          style={styles.bookmarkButton}
          onPress={() => toggleBookmark(question.id)}
        >
          <Feather 
            name="star" 
            size={24} 
            color={isBookmarked(question.id) ? colors.accent : colors.text.secondary}
          />
        </TouchableOpacity>
      </View>

      {/* Answers */}
      <View style={styles.answersContainer}>
        {question.answers.map((answer) => (
          <TouchableOpacity
            key={answer.id}
            style={[
              styles.answerButton,
              getAnswerStyle(answer.id)
            ]}
            onPress={() => onSelectAnswer(answer.id)}
            disabled={showResult}
          >
            <Text style={[
              styles.answerText,
              getAnswerTextStyle(answer.id)
            ]}>
              {answer.text.de}
            </Text>
            {selectedLanguage && selectedLanguage !== 'de' && answer.text[selectedLanguage] && (
              <Text style={styles.answerTranslation}>
                {answer.text[selectedLanguage]}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  questionSection: {
    flex: 1,
    marginRight: 16,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 6,
  },
  translationText: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 6,
    fontStyle: 'italic',
  },
  bookmarkButton: {
    padding: 8,
    marginTop: -8,
    marginRight: -8,
  },
  answersContainer: {
    gap: 10,
  },
  answerButton: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  answer: {
    backgroundColor: colors.white,
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
  },
  selectedAnswerText: {
    color: colors.accent,
    fontWeight: '500',
  },
  highlightedAnswerText: {
    color: colors.text.primary,
    fontWeight: '500',
  },
  answerTranslation: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
});

export default QuestionCard;