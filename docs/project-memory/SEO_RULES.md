# SEO Rules

## Amaç

Flamingo Cafe&Bistro sitesi çok dilli ve yerel işletme odaklı SEO yapısına sahip olmalıdır.

Yerel SEO odağı Fethiye, Çalış Sahil, cafe, bistro, kahvaltı, yemek ve gün batımı deneyimi etrafında kurulmalıdır. SEO dili online sipariş, ödeme veya rezervasyon beklentisi oluşturmamalıdır.

## Locale Bazlı URL Yapısı

Her dil için ayrı URL olmalıdır:

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

## Metadata

Her sayfanın metadata bilgisi locale bazlı üretilmelidir.

Gerekli alanlar:

- title
- description
- canonical
- alternates / hreflang
- Open Graph title
- Open Graph description
- Open Graph image

## Örnek Sayfa Başlıkları

TR:

```txt
Flamingo Cafe&Bistro | Fethiye Cafe, Kahvaltı ve Bistro Lezzetleri
```

EN:

```txt
Flamingo Cafe&Bistro | Cafe, Breakfast and Bistro Flavors in Fethiye
```

RU:

```txt
Flamingo Cafe&Bistro | Кафе, завтраки и бистро во Фетхие
```

DE:

```txt
Flamingo Cafe&Bistro | Café, Frühstück und Bistro in Fethiye
```

## Hreflang

Tüm lokalize sayfalar birbirine bağlanmalıdır.

Örnek:

- `/tr/menu`
- `/en/menu`
- `/ru/menu`
- `/de/menu`

## Canonical

Her dil sayfası kendi canonical URL'sine sahip olmalıdır.

## Structured Data

Ana sayfaya işletme odaklı structured data eklenmelidir.

Uygun türler:

- `Restaurant`
- `CafeOrCoffeeShop`
- `LocalBusiness`

İçermesi gereken bilgiler:

- İşletme adı
- Adres
- Telefon
- Google Maps URL
- Instagram URL
- Logo
- Görseller
- Çalışma saatleri
- Mutfak/kategori bilgisi
- Fiyat aralığı
- URL

## Menü SEO

Menü sayfası hem kullanıcı hem SEO için net olmalıdır:

- Kategori başlıkları semantik heading yapısıyla verilmeli.
- Ürün adları okunabilir şekilde render edilmeli.
- Görsellerde anlamlı alt text olmalı.
- Fiyatlar görünür olmalı.

## Yasaklar

- Her sayfada aynı title/description kullanma.
- Hard coded SEO metni yazma.
- Hreflang eksik bırakma.
- Görsellere anlamsız alt text verme.
- Menü içeriğini sadece client-side görünür hale getirip SEO'yu zayıflatma.
