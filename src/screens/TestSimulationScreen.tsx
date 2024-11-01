import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';

const germanStates = [
  { id: 'bw', name: 'Baden-Württemberg' },
  { id: 'by', name: 'Bayern' },
  { id: 'be', name: 'Berlin' },
  { id: 'bb', name: 'Brandenburg' },
  { id: 'hb', name: 'Bremen' },
  { id: 'hh', name: 'Hamburg' },
  { id: 'he', name: 'Hessen' },
  { id: 'mv', name: 'Mecklenburg-Vorpommern' },
  { id: 'ni', name: 'Niedersachsen' },
  { id: 'nw', name: 'Nordrhein-Westfalen' },
  { id: 'rp', name: 'Rheinland-Pfalz' },
  { id: 'sl', name: 'Saarland' },
  { id: 'sn', name: 'Sachsen' },
  { id: 'st', name: 'Sachsen-Anhalt' },
  { id: 'sh', name: 'Schleswig-Holstein' },
  { id: 'th', name: 'Thüringen' },
];
const STORAGE_KEY = 'selectedState';

const TestSimulationScreen = () => {
  const navigation = useNavigation();

  const [selectedState, setSelectedState] = useState<{ id: string; name: string } | null>(null);
  const [showStateModal, setShowStateModal] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  // Load saved state when component mounts
  useEffect(() => {
    loadSavedState();
  }, []);

  const loadSavedState = async () => {
    try {
      const savedState = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedState) {
        setSelectedState(JSON.parse(savedState));
      }
    } catch (error) {
      console.error('Error loading saved state:', error);
    }
  };

  const handleStateSelect = async (state: { id: string; name: string }) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setSelectedState(state);
      setShowStateModal(false);
    } catch (error) {
      console.error('Error saving state:', error);
    }
  };

  const handleStartTest = () => {
    if (selectedState) {
      setTestStarted(true);
      // Here we would generate the test questions (30 general + 3 state specific)
    }
  };

  return (
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
        <Text style={styles.headerTitle}>Test Simulation</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        {/* Info Card */}
        <View style={styles.infoCard}>
          <Feather name="info" size={24} color={colors.accent} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Test Information</Text>
            <Text style={styles.infoText}>
              • 33 questions total{'\n'}
              • 30 general questions{'\n'}
              • 3 state-specific questions{'\n'}
              • 60 minutes to complete{'\n'}
              • 17 correct answers to pass
            </Text>
          </View>
        </View>

        {/* State Selection */}
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionLabel}>Select Your State</Text>
          <TouchableOpacity 
            style={styles.dropdownButton}
            onPress={() => setShowStateModal(true)}
          >
            <Text style={[
              styles.dropdownText,
              !selectedState && styles.placeholderText
            ]}>
              {selectedState ? selectedState.name : 'Select a state'}
            </Text>
            <Feather name="chevron-down" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={[
            styles.startButton,
            !selectedState && styles.startButtonDisabled
          ]}
          onPress={handleStartTest}
          disabled={!selectedState}
        >
          <Text style={styles.startButtonText}>Start Test</Text>
        </TouchableOpacity>

        {/* States Modal */}
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
  content: {
    flex: 1,
    padding: 16,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
});

export default TestSimulationScreen;
