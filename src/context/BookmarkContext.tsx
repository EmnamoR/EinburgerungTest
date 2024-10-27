// src/context/BookmarkContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BookmarkContextType {
  bookmarkedQuestions: string[];
  toggleBookmark: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;
  loadBookmarks: () => Promise<void>;
}

const BookmarkContext = createContext<BookmarkContextType>({
  bookmarkedQuestions: [],
  toggleBookmark: () => {},
  isBookmarked: () => false,
  loadBookmarks: async () => {},
});

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const saved = await AsyncStorage.getItem('bookmarkedQuestions');
      if (saved) {
        setBookmarkedQuestions(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  };

  const saveBookmarks = async (bookmarks: string[]) => {
    try {
      await AsyncStorage.setItem('bookmarkedQuestions', JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Error saving bookmarks:', error);
    }
  };

  const toggleBookmark = (questionId: string) => {
    setBookmarkedQuestions(prev => {
      const newBookmarks = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      saveBookmarks(newBookmarks);
      return newBookmarks;
    });
  };

  const isBookmarked = (questionId: string) => bookmarkedQuestions.includes(questionId);

  return (
    <BookmarkContext.Provider value={{ bookmarkedQuestions, toggleBookmark, isBookmarked, loadBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);