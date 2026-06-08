import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPage as ContactPageUi } from "@/components/contact/ContactPage";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/locales";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import {
  getOpeningHours,
  getRenderableContactActions,
  getRenderableSocialLinks,
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

  return getLocalizedMetadata(lang, "contact");
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <ContactPageUi
      contactActions={getRenderableContactActions()}
      dictionary={dictionary}
      openingHours={getOpeningHours()}
      site={getSiteConfig()}
      socialLinks={getRenderableSocialLinks()}
    />
  );
}
