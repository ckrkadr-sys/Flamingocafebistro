"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import type {
  LocalizedMenuCategory,
  LocalizedMenuItem,
} from "@/lib/menu/menuHelpers";
import { getVisibleMenuSections } from "@/lib/menu/menuSections";

import { MenuCategoryTabs } from "./MenuCategoryTabs";
import { MenuEmptyState } from "./MenuEmptyState";
import { getMenuSectionElementId, MenuGrid } from "./MenuGrid";
import { MenuSearch } from "./MenuSearch";

type MenuPageProps = Readonly<{
  categories: readonly LocalizedMenuCategory[];
  dictionary: Dictionary["menu"];
  initialCategoryId?: string;
  items: readonly LocalizedMenuItem[];
  locale: Locale;
}>;

export function MenuPage({
  categories,
  dictionary,
  initialCategoryId,
  items,
  locale,
}: MenuPageProps) {
  const initialActiveCategoryId = initialCategoryId ?? categories[0]?.id ?? "";
  const [activeCategoryId, setActiveCategoryId] = useState(
    initialActiveCategoryId,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const initialScrollHandledRef = useRef(false);

  const sections = useMemo(
    () =>
      getVisibleMenuSections({
        categories,
        items,
        locale,
        searchQuery,
      }),
    [categories, items, locale, searchQuery],
  );

  const visibleCategoryLinks = useMemo(
    () =>
      sections.map((section) => ({
        id: section.categoryId,
        targetId: getMenuSectionElementId(section.categoryId),
        title: section.categoryTitle,
      })),
    [sections],
  );

  const visibleActiveCategoryId = useMemo(() => {
    if (sections.some((section) => section.categoryId === activeCategoryId)) {
      return activeCategoryId;
    }

    return sections[0]?.categoryId ?? "";
  }, [activeCategoryId, sections]);

  const scrollToCategory = useCallback(
    (categoryId: string, updateUrl: boolean) => {
      const sectionElement = document.getElementById(
        getMenuSectionElementId(categoryId),
      );

      if (!sectionElement) {
        return;
      }

      setActiveCategoryId(categoryId);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      sectionElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("category", categoryId);
        window.history.replaceState(null, "", `${url.pathname}${url.search}`);
      }
    },
    [],
  );

  useEffect(() => {
    if (
      initialScrollHandledRef.current ||
      !initialCategoryId ||
      !sections.some((section) => section.categoryId === initialCategoryId)
    ) {
      return;
    }

    initialScrollHandledRef.current = true;
    const animationFrameId = window.requestAnimationFrame(() => {
      scrollToCategory(initialCategoryId, false);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [initialCategoryId, scrollToCategory, sections]);

  useEffect(() => {
    if (sections.length === 0) {
      return;
    }

    let animationFrameId = 0;

    function updateActiveCategory() {
      animationFrameId = 0;

      const isDesktopLayout = window.matchMedia("(min-width: 60rem)").matches;
      const activationOffset = isDesktopLayout ? 128 : 168;
      let nextActiveCategoryId = sections[0].categoryId;

      for (const section of sections) {
        const sectionElement = document.getElementById(
          getMenuSectionElementId(section.categoryId),
        );

        if (!sectionElement) {
          continue;
        }

        if (sectionElement.getBoundingClientRect().top <= activationOffset) {
          nextActiveCategoryId = section.categoryId;
        } else {
          break;
        }
      }

      setActiveCategoryId((currentCategoryId) =>
        currentCategoryId === nextActiveCategoryId
          ? currentCategoryId
          : nextActiveCategoryId,
      );
    }

    function requestActiveCategoryUpdate() {
      if (animationFrameId !== 0) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateActiveCategory);
    }

    window.addEventListener("scroll", requestActiveCategoryUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestActiveCategoryUpdate);
    requestActiveCategoryUpdate();

    return () => {
      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("scroll", requestActiveCategoryUpdate);
      window.removeEventListener("resize", requestActiveCategoryUpdate);
    };
  }, [sections]);

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
          {sections.length > 0 ? (
            <div className="menu-layout">
              <aside className="menu-layout__sidebar">
                <MenuCategoryTabs
                  activeCategoryId={visibleActiveCategoryId}
                  categories={visibleCategoryLinks}
                  label={dictionary.categoryFilterLabel}
                  onSelectCategory={(categoryId) =>
                    scrollToCategory(categoryId, true)
                  }
                />
              </aside>
              <div className="menu-layout__content">
                <MenuGrid dictionary={dictionary} sections={sections} />
              </div>
            </div>
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
