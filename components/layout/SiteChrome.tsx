"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";

type SiteChromeProps = Readonly<{
  children: ReactNode;
  defaultFooter: ReactNode;
  defaultHeader: ReactNode;
  floatingActions: ReactNode;
  homeFooter: ReactNode;
  homeHeader: ReactNode;
  homePath: string;
}>;

export function SiteChrome({
  children,
  defaultFooter,
  defaultHeader,
  floatingActions,
  homeFooter,
  homeHeader,
  homePath,
}: SiteChromeProps) {
  const pathname = usePathname();
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const isHome = normalizedPath === homePath;

  return (
    <div className={cn("site-shell", isHome && "site-shell--home")}>
      {isHome ? homeHeader : defaultHeader}
      <div className="site-shell__content">{children}</div>
      {isHome ? homeFooter : defaultFooter}
      {isHome ? null : floatingActions}
    </div>
  );
}
