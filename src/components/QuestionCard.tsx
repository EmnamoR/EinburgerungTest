import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from './Card';
import { colors } from '../constants/Colors';
import { Question, Answer } from '../types/question';

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
      <Text style={styles.question}>{question.questionDe}</Text>
      {question.questionEn && (
        <Text style={styles.translation}>{question.questionEn}</Text>
      )}
      
      <View style={styles.answersContainer}>
        {question.answers.map((answer) => (
          <TouchableOpacity
            key={answer.id}
            style={[styles.answerButton, getAnswerStyle(answer.id)]}
            onPress={() => onSelectAnswer(answer.id)}
            disabled={showResult}
          >
            <Text style={getAnswerTextStyle(answer.id)}>
              {answer.textDe}
            </Text>
            {answer.textEn && (
              <Text style={styles.answerTranslation}>
                {answer.textEn}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  translation: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  answersContainer: {
    marginTop: 16,
  },
  answerButton: {
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
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
    fontSize: 16,
    color: colors.text.primary,
  },
  selectedAnswerText: {
    fontSize: 16,
    color: colors.accent,
    fontWeight: '500',
  },
  highlightedAnswerText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
  },
  answerTranslation: {
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 4,
  },
});
