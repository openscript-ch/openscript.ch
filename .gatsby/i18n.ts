export const languages = ['de', 'en'] as const;
type Language = typeof languages[number];

export const defaultLanguage: Language = 'de';

export const slugTranslation: { [key in Language]: { [key: string]: string | undefined } } = {
  'de': {
    '/about': '/ueber-uns'
  },
  'en': {
  }
}
