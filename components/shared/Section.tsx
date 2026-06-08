import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionProps = Readonly<
  HTMLAttributes<HTMLElement> & {
    children: ReactNode;
    spacing?: "compact" | "default" | "spacious";
  }
>;

export function Section({
  children,
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "ui-section",
        spacing === "compact" && "ui-section--compact",
        spacing === "spacious" && "ui-section--spacious",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
