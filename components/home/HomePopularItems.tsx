import Link from "next/link";

import { CardSurface } from "@/components/shared/CardSurface";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import type { LocalizedMenuItem } from "@/lib/menu/menuHelpers";
import { formatPrice } from "@/lib/utils/formatPrice";

type HomePopularItemsProps = Readonly<{
  dictionary: Dictionary;
  items: readonly LocalizedMenuItem[];
  locale: Locale;
}>;

export function HomePopularItems({
  dictionary,
  items,
  locale,
}: HomePopularItemsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section className="home-section home-popular">
      <Container>
        <div className="home-section__split-heading">
          <SectionTitle
            description={dictionary.home.popularDescription}
            eyebrow={dictionary.home.popularEyebrow}
            title={dictionary.home.popularTitle}
          />
          <Button href={getLocalizedPath(locale, "menu")} variant="secondary">
            {dictionary.home.popularActionLabel}
          </Button>
        </div>

        <div className="home-popular-grid">
          {items.slice(0, 3).map((item) => (
            <Link
              className="home-popular-card"
              href={`${getLocalizedPath(locale, "menu")}?category=${item.categoryId}`}
              key={item.id}
            >
              <CardSurface className="home-popular-card__surface" interactive>
                <div>
                  <h3 className="home-card-title">{item.name}</h3>
                  {item.description ? (
                    <p className="home-card-description">{item.description}</p>
                  ) : null}
                </div>
                <p className="home-popular-card__price">
                  {formatPrice(item.price)}
                </p>
              </CardSurface>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
