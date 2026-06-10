# Content Readiness Audit

Phase: 11 - Real Content and Placeholder Audit

Date: 2026-06-09

## Current Status Summary

The website architecture is ready for real production content, but the public-facing content is not production-ready yet.

Current implementation status:

- Localized routes exist for `tr`, `en`, `ru`, and `de`.
- Home, menu, gallery, contact, and about pages are implemented.
- User-visible UI text is centralized in `lib/i18n/dictionaries.ts`.
- Business facts are centralized in `data/site.ts`.
- Menu data is centralized in `data/menu.ts`.
- Gallery data is centralized in `data/gallery.ts`.
- `public/` exists, but no real public image assets are present.
- The site intentionally renders placeholder-safe visual treatments when placeholder image paths are used.

Do not treat the current business/contact/menu/gallery content as final production content.

## Business Information Checklist

Source file: `data/site.ts`

### Present But Should Be Verified

- [ ] `businessName`: currently `Flamingo Cafe&Bistro`.
- [ ] `shortBrandName`: currently `Flamingo`.
- [ ] `timezone`: currently `Europe/Istanbul`.

These values may be correct, but they should still be confirmed before final SEO and structured data work.

### Missing Or Placeholder

- [ ] Full street address.
- [ ] Public phone number.
- [ ] WhatsApp number in international format.
- [ ] Public email address, or explicit confirmation that no email should be shown.
- [ ] Instagram handle.
- [ ] Instagram profile URL.
- [ ] Google Maps public URL.
- [ ] Google Maps embed URL.
- [ ] Opening hours for all seven days.
- [ ] Closed days, if any.
- [ ] Logo asset path backed by a real file.
- [ ] Hero image asset path backed by a real file.
- [ ] Social link records with real URLs.
- [ ] Contact action URLs for phone, WhatsApp, directions, and Instagram.

### Current Placeholder Details

- `address.value`: `PLACEHOLDER_ADDRESS`
- `phoneNumber.value`: `PLACEHOLDER_PHONE_NUMBER`
- `whatsAppNumber.value`: `PLACEHOLDER_WHATSAPP_NUMBER`
- `email.value`: `null`
- `instagram.handle.value`: `PLACEHOLDER_INSTAGRAM_HANDLE`
- `instagram.url.value`: `PLACEHOLDER_INSTAGRAM_URL`
- `googleMapsUrl.value`: `PLACEHOLDER_GOOGLE_MAPS_URL`
- `googleMapsEmbedUrl.value`: `null`
- `openingHours.days`: all seven days are marked placeholder and have no ranges.
- `logoPath`: `/images/placeholders/logo.svg`
- `defaultHeroImagePath`: `/images/placeholders/hero-01.webp`

## Menu Data Checklist

Source file: `data/menu.ts`

### Current Menu Categories

The current categories are starter taxonomy data:

- `breakfast`
- `burgers`
- `pasta`
- `desserts`
- `hot-drinks`
- `cold-drinks`
- `frozen-milkshake`

These categories are suitable as a broad cafe-bistro starting point, but they must be confirmed against the real Flamingo menu.

### Current Menu Items

All current menu items are starter/sample records and must be replaced with real Flamingo menu items:

- `starter-breakfast-plate` - price `240`
- `starter-bistro-burger` - price `320`
- `starter-cream-pasta` - price `285`
- `starter-cafe-dessert` - price `180`
- `starter-latte` - price `120`
- `starter-iced-tea` - price `105`
- `starter-strawberry-milkshake` - price `165`

### Menu Replacement Requirements

- [ ] Replace sample categories with the real final category list.
- [ ] Replace all starter/sample products with real products.
- [ ] Provide numeric prices for every product.
- [ ] Provide product names for `tr`, `en`, `ru`, and `de`.
- [ ] Provide product descriptions for `tr`, `en`, `ru`, and `de` where descriptions should appear.
- [ ] Provide real product image filenames where images are available.
- [ ] Confirm which products are popular.
- [ ] Confirm which products are new, if any.
- [ ] Confirm allergen/tag strategy before publishing allergen data.
- [ ] Keep all menu products in `data/menu.ts`; do not create a second menu source.

### Current Translation Status

All current sample categories and sample items include translations for `tr`, `en`, `ru`, and `de`.

The translations are structurally complete, but the product names/descriptions are sample-safe text and are not real Flamingo menu content.

## Gallery Data Checklist

Source file: `data/gallery.ts`

### Current Gallery Categories

Current gallery categories:

- `venue`
- `food`
- `drinks`
- `desserts`
- `atmosphere`

These categories are suitable for final use unless the real content needs another grouping.

### Current Gallery Items

All current gallery items are placeholder visual records:

- `placeholder-venue-01` -> `/images/placeholders/venue-01.webp`
- `placeholder-food-01` -> `/images/placeholders/food-01.webp`
- `placeholder-drink-01` -> `/images/placeholders/drink-01.webp`
- `placeholder-dessert-01` -> `/images/placeholders/dessert-01.webp`
- `placeholder-atmosphere-01` -> `/images/placeholders/atmosphere-01.webp`

### Gallery Replacement Requirements

- [ ] Add real venue images.
- [ ] Add real food images.
- [ ] Add real drink images.
- [ ] Add real dessert images, if desserts remain a gallery category.
- [ ] Add real atmosphere/interior/exterior images.
- [ ] Replace placeholder gallery `src` values with real public asset paths.
- [ ] Replace placeholder-oriented alt text with descriptive real alt text in `tr`, `en`, `ru`, and `de`.
- [ ] Confirm which images should be `featured`.
- [ ] Confirm image order.

### Current Alt Text Status

All current gallery records include alt text for `tr`, `en`, `ru`, and `de`.

The alt text is structurally complete, but it describes placeholder images. It must be replaced once real images are provided.

## Public Asset Audit

Inspected path: `public/`

Current status:

- `public/` exists.
- No real files are currently present under `public/`.
- No real logo file exists.
- No real hero image exists.
- No real menu product images exist.
- No real gallery images exist.

The current data references paths such as `/images/placeholders/logo.svg`, but those files are not present. This is currently safe because the UI detects placeholder paths and renders generated placeholder surfaces instead of loading missing images in the relevant image components.

## Suggested Image Folder Structure

Recommended public asset structure:

```txt
public/
  images/
    brand/
      flamingo-logo.svg
      flamingo-logo-mark.svg
    hero/
      flamingo-hero-01.webp
      flamingo-hero-02.webp
    menu/
      breakfast/
      burgers/
      pasta/
      desserts/
      hot-drinks/
      cold-drinks/
      frozen-milkshake/
    gallery/
      venue/
      food/
      drinks/
      desserts/
      atmosphere/
```

This keeps brand, hero, menu, and gallery assets separate and makes data updates easier to review.

## Suggested Image Naming Convention

Use lowercase kebab-case filenames with stable, descriptive names.

Recommended patterns:

- Logo: `flamingo-logo.svg`
- Hero: `flamingo-hero-01.webp`
- Venue gallery: `flamingo-venue-01.webp`
- Food gallery: `flamingo-food-01.webp`
- Menu product: `<category-id>/<product-id>.webp`

Examples:

```txt
/images/brand/flamingo-logo.svg
/images/hero/flamingo-hero-01.webp
/images/gallery/venue/flamingo-venue-01.webp
/images/menu/burgers/flamingo-burger.webp
```

Use `.webp` for photos where possible. Keep source images high enough quality for responsive display, but optimize before committing.

## Dictionary Copy Audit

Source file: `lib/i18n/dictionaries.ts`

### Generic Or Placeholder-Safe Copy

The following copy is intentionally generic and should be reviewed after real business data is confirmed:

- Home hero and section copy describes a broad modern cafe-bistro experience.
- Home popular section copy mentions starter previews while real menu content is not final.
- Location/contact copy says details will be added soon.
- Contact map placeholder copy says the map will appear after verification.
- Gallery copy describes a flexible gallery area prepared for real visuals.
- About copy is neutral brand-positioning copy, not a real founder/history story.
- SEO descriptions currently use preparation-view language and are not production SEO copy.

### Copy That Can Likely Remain

The following can likely remain with minor polish:

- Navigation labels.
- Language switcher labels.
- Menu search labels and empty states.
- Gallery category labels if the category model remains the same.
- Contact action labels.
- Footer section labels.
- About values if the brand wants concise neutral positioning.

### Copy To Customize Later

Customize these after real business identity and data are confirmed:

- Home hero title and description.
- About page story and experience text.
- SEO title and description for each route and locale.
- Gallery alt text.
- Menu product names and descriptions.
- Any copy that refers to location, opening hours, social channels, or final menu categories.

## Safe Replacement Order

Use this order once real content is provided:

1. Confirm business identity basics: exact brand spelling, short name, address, phone, WhatsApp, Instagram, Google Maps, email policy, and opening hours.
2. Add real brand and hero assets under `public/images/brand/` and `public/images/hero/`.
3. Update `data/site.ts` with real business facts and set `isPlaceholder: false` only for verified values.
4. Add real gallery images under `public/images/gallery/`.
5. Update `data/gallery.ts` with real image paths, categories, featured flags, order, and localized alt text.
6. Confirm final menu categories and product list.
7. Add real menu product images under `public/images/menu/`.
8. Replace `data/menu.ts` starter sample categories/items with real menu data, numeric prices, localized names/descriptions, and image paths.
9. Review `lib/i18n/dictionaries.ts` for generic copy that should become brand/location-specific.
10. Run `npm run validate:content`, `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run quality:check`.
11. After content is real, proceed to SEO structured data, sitemap, robots, canonical, and hreflang work.

## What Must Not Be Invented

Do not invent or guess:

- Address.
- Phone number.
- WhatsApp number.
- Email address.
- Instagram handle or URL.
- Google Maps URL or embed URL.
- Opening hours.
- Product names.
- Product descriptions.
- Product prices.
- Product images.
- Gallery images.
- Founder story, awards, dates, claims, or location-specific facts.

Only replace placeholders with verified information provided by the business or already present in the repository.

## Recommended Next Phase

Recommended next phase after real data is provided:

Phase 12 - Real Business Data and Asset Integration

Scope:

- Add real public image assets.
- Replace placeholder site facts in `data/site.ts`.
- Replace gallery placeholder records in `data/gallery.ts`.
- Replace starter menu data in `data/menu.ts`.
- Update generic dictionary copy only where real data makes it more accurate.
- Keep all pages and UI structure unchanged unless real content exposes a layout issue.

After Phase 12, proceed to SEO productionization:

- Locale metadata polish.
- Canonical and hreflang.
- Sitemap and robots.
- LocalBusiness / Restaurant structured data.
