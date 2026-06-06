import { dictionaries, requiredDictionarySections } from "../lib/i18n/dictionaries.ts";
import { localeLabels, supportedLocales } from "../lib/i18n/locales.ts";
import { routeKeys } from "../lib/i18n/routes.ts";

const failures: string[] = [];

for (const locale of supportedLocales) {
  const dictionary = dictionaries[locale];

  if (!dictionary) {
    failures.push(`Missing dictionary for locale: ${locale}`);
    continue;
  }

  if (!localeLabels[locale]) {
    failures.push(`Missing locale label for locale: ${locale}`);
  }

  for (const section of requiredDictionarySections) {
    if (!dictionary[section]) {
      failures.push(`Missing "${section}" dictionary section for locale: ${locale}`);
    }
  }

  for (const routeKey of routeKeys) {
    if (!dictionary.nav[routeKey]) {
      failures.push(`Missing nav label "${routeKey}" for locale: ${locale}`);
    }

    if (!dictionary.seo[routeKey]?.title) {
      failures.push(`Missing SEO title "${routeKey}" for locale: ${locale}`);
    }

    if (!dictionary.seo[routeKey]?.description) {
      failures.push(`Missing SEO description "${routeKey}" for locale: ${locale}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Content validation failed:");

  for (const failure of failures) {
    console.error(`- ${failure}`);
  }

  process.exit(1);
}

console.log("Content validation passed.");
