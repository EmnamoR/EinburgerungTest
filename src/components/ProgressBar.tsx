import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../constants/Colors';

interface ProgressBarProps {
  progress: number; // 0 to 100
  style?: ViewStyle;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  style,
  color = colors.accent 
}) => {
  return (
    <View style={[styles.container, style]}>
      <View 
        style={[
          styles.progress, 
          { width: `${progress}%`, backgroundColor: color }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 4,
  },
});
