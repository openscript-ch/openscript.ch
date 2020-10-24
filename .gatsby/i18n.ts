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

export const contentTranslation: Translation = {
  'de': {
    'meta.title': 'openscript GmbH',
    'meta.hello': 'Hallo Welt!'

  },
  'en': {
    'meta.title': 'openscript GmbH',
    'meta.hello': 'Hello World!'
  }
}
