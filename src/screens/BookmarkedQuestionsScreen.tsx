// src/screens/BookmarkedQuestionsScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { useBookmarks } from '../context/BookmarkContext';
import { questions } from '../data/questions';
import { colors } from '../constants/Colors';
import { RootStackParamList } from '../types/navigation';

type BookmarkedScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const BookmarkedQuestionsScreen = () => {
  const navigation = useNavigation<BookmarkedScreenNavigationProp>();
  const { bookmarkedQuestions, loadBookmarks } = useBookmarks();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadBookmarks();
    }
  }, [isFocused, loadBookmarks]);

  const bookmarkedQuestionsList = Array.from(new Set(bookmarkedQuestions))
    .map(id => questions.find(q => q.id === id))
    .filter((question): question is NonNullable<typeof question> => 
      question !== undefined && 
      question.question?.de !== undefined
    );

  const handleQuestionPress = (questionId: string) => {
    navigation.navigate('PracticeMode', { questionId });
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
        <Text style={styles.headerTitle}>Saved Questions</Text>
        <View style={styles.headerRight} />
      </View>

      {bookmarkedQuestionsList.length > 0 ? (
        <FlatList
          data={bookmarkedQuestionsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.questionItem}
              onPress={() => handleQuestionPress(item.id)}
            >
              <Text style={styles.questionText} numberOfLines={2}>
                {item.question.de}
              </Text>
              <Feather name="chevron-right" size={20} color={colors.text.secondary} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Feather name="star" size={48} color={colors.text.secondary} />
          <Text style={styles.emptyStateText}>No saved questions yet</Text>
        </View>
      )}
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
  listContent: {
    padding: 16,
  },
  questionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
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
    flex: 1,
    fontSize: 14,
    color: colors.text.primary,
    marginRight: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    marginTop: 14,
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});

export default BookmarkedQuestionsScreen;