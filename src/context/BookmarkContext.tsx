// src/context/BookmarkContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BookmarkContextType {
  bookmarkedQuestions: string[];
  toggleBookmark: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;
  loadBookmarks: () => void;
  clearAllBookmarks: () => Promise<void>;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const BOOKMARKS_STORAGE_KEY = 'bookmarkedQuestions';

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const savedBookmarks = await AsyncStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (savedBookmarks) {
        const parsedBookmarks = JSON.parse(savedBookmarks);
        setBookmarkedQuestions(parsedBookmarks);
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  };

  const saveBookmarks = async (bookmarks: string[]) => {
    try {
      await AsyncStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
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

  const isBookmarked = (questionId: string) => {
    return bookmarkedQuestions.includes(questionId);
  };

  const clearAllBookmarks = async () => {
    try {
      await AsyncStorage.removeItem(BOOKMARKS_STORAGE_KEY);
      setBookmarkedQuestions([]);
    } catch (error) {
      console.error('Error clearing bookmarks:', error);
      throw error;
    }
  };

  return (
    <BookmarkContext.Provider value={{
      bookmarkedQuestions,
      toggleBookmark,
      isBookmarked,
      loadBookmarks,
      clearAllBookmarks,
    }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};