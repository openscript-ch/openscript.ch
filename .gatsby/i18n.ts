export const languages = ['de', 'en'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'de';
export type Translation = { [key in Language]: { [key: string]: string } };

export const slugTranslation: Translation = {
  'de': {
    '/about': '/ueber-uns'
  },
  'en': {
  }
}

export const localeTranslation: { [key in Language]: string } = {
  'de': 'Deutsch',
  'en': 'English'
}

export const contentTranslation: Translation = {
  'de': {
    ...localeTranslation,
    'meta.languageName': 'Deutsch',
    'meta.title': 'openscript GmbH',
    'meta.hello': 'Hallo Welt!',

  },
  'en': {
    ...localeTranslation,
    'meta.languageName': 'English',
    'meta.title': 'openscript GmbH',
    'meta.hello': 'Hello World!'
  }
}
