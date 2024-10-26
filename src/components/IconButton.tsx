import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  ViewStyle 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';

interface IconButtonProps {
  name: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  color = colors.accent,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress}
    >
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
