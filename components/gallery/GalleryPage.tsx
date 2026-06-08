"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { GalleryCategory } from "@/data/gallery";
import type { Dictionary } from "@/lib/i18n/dictionaries";

import { GalleryCategoryFilter } from "./GalleryCategoryFilter";
import { GalleryEmptyState } from "./GalleryEmptyState";
import { GalleryGrid } from "./GalleryGrid";
import type { GalleryCardItem } from "./GalleryCard";

type GalleryPageProps = Readonly<{
  categories: readonly GalleryCategory[];
  dictionary: Dictionary["gallery"];
  items: readonly GalleryCardItem[];
}>;

export function GalleryPage({
  categories,
  dictionary,
  items,
}: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    GalleryCategory | "all"
  >("all");
  const filteredItems = useMemo(
    () =>
      selectedCategory === "all"
        ? items
        : items.filter((item) => item.category === selectedCategory),
    [items, selectedCategory],
  );

  return (
    <main className="gallery-page">
      <Section className="gallery-hero" spacing="compact">
        <Container>
          <SectionTitle
            description={dictionary.intro}
            eyebrow={dictionary.eyebrow}
            title={dictionary.title}
          />
        </Container>
      </Section>

      <Section className="gallery-listing" spacing="compact">
        <Container>
          <GalleryCategoryFilter
            categories={categories}
            dictionary={dictionary}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          {filteredItems.length > 0 ? (
            <GalleryGrid dictionary={dictionary} items={filteredItems} />
          ) : (
            <GalleryEmptyState
              message={dictionary.emptyMessage}
              title={dictionary.emptyTitle}
            />
          )}
        </Container>
      </Section>
    </main>
  );
}
