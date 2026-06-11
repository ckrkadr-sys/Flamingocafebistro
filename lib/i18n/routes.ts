import { defaultLocale, isLocale, type Locale } from "./locales.ts";

export const routeKeys = ["home", "menu", "about", "gallery", "contact"] as const;

export type RouteKey = (typeof routeKeys)[number];

export const primaryNavRouteKeys = ["home", "menu", "contact"] as const satisfies readonly RouteKey[];

export const routeSegments = {
  home: "",
  menu: "menu",
  about: "about",
  gallery: "gallery",
  contact: "contact",
} as const satisfies Record<RouteKey, string>;

export function getLocalizedPath(locale: Locale, routeKey: RouteKey): `/${Locale}` | `/${Locale}/${string}` {
  const segment = routeSegments[routeKey];

  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function getRouteKeyFromPath(pathname: string): RouteKey {
  const cleanPath = pathname.split(/[?#]/)[0] ?? "";
  const segments = cleanPath.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const routeSegment = isLocale(firstSegment) ? segments[1] ?? "" : segments[0] ?? "";

  return (
    routeKeys.find((routeKey) => routeSegments[routeKey] === routeSegment) ??
    "home"
  );
}

export function getEquivalentLocalizedPath(pathname: string, targetLocale: Locale) {
  return getLocalizedPath(targetLocale, getRouteKeyFromPath(pathname));
}

export function getDefaultLocalizedPath(routeKey: RouteKey = "home") {
  return getLocalizedPath(defaultLocale, routeKey);
}
