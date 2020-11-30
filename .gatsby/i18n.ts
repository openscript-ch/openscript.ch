export const languages = ['de', 'en'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'de';
export type Translation = { [key in Language]: { [key: string]: string } };

export const slugTranslation: Translation = {
  'de': {
    '/about': '/ueber-uns',
    '/imprint': '/impressum'
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
    ...slugTranslation.de,
    'meta.languageName': 'Deutsch',
    'meta.title': 'openscript GmbH',
    'page.index.title': 'Startseite',
    'page.index.section.values': 'Werte',
    'page.index.section.references': 'Referenzen',
    'page.index.section.offers': 'Angebote',
    'page.imprint.title': 'Impressum'
  },
  'en': {
    ...localeTranslation,
    ...slugTranslation.en,
    'meta.languageName': 'English',
    'meta.title': 'openscript GmbH',
    'page.index.title': 'Homepage',
    'page.index.section.values': 'Values',
    'page.index.section.references': 'References',
    'page.index.section.offers': 'Offers',
    'page.imprint.title': 'Imprint'
  }
}
