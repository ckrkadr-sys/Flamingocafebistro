import {
  menuCategories,
  menuItems,
  type MenuCategory,
  type MenuCategoryTranslation,
  type MenuItem,
  type MenuItemTranslation,
} from "../../data/menu.ts";
import type { Locale } from "../i18n/locales.ts";

export type LocalizedMenuCategory = Omit<MenuCategory, "translations"> &
  MenuCategory["translations"][Locale];

export type LocalizedMenuItem = Omit<MenuItem, "translations"> &
  MenuItem["translations"][Locale];

export function getMenuCategories() {
  return [...menuCategories].sort((first, second) => first.order - second.order);
}

export function getMenuItems() {
  return [...menuItems].sort((first, second) => first.order - second.order);
}

export function getMenuItemsByCategory(categoryId: string) {
  return getMenuItems().filter((item) => item.categoryId === categoryId);
}

export function getPopularMenuItems() {
  return getMenuItems().filter((item) => item.isPopular);
}

export function getMenuCategoryById(categoryId: string) {
  return menuCategories.find((category) => category.id === categoryId);
}

export function getLocalizedCategory(
  category: MenuCategory,
  locale: Locale,
): LocalizedMenuCategory {
  const { translations, ...categoryData } = category;
  const translation = getCategoryTranslation(translations, locale);

  return {
    ...categoryData,
    ...translation,
  };
}

export function getLocalizedMenuItem(
  item: MenuItem,
  locale: Locale,
): LocalizedMenuItem {
  const { translations, ...itemData } = item;
  const translation = getItemTranslation(translations, locale);

  return {
    ...itemData,
    ...translation,
  };
}

function getCategoryTranslation(
  translations: MenuCategory["translations"],
  locale: Locale,
): MenuCategoryTranslation {
  const fallback = translations.tr;
  const translation = translations[locale] ?? fallback;

  return {
    ...(translation.description?.trim()
      ? { description: translation.description }
      : fallback.description?.trim()
        ? { description: fallback.description }
        : {}),
    title: translation.title?.trim() ? translation.title : fallback.title,
  };
}

function getItemTranslation(
  translations: MenuItem["translations"],
  locale: Locale,
): MenuItemTranslation {
  const fallback = translations.tr;
  const translation = translations[locale] ?? fallback;

  return {
    ...(translation.description?.trim()
      ? { description: translation.description }
      : fallback.description?.trim()
        ? { description: fallback.description }
        : {}),
    name: translation.name?.trim() ? translation.name : fallback.name,
  };
}
