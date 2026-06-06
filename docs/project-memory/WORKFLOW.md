# Development Workflow

## Temel Yaklaşım

Bu proje küçük, kontrollü ve doğrulanabilir fazlarla ilerlemelidir.

Büyük tek promptlar yerine küçük görevler verilmelidir.

## Önerilen Fazlar

### Faz 0 — Project Foundation

Amaç:

- AGENTS.md
- project-memory dosyaları
- VSCode ayarları
- Copilot instructions

Bu paket bu fazı hazırlar.

### Faz 1 — Next.js Foundation

Amaç:

- Next.js App Router
- TypeScript
- ESLint
- Prettier
- temel klasör yapısı

### Faz 2 — I18N Foundation

Amaç:

- `/tr`, `/en`, `/ru`, `/de` route yapısı
- locale validation
- dictionary sistemi
- language switcher
- route mapping

### Faz 3 — Data Model

Amaç:

- `data/menu.ts`
- `data/site.ts`
- `data/gallery.ts`
- `formatPrice`
- content validation script

### Faz 4 — Layout and Design System

Amaç:

- Header
- Footer
- Container
- Button
- SectionTitle
- CSS variables / theme tokens
- mobile navigation

### Faz 5 — Pages

Amaç:

- Home
- Menu
- About
- Gallery
- Contact

### Faz 6 — SEO and Quality

Amaç:

- locale metadata
- canonical
- hreflang
- structured data
- image optimization
- build verification

## Branch Önerileri

```txt
feat/project-foundation
feat/i18n-routing
feat/design-system
feat/menu-data-model
feat/homepage
feat/menu-page
feat/contact-gallery
feat/seo-structured-data
```

## Commit Mesajları

Örnek:

```txt
chore: add project governance files
feat: add multilingual route foundation
feat: add data-driven menu model
feat: build Flamingo homepage sections
fix: prevent hard-coded nav labels
```

## Her Görevden Önce

Agent'a şu talimat verilmeli:

```txt
Before editing, read AGENTS.md and the relevant docs under /docs/project-memory.
Inspect existing files before creating new files.
Do not modify unrelated files.
```

## Her Görevden Sonra

Agent şunları raporlamalı:

- Değişen dosyalar
- Ne değişti
- Çalışan kontroller
- Build/lint/typecheck sonucu
- Riskler
- Sonraki önerilen adım

## Kalite Komutları

`package.json` içinde şu scriptler olmalı:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "quality:check": "npm run lint && npm run typecheck && npm run build"
  }
}
```

Mevcut Next.js sürümüne göre `next lint` desteklenmiyorsa ESLint komutu proje standardına göre güncellenmelidir.
