import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale, supportedLocales } from "@/lib/i18n/locales";

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
    <>
      <Header dictionary={dictionary} locale={lang} />
      {children}
    </>
  );
}
