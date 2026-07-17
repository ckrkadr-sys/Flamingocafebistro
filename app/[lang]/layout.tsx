import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { FloatingContactActions } from "@/components/layout/FloatingContactActions";
import { Header } from "@/components/layout/Header";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale, supportedLocales } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>;

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <SiteChrome
      floatingActions={<FloatingContactActions dictionary={dictionary} />}
      header={<Header dictionary={dictionary} locale={lang} />}
      homePath={getLocalizedPath(lang, "home")}
    >
      {children}
    </SiteChrome>
  );
}
