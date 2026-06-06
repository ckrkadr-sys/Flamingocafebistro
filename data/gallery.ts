import type { Locale } from "../lib/i18n/locales.ts";

export const galleryCategories = [
  "venue",
  "food",
  "drinks",
  "desserts",
  "atmosphere",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: Record<Locale, string>;
  category: GalleryCategory;
  width?: number;
  height?: number;
  featured?: boolean;
  order?: number;
};

// Placeholder visual asset records for Phase 4 only. These paths document the
// intended asset slots; no real image files are added in this phase.
export const galleryItems: readonly GalleryItem[] = [
  {
    id: "placeholder-venue-01",
    src: "/images/placeholders/venue-01.webp",
    category: "venue",
    width: 1600,
    height: 1000,
    featured: true,
    order: 10,
    alt: {
      tr: "Flamingo Cafe&Bistro mekan görseli için yer tutucu",
      en: "Placeholder image for the Flamingo Cafe&Bistro venue",
      ru: "Изображение-заполнитель для помещения Flamingo Cafe&Bistro",
      de: "Platzhalterbild für den Flamingo Cafe&Bistro Innenraum",
    },
  },
  {
    id: "placeholder-food-01",
    src: "/images/placeholders/food-01.webp",
    category: "food",
    width: 1600,
    height: 1000,
    featured: true,
    order: 20,
    alt: {
      tr: "Flamingo Cafe&Bistro yemek görseli için yer tutucu",
      en: "Placeholder image for a Flamingo Cafe&Bistro food plate",
      ru: "Изображение-заполнитель для блюда Flamingo Cafe&Bistro",
      de: "Platzhalterbild für ein Flamingo Cafe&Bistro Gericht",
    },
  },
  {
    id: "placeholder-drink-01",
    src: "/images/placeholders/drink-01.webp",
    category: "drinks",
    width: 1200,
    height: 1600,
    featured: true,
    order: 30,
    alt: {
      tr: "Flamingo Cafe&Bistro içecek görseli için yer tutucu",
      en: "Placeholder image for a Flamingo Cafe&Bistro drink",
      ru: "Изображение-заполнитель для напитка Flamingo Cafe&Bistro",
      de: "Platzhalterbild für ein Flamingo Cafe&Bistro Getränk",
    },
  },
  {
    id: "placeholder-dessert-01",
    src: "/images/placeholders/dessert-01.webp",
    category: "desserts",
    width: 1600,
    height: 1000,
    order: 40,
    alt: {
      tr: "Flamingo Cafe&Bistro tatlı görseli için yer tutucu",
      en: "Placeholder image for a Flamingo Cafe&Bistro dessert",
      ru: "Изображение-заполнитель для десерта Flamingo Cafe&Bistro",
      de: "Platzhalterbild für ein Flamingo Cafe&Bistro Dessert",
    },
  },
  {
    id: "placeholder-atmosphere-01",
    src: "/images/placeholders/atmosphere-01.webp",
    category: "atmosphere",
    width: 1600,
    height: 1000,
    order: 50,
    alt: {
      tr: "Flamingo Cafe&Bistro atmosfer görseli için yer tutucu",
      en: "Placeholder image for the Flamingo Cafe&Bistro atmosphere",
      ru: "Изображение-заполнитель для атмосферы Flamingo Cafe&Bistro",
      de: "Platzhalterbild für die Flamingo Cafe&Bistro Atmosphäre",
    },
  },
] as const;
