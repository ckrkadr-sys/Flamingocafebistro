import Link from "next/link";

import { CardSurface } from "@/components/shared/CardSurface";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import type { LocalizedMenuCategory } from "@/lib/menu/menuHelpers";
import { getLocalizedPath } from "@/lib/i18n/routes";

type HomeCategoryHighlightsProps = Readonly<{
  categories: readonly LocalizedMenuCategory[];
  dictionary: Dictionary;
  locale: Locale;
}>;

export function HomeCategoryHighlights({
  categories,
  dictionary,
  locale,
}: HomeCategoryHighlightsProps) {
  return (
    <Section className="home-section home-categories">
      <Container>
        <SectionTitle
          description={dictionary.home.categoriesDescription}
          eyebrow={dictionary.home.categoriesEyebrow}
          title={dictionary.home.categoriesTitle}
        />
        <div className="home-category-grid">
          {categories.map((category) => (
            <Link
              className="home-category-card"
              href={`${getLocalizedPath(locale, "menu")}?category=${category.id}`}
              key={category.id}
            >
              <CardSurface className="home-category-card__surface" interactive>
                <span aria-hidden="true" className="home-category-card__visual">
                  <span className="home-category-card__visual-shape" />
                  <span className="home-category-card__visual-shape" />
                </span>
                <div className="home-category-card__content">
                  <h3 className="home-card-title">{category.title}</h3>
                  {category.description ? (
                    <p className="home-card-description">{category.description}</p>
                  ) : null}
                  <span className="home-card-action">
                    {dictionary.home.categoryActionLabel}
                  </span>
                </div>
              </CardSurface>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
