import {
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import type { Locale } from "@/lib/i18n/locales";

export function getGalleryItems() {
  return [...galleryItems].sort(
    (first, second) => (first.order ?? 0) - (second.order ?? 0),
  );
}

export function getFeaturedGalleryItems() {
  return getGalleryItems().filter((item) => item.featured);
}

export function getGalleryItemsByCategory(category: GalleryCategory) {
  return getGalleryItems().filter((item) => item.category === category);
}

export function getLocalizedGalleryAlt(item: GalleryItem, locale: Locale) {
  return item.alt[locale];
}
