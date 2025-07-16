interface MultiLanguageItem {
  name_en?: string;
  name_hi?: string;
  title_en?: string;
  title_hi?: string;
}

interface LanguageFilteredItem {
  [key: string]: string;
}

type Language = 'en' | 'hi';

/**
 * Filter object properties based on language and set missing values to empty string
 * @param array - Array of multi-language objects
 * @param lang - Language code ('en' or 'hi')
 * @returns Array with only specified language properties
 */
export function filterByLanguage(
  array: MultiLanguageItem[], 
  lang: Language
): LanguageFilteredItem[] {
  // Implementation goes here
}