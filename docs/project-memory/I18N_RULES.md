# I18N Rules

## Desteklenen Diller

- `tr` — Türkçe
- `en` — English
- `ru` — Русский
- `de` — Deutsch

## Route Yapısı

Her sayfa locale prefix ile açılmalıdır:

```txt
/tr
/en
/ru
/de
/tr/menu
/en/menu
/ru/menu
/de/menu
```

## En Önemli Kural

Kullanıcıya görünen hiçbir metin component içinde hard coded yazılamaz.

Yasak örnek:

```tsx
<button>Menüyü Gör</button>
```

Doğru örnek:

```tsx
<button>{dictionary.home.viewMenu}</button>
```

## Dictionary Kapsamı

Şu metinlerin tamamı dictionary sisteminden gelmelidir:

- Navigasyon label'ları
- Header metinleri
- Footer metinleri
- Buton metinleri
- Section başlıkları
- Section açıklamaları
- Empty state mesajları
- Arama placeholder'ları
- Form label'ları
- Hata mesajları
- SEO title/description
- Structured data metinsel alanları

## Menü Çevirileri

Ürün adı ve açıklaması dictionary içinde değil, menü data modelinin `translations` alanında tutulmalıdır.

Örnek:

```ts
translations: {
  tr: { name: "Flamingo Burger", description: "..." },
  en: { name: "Flamingo Burger", description: "..." },
  ru: { name: "Фламинго Бургер", description: "..." },
  de: { name: "Flamingo Burger", description: "..." }
}
```

## Dil Değiştirici

Dil değiştirici kullanıcının bulunduğu sayfanın diğer dil karşılığına götürmelidir.

Örnek:

- `/tr/menu` → `/en/menu`
- `/de/contact` → `/ru/contact`

Dil değiştirici her zaman ana sayfaya atmamalıdır.

## Yasaklar

- İkinci bir i18n sistemi oluşturma.
- Locale stringlerini componentlere dağıtma.
- Eksik locale bırakma.
- Sadece TR metinle component yazma.
- Route karşılıklarını hard coded dağınık şekilde yazma.
