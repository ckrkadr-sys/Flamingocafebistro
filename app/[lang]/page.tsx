import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeAtmosphere } from "@/components/home/HomeAtmosphere";
import { HomeCategoryHighlights } from "@/components/home/HomeCategoryHighlights";
import { HomeGalleryPreview } from "@/components/home/HomeGalleryPreview";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLocationStrip } from "@/components/home/HomeLocationStrip";
import { HomePopularItems } from "@/components/home/HomePopularItems";
import {
  getFeaturedGalleryItems,
  getLocalizedGalleryAlt,
} from "@/lib/gallery/galleryHelpers";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";
import {
  getLocalizedCategory,
  getLocalizedMenuItem,
  getMenuCategories,
  getPopularMenuItems,
} from "@/lib/menu/menuHelpers";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import {
  getOpeningHours,
  getRenderableContactActions,
  getSiteConfig,
} from "@/lib/site/siteHelpers";

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

  return getLocalizedMetadata(lang, "home");
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const site = getSiteConfig();
  const contactActions = getRenderableContactActions();
  const categories = getMenuCategories().map((category) =>
    getLocalizedCategory(category, lang),
  );
  const popularItems = getPopularMenuItems().map((item) =>
    getLocalizedMenuItem(item, lang),
  );
  const featuredGalleryItems = getFeaturedGalleryItems();
  const atmosphereImage =
    featuredGalleryItems.find((item) => item.category === "atmosphere") ??
    featuredGalleryItems.find((item) => item.category === "venue");
  const atmosphere = atmosphereImage
    ? {
        alt: getLocalizedGalleryAlt(atmosphereImage, lang),
        src: atmosphereImage.src,
      }
    : {
        alt: dictionary.home.atmosphereImageLabel,
        src: site.defaultHeroImagePath,
      };
  const galleryPreviewItems = featuredGalleryItems.map((item) => ({
    alt: getLocalizedGalleryAlt(item, lang),
    id: item.id,
    src: item.src,
  }));

  return (
    <main className="home-page">
      <HomeHero
        contactActions={contactActions}
        dictionary={dictionary}
        locale={lang}
        site={site}
      />
      <HomeCategoryHighlights
        categories={categories}
        dictionary={dictionary}
        locale={lang}
      />
      <HomePopularItems
        dictionary={dictionary}
        items={popularItems}
        locale={lang}
      />
      <HomeAtmosphere
        dictionary={dictionary}
        image={atmosphere}
        locale={lang}
      />
      <HomeGalleryPreview
        dictionary={dictionary}
        items={galleryPreviewItems}
        locale={lang}
      />
      <HomeLocationStrip
        contactActions={contactActions}
        dictionary={dictionary}
        locale={lang}
        openingHours={getOpeningHours()}
        site={site}
      />
    </main>
  );
}
