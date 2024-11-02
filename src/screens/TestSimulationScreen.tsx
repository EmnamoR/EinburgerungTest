// src/screens/TestSimulationScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TestSimulationScreenNavigationProp } from '../types/navigation';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/Colors';
import { Question } from '../types/question';
import { germanStates } from '../constants/States';
import { questions } from '../data/questions';
import ResultsScreen from './ResultsScreen';

const STORAGE_KEY = 'selectedState';
const TEST_TIME = 60 * 60; // 60 minutes in seconds
const QUESTIONS_NEEDED = 33;
const PASSING_SCORE = 17;

interface TestState {
  questions: Question[];
  answers: Record<string, number>;
  timeRemaining: number;
  currentIndex: number;
  isComplete: boolean;
}

// Helper function to shuffle array
const shuffleArray = (array: Question[]): Question[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TestSimulationScreen: React.FC = () => {
  const navigation = useNavigation<TestSimulationScreenNavigationProp>();
  const [selectedState, setSelectedState] = useState<{ id: string; name: string } | null>(null);
  const [showStateModal, setShowStateModal] = useState(false);
  const [testState, setTestState] = useState<TestState | null>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    loadSavedState();
    return () => {
      if (testState) {
        AsyncStorage.removeItem('currentTest');
      }
    };
  }, []);

  useEffect(() => {
    let timer: number;
    if (testState && !testState.isComplete && testState.timeRemaining > 0) {
      timer = setInterval(() => {
        setTestState(prev => {
          if (!prev || prev.isComplete) return prev;
          const newTime = prev.timeRemaining - 1;
          if (newTime === 0) {
            handleTestComplete();
            return { ...prev, timeRemaining: 0, isComplete: true };
          }
          return { ...prev, timeRemaining: newTime };
        });
      }, 1000) as any;
    }
    return () => clearInterval(timer);
  }, [testState?.isComplete, testState?.timeRemaining]);

  useEffect(() => {
    if (testState) {
      AsyncStorage.setItem('currentTest', JSON.stringify(testState));
    }
  }, [testState]);

  const loadSavedState = async () => {
    try {
      const [savedState, savedTest] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEY),
        AsyncStorage.getItem('currentTest'),
      ]);

      if (savedState) {
        setSelectedState(JSON.parse(savedState));
      }

      if (savedTest) {
        Alert.alert(
          'Resume Test',
          'Would you like to resume your previous test?',
          [
            {
              text: 'No',
              onPress: () => AsyncStorage.removeItem('currentTest'),
              style: 'cancel'
            },
            {
              text: 'Yes',
              onPress: () => setTestState(JSON.parse(savedTest))
            }
          ]
        );
      }
    } catch (error) {
      console.error('Error loading saved state:', error);
    }
  };

  const generateTest = (stateId: string): Question[] => {
    const generalQuestions = questions.filter(q => !q.federalState);
    const stateQuestions = questions.filter(q => q.federalState === stateId);

    if (generalQuestions.length < 30) {
      Alert.alert('Error', 'Not enough general questions available');
      return [];
    }
    if (stateQuestions.length < 3) {
      Alert.alert('Error', `Not enough questions for state ${stateId}`);
      return [];
    }

    const selectedGeneralQuestions = shuffleArray(generalQuestions).slice(0, 30);
    const selectedStateQuestions = shuffleArray(stateQuestions).slice(0, 3);

    return shuffleArray([...selectedGeneralQuestions, ...selectedStateQuestions]);
  };

  const handleStateSelect = async (state: { id: string; name: string }) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setSelectedState(state);
      setShowStateModal(false);
    } catch (error) {
      console.error('Error saving state:', error);
      Alert.alert('Error', 'Failed to save state selection');
    }
  };

  const startTest = () => {
    if (!selectedState) return;
    
    const testQuestions = generateTest(selectedState.id);
    if (testQuestions.length === QUESTIONS_NEEDED) {
      setTestState({
        questions: testQuestions,
        answers: {},
        timeRemaining: TEST_TIME,
        currentIndex: 0,
        isComplete: false
      });
    }
  };

  const handleAnswerSelect = (questionId: string, answerId: number) => {
    if (!testState || testState.isComplete) return;

    setTestState(prev => {
      if (!prev) return null;
      return {
        ...prev,
        answers: { ...prev.answers, [questionId]: answerId }
      };
    });
  };

  const handleTestComplete = () => {
    if (!testState) return;

    setTestState(prev => prev ? { ...prev, isComplete: true } : null);
    setShowResults(true);

    const correctAnswers = Object.entries(testState.answers).reduce((count, [questionId, answerId]) => {
      const question = testState.questions.find(q => q.id === questionId);
      return count + (question?.correctAnswer === answerId ? 1 : 0);
    }, 0);

    const testResult = {
      date: new Date().toISOString(),
      score: correctAnswers,
      passed: correctAnswers >= PASSING_SCORE,
      timeUsed: TEST_TIME - testState.timeRemaining
    };
    saveTestResult(testResult);
  };

  const saveTestResult = async (result: any) => {
    try {
      const existingResults = await AsyncStorage.getItem('testHistory');
      const history = existingResults ? JSON.parse(existingResults) : [];
      history.push(result);
      await AsyncStorage.setItem('testHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving test result:', error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    if (!testState) return null;
    
    const question = testState.questions[testState.currentIndex];
    return (
      <View style={styles.questionContainer}>
        {question.image !== undefined && (
          <Image 
            source={question.image}
            style={styles.questionImage}
            resizeMode="contain"
          />
        )}
        <Text style={styles.questionText}>{question.question.de}</Text>
        {question.answers.map(answer => (
          <TouchableOpacity
            key={answer.id}
            style={[
              styles.answerButton,
              testState.answers[question.id] === answer.id && styles.selectedAnswer
            ]}
            onPress={() => handleAnswerSelect(question.id, answer.id)}
          >
            <Text style={styles.answerText}>{answer.text.de}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Render Results Screen
  if (showResults && testState) {
    return (
      <ResultsScreen 
        testState={testState}
        onClose={() => {
          setShowResults(false);
          navigation.navigate('Home');
        }}
      />
    );
  }

  // Render Test UI
  if (testState) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            Alert.alert(
              'End Test',
              'Are you sure you want to end the test? Your progress will be lost.',
              [
                { text: 'No', style: 'cancel' },
                { text: 'Yes', onPress: () => navigation.navigate('Home') }
              ]
            );
          }}>
            <Feather name="x" size={24} color={colors.text.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            Question {testState.currentIndex + 1}/{QUESTIONS_NEEDED}
          </Text>
          <Text style={styles.timer}>{formatTime(testState.timeRemaining)}</Text>
        </View>

        <ScrollView style={styles.content}>
          {renderQuestion()}
        </ScrollView>

        <View style={styles.navigation}>
          <TouchableOpacity 
            style={[styles.navButton, testState.currentIndex === 0 && styles.disabledButton]}
            onPress={() => setTestState(prev => 
              prev ? { ...prev, currentIndex: prev.currentIndex - 1 } : null
            )}
            disabled={testState.currentIndex === 0}
          >
            <Feather name="chevron-left" size={24} color={colors.text.primary} />
            <Text>Previous</Text>
          </TouchableOpacity>

          {testState.currentIndex === QUESTIONS_NEEDED - 1 ? (
            <TouchableOpacity 
              style={[styles.navButton, styles.submitButton]}
              onPress={handleTestComplete}
            >
              <Text style={styles.submitText}>Submit Test</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => setTestState(prev => 
                prev ? { ...prev, currentIndex: prev.currentIndex + 1 } : null
              )}
            >
              <Text>Next</Text>
              <Feather name="chevron-right" size={24} color={colors.text.primary} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }

  // Render State Selection
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color={colors.text.primary} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Test Simulation</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.infoCard}>
          <Feather name="info" size={24} color={colors.accent} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Test Information</Text>
            <Text style={styles.infoText}>
              • {QUESTIONS_NEEDED} questions total{'\n'}
              • 30 general questions{'\n'}
              • 3 state-specific questions{'\n'}
              • {TEST_TIME / 60} minutes to complete{'\n'}
              • {PASSING_SCORE} correct answers to pass
            </Text>
          </View>
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.selectionLabel}>Select Your State</Text>
          <TouchableOpacity 
            style={styles.dropdownButton}
            onPress={() => setShowStateModal(true)}
          >
            <Text style={[styles.dropdownText, !selectedState && styles.placeholderText]}>
              {selectedState ? selectedState.name : 'Select a state'}
            </Text>
            <Feather name="chevron-down" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.startButton, !selectedState && styles.startButtonDisabled]}
          onPress={startTest}
          disabled={!selectedState}
        >
          <Text style={styles.startButtonText}>Start Test</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={showStateModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowStateModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Your State</Text>
              <TouchableOpacity 
                onPress={() => setShowStateModal(false)}
                style={styles.closeButton}
              >
                <Feather name="x" size={24} color={colors.text.primary} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.statesList}>
              {germanStates.map((state) => (
                <TouchableOpacity
                  key={state.id}
                  style={[
                    styles.stateOption,
                    selectedState?.id === state.id && styles.selectedStateOption
                  ]}
                  onPress={() => handleStateSelect(state)}
                >
                  <Text style={[
                    styles.stateOptionText,
                    selectedState?.id === state.id && styles.selectedStateOptionText
                  ]}>
                    {state.name}
                  </Text>
                  {selectedState?.id === state.id && (
                    <Feather name="check" size={20} color={colors.accent} />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
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
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  headerRight: {
    width: 60,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  selectionContainer: {
    marginBottom: 24,
  },
  selectionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  placeholderText: {
    color: colors.text.secondary,
  },
  startButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  startButtonDisabled: {
    opacity: 0.5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
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
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
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
  statesList: {
    padding: 16,
  },
  stateOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedStateOption: {
    backgroundColor: `${colors.accent}10`,
  },
  stateOptionText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  selectedStateOptionText: {
    color: colors.accent,
    fontWeight: '500',
  },
  // Question UI styles
  questionContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
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
  answerButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  selectedAnswer: {
    backgroundColor: `${colors.accent}10`,
    borderColor: colors.accent,
  },
  answerText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  timer: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.accent,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  navButtonText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  submitButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 24,
  },
  submitText: {
    color: 'white',
    fontWeight: '500',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default TestSimulationScreen;
