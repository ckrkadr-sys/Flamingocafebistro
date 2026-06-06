import { menuCategories, menuItems } from "../data/menu.ts";
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

const categoryIds = new Set<string>();
const categoryOrders = new Set<number>();

for (const category of menuCategories) {
  if (categoryIds.has(category.id)) {
    failures.push(`Duplicate menu category id: ${category.id}`);
  }

  categoryIds.add(category.id);

  if (categoryOrders.has(category.order)) {
    failures.push(`Duplicate menu category order: ${category.order}`);
  }

  categoryOrders.add(category.order);

  if (!Number.isFinite(category.order)) {
    failures.push(`Menu category "${category.id}" order must be a finite number`);
  }

  for (const locale of supportedLocales) {
    const translation = category.translations[locale];

    if (!translation) {
      failures.push(`Missing menu category "${category.id}" translation for locale: ${locale}`);
      continue;
    }

    if (!translation.title.trim()) {
      failures.push(`Missing menu category "${category.id}" title for locale: ${locale}`);
    }
  }
}

const itemIds = new Set<string>();

for (const item of menuItems) {
  if (itemIds.has(item.id)) {
    failures.push(`Duplicate menu item id: ${item.id}`);
  }

  itemIds.add(item.id);

  if (!categoryIds.has(item.categoryId)) {
    failures.push(`Menu item "${item.id}" references unknown categoryId: ${item.categoryId}`);
  }

  if (!Number.isFinite(item.price) || item.price < 0) {
    failures.push(`Menu item "${item.id}" price must be a finite non-negative number`);
  }

  for (const locale of supportedLocales) {
    const translation = item.translations[locale];

    if (!translation) {
      failures.push(`Missing menu item "${item.id}" translation for locale: ${locale}`);
      continue;
    }

    if (!translation.name.trim()) {
      failures.push(`Missing menu item "${item.id}" name for locale: ${locale}`);
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
