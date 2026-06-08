import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionTitleProps = Readonly<{
  title: ReactNode;
  as?: Extract<ElementType, "h1" | "h2" | "h3">;
  eyebrow?: ReactNode;
  description?: ReactNode;
  className?: string;
}>;

export function SectionTitle({
  title,
  as: TitleTag = "h2",
  eyebrow,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("ui-section-title", className)}>
      {eyebrow ? (
        <p className="ui-section-title__eyebrow">{eyebrow}</p>
      ) : null}
      <TitleTag className="ui-section-title__title">{title}</TitleTag>
      {description ? (
        <p className="ui-section-title__description">{description}</p>
      ) : null}
    </div>
  );
}
