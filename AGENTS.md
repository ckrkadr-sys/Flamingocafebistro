# AGENTS.md — Flamingo Cafe&Bistro

## Role

You are working as a senior full-stack engineer and project lead for the Flamingo Cafe&Bistro website.

Your job is to keep the codebase clean, consistent, scalable, fast and easy to maintain. Do not improvise new architecture unless the user explicitly asks for it.

## Project Summary

Flamingo Cafe&Bistro is a multilingual cafe-bistro website.

The design direction is inspired by the colorful, bold, image-heavy and category-focused layout style of the reference website Sweet Jesus. However, Flamingo must not look like an ice cream shop, dessert-only brand or franchise dessert chain. Flamingo must feel like a modern cafe-bistro.

The main product focus is a clear, useful, price-visible menu and practical contact/location access.

## Supported Locales

- Turkish: `tr`
- English: `en`
- Russian: `ru`
- German: `de`

Routes must be locale-prefixed:

- `/tr`
- `/en`
- `/ru`
- `/de`

Example localized pages:

- `/tr/menu`, `/en/menu`, `/ru/menu`, `/de/menu`
- `/tr/about`, `/en/about`, `/ru/about`, `/de/about`
- `/tr/gallery`, `/en/gallery`, `/ru/gallery`, `/de/gallery`
- `/tr/contact`, `/en/contact`, `/ru/contact`, `/de/contact`

## Non-Negotiable Rules

- Do not hard code any user-visible text inside React components.
- All user-visible text must come from the i18n dictionary system.
- Product names and product descriptions must come from menu data translations.
- Menu products must be data-driven.
- Prices must be stored as numeric values, not strings.
- The menu page must show prices.
- Do not emphasize the website as a QR menu.
- Do not create an admin panel in v1 unless explicitly requested.
- Do not create online order, payment or reservation features in v1 unless explicitly requested.
- Keep the website mobile-first, fast, accessible and easy to update.
- Do not add unnecessary dependencies.
- Do not create duplicate systems.

## Architecture Rules

- Use Next.js App Router.
- Use TypeScript.
- Keep page files thin.
- Use reusable components.
- Keep business/data logic outside UI components.
- Keep menu data in one source of truth.
- Keep site/contact/gallery data in dedicated data files.
- Do not introduce a second i18n system.
- Do not place menu arrays directly inside page or component files.
- Do not create one-off components when a reusable shared component is appropriate.

## File Creation Rules

Before creating a new file:

1. Check whether an existing file already owns that responsibility.
2. Do not create duplicate data sources.
3. Do not create a second menu model.
4. Do not create a second route registry.
5. Do not create a second translation/dictionary system.
6. Do not create temporary files in the repository root.
7. Put documentation under `/docs/project-memory`.
8. Put reusable UI under `/components/shared`.
9. Put layout components under `/components/layout`.
10. Put page-specific UI under the related feature folder.

## Expected Project Structure

```txt
app/
  [lang]/
    page.tsx
    menu/
      page.tsx
    about/
      page.tsx
    gallery/
      page.tsx
    contact/
      page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
    LanguageSwitcher.tsx
  home/
    HomeHero.tsx
    HomeCategories.tsx
    PopularItems.tsx
    LocationStrip.tsx
  menu/
    MenuPageClient.tsx
    MenuCategoryTabs.tsx
    MenuSearch.tsx
    MenuCard.tsx
  shared/
    Button.tsx
    Container.tsx
    SectionTitle.tsx

data/
  menu.ts
  site.ts
  gallery.ts

lib/
  i18n/
    locales.ts
    dictionaries.ts
    getDictionary.ts
    routes.ts
  seo/
    metadata.ts
    structuredData.ts
  utils/
    cn.ts
    formatPrice.ts

docs/
  project-memory/
```

## Before Editing

Before making changes:

1. Read this `AGENTS.md` file.
2. Read `/docs/project-memory/PROJECT_BRIEF.md`.
3. Read `/docs/project-memory/DECISIONS.md`.
4. Read the relevant project-memory document for the task.
5. Inspect existing files before creating or editing files.
6. Prefer minimal, targeted changes.

## After Editing

After making changes:

1. Run lint.
2. Run typecheck.
3. Run build if routing, metadata, shared components or data models changed.
4. Summarize changed files.
5. Explain what was verified.
6. Mention risks or follow-up tasks.

## Definition of Done

A task is complete only when:

- The change follows the existing architecture.
- No user-visible text is hard coded.
- All supported locales are handled.
- The page works on mobile and desktop.
- Menu data remains data-driven.
- No unrelated files are modified.
- No unnecessary dependency is added.
- Lint/typecheck/build are run when applicable.
