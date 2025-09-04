export const C = {
  // Key is the locale slug, value is the locale code
  LOCALES: { en: "en-US", de: "de-CH" },
  // Default locale referencing one of the keys in LOCALES
  DEFAULT_LOCALE: "en" as const,
  // Segment translations
  SEGMENT_TRANSLATIONS: {
    de: {
      gallery: "galerie",
      projects: "projekte",
      blog: "blog",
      notes: "notizen",
    },
    en: {
      gallery: "gallery",
      projects: "projects",
      blog: "blog",
      notes: "notes",
    },
  },
  // Page settings
  SETTINGS: {
    META: {
      TITLE: "openscript GmbH",
      EMAIL: "hi@openscript.ch",
      PHONE: "+41 44 520 54 67",
    },
    BROWSER: {
      THEME_COLOR: "#663399",
    },
  },
} as const;

// Configuration helpers
export type Locale = keyof typeof C.LOCALES;
export const localeSlugs = Object.keys(C.LOCALES) as Locale[];
