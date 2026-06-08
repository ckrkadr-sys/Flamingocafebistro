import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps = Readonly<
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    width?: "default" | "narrow";
  }
>;

export function Container({
  children,
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "ui-container",
        width === "narrow" && "ui-container--narrow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
