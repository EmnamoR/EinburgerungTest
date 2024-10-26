export type Language = 
  | 'de'    // German (always shown as primary)
  | 'en'    // English
  | 'ar'    // Arabic
  | 'tr'    // Turkish
  | 'uk'    // Ukrainian
  | 'ru'    // Russian
  | 'pl'    // Polish
  | 'fa';   // Farsi

export interface TranslatedText {
  de: string;      // German (required)
  en?: string;     // English
  ar?: string;     // Arabic
  tr?: string;     // Turkish
  uk?: string;     // Ukrainian
  ru?: string;     // Russian
  pl?: string;     // Polish
  fa?: string;     // Farsi
}
