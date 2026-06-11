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
  contactActions,
  dictionary,
  locale,
}: HomeHeroProps) {
  const directionsAction = contactActions.find(
    (action) => action.type === "directions",
  );
  const secondaryHref =
    directionsAction?.href.value ?? getLocalizedPath(locale, "contact");
  const secondaryLabel = directionsAction
    ? dictionary.home.heroSecondaryAction
    : dictionary.home.heroFallbackAction;
  const secondaryExternalProps = directionsAction
    ? ({
        rel: "noreferrer",
        target: "_blank",
      } as const)
    : {};

  return (
    <section className="home-hero-v2">
      <div className="home-hero-v2__grid">
        <div className="home-hero__content">
          <p className="home-script-label">{dictionary.home.heroScriptLabel}</p>
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
              href={secondaryHref}
              {...secondaryExternalProps}
            >
              {secondaryLabel}
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
          <div className="home-hero-v2__badge">
            <span>{dictionary.home.heroMoodBadgeTop}</span>
            <strong>{dictionary.home.heroMoodBadgeMiddle}</strong>
            <span>{dictionary.home.heroMoodBadgeBottom}</span>
          </div>
          <div className="home-hero-v2__scene">
            <span aria-hidden="true" className="home-hero-v2__croissant" />
            <span aria-hidden="true" className="home-hero-v2__cup">
              <span />
            </span>
            <span aria-hidden="true" className="home-hero-v2__vase" />
            <span aria-hidden="true" className="home-hero-v2__flower" />
          </div>
        </div>
      </div>
    </section>
  );
}
