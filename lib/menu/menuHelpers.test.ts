import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { MenuCategory, MenuItem } from "../../data/menu.ts";
import { menuItems } from "../../data/menu.ts";
import {
  getLocalizedCategory,
  getLocalizedMenuItem,
} from "./menuHelpers.ts";

describe("menu localization helpers", () => {
  it("returns translated menu item names for the active locale", () => {
    const manti = menuItems.find(
      (item) => item.id === "manti-makarna-salata-bowl-manti",
    );

    assert.ok(manti);
    assert.equal(
      getLocalizedMenuItem(manti, "en").name,
      "Mantı (Turkish Dumplings)",
    );
    assert.equal(
      getLocalizedMenuItem(manti, "de").name,
      "Mantı (Türkische Teigtaschen)",
    );
    assert.equal(
      getLocalizedMenuItem(manti, "ru").name,
      "Манты (Турецкие Пельмени)",
    );
  });

  it("falls back to Turkish text when the active locale is missing or blank", () => {
    const category = {
      id: "fallback-category",
      order: 1,
      translations: {
        tr: {
          description: "Türkçe kategori açıklaması",
          title: "Türkçe Kategori",
        },
        en: {
          description: "",
          title: "",
        },
      } as MenuCategory["translations"],
    } satisfies MenuCategory;

    const item = {
      categoryId: "fallback-category",
      id: "fallback-item",
      order: 1,
      price: 1,
      translations: {
        tr: {
          description: "Türkçe ürün açıklaması",
          name: "Türkçe Ürün",
        },
        en: {
          description: "",
          name: "",
        },
      } as MenuItem["translations"],
    } satisfies MenuItem;

    assert.deepEqual(getLocalizedCategory(category, "en"), {
      description: "Türkçe kategori açıklaması",
      id: "fallback-category",
      order: 1,
      title: "Türkçe Kategori",
    });
    assert.deepEqual(getLocalizedMenuItem(item, "en"), {
      categoryId: "fallback-category",
      description: "Türkçe ürün açıklaması",
      id: "fallback-item",
      order: 1,
      price: 1,
      name: "Türkçe Ürün",
    });
  });
});
