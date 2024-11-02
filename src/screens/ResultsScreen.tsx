// src/screens/ResultsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import { TestState } from '../types/test';
import { useNavigation } from '@react-navigation/native';
import { ResultsScreenNavigationProp } from '../types/navigation';  // Add this import


interface ResultsScreenProps {
    testState: TestState;
    onClose: () => void;
  }
  
  const ResultsScreen: React.FC<ResultsScreenProps> = ({ testState, onClose }) => {
    const navigation = useNavigation<ResultsScreenNavigationProp>();

  // Calculate test statistics
  const totalQuestions = testState.questions.length;
  const correctAnswers = Object.entries(testState.answers).reduce((count, [questionId, answerId]) => {
    const question = testState.questions.find(q => q.id === questionId);
    return count + (question?.correctAnswer === answerId ? 1 : 0);
  }, 0);
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = correctAnswers >= 17;

  // Format time used
  const timeUsed = 3600 - testState.timeRemaining;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Feather name="x" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Test Results</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* Results Summary Card */}
        <View style={[styles.card, styles.summaryCard]}>
          <View style={styles.resultBadge}>
            <Feather 
              name={passed ? "check-circle" : "x-circle"} 
              size={48} 
              color={passed ? colors.success : colors.error} 
            />
            <Text style={[
              styles.resultText,
              { color: passed ? colors.success : colors.error }
            ]}>
              {passed ? 'Test Passed' : 'Test Failed'}
            </Text>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{correctAnswers}/{totalQuestions}</Text>
              <Text style={styles.statLabel}>Correct Answers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{score}%</Text>
              <Text style={styles.statLabel}>Score</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</Text>
              <Text style={styles.statLabel}>Time Used</Text>
            </View>
          </View>
        </View>

        {/* Detailed Review */}
        <Text style={styles.sectionTitle}>Detailed Review</Text>
        
        {testState.questions.map((question, index) => {
          const userAnswer = testState.answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;
          
          return (
            <View key={question.id} style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Text style={styles.questionNumber}>Question {index + 1}</Text>
                <Feather 
                  name={isCorrect ? "check" : "x"} 
                  size={20} 
                  color={isCorrect ? colors.success : colors.error} 
                />
              </View>

              {question.image && (
                <Image 
                  source={question.image}
                  style={styles.questionImage}
                  resizeMode="contain"
                />
              )}

              <Text style={styles.questionText}>{question.question.de}</Text>

              {question.answers.map(answer => (
                <View
                  key={answer.id}
                  style={[
                    styles.answerRow,
                    answer.id === userAnswer && styles.userAnswer,
                    answer.id === question.correctAnswer && styles.correctAnswer,
                  ]}
                >
                  <Text style={[
                    styles.answerText,
                    answer.id === question.correctAnswer && styles.correctAnswerText,
                  ]}>
                    {answer.text.de}
                  </Text>
                  {answer.id === userAnswer && (
                    <Feather 
                      name="user" 
                      size={16} 
                      color={isCorrect ? colors.success : colors.error} 
                    />
                  )}
                  {answer.id === question.correctAnswer && (
                    <Feather name="check" size={16} color={colors.success} />
                  )}
                </View>
              ))}
            </View>
          );
        })}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={onClose}
        >
          <Text style={styles.secondaryButtonText}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, styles.primaryButton]}
      onPress={() => navigation.navigate('TestSimulation')}
    >
      <Text style={styles.primaryButtonText}>Try Again</Text>
    </TouchableOpacity>
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
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  summaryCard: {
    alignItems: 'center',
  },
  resultBadge: {
    alignItems: 'center',
    marginBottom: 24,
  },
  resultText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 16,
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  questionText: {
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 16,
    lineHeight: 24,
  },
  answerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#F8F9FA',
  },
  userAnswer: {
    backgroundColor: `${colors.error}10`,
  },
  correctAnswer: {
    backgroundColor: `${colors.success}10`,
  },
  answerText: {
    fontSize: 14,
    color: colors.text.primary,
    flex: 1,
  },
  correctAnswerText: {
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.accent,
  },
  secondaryButton: {
    backgroundColor: '#F8F9FA',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  secondaryButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ResultsScreen;