import type { Locale } from "@/lib/i18n/locales";
import type {
  LocalizedMenuCategory,
  LocalizedMenuItem,
} from "@/lib/menu/menuHelpers";
import type { MenuCategoryDisplayMode } from "@/lib/menu/menuDisplayModes";

import { getMenuCategoryDisplayMode } from "./menuDisplayModes.ts";

export type MenuSectionItem = LocalizedMenuItem & {
  categoryTitle: string;
};

export type MenuSection = Readonly<{
  categoryDescription?: string;
  categoryId: string;
  categoryIndex: number;
  categoryTitle: string;
  displayMode: MenuCategoryDisplayMode;
  items: readonly MenuSectionItem[];
}>;

type GetVisibleMenuSectionsInput = Readonly<{
  categories: readonly LocalizedMenuCategory[];
  items: readonly LocalizedMenuItem[];
  locale: Locale;
  searchQuery: string;
}>;

export function getVisibleMenuSections(
  { categories, items, locale, searchQuery }: GetVisibleMenuSectionsInput,
): readonly MenuSection[] {
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase(locale);
  const isSearchActive = normalizedQuery.length > 0;

  return categories
    .map((category, categoryIndex): MenuSection | null => {
      const sectionItems = items
        .filter((item) => item.categoryId === category.id)
        .filter((item) => {
          if (!isSearchActive) {
            return true;
          }

          const searchableText = [item.name, item.description ?? ""]
            .join(" ")
            .toLocaleLowerCase(locale);

          return searchableText.includes(normalizedQuery);
        })
        .map((item) => ({
          ...item,
          categoryTitle: category.title,
        }));

      if (sectionItems.length === 0) {
        return null;
      }

      return {
        categoryDescription: category.description,
        categoryId: category.id,
        categoryIndex: categoryIndex + 1,
        categoryTitle: category.title,
        displayMode: getMenuCategoryDisplayMode(category.id),
        items: sectionItems,
      };
    })
    .filter((section): section is MenuSection => section !== null);
}
