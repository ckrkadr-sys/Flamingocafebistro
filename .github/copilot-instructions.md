# GitHub Copilot Instructions — Flamingo Cafe&Bistro

This repository is a multilingual Next.js website for Flamingo Cafe&Bistro.

Follow these project rules:

- The brand is a modern cafe-bistro, not an ice cream shop or dessert-only brand.
- The visual direction is colorful, bold, image-heavy and category-focused.
- Supported locales are `tr`, `en`, `ru`, `de`.
- Use locale-prefixed routes: `/tr`, `/en`, `/ru`, `/de`.
- Do not hard code user-visible text in components.
- Use i18n dictionaries for all UI text, page copy, buttons, nav labels, footer copy, empty states and metadata.
- Keep menu items data-driven.
- Product names and descriptions must support all four locales.
- Prices must be numeric values in data files.
- Do not add admin panel, online order, payment or reservation features unless explicitly requested.
- Do not highlight the site as a QR menu.
- Keep components reusable and page files thin.
- Prioritize mobile-first responsive design, performance, accessibility and maintainability.
- Do not create duplicate systems for menu data, routes, translations or SEO.
