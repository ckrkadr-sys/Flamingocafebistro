import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type AboutCtaProps = Readonly<{
  dictionary: Dictionary["about"];
  locale: Locale;
}>;

export function AboutCta({ dictionary, locale }: AboutCtaProps) {
  return (
    <Section className="about-cta" spacing="compact">
      <Container>
        <div className="about-cta__inner">
          <div className="about-cta__content">
            <h2 className="about-cta__title">{dictionary.ctaTitle}</h2>
            <p className="about-cta__text">{dictionary.ctaText}</p>
          </div>
          <div className="about-cta__actions">
            <Button href={getLocalizedPath(locale, "menu")}>
              {dictionary.ctaMenuLabel}
            </Button>
            <Button
              href={getLocalizedPath(locale, "contact")}
              variant="secondary"
            >
              {dictionary.ctaContactLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
