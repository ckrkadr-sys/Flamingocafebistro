import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutPage as AboutPageUi } from "@/components/about/AboutPage";
import { getFeaturedGalleryItems } from "@/lib/gallery/galleryHelpers";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import { getSiteConfig } from "@/lib/site/siteHelpers";

type PageProps = Readonly<{
  params: Promise<{
    lang: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return getLocalizedMetadata(lang, "about");
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const site = getSiteConfig();
  const featuredGalleryItems = getFeaturedGalleryItems();
  const heroGalleryItem =
    featuredGalleryItems.find((item) => item.category === "venue") ??
    featuredGalleryItems.find((item) => item.category === "atmosphere");
  const experienceGalleryItem =
    featuredGalleryItems.find((item) => item.category === "food") ??
    featuredGalleryItems.find((item) => item.category === "drinks") ??
    heroGalleryItem;

  return (
    <AboutPageUi
      dictionary={dictionary.about}
      experienceImage={{
        alt: dictionary.about.experienceImageLabel,
        src: experienceGalleryItem?.src ?? site.defaultHeroImagePath,
      }}
      heroImage={{
        alt: dictionary.about.heroImageLabel,
        src: heroGalleryItem?.src ?? site.defaultHeroImagePath,
      }}
      locale={lang}
      site={site}
    />
  );
}
