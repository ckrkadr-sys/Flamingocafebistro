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
