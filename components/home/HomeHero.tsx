import Link from "next/link";

import type { ContactAction, SiteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type HomeHeroProps = Readonly<{
  contactActions: readonly ContactAction[];
  dictionary: Dictionary;
  locale: Locale;
  site: SiteConfig;
}>;

export function HomeHero({
  dictionary,
  locale,
}: HomeHeroProps) {
  const menuPath = getLocalizedPath(locale, "menu");
  const heroCategoryLinks = [
    {
      categoryId: "kahvalti",
      label: dictionary.home.heroCategoryLinks.breakfast,
    },
    {
      categoryId: "kahveler",
      label: dictionary.home.heroCategoryLinks.coffees,
    },
    {
      categoryId: "tatlilar",
      label: dictionary.home.heroCategoryLinks.desserts,
    },
  ] as const;

  return (
    <section className="home-hero-v2" aria-labelledby="home-hero-title">
      <div className="home-hero-v2__inner">
        <div className="home-hero__content">
          <p className="home-hero-v2__eyebrow">{dictionary.home.heroEyebrow}</p>
          <h1 className="home-hero-v2__title" id="home-hero-title">
            {dictionary.home.heroTitle}
          </h1>
          <p className="home-hero__description">
            {dictionary.home.heroDescription}
          </p>
          <div className="home-hero__actions">
            <Link className="home-pill-button" href={menuPath}>
              {dictionary.home.heroPrimaryAction}
            </Link>
          </div>
          <nav
            aria-label={dictionary.home.heroCategoryNavLabel}
            className="home-hero-v2__categories"
          >
            <ul className="home-hero-v2__category-list">
              {heroCategoryLinks.map((category) => (
                <li key={category.categoryId}>
                  <Link href={`${menuPath}?category=${category.categoryId}`}>
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
