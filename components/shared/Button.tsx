import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils/cn";

type ButtonBaseProps = Readonly<{
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
}>;

type ButtonLinkProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    disabled?: boolean;
  };

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = ButtonLinkProps | NativeButtonProps;

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    className,
  );

  if (typeof props.href === "string") {
    const { disabled, href, ...linkProps } = props;

    if (disabled) {
      return (
        <span aria-disabled="true" className={classes}>
          {children}
        </span>
      );
    }

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
