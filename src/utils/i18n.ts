import { C } from "../site.config";

export function getNameFromLocale(locale: string) {
  const displayNames = new Intl.DisplayNames([locale], { type: "language" });
  return displayNames.of(locale);
}

export function parseLocale(locale?: string) {
  return locale && locale in C.LOCALES ? (locale as keyof typeof C.LOCALES) : C.DEFAULT_LOCALE;
}

export function getFullLocale(locale?: string) {
  return C.LOCALES[parseLocale(locale)];
}
