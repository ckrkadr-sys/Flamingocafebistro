import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FeatureStrip } from "@/components/home/FeatureStrip";
import { HomeHero } from "@/components/home/HomeHero";
import { SignatureMenu } from "@/components/home/SignatureMenu";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";
import {
  getLocalizedMenuItem,
  getMenuItems,
} from "@/lib/menu/menuHelpers";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import {
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
  const signatureItems = getMenuItems().map((item) =>
    getLocalizedMenuItem(item, lang),
  );

  return (
    <main className="home-page">
      <HomeHero
        contactActions={contactActions}
        dictionary={dictionary}
        locale={lang}
        site={site}
      />
      <FeatureStrip dictionary={dictionary} />
      <SignatureMenu
        dictionary={dictionary}
        items={signatureItems}
        locale={lang}
      />
    </main>
  );
}
