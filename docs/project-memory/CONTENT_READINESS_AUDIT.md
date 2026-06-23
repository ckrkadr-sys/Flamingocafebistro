# Content Readiness Audit

Phase: 11A - Content Readiness Audit Document

Date: 2026-06-11

## Current Status Summary

The site structure is ready for production content, but the actual public content is not production-ready yet.

- `npm run quality:check` is expected to pass with readiness warnings.
- `data/site.ts` still contains placeholder business/contact facts.
- `data/menu.ts` still contains starter/sample menu categories and products.
- Current menu items have numeric prices, but they are not final business prices.
- Current menu items do not have product images.
- `data/gallery.ts` still contains placeholder gallery asset records.
- `public/` currently has no real production image assets.
- `lib/i18n/dictionaries.ts` contains structurally complete UI copy for `tr`, `en`, `ru`, and `de`, but some copy is intentionally placeholder-safe.
- `scripts/validate-content.ts` already reports readiness warnings for starter menu data, missing product images, placeholder site data, placeholder contact actions, placeholder opening hours, and placeholder gallery assets.

This document is an audit only. It does not replace source data and does not define real business facts.

## 2026-06-23 Business Brief Update

The following business facts have now been provided and can be used to replace placeholder site data after implementation work begins:

- Business name: Flamingo Cafe & Bistro.
- Location: Fethiye, Çalış Sahil.
- Address: Foça, 1054. Sk. 62h, 48300 Fethiye/Muğla.
- Phone / WhatsApp: +90 543 212 25 43.
- Instagram handle: `@flamingocafe.bistro`.
- Opening hours: Every day 10:00-23:30.
- Email: do not publish an email address.
- Google Maps link: ready, but the exact approved public URL and embed URL must be used when updating `data/site.ts`.

These values should later replace the placeholder facts in `data/site.ts` and the related contact action URLs. WhatsApp must be presented as a contact channel, not as online ordering or reservation.

## Visual Assets Still Needed

The following real visual assets are still required:

- Logo.
- Hero image.
- Menu product images.
- Gallery images.
- About page supporting visuals.
- Contact page supporting visuals.
- Gallery page supporting visuals.

Images should be real Flamingo Cafe&Bistro assets or approved brand assets. Placeholder paths should remain placeholder-marked until real files are provided.

## Menu Data Still Needed

The v1 menu content will be sourced from Excel. Until that import/replacement task is executed, the following production menu content is still required in the repository:

- Final categories from Excel.
- Final product names from Excel.
- Final numeric prices from Excel.
- Final product descriptions.
- Final product images.
- Translations for `tr`, `en`, `ru`, and `de`.

Menu content must remain in the existing menu data model in `data/menu.ts`. Product names and descriptions must stay inside menu data translations, not the dictionary.

## Suggested Public Image Folder Structure

Recommended structure:

```txt
public/
  images/
    brand/
      flamingo-logo.svg
      flamingo-logo-mark.svg
    hero/
      flamingo-hero-01.webp
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
    pages/
      about/
      contact/
      gallery/
```

Final folder names should follow the confirmed menu and gallery category IDs.

## Suggested Image Naming Convention

Use lowercase kebab-case filenames with stable, descriptive names.

- Logo: `flamingo-logo.svg`
- Hero: `flamingo-hero-01.webp`
- Menu products: `<product-id>.webp` inside the matching category folder.
- Gallery images: `flamingo-<category>-01.webp`, `flamingo-<category>-02.webp`.
- Page visuals: `flamingo-about-01.webp`, `flamingo-contact-01.webp`, `flamingo-gallery-01.webp`.

Example paths:

```txt
/images/brand/flamingo-logo.svg
/images/hero/flamingo-hero-01.webp
/images/menu/burgers/flamingo-burger.webp
/images/gallery/venue/flamingo-venue-01.webp
/images/pages/about/flamingo-about-01.webp
```

Use optimized `.webp` for photos where possible. Keep SVG for logo assets when vector source is available.

## Safe Replacement Order

Recommended order once verified content is provided:

1. Confirm exact implementation values for Google Maps public/embed URLs and Instagram profile URL.
2. Add real logo and hero assets under `public/images/brand/` and `public/images/hero/`.
3. Update `data/site.ts` with verified business facts and mark only verified values as non-placeholder.
4. Add real gallery and page-supporting images under `public/images/gallery/` and `public/images/pages/`.
5. Update `data/gallery.ts` with real image paths, category assignments, order, featured flags, dimensions, and localized alt text.
6. Confirm final menu categories and product list.
7. Add real menu product images under `public/images/menu/`.
8. Replace starter menu data in `data/menu.ts` with final categories, products, numeric prices, image paths, and `tr`/`en`/`ru`/`de` translations.
9. Review dictionary copy for production wording, especially home, about, contact, gallery, and SEO text.
10. Run `npm run quality:check`.

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
- Logo or brand assets.
- Founder story, awards, dates, sourcing claims, local claims, or other factual business claims.

Only replace placeholders with verified information from the business or approved source files.

## Recommended Next Phase

Recommended next phase: Phase 11B - Real Content Collection and Handoff.

Scope:

- Collect verified business information.
- Collect final menu data with prices and all required translations.
- Collect approved production image assets.
- Confirm the final category structure.
- Prepare a controlled Phase 12 implementation task for replacing placeholder data and assets without redesigning the UI.
