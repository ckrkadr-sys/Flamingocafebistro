import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GalleryPage as GalleryPageUi } from "@/components/gallery/GalleryPage";
import { galleryCategories } from "@/data/gallery";
import {
  getGalleryItems,
  getLocalizedGalleryAlt,
} from "@/lib/gallery/galleryHelpers";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";
import { getLocalizedMetadata } from "@/lib/seo/metadata";

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

  return getLocalizedMetadata(lang, "gallery");
}

export default async function GalleryPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const items = getGalleryItems().map((item) => ({
    alt: getLocalizedGalleryAlt(item, lang),
    category: item.category,
    featured: item.featured,
    height: item.height,
    id: item.id,
    src: item.src,
    width: item.width,
  }));

  return (
    <GalleryPageUi
      categories={galleryCategories}
      dictionary={dictionary.gallery}
      items={items}
    />
  );
}
