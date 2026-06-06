# Component Rules

## Ana Prensip

Componentler küçük, anlaşılır, reusable ve görev odaklı olmalıdır.

## Genel Kurallar

- Page dosyaları ince kalmalı.
- UI componentleri data üretmemeli.
- Componentler mümkün olduğunca props almalı.
- Kullanıcıya görünen metin component içinde hard coded yazılmamalı.
- Component içinde menu item array oluşturulmamalı.
- Component içinde route map oluşturulmamalı.
- Tekrarlanan UI için shared component oluşturulmalı.

## Layout Components

`components/layout` altında olmalı:

- Header
- Footer
- LanguageSwitcher
- MobileNavigation

## Home Components

`components/home` altında olmalı:

- HomeHero
- HomeCategories
- PopularItems
- AtmosphereSection
- LocationStrip

## Menu Components

`components/menu` altında olmalı:

- MenuPageClient
- MenuSearch
- MenuCategoryTabs
- MenuCard
- MenuSection

## Shared Components

`components/shared` altında olmalı:

- Button
- Container
- SectionTitle
- Badge
- Card

## Client Component Kullanımı

Sadece gerçekten interaktif parçalar client component olmalıdır.

Client component olabilecekler:

- Menü arama
- Kategori filtresi
- Mobil menü aç/kapa
- Dil dropdown'ı gerekiyorsa

Server component kalabilecekler:

- Statik page layout
- SEO metadata
- Header/Footer temel render
- Galeri grid
- Hakkımızda sayfası

## Yasaklar

- Her section için gereksiz client component oluşturma.
- Büyük page dosyaları oluşturma.
- Aynı buton stilini tekrar tekrar yazma.
- Farklı componentlerde farklı menu card tasarımları oluşturma.
- Kullanıcıya görünen stringleri componentlere gömme.
