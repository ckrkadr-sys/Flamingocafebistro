import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import type { ContactAction, SiteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

import { HomeImageFrame } from "./HomeImageFrame";

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
  site,
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
    <Section className="home-hero" spacing="spacious">
      <Container className="home-hero__grid">
        <div className="home-hero__content">
          <p className="home-hero__brand">{site.businessName}</p>
          <h1 className="home-hero__title">{dictionary.home.heroTitle}</h1>
          <p className="home-hero__description">
            {dictionary.home.heroDescription}
          </p>
          <div className="home-hero__actions">
            <Button href={getLocalizedPath(locale, "menu")} size="lg">
              {dictionary.home.heroPrimaryAction}
            </Button>
            <Button
              href={secondaryHref}
              size="lg"
              variant="secondary"
              {...secondaryExternalProps}
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>

        <HomeImageFrame
          alt={dictionary.home.heroImageLabel}
          className="home-hero__image"
          priority
          src={site.defaultHeroImagePath}
        />
      </Container>
    </Section>
  );
}
