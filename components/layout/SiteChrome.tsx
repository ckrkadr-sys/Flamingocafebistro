"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";

type SiteChromeProps = Readonly<{
  children: ReactNode;
  floatingActions: ReactNode;
  header: ReactNode;
  homePath: string;
}>;

export function SiteChrome({
  children,
  floatingActions,
  header,
  homePath,
}: SiteChromeProps) {
  const pathname = usePathname();
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const isHome = normalizedPath === homePath;

  return (
    <div className={cn("site-shell", isHome && "site-shell--home")}>
      {header}
      <div className="site-shell__content">{children}</div>
      {isHome ? null : floatingActions}
    </div>
  );
}
