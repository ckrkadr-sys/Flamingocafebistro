import type { MenuCategory } from "@/data/menu";

export type MenuCategoryDisplayMode =
  | "drink-text-list"
  | "food-media-list"
  | "text-list";

const foodMediaListCategoryIds = new Set<string>([
  "kahvalti",
  "tost-sandivic",
  "atistirmaliklar",
  "flamingo-ozel-lezzetler",
  "manti-makarna-salata-bowl",
  "tatlilar",
  "dondurma",
]);

const drinkTextListCategoryIds = new Set<string>([
  "kahveler",
  "caylar",
  "soguk-kahveler",
  "soguk-icecekler",
  "vitamin",
  "serinleticiler",
  "biralar",
  "alkollu-icecekler",
  "raki-sise-ickiler",
  "saraplar",
  "kokteyller",
  "shot",
  "frozen-icecekler",
]);

export function getMenuCategoryDisplayMode(
  categoryId: MenuCategory["id"],
): MenuCategoryDisplayMode {
  if (foodMediaListCategoryIds.has(categoryId)) {
    return "food-media-list";
  }

  if (drinkTextListCategoryIds.has(categoryId)) {
    return "drink-text-list";
  }

  return "text-list";
}
