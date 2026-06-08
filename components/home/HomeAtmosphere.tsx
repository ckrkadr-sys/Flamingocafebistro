import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

import { HomeImageFrame } from "./HomeImageFrame";

type HomeAtmosphereProps = Readonly<{
  dictionary: Dictionary;
  image: Readonly<{
    alt: string;
    src: string;
  }>;
  locale: Locale;
}>;

export function HomeAtmosphere({
  dictionary,
  image,
  locale,
}: HomeAtmosphereProps) {
  return (
    <Section className="home-atmosphere" spacing="spacious">
      <Container className="home-atmosphere__grid">
        <HomeImageFrame
          alt={image.alt}
          className="home-atmosphere__image"
          src={image.src}
        />
        <div className="home-atmosphere__content">
          <SectionTitle
            description={dictionary.home.atmosphereDescription}
            eyebrow={dictionary.home.atmosphereEyebrow}
            title={dictionary.home.atmosphereTitle}
          />
          <Button href={getLocalizedPath(locale, "contact")} variant="secondary">
            {dictionary.home.atmosphereActionLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
