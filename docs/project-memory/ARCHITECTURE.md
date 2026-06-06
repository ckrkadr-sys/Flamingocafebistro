# Architecture

## Hedef Mimari

Proje sade ama büyümeye uygun bir Next.js App Router mimarisiyle kurulmalıdır.

Ana prensipler:

- Page files thin olmalı.
- UI componentleri reusable olmalı.
- Data tek kaynaktan gelmeli.
- i18n tek sistemle yönetilmeli.
- SEO ayrı helper dosyalarında yönetilmeli.
- Menü, galeri ve işletme bilgileri data dosyalarından gelmeli.

## Önerilen Klasör Yapısı

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
```

## Sorumluluklar

### `app/[lang]`

Route ve sayfa girişleri burada olmalı. Sayfalar mümkün olduğunca kısa kalmalı.

### `components/layout`

Header, footer, language switcher gibi tüm siteyi ilgilendiren bileşenler.

### `components/home`

Ana sayfaya özel section bileşenleri.

### `components/menu`

Menü sayfasına özel bileşenler: arama, kategori tabları, kartlar.

### `components/shared`

Genel kullanılabilir küçük UI parçaları.

### `data`

Menü, galeri ve işletme bilgileri.

### `lib/i18n`

Locale listesi, dictionaries, route yardımcıları ve dictionary erişimi.

### `lib/seo`

Metadata, canonical, hreflang ve structured data yardımcıları.

## Yasaklar

- Component içinde menü datası yazma.
- Component içinde kullanıcıya görünen metin yazma.
- Aynı data için ikinci kaynak oluşturma.
- Aynı i18n sistemi için ikinci yol oluşturma.
- Sayfa dosyalarını büyük ve karmaşık hale getirme.
- İlgisiz değişiklik yapma.
