import type { ReactNode } from "react";

import "./globals.css";

import { defaultLocale } from "@/lib/i18n/locales";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
