import { siteConfig, type ContactAction, type SiteFact, type SocialLink } from "@/data/site";

export function isRenderableSiteFact<TValue extends string | null>(
  fact: SiteFact<TValue>,
): fact is SiteFact<Exclude<TValue, null>> & {
  value: Exclude<TValue, null>;
} {
  return (
    !fact.isPlaceholder &&
    typeof fact.value === "string" &&
    fact.value.trim().length > 0 &&
    !fact.value.includes("PLACEHOLDER")
  );
}

export function isPlaceholderAssetPath(path: string) {
  return path.includes("/placeholders/") || path.includes("PLACEHOLDER");
}

export function getSiteConfig() {
  return siteConfig;
}

export function getContactActions() {
  return siteConfig.primaryContactActions;
}

export function getOpeningHours() {
  return siteConfig.openingHours;
}

export function getSocialLinks() {
  return siteConfig.socialLinks;
}

export function getRenderableContactActions(): readonly ContactAction[] {
  return siteConfig.primaryContactActions.filter((action) =>
    isRenderableSiteFact(action.href),
  );
}

export function getRenderableSocialLinks(): readonly SocialLink[] {
  return siteConfig.socialLinks.filter((socialLink) =>
    isRenderableSiteFact(socialLink.url),
  );
}
