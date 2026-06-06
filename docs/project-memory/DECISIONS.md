# Project Decisions

Bu dosya projede alınan kararların tek kaynağıdır. Yeni görevlerde önce bu dosya okunmalıdır.

## Ana Kararlar

- Flamingo Cafe&Bistro modern bir cafe-bistro website projesidir.
- Tasarım dili Sweet Jesus referans sitesinin renkli, büyük görselli ve kategori odaklı yapısından ilham alacaktır.
- Flamingo tatlıcı, dondurmacı veya sadece dessert markası gibi gösterilmeyecektir.
- Site kullanışlılık odaklı olacaktır.
- Menü ve fiyat bilgisi sitede direkt gösterilecektir.
- QR menü ifadesi özellikle vurgulanmayacaktır.

## Dil Kararları

- Site 4 dilli olacaktır: Türkçe, İngilizce, Rusça, Almanca.
- Locale kodları: `tr`, `en`, `ru`, `de`.
- Route yapısı locale-prefixed olacaktır.
- Örnekler: `/tr/menu`, `/en/menu`, `/ru/menu`, `/de/menu`.
- Kullanıcıya görünen hiçbir metin component içinde hard coded yazılmayacaktır.
- Header, footer, butonlar, başlıklar, açıklamalar, boş durum mesajları, SEO metinleri ve form etiketleri dictionary sisteminden gelecektir.

## Menü Kararları

- Menü ürünleri data-driven olacaktır.
- Ürünler component içine yazılmayacaktır.
- Ürün adı ve açıklaması tüm dillerde tutulacaktır.
- Fiyatlar numeric olarak saklanacaktır.
- Ekranda Türk Lirası formatında gösterilecektir.
- Menü sayfasında kategori filtresi olacaktır.
- Menü sayfasında arama özelliği olacaktır.
- Popüler veya yeni ürün etiketleri desteklenebilir.

## İlk Sürümde Olmayacaklar

- Admin panel yok.
- Online sipariş yok.
- Ödeme sistemi yok.
- Rezervasyon sistemi yok.
- Database şart değil.
- Supabase şart değil.
- Catering/franchise/blog sayfaları yok.

## Ana Sayfa Kararı

Ana sayfa akışı:

1. Header
2. Hero
3. Kategori kartları
4. Popüler ürünler
5. Mekan / atmosfer bölümü
6. Galeri veya Instagram hissi veren görsel grid
7. Konum + çalışma saatleri
8. Footer

Ana hero aksiyonları:

- Menüyü Gör
- Yol Tarifi Al

WhatsApp ayrıca sabit hızlı aksiyon olarak kullanılabilir.

## Teknik Kararlar

- Next.js App Router kullanılacak.
- TypeScript kullanılacak.
- Componentler reusable olacak.
- Page dosyaları ince tutulacak.
- Veri/data logic UI componentlerinden ayrılacak.
- SEO metadata locale bazlı üretilecek.
- hreflang/canonical desteklenecek.
- LocalBusiness / Restaurant structured data eklenecek.
- Site mobile-first geliştirilecek.
- Gereksiz dependency eklenmeyecek.
