# Menu Data Model

## Amaç

Menü ürünleri tek bir data modelinden yönetilecek. Ürünler component veya page dosyalarına yazılmayacak.

## Kaynak Dosya

Önerilen dosya:

```txt
data/menu.ts
```

## Locale Type

```ts
export type Locale = "tr" | "en" | "ru" | "de";
```

## Category Model

```ts
export type MenuCategory = {
  id: string;
  order: number;
  image?: string;
  translations: Record<Locale, {
    title: string;
    description?: string;
  }>;
};
```

## Item Model

```ts
export type MenuItem = {
  id: string;
  categoryId: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  translations: Record<Locale, {
    name: string;
    description?: string;
  }>;
};
```

## Örnek Ürün

```ts
export const menuItems: MenuItem[] = [
  {
    id: "flamingo-burger",
    categoryId: "burgers",
    price: 320,
    image: "/images/menu/flamingo-burger.webp",
    isPopular: true,
    translations: {
      tr: {
        name: "Flamingo Burger",
        description: "Özel sos, taze yeşillik ve çıtır patates ile servis edilir."
      },
      en: {
        name: "Flamingo Burger",
        description: "Served with special sauce, fresh greens and crispy fries."
      },
      ru: {
        name: "Фламинго Бургер",
        description: "Подается со специальным соусом, свежей зеленью и хрустящим картофелем."
      },
      de: {
        name: "Flamingo Burger",
        description: "Serviert mit Spezialsauce, frischem Grün und knusprigen Pommes."
      }
    }
  }
];
```

## Fiyat Kuralları

- Fiyatlar string değil numeric tutulacak.
- Doğru: `price: 320`
- Yanlış: `price: "₺320"`
- Formatlama UI tarafında `formatPrice` helper ile yapılacak.

Örnek:

```ts
export function formatPrice(price: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0
  }).format(price);
}
```

## Menü Sayfası Özellikleri

- Kategori filtresi
- Arama
- Ürün görseli
- Ürün adı
- Ürün açıklaması
- Fiyat
- Popüler/yeni etiketi desteği

## Yasaklar

- Component içinde ürün listesi oluşturma.
- Aynı ürünleri farklı dosyalarda tekrar etme.
- Fiyatı string tutma.
- Ürün açıklamasını sadece tek dilde bırakma.
- Menü kategorilerini component içine yazma.
