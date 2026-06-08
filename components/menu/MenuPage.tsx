"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import type {
  LocalizedMenuCategory,
  LocalizedMenuItem,
} from "@/lib/menu/menuHelpers";

import { MenuCategoryTabs } from "./MenuCategoryTabs";
import { MenuEmptyState } from "./MenuEmptyState";
import { MenuGrid } from "./MenuGrid";
import { MenuSearch } from "./MenuSearch";

type MenuPageProps = Readonly<{
  categories: readonly LocalizedMenuCategory[];
  dictionary: Dictionary["menu"];
  initialCategoryId?: string;
  items: readonly LocalizedMenuItem[];
  locale: Locale;
}>;

const allCategoryId = "all";

export function MenuPage({
  categories,
  dictionary,
  initialCategoryId,
  items,
  locale,
}: MenuPageProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    initialCategoryId ?? allCategoryId,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const categoryTitleById = useMemo(
    () =>
      new Map(
        categories.map((category) => [category.id, category.title] as const),
      ),
    [categories],
  );
  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase(locale);

    return items
      .filter((item) =>
        selectedCategoryId === allCategoryId
          ? true
          : item.categoryId === selectedCategoryId,
      )
      .filter((item) => {
        if (!normalizedQuery) {
          return true;
        }

        const searchableText = [item.name, item.description ?? ""]
          .join(" ")
          .toLocaleLowerCase(locale);

        return searchableText.includes(normalizedQuery);
      })
      .map((item) => ({
        ...item,
        categoryTitle:
          categoryTitleById.get(item.categoryId) ?? item.categoryId,
      }));
  }, [categoryTitleById, items, locale, searchQuery, selectedCategoryId]);

  function handleSelectCategory(categoryId: string) {
    setSelectedCategoryId(categoryId);

    if (categoryId === allCategoryId) {
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    window.history.replaceState(
      null,
      "",
      `?category=${encodeURIComponent(categoryId)}`,
    );
  }

  return (
    <main className="menu-page">
      <Section className="menu-hero" spacing="compact">
        <Container className="menu-hero__inner">
          <SectionTitle
            description={dictionary.intro}
            eyebrow={dictionary.eyebrow}
            title={dictionary.title}
          />
          <MenuSearch
            clearLabel={dictionary.clearSearchLabel}
            label={dictionary.searchLabel}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
            placeholder={dictionary.searchPlaceholder}
            value={searchQuery}
          />
        </Container>
      </Section>

      <Section className="menu-listing" spacing="compact">
        <Container>
          <MenuCategoryTabs
            allLabel={dictionary.allCategoriesLabel}
            categories={categories}
            label={dictionary.categoryFilterLabel}
            onSelectCategory={handleSelectCategory}
            selectedCategoryId={selectedCategoryId}
          />
          {filteredItems.length > 0 ? (
            <MenuGrid dictionary={dictionary} items={filteredItems} />
          ) : (
            <MenuEmptyState
              message={dictionary.emptyMessage}
              title={dictionary.emptyTitle}
            />
          )}
        </Container>
      </Section>
    </main>
  );
}
