import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/shared/PageShell";
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

  return getLocalizedMetadata(lang, "menu");
}

export default async function MenuPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return <PageShell title={dictionary.menu.title} />;
}
