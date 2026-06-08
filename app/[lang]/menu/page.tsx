import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MenuPage } from "@/components/menu/MenuPage";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";
import {
  getLocalizedCategory,
  getLocalizedMenuItem,
  getMenuCategories,
  getMenuItems,
} from "@/lib/menu/menuHelpers";
import { getLocalizedMetadata } from "@/lib/seo/metadata";

type PageProps = Readonly<{
  params: Promise<{
    lang: string;
  }>;
  searchParams: Promise<{
    category?: string | string[];
  }>;
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return getLocalizedMetadata(lang, "menu");
}

export default async function MenuRoutePage({ params, searchParams }: PageProps) {
  const { lang } = await params;
  const { category } = await searchParams;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const categories = getMenuCategories().map((category) =>
    getLocalizedCategory(category, lang),
  );
  const items = getMenuItems().map((item) =>
    getLocalizedMenuItem(item, lang),
  );
  const requestedCategory = Array.isArray(category) ? category[0] : category;
  const initialCategoryId = categories.some(
    (menuCategory) => menuCategory.id === requestedCategory,
  )
    ? requestedCategory
    : undefined;

  return (
    <MenuPage
      categories={categories}
      dictionary={dictionary.menu}
      initialCategoryId={initialCategoryId}
      items={items}
      locale={lang}
    />
  );
}
