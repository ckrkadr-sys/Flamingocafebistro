import { HomeImageFrame } from "@/components/home/HomeImageFrame";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { SiteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type AboutHeroProps = Readonly<{
  dictionary: Dictionary["about"];
  image: Readonly<{
    alt: string;
    src: string;
  }>;
  locale: Locale;
  site: SiteConfig;
}>;

export function AboutHero({
  dictionary,
  image,
  locale,
  site,
}: AboutHeroProps) {
  return (
    <Section className="about-hero" spacing="spacious">
      <Container className="about-hero__grid">
        <div className="about-hero__content">
          <p className="about-hero__brand">{site.businessName}</p>
          <SectionTitle
            as="h1"
            description={dictionary.intro}
            eyebrow={dictionary.eyebrow}
            title={dictionary.title}
          />
          <div className="about-hero__actions">
            <Button href={getLocalizedPath(locale, "menu")} size="lg">
              {dictionary.ctaMenuLabel}
            </Button>
            <Button
              href={getLocalizedPath(locale, "contact")}
              size="lg"
              variant="secondary"
            >
              {dictionary.ctaContactLabel}
            </Button>
          </div>
        </div>

        <HomeImageFrame
          alt={image.alt}
          className="about-hero__image"
          priority
          src={image.src}
        />
      </Container>
    </Section>
  );
}
