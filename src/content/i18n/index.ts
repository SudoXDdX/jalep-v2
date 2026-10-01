// JALEP v2 — i18n Index
import { en } from "./en";
import { es } from "./es";

export type Locale = "pt" | "en" | "es";

const dictionaries: Record<Locale, unknown> = {
  pt: null, // uses default site.ts
  en,
  es,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};
