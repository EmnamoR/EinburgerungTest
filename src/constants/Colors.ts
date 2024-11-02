/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// src/constants/Colors.ts
export const colors = {
  accent: "#003262",
  background: "#F5F1EA",
  white: "#FFFFFF",
  text: {
    primary: "#1A1A1A",
    secondary: "#666666",
  },
  border: "#E5E5E5",
  success: "#4CAF50",
  error: "#F44336",
} as const;

export type Colors = typeof colors;
