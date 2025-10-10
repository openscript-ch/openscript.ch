export const C = {
  // Key is the locale slug, value is the locale code
  LOCALES: { en: "en-US", de: "de-CH" },
  // Default locale referencing one of the keys in LOCALES
  DEFAULT_LOCALE: "de" as const,
  // Segment translations
  SEGMENT_TRANSLATIONS: {
    de: {
      past: "vergangenheit",
      present: "gegenwart",
      future: "zukunft",
    },
    en: {
      past: "past",
      present: "present",
      future: "future",
    },
  },
  // Page settings
  SETTINGS: {
    META: {
      TITLE: "openscript GmbH",
      EMAIL: "hi@openscript.ch",
      PHONE: "+41 44 520 54 67",
      ADDRESS: "Europa-Strasse 30",
      TOWN: "8152 Glattbrugg",
      MAPS_LINK: "https://www.openstreetmap.org/node/9428042241",
      LINKEDIN: "https://www.linkedin.com/company/openscript/",
      GITHUB: "https://github.com/openscript-ch",
    },
    BROWSER: {
      THEME_COLOR: "#fa5100",
    },
  },
} as const;

// Configuration helpers
export type Locale = keyof typeof C.LOCALES;
export const localeSlugs = Object.keys(C.LOCALES) as Locale[];
