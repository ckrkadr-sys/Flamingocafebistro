import { menuCategories, menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
import type { Locale } from "@/lib/i18n/locales";

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

  return {
    ...categoryData,
    ...translations[locale],
  };
}

export function getLocalizedMenuItem(
  item: MenuItem,
  locale: Locale,
): LocalizedMenuItem {
  const { translations, ...itemData } = item;

  return {
    ...itemData,
    ...translations[locale],
  };
}
