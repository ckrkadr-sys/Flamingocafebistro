export const supportedLocales = ["tr", "en", "ru", "de"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels = {
  tr: "TR",
  en: "EN",
  ru: "RU",
  de: "DE",
} as const satisfies Record<Locale, string>;

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    supportedLocales.includes(value as Locale)
  );
}

export function getValidatedLocale(value: unknown): Locale | null {
  return isLocale(value) ? value : null;
}
