import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getVisibleMenuSections } from "./menuSections.ts";

const categories = [
  {
    id: "kahvalti",
    order: 10,
    title: "Kahvalti",
  },
  {
    description: "Coffee drinks",
    id: "kahveler",
    order: 20,
    title: "Kahveler",
  },
  {
    id: "tatlilar",
    order: 30,
    title: "Tatlilar",
  },
] as const;

const items = [
  {
    categoryId: "kahvalti",
    id: "menemen",
    name: "Menemen",
    order: 10,
    price: 320,
  },
  {
    categoryId: "kahveler",
    description: "Cold coffee",
    id: "iced-latte",
    name: "Iced Latte",
    order: 20,
    price: 170,
  },
  {
    categoryId: "tatlilar",
    id: "tiramisu",
    name: "Tiramisu",
    order: 30,
    price: 220,
  },
] as const;

describe("getVisibleMenuSections", () => {
  it("returns all printed menu chapters when search is empty", () => {
    const sections = getVisibleMenuSections({
      categories,
      items,
      locale: "tr",
      searchQuery: "",
    });

    assert.deepEqual(
      sections.map((section) => ({
        categoryId: section.categoryId,
        categoryIndex: section.categoryIndex,
        categoryTitle: section.categoryTitle,
        itemIds: section.items.map((item) => item.id),
      })),
      [
        {
          categoryId: "kahvalti",
          categoryIndex: 1,
          categoryTitle: "Kahvalti",
          itemIds: ["menemen"],
        },
        {
          categoryId: "kahveler",
          categoryIndex: 2,
          categoryTitle: "Kahveler",
          itemIds: ["iced-latte"],
        },
        {
          categoryId: "tatlilar",
          categoryIndex: 3,
          categoryTitle: "Tatlilar",
          itemIds: ["tiramisu"],
        },
      ],
    );
  });

  it("hides empty chapters when search is active", () => {
    const sections = getVisibleMenuSections({
      categories,
      items,
      locale: "tr",
      searchQuery: "cold",
    });

    assert.deepEqual(
      sections.map((section) => ({
        categoryDescription: section.categoryDescription,
        categoryId: section.categoryId,
        categoryIndex: section.categoryIndex,
        categoryTitle: section.categoryTitle,
        itemIds: section.items.map((item) => item.id),
      })),
      [
        {
          categoryDescription: "Coffee drinks",
          categoryId: "kahveler",
          categoryIndex: 2,
          categoryTitle: "Kahveler",
          itemIds: ["iced-latte"],
        },
      ],
    );
  });
});
