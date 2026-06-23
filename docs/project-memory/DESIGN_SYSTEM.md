# Design System

## Tasarım Yönü

Tasarım hissi canlı, enerjik, büyük görselli ve kategori odaklı olacak.

Referans siteden alınacak yaklaşım:

- Canlı renk blokları
- Büyük görseller
- Büyük ve cesur başlıklar
- Ürün/kategori odaklı sayfa düzeni
- Eğlenceli ama pratik kullanıcı akışı

Ancak Flamingo şu şekilde görünmemeli:

- Dondurmacı
- Sadece tatlıcı
- Sadece milkshake/dessert markası
- Çocuk markası
- Franchise tatlı zinciri

Flamingo şu şekilde görünmeli:

- Modern cafe-bistro
- Sıcak ve davetkar
- Fethiye/yazlık atmosfere uygun
- Yemek, kahve, tatlı ve içecekleri dengeli gösteren
- Kullanışlı ve hızlı gezilebilen

## Marka Kişiliği ve Kitle

Flamingo'nun hedef kitlesi Çalış Sahil'e gelen yerli/yabancı turistler ile Fethiye/Çalış çevresindeki yerel müşterilerin dengeli karışımıdır. Tasarım yalnızca turistik restoran veya yalnızca mahalle kafesi gibi hissettirmemelidir.

Marka kişiliği:

- Renkli ama kaliteli.
- Samimi ama dağınık değil.
- Modern ama soğuk değil.
- Sahil ruhunu taşıyan, gün batımı hissi veren, sosyal ve sıcak.

Pembe/flamingo kimliği kullanılabilir; ancak premium cafe-bistro algısını bozmayacak şekilde coral, sıcak beyaz, koyu yazı, mavi ve yardımcı renklerle dengelenmelidir.

## Renk Yaklaşımı

Önerilen renk dünyası:

- Flamingo pembe / coral vurgu
- Açık mavi / sky blue arka plan blokları
- Krem / sıcak beyaz alanlar
- Koyu kahve veya koyu siyah yazı
- Gerektiğinde mint/turkuaz yardımcı vurgu

Renkler rastgele component içine dağıtılmamalı. Mümkünse CSS variables veya tema tokenları kullanılmalı.

Örnek token mantığı:

```css
:root {
  --color-flamingo-pink: #ff5f8f;
  --color-sky-blue: #8fd3ff;
  --color-cream: #fff4df;
  --color-coral: #ff7a5c;
  --color-dark: #171717;
}
```

## Görsel Kullanımı

- Görseller büyük ve iştah açıcı olmalı.
- Ürün fotoğrafları tutarlı ışık hissine sahip olmalı.
- Mekan fotoğrafları atmosferi göstermeli.
- Tabak içindeki ürün düzeni yapay şekilde değiştirilmemeli.
- Görseller optimize edilmeli.
- Mümkünse WebP kullanılmalı.
- `next/image` tercih edilmeli.

## UI Prensipleri

- Mobile-first tasarla.
- Butonlar büyük ve net olsun.
- Kategori gezinmesi kolay olsun.
- Menü sayfası çok hızlı anlaşılmalı.
- Fiyat bilgisi net görünmeli.
- Yazı kontrastı iyi olmalı.
- Gereksiz animasyon kullanılmamalı.
- Ağır slider/carousel kullanılmamalı.

## Ana Sayfa Tasarım Akışı

1. Güçlü hero alanı
2. Kategori kartları
3. Popüler ürünler
4. Mekan/atmosfer bölümü
5. Galeri/Instagram hissi veren görsel grid
6. Konum ve çalışma saatleri
7. Footer

## Phase 5 Implemented Foundation

Global design tokens live in `app/globals.css`.

Implemented token groups:

- Color tokens for flamingo pink, coral, sky, mint, cream, surface, text, muted, border, success, warning and focus states.
- System font tokens only; no external font dependency.
- Mobile-first text scale, line-height, spacing, radius, shadow, layout width, focus ring and transition tokens.

Reusable primitives live under `components/shared`:

- `Container`
- `Section`
- `SectionTitle`
- `Button`
- `CardSurface`

Rules for later UI phases:

- Reuse these primitives before adding new layout wrappers.
- Keep random colors out of components; add or adjust tokens centrally.
- Keep final homepage, menu, gallery and contact layouts in their later phases.
- Keep user-visible text in dictionaries or data translations, not inside components.
