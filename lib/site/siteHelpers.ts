import { siteConfig } from "@/data/site";

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
