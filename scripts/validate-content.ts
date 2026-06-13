import { galleryCategories, galleryItems } from "../data/gallery.ts";
import { menuCategories, menuItems } from "../data/menu.ts";
import { siteConfig, weekdays } from "../data/site.ts";
import { dictionaries, requiredDictionarySections } from "../lib/i18n/dictionaries.ts";
import { localeLabels, supportedLocales } from "../lib/i18n/locales.ts";
import { primaryNavRouteKeys, routeKeys } from "../lib/i18n/routes.ts";

const failures: string[] = [];
const warnings: string[] = [];
const requiredHomeTextKeys = [
  "atmosphereActionLabel",
  "atmosphereDescription",
  "atmosphereEyebrow",
  "atmosphereImageLabel",
  "atmosphereTitle",
  "categoriesDescription",
  "categoriesEyebrow",
  "categoriesTitle",
  "categoryActionLabel",
  "galleryActionLabel",
  "galleryDescription",
  "galleryEyebrow",
  "galleryTitle",
  "heroDescription",
  "heroFallbackAction",
  "heroImageLabel",
  "heroPrimaryAction",
  "heroSecondaryAction",
  "heroTitle",
  "locationActionLabel",
  "locationDescription",
  "locationEyebrow",
  "locationPending",
  "locationTitle",
  "popularActionLabel",
  "popularDescription",
  "popularEyebrow",
  "popularTitle",
  "title",
] as const;
const requiredMenuTextKeys = [
  "allCategoriesLabel",
  "categoryFilterLabel",
  "clearSearchLabel",
  "emptyMessage",
  "emptyTitle",
  "eyebrow",
  "intro",
  "newBadgeLabel",
  "popularBadgeLabel",
  "searchLabel",
  "searchPlaceholder",
  "title",
] as const;
const requiredAboutTextKeys = [
  "ctaContactLabel",
  "ctaMenuLabel",
  "ctaText",
  "ctaTitle",
  "experienceEyebrow",
  "experienceImageLabel",
  "experienceText",
  "experienceTitle",
  "eyebrow",
  "heroImageLabel",
  "intro",
  "storyEyebrow",
  "storyText",
  "storyTitle",
  "title",
  "valuesEyebrow",
  "valuesTitle",
] as const;
const requiredGalleryTextKeys = [
  "allCategoriesLabel",
  "categoryFilterLabel",
  "emptyMessage",
  "emptyTitle",
  "eyebrow",
  "intro",
  "title",
] as const;
const requiredContactTextKeys = [
  "actionsTitle",
  "addressLabel",
  "detailsTitle",
  "emailLabel",
  "eyebrow",
  "intro",
  "mapEmbedTitle",
  "mapPlaceholderDescription",
  "mapPlaceholderTitle",
  "mapTitle",
  "openingHoursTitle",
  "phoneLabel",
  "socialLabel",
  "title",
  "unavailableLabel",
] as const;
const requiredContactActionLabelKeys = [
  "phone",
  "whatsapp",
  "directions",
  "instagram",
  "email",
] as const;
const requiredFooterTextKeys = [
  "addressLabel",
  "brandAreaLabel",
  "closedLabel",
  "contactActionsTitle",
  "contactTitle",
  "copyright",
  "detailsPending",
  "navigationLabel",
  "openingHoursTitle",
  "phoneLabel",
  "socialTitle",
] as const;
const requiredCommonTextKeys = [
  "floatingContactActionsLabel",
  "languageSwitcherLabel",
  "mobileMenuCloseLabel",
  "mobileMenuOpenLabel",
  "primaryNavigationLabel",
] as const;
const guardedHomeUiTextKeys = [
  "headerCateringLabel",
  "headerCtaLabel",
  "headerEventsLabel",
  "headerShopLabel",
  "heroSecondaryAction",
  "visitBadge",
  "visitDescription",
  "visitTitle",
] as const;
const forbiddenHeaderTextPatterns = [
  { label: "CATERING", pattern: /\bcatering\b/i },
  { label: "EVENTS", pattern: /\bevents?\b/i },
  { label: "SHOP", pattern: /\bshop\b/i },
  { label: "RESERVATIONS", pattern: /\breservations?\b/i },
  { label: "Book a table", pattern: /\bbook a table\b/i },
] as const;
const expectedPrimaryNavRouteKeys = ["home", "menu", "contact"] as const;

if (primaryNavRouteKeys.join(",") !== expectedPrimaryNavRouteKeys.join(",")) {
  failures.push("Primary header navigation must stay limited to home, menu and contact");
}

for (const locale of supportedLocales) {
  const dictionary = dictionaries[locale];

  if (!dictionary) {
    failures.push(`Missing dictionary for locale: ${locale}`);
    continue;
  }

  if (!localeLabels[locale]) {
    failures.push(`Missing locale label for locale: ${locale}`);
  }

  for (const section of requiredDictionarySections) {
    if (!dictionary[section]) {
      failures.push(`Missing "${section}" dictionary section for locale: ${locale}`);
    }
  }

  for (const routeKey of routeKeys) {
    if (!dictionary.nav[routeKey]) {
      failures.push(`Missing nav label "${routeKey}" for locale: ${locale}`);
    }

    if (!dictionary.seo[routeKey]?.title) {
      failures.push(`Missing SEO title "${routeKey}" for locale: ${locale}`);
    }

    if (!dictionary.seo[routeKey]?.description) {
      failures.push(`Missing SEO description "${routeKey}" for locale: ${locale}`);
    }
  }

  for (const homeKey of requiredHomeTextKeys) {
    validateRequiredText(`dictionary ${locale} home ${homeKey}`, dictionary.home[homeKey]);
  }

  const guardedHomeDictionary = dictionary.home as Record<string, unknown>;

  for (const homeKey of guardedHomeUiTextKeys) {
    validateNoForbiddenHeaderText(
      `dictionary ${locale} home ${homeKey}`,
      guardedHomeDictionary[homeKey],
    );
  }

  for (const menuKey of requiredMenuTextKeys) {
    validateRequiredText(`dictionary ${locale} menu ${menuKey}`, dictionary.menu[menuKey]);
  }

  const aboutDictionary = dictionary.about as Record<
    (typeof requiredAboutTextKeys)[number],
    string
  > & {
    valueItems?: readonly { description?: string; title?: string }[];
  };

  for (const aboutKey of requiredAboutTextKeys) {
    validateRequiredText(
      `dictionary ${locale} about ${aboutKey}`,
      aboutDictionary[aboutKey],
    );
  }

  const aboutValueItems = aboutDictionary.valueItems ?? [];

  if (aboutValueItems.length !== 5) {
    failures.push(`Dictionary ${locale} about valueItems must contain 5 items`);
  }

  aboutValueItems.forEach((valueItem, index) => {
    validateRequiredText(
      `dictionary ${locale} about value item ${index + 1} title`,
      valueItem.title,
    );
    validateRequiredText(
      `dictionary ${locale} about value item ${index + 1} description`,
      valueItem.description,
    );
  });

  for (const galleryKey of requiredGalleryTextKeys) {
    validateRequiredText(`dictionary ${locale} gallery ${galleryKey}`, dictionary.gallery[galleryKey]);
  }

  for (const category of galleryCategories) {
    validateRequiredText(`dictionary ${locale} gallery category ${category}`, dictionary.gallery.categoryLabels[category]);
  }

  for (const contactKey of requiredContactTextKeys) {
    validateRequiredText(`dictionary ${locale} contact ${contactKey}`, dictionary.contact[contactKey]);
  }

  for (const actionKey of requiredContactActionLabelKeys) {
    validateRequiredText(
      `dictionary ${locale} contact action label ${actionKey}`,
      dictionary.contact.actionLabels[actionKey],
    );
  }

  for (const footerKey of requiredFooterTextKeys) {
    validateRequiredText(`dictionary ${locale} footer ${footerKey}`, dictionary.footer[footerKey]);
  }

  for (const weekday of weekdays) {
    validateRequiredText(`dictionary ${locale} weekday ${weekday}`, dictionary.footer.weekdays[weekday]);
  }

  for (const commonKey of requiredCommonTextKeys) {
    validateRequiredText(`dictionary ${locale} common ${commonKey}`, dictionary.common[commonKey]);
  }

  for (const action of siteConfig.primaryContactActions) {
    validateRequiredText(
      `dictionary ${locale} contact action label ${action.type}`,
      dictionary.common.contactActionLabels[action.type],
    );
  }
}

const categoryIds = new Set<string>();
const categoryOrders = new Set<number>();

for (const category of menuCategories) {
  if (categoryIds.has(category.id)) {
    failures.push(`Duplicate menu category id: ${category.id}`);
  }

  categoryIds.add(category.id);

  if (categoryOrders.has(category.order)) {
    failures.push(`Duplicate menu category order: ${category.order}`);
  }

  categoryOrders.add(category.order);

  if (!Number.isFinite(category.order)) {
    failures.push(`Menu category "${category.id}" order must be a finite number`);
  }

  for (const locale of supportedLocales) {
    const translation = category.translations[locale];

    if (!translation) {
      failures.push(`Missing menu category "${category.id}" translation for locale: ${locale}`);
      continue;
    }

    if (!translation.title.trim()) {
      failures.push(`Missing menu category "${category.id}" title for locale: ${locale}`);
    }
  }
}

const itemIds = new Set<string>();

for (const item of menuItems) {
  if (itemIds.has(item.id)) {
    failures.push(`Duplicate menu item id: ${item.id}`);
  }

  itemIds.add(item.id);

  if (!categoryIds.has(item.categoryId)) {
    failures.push(`Menu item "${item.id}" references unknown categoryId: ${item.categoryId}`);
  }

  if (!Number.isFinite(item.price) || item.price < 0) {
    failures.push(`Menu item "${item.id}" price must be a finite non-negative number`);
  }

  if (item.id.startsWith("starter-") || item.tags?.includes("starter-sample")) {
    warnings.push(`Menu item "${item.id}" is starter/sample data`);
  }

  const productImagePath = item.imagePath ?? item.image;

  if (!productImagePath) {
    warnings.push(`Menu item "${item.id}" has no product image`);
  } else {
    if (!productImagePath.startsWith("/")) {
      failures.push(`Menu item "${item.id}" product image path must start with /`);
    }

    if (productImagePath.includes("/placeholders/")) {
      failures.push(`Menu item "${item.id}" must not use a placeholder product image`);
    }
  }

  for (const locale of supportedLocales) {
    const translation = item.translations[locale];

    if (!translation) {
      failures.push(`Missing menu item "${item.id}" translation for locale: ${locale}`);
      continue;
    }

    if (!translation.name.trim()) {
      failures.push(`Missing menu item "${item.id}" name for locale: ${locale}`);
    }
  }
}

function validateRequiredText(name: string, value: unknown) {
  if (typeof value !== "string" || !value.trim()) {
    failures.push(`Missing site data field: ${name}`);
  }
}

function validateNoForbiddenHeaderText(name: string, value: unknown) {
  if (typeof value !== "string") {
    return;
  }

  for (const forbiddenText of forbiddenHeaderTextPatterns) {
    if (forbiddenText.pattern.test(value)) {
      failures.push(
        `${name} must not expose out-of-scope header text: ${forbiddenText.label}`,
      );
    }
  }
}

function validateSiteFact(name: string, fact: { value: string | null; isPlaceholder: boolean; note?: string }) {
  if (fact.isPlaceholder && !fact.note?.trim()) {
    failures.push(`Site data field "${name}" is placeholder but has no note`);
  }

  if (fact.isPlaceholder) {
    warnings.push(`Site data field "${name}" is still marked as placeholder`);
  }

  if (fact.value === null) {
    return;
  }

  if (!fact.value.trim()) {
    failures.push(`Missing site data field: ${name}`);
  }

  if (fact.value.includes("PLACEHOLDER") && !fact.isPlaceholder) {
    failures.push(`Site data field "${name}" uses a placeholder value but is not marked as placeholder`);
  }

}

validateRequiredText("businessName", siteConfig.businessName);
validateRequiredText("shortBrandName", siteConfig.shortBrandName);
validateRequiredText("logoPath", siteConfig.logoPath);
validateRequiredText("defaultHeroImagePath", siteConfig.defaultHeroImagePath);

if (!siteConfig.logoPath.startsWith("/")) {
  failures.push("Site logoPath must start with /");
}

if (siteConfig.logoPath.includes("/placeholders/")) {
  warnings.push(`Site logoPath uses placeholder asset path: ${siteConfig.logoPath}`);
}

if (!siteConfig.defaultHeroImagePath.startsWith("/")) {
  failures.push("Site defaultHeroImagePath must start with /");
}

if (siteConfig.defaultHeroImagePath.includes("/placeholders/")) {
  warnings.push(
    `Site defaultHeroImagePath uses placeholder asset path: ${siteConfig.defaultHeroImagePath}`,
  );
}

validateSiteFact("address", siteConfig.address);
validateSiteFact("phoneNumber", siteConfig.phoneNumber);
validateSiteFact("whatsAppNumber", siteConfig.whatsAppNumber);
validateSiteFact("email", siteConfig.email);
validateSiteFact("instagram.handle", siteConfig.instagram.handle);
validateSiteFact("instagram.url", siteConfig.instagram.url);
validateSiteFact("googleMapsUrl", siteConfig.googleMapsUrl);
validateSiteFact("googleMapsEmbedUrl", siteConfig.googleMapsEmbedUrl);

if (siteConfig.whatsAppNumber.value !== null) {
  failures.push("WhatsApp number must remain disabled for this project phase");
}

if (siteConfig.openingHours.days.length !== 7) {
  failures.push("Site opening hours must define all 7 weekdays");
}

const openingHourDays = new Set(siteConfig.openingHours.days.map((day) => day.day));

for (const weekday of weekdays) {
  if (!openingHourDays.has(weekday)) {
    failures.push(`Site opening hours missing weekday: ${weekday}`);
  }
}

for (const day of siteConfig.openingHours.days) {
  if (day.ranges.length === 0 && !day.isClosed && !day.isPlaceholder) {
    failures.push(`Opening hours for "${day.day}" need ranges, closed state, or placeholder marking`);
  }

  if (day.isPlaceholder && !day.note?.trim()) {
    failures.push(`Opening hours for "${day.day}" are placeholder but have no note`);
  }

  if (day.isPlaceholder) {
    warnings.push(`Opening hours for "${day.day}" are still marked as placeholder`);
  }
}

for (const socialLink of siteConfig.socialLinks) {
  validateRequiredText(`social link id ${socialLink.id}`, socialLink.id);
  validateSiteFact(`social link ${socialLink.id} url`, socialLink.url);
}

for (const action of siteConfig.primaryContactActions) {
  validateRequiredText(`contact action id ${action.id}`, action.id);
  validateSiteFact(`contact action ${action.id} href`, action.href);

  if (action.type === "whatsapp") {
    failures.push("WhatsApp contact actions must not be enabled");
  }

  if (action.href.value?.includes("wa.me")) {
    failures.push(`Contact action "${action.id}" must not use a WhatsApp URL`);
  }

  if (action.value) {
    validateSiteFact(`contact action ${action.id} value`, action.value);
  }
}

const galleryIds = new Set<string>();
const galleryOrders = new Set<number>();

for (const item of galleryItems) {
  if (galleryIds.has(item.id)) {
    failures.push(`Duplicate gallery item id: ${item.id}`);
  }

  galleryIds.add(item.id);

  if (!item.src.startsWith("/")) {
    failures.push(`Gallery item "${item.id}" src must start with /`);
  }

  if (item.id.startsWith("placeholder-") || item.src.includes("/placeholders/")) {
    warnings.push(`Gallery item "${item.id}" uses a placeholder visual asset`);
  }

  if (!galleryCategories.includes(item.category)) {
    failures.push(`Gallery item "${item.id}" uses invalid category: ${item.category}`);
  }

  if (typeof item.order === "number") {
    if (!Number.isFinite(item.order)) {
      failures.push(`Gallery item "${item.id}" order must be a finite number`);
    }

    if (galleryOrders.has(item.order)) {
      failures.push(`Duplicate gallery item order: ${item.order}`);
    }

    galleryOrders.add(item.order);
  }

  for (const locale of supportedLocales) {
    const alt = item.alt[locale];

    if (!alt?.trim()) {
      failures.push(`Missing gallery item "${item.id}" alt text for locale: ${locale}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Content validation failed:");

  for (const failure of failures) {
    console.error(`- ${failure}`);
  }

  process.exit(1);
}

console.log("Content validation passed.");

if (warnings.length > 0) {
  console.warn("Content readiness warnings:");

  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
}
