import { dictionaries } from "./dictionaries.ts";
import type { Locale } from "./locales.ts";

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
