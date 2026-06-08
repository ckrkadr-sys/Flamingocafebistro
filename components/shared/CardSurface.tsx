import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type CardSurfaceProps = Readonly<
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    padded?: boolean;
    interactive?: boolean;
  }
>;

export function CardSurface({
  children,
  className,
  padded = true,
  interactive = false,
  ...props
}: CardSurfaceProps) {
  return (
    <div
      className={cn(
        "ui-card-surface",
        padded && "ui-card-surface--padded",
        interactive && "ui-card-surface--interactive",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
