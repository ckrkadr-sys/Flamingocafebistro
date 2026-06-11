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
  return (
    <section className="home-hero-v2">
      <div className="home-hero-v2__grid">
        <div className="home-hero__content">
          <div className="home-hero-v2__script-row">
            <span aria-hidden="true" className="home-hero-v2__sparkle" />
            <p className="home-script-label">{dictionary.home.heroScriptLabel}</p>
            <span aria-hidden="true" className="home-hero-v2__sparkle home-hero-v2__sparkle--right" />
          </div>
          <h1 className="home-hero-v2__title">{dictionary.home.heroTitle}</h1>
          <p className="home-hero-v2__ribbon">
            {dictionary.home.heroRibbonLabel}
          </p>
          <p className="home-hero__description">
            {dictionary.home.heroDescription}
          </p>
          <div className="home-hero__actions">
            <Link className="home-pill-button" href={getLocalizedPath(locale, "menu")}>
              {dictionary.home.heroPrimaryAction}
              <span aria-hidden="true">+</span>
            </Link>
            <Link
              className="home-pill-button home-pill-button--light"
              href={getLocalizedPath(locale, "contact")}
            >
              {dictionary.home.heroSecondaryAction}
              <span aria-hidden="true">+</span>
            </Link>
          </div>
          <span aria-hidden="true" className="home-hero-v2__palm" />
        </div>

        <div
          aria-label={dictionary.home.heroImageLabel}
          className="home-hero-v2__panel"
          role="img"
        >
          <div className="home-hero-v2__panel-copy">
            <span>{dictionary.home.heroPanelLine1}</span>
            <span>{dictionary.home.heroPanelLine2}</span>
            <span>{dictionary.home.heroPanelLine3}</span>
          </div>
          <span aria-hidden="true" className="home-hero-v2__panel-sparkle" />
          <div className="home-hero-v2__badge">
            <span>{dictionary.home.heroMoodBadgeTop}</span>
            <strong>{dictionary.home.heroMoodBadgeMiddle}</strong>
            <span>{dictionary.home.heroMoodBadgeBottom}</span>
          </div>
          <div className="home-hero-v2__scene">
            <span aria-hidden="true" className="home-hero-v2__plate" />
            <span aria-hidden="true" className="home-hero-v2__croissant" />
            <span aria-hidden="true" className="home-hero-v2__cup">
              <span />
            </span>
            <span aria-hidden="true" className="home-hero-v2__vase" />
            <span aria-hidden="true" className="home-hero-v2__stem" />
            <span aria-hidden="true" className="home-hero-v2__flower" />
          </div>
        </div>
      </div>
    </section>
  );
}
