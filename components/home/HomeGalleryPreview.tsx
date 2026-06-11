import Link from "next/link";

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
    <section className="home-gallery-showcase">
      <div className="home-section-heading home-section-heading--with-action">
        <div>
          <p>{dictionary.home.galleryEyebrow}</p>
          <h2>{dictionary.home.galleryTitle}</h2>
        </div>
        <Link className="home-outline-button" href={getLocalizedPath(locale, "gallery")}>
          {dictionary.home.galleryActionLabel}
          <span aria-hidden="true">+</span>
        </Link>
      </div>

      <div className="home-gallery-showcase__grid">
        {items.slice(0, 6).map((item) => (
          <Link
            className="home-gallery-showcase__item"
            href={getLocalizedPath(locale, "gallery")}
            key={item.id}
          >
            <HomeImageFrame alt={item.alt} src={item.src} />
          </Link>
        ))}
      </div>

      <p className="home-gallery-showcase__description">
        {dictionary.home.galleryDescription}
      </p>
    </section>
  );
}
