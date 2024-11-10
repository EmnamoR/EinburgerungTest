/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// src/constants/Colors.ts
export const colors = {
  accent: "#003262",
  background: '#F5F6F8', // Light gray background
  white: "#FFFFFF",
  text: {
    primary: '#1B365D',
    secondary: '#6B7280',
    light: '#FFFFFF',
  },
  border: "#E5E5E5",
  primary: '#1B365D',  // Navy blue from template
  error: '#FF6B6B',    // Softer red
  warning: '#FFA500',
  success: '#4CAF50',


} as const;

export type Colors = typeof colors;
