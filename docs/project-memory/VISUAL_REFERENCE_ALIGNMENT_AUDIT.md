# Visual Reference Alignment Audit

Phase: 11 - Visual Reference Alignment Audit

Date: 2026-06-11

Reference direction: [Sweet Jesus](https://www.sweetjesusicecream.com/)

## Current Visual Status Summary

The current Flamingo Cafe&Bistro UI is clean, mobile-first, data-driven, accessible, and consistent with the existing design system. It already has a warm cafe-bistro base, visible prices, practical menu browsing, reusable components, and no obvious QR-menu, admin, ordering, reservation, payment, CMS, or blog emphasis.

The main gap is visual strength. Compared with the reference direction, the current implementation still feels like a solid foundation layer: tidy cards, restrained spacing, placeholder-safe image blocks, and predictable sections. It does not yet feel bold, image-heavy, category-led, or energetic enough.

Browser visual QA was not available in this session because the in-app browser reported no available browser surfaces. This audit is based on code/design inspection of the implemented routes and components, plus the existing successful quality check baseline.

## What Already Matches The Reference Direction

- The site uses a colorful token palette with flamingo pink, coral, sky blue, mint, cream, and warm dark text.
- The homepage already follows the intended flow: hero, categories, popular items, atmosphere, gallery preview, location, and footer.
- Menu browsing is practical: category tabs, search, responsive cards, badges, and visible prices are implemented.
- Gallery and menu structures are category-based, which supports the reference-inspired product/category rhythm.
- Shared primitives keep the interface consistent across pages.
- Placeholder-safe image frames preserve layout without loading missing assets.
- The current brand positioning remains cafe-bistro oriented and does not read as dessert-only from copy or structure.

## What Feels Too Generic Or Too Weak

- The homepage hero is clean but not strong enough; it reads as a standard split hero rather than a memorable first visual moment.
- Category cards are mostly text cards, not bold category blocks.
- Popular item cards show names and prices but do not feel product-forward enough.
- Gallery cards are structurally correct but currently feel like a placeholder grid rather than an energetic visual showcase.
- Contact is useful and clear, but visually utilitarian.
- About is warm and appropriate, but needs stronger editorial/image rhythm.
- Header/footer are usable and simple, but the header could carry more brand personality without becoming noisy.
- Cards, borders, and shadows are consistent, but the whole UI still feels more like a foundation system than a finished cafe-bistro website.

## What Must Be Made Bolder And More Colorful

- Make the homepage hero larger, more image-led, and more memorable.
- Use stronger color bands and visual blocks across home sections.
- Turn category cards into bold category presentations with stronger scale, color, and image/media slots.
- Give menu cards larger media, clearer price treatment, and stronger product hierarchy.
- Make the gallery feel more like a social/visual showcase, not just a uniform card grid.
- Increase page-specific visual identity for Gallery, About, and Contact while keeping shared system consistency.
- Use playful rhythm through layout, color, and image scale rather than heavy animation or decorative clutter.

## What Must Stay Cafe-Bistro Oriented

- Keep coffee, breakfast, food, drinks, desserts, and warm atmosphere balanced.
- Avoid making pink the only dominant signal.
- Avoid visual cues that make the site feel like an ice cream shop, dessert chain, children's brand, or milkshake-only concept.
- Keep practical menu browsing and price visibility as the core product experience.
- Use food, coffee, venue, breakfast, drinks, and atmosphere imagery as soon as real assets are available.
- Keep typography bold but not novelty/franchise-dessert themed.
- Preserve mobile usability, fast scanning, clear CTAs, and accessible contrast.

## Page-By-Page Findings

### Home

The homepage has the right section order and a strong structural base. The hero, category highlights, popular items, atmosphere block, gallery preview, and location strip are all present and data-driven.

The hero should become the strongest visual moment in the site. It currently uses a clean split layout and placeholder frame, but the reference direction calls for a larger, bolder, image-forward first impression. The category section also needs stronger visual treatment: larger blocks, more color confidence, and eventual category imagery.

### Menu

The menu page is the most practically successful page. Search, category tabs, filtering, product cards, badges, and prices are clear. This already supports the main business goal.

The next phase should make the menu feel more product-led without hurting usability. Product cards should give more visual importance to media and price, and category navigation can become more prominent while staying easy to scan on mobile.

### Gallery

The gallery has the right data-driven category filter and responsive grid. It is ready for real assets.

It currently feels too placeholder-like and uniform. The next visual phase should add more rhythm through larger featured images, varied but controlled grid emphasis, and stronger category presentation. It must still avoid copying the reference site's assets, social content, or dessert-chain styling.

### Contact

The contact page is clear and useful. Quick actions, contact cards, opening hours, and map panel are well organized.

Visually, it is the most utilitarian page. The next phase should make it warmer and more brand-aligned through stronger section surfaces, map/venue visual treatment, and clearer hierarchy, while keeping contact actions fast and practical.

### About

The about page avoids dessert-only positioning and correctly frames Flamingo as a cafe-bistro. The hero, story, experience, values, and CTA structure are appropriate.

The page needs stronger editorial rhythm. The hero and experience image areas should feel more intentional, and value cards could become more visually distinctive without inventing unverified business claims.

### Header/Footer

Header and footer are simple, consistent, and usable. Navigation, language switching, brand link, footer contact slots, and mobile navigation are all in place.

The header could carry more Flamingo personality through bolder brand treatment, color, and active navigation states. The footer can stay practical but should feel more integrated with the visual language. Do not make either area heavy or distracting.

## Recommended Design Changes For The Next Implementation Phase

1. Strengthen the homepage hero with larger visual scale, stronger color blocking, and a more memorable composition.
2. Convert home category cards into bold category blocks that can later support category images.
3. Improve menu card hierarchy with larger media, stronger price treatment, and clearer category/product grouping.
4. Add more varied section rhythm using controlled color bands and stronger visual blocks.
5. Give gallery, about, and contact pages stronger page-specific visual presence while keeping the cafe-bistro tone.

## Safe Implementation Order

1. Tune global visual tokens and shared primitives in a controlled way.
2. Strengthen homepage hero and homepage category rhythm first.
3. Improve menu cards, category tabs, and product hierarchy while preserving search/filter behavior.
4. Refine gallery layout and visual rhythm without changing gallery data.
5. Refine about and contact page surfaces, hierarchy, and image treatment.
6. Polish header/footer brand energy and navigation states.
7. Run responsive checks on `/tr`, `/tr/menu`, `/tr/gallery`, `/tr/contact`, and `/tr/about`.
8. Run `npm run quality:check`.

## Specific Files Likely To Change In The Next Phase

- `app/globals.css`
- `components/shared/*`
- `components/home/*`
- `components/menu/*`
- `components/gallery/*`
- `components/about/*`
- `components/contact/*`
- `components/layout/*`

These files are listed for the next implementation phase only. This audit does not edit them.

## Risks To Avoid

- Do not copy exact code, layout values, images, assets, text, logo, icons, or branding from the reference site.
- Do not over-style the interface until it becomes noisy or slower to scan.
- Do not make Flamingo look like an ice cream shop, dessert-only brand, milkshake brand, children's brand, or franchise dessert chain.
- Do not break i18n or hard code user-visible text inside components.
- Do not touch `data/menu.ts`, `data/site.ts`, or `data/gallery.ts` for visual-only work.
- Do not add images, dependencies, admin panel, CMS, ordering, reservation, payment, QR-menu emphasis, or blog features.
- Do not damage mobile usability, tap target size, contrast, search/filter clarity, or price visibility.
- Do not let decorative color compete with the practical menu and contact goals.
