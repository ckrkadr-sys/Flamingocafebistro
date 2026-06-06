# Prompt Library

Bu dosya Codex/Gemini/Copilot Chat gibi agentlara verilecek standart prompt şablonlarını içerir.

## 1. Standart Görev Promptu

```txt
Before starting:
- Read AGENTS.md.
- Read /docs/project-memory/PROJECT_BRIEF.md.
- Read /docs/project-memory/DECISIONS.md.
- Read the relevant project-memory document for this task.
- Inspect existing files before editing.

Task:
[Buraya görevi yaz]

Rules:
- Do not hard code user-visible text.
- Do not change unrelated files.
- Do not introduce new architecture.
- Keep the change minimal and consistent.
- Keep all supported locales working: tr, en, ru, de.
- Keep menu data-driven.

After finishing:
- Run lint.
- Run typecheck.
- Run build if relevant.
- Report changed files and verification results.
```

## 2. I18N Görevi Promptu

```txt
You are working on the Flamingo Cafe&Bistro i18n system.

Before editing, read:
- AGENTS.md
- /docs/project-memory/I18N_RULES.md
- /docs/project-memory/DECISIONS.md

Task:
[Buraya i18n görevi]

Important rules:
- No user-visible text may be hard coded in components.
- All UI text must come from dictionaries.
- Supported locales are tr, en, ru, de.
- Keep route structure locale-prefixed.
- Do not create a second i18n system.

After finishing, verify that all locales have the required keys.
```

## 3. Menü Data Görevi Promptu

```txt
You are working on the Flamingo Cafe&Bistro menu data model.

Before editing, read:
- AGENTS.md
- /docs/project-memory/MENU_DATA_MODEL.md
- /docs/project-memory/I18N_RULES.md

Task:
[Buraya menü/data görevi]

Rules:
- Menu items must stay data-driven.
- Do not put menu items inside components.
- Prices must be numeric.
- Each product must support tr, en, ru, de names and descriptions.
- Category labels must support tr, en, ru, de.
- Do not create duplicate product sources.
```

## 4. UI Component Görevi Promptu

```txt
You are working on Flamingo Cafe&Bistro UI components.

Before editing, read:
- AGENTS.md
- /docs/project-memory/DESIGN_SYSTEM.md
- /docs/project-memory/COMPONENT_RULES.md
- /docs/project-memory/I18N_RULES.md

Task:
[Buraya UI görevi]

Rules:
- Keep the design colorful, bold and image-heavy.
- Do not make the brand look like an ice cream shop.
- Keep the UX mobile-first and practical.
- Do not hard code text.
- Use reusable components where appropriate.
- Do not add heavy animation or unnecessary slider libraries.
```

## 5. SEO Görevi Promptu

```txt
You are working on Flamingo Cafe&Bistro SEO.

Before editing, read:
- AGENTS.md
- /docs/project-memory/SEO_RULES.md
- /docs/project-memory/I18N_RULES.md

Task:
[Buraya SEO görevi]

Rules:
- Metadata must be locale-based.
- Add/keep canonical and hreflang.
- Add/keep LocalBusiness/Restaurant structured data.
- Do not hard code SEO text inside page components.
- Do not duplicate SEO helpers.
```

## 6. Final Review Promptu

```txt
Review the current Flamingo Cafe&Bistro codebase as a senior project lead.

Read:
- AGENTS.md
- /docs/project-memory/DECISIONS.md
- /docs/project-memory/DEFINITION_OF_DONE.md

Check for:
- Hard coded user-visible text
- Duplicate i18n systems
- Duplicate menu data sources
- Component bloat
- Page files that are too large
- Missing locales
- Price values stored as strings
- Unnecessary dependencies
- SEO/hreflang issues
- Mobile usability risks

Do not modify files yet.
Return a prioritized issue list with recommended fixes.
```
