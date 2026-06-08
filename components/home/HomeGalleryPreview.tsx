import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

import { HomeImageFrame } from "./HomeImageFrame";

type HomeGalleryPreviewItem = Readonly<{
  alt: string;
  id: string;
  src: string;
}>;

type HomeGalleryPreviewProps = Readonly<{
  dictionary: Dictionary;
  items: readonly HomeGalleryPreviewItem[];
  locale: Locale;
}>;

export function HomeGalleryPreview({
  dictionary,
  items,
  locale,
}: HomeGalleryPreviewProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section className="home-section home-gallery-preview">
      <Container>
        <div className="home-section__split-heading">
          <SectionTitle
            description={dictionary.home.galleryDescription}
            eyebrow={dictionary.home.galleryEyebrow}
            title={dictionary.home.galleryTitle}
          />
          <Button href={getLocalizedPath(locale, "gallery")} variant="secondary">
            {dictionary.home.galleryActionLabel}
          </Button>
        </div>

        <div className="home-gallery-preview__grid">
          {items.slice(0, 3).map((item) => (
            <Link
              className="home-gallery-preview__item"
              href={getLocalizedPath(locale, "gallery")}
              key={item.id}
            >
              <HomeImageFrame alt={item.alt} src={item.src} />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
