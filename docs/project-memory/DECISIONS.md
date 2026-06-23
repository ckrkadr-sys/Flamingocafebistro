# Project Decisions

Bu dosya projede alınan kararların tek kaynağıdır. Yeni görevlerde önce bu dosya okunmalıdır.

## Ana Kararlar

- Flamingo Cafe&Bistro modern bir cafe-bistro website projesidir.
- Tasarım dili Sweet Jesus referans sitesinin renkli, büyük görselli ve kategori odaklı yapısından ilham alacaktır.
- Flamingo tatlıcı, dondurmacı veya sadece dessert markası gibi gösterilmeyecektir.
- Site kullanışlılık odaklı olacaktır.
- Menü ve fiyat bilgisi sitede direkt gösterilecektir.
- QR menü ifadesi özellikle vurgulanmayacaktır.
- Ana müşteri profili Çalış Sahil'deki turistler ve yerel müşterilerin dengeli karışımıdır.
- Flamingo gündüz kahvaltı/kahve, akşam yemek/içecek ve gün batımı deneyimini birleştiren sahil cafe-bistro olarak konumlandırılacaktır.
- Marka kişiliği sıcak, renkli, modern, davetkar ve kaliteli olacaktır; pembe/flamingo kimliği premium cafe-bistro algısını bozmayacak dengede kullanılacaktır.

## Dil Kararları

- Site 4 dilli olacaktır: Türkçe, İngilizce, Rusça, Almanca.
- Locale kodları: `tr`, `en`, `ru`, `de`.
- Route yapısı locale-prefixed olacaktır.
- Örnekler: `/tr/menu`, `/en/menu`, `/ru/menu`, `/de/menu`.
- Kaynak dil Türkçe olacaktır.
- EN, RU ve DE içerikler Türkçe kaynaktan doğal ve yerelleştirilmiş şekilde hazırlanacaktır; birebir kelime çevirisi yapılmayacaktır.
- Ton tüm dillerde sıcak, net, davetkar ve profesyonel kalacaktır.
- Kullanıcıya görünen hiçbir metin component içinde hard coded yazılmayacaktır.
- Header, footer, butonlar, başlıklar, açıklamalar, boş durum mesajları, SEO metinleri ve form etiketleri dictionary sisteminden gelecektir.

## Menü Kararları

- Menü ürünleri data-driven olacaktır.
- v1 menü içeriği Excel'den alınacaktır.
- Ürünler component içine yazılmayacaktır.
- Ürün adı ve açıklaması tüm dillerde tutulacaktır.
- Fiyatlar numeric olarak saklanacaktır.
- Ekranda Türk Lirası formatında gösterilecektir.
- Fiyatlar yalnızca TL olarak gösterilecektir.
- Menü sayfasında kategori filtresi olacaktır.
- Menü sayfasında arama özelliği olacaktır.
- Popüler veya yeni ürün etiketleri desteklenebilir.

## İşletme Bilgisi Kararları

- İşletme adı: Flamingo Cafe & Bistro.
- Konum: Fethiye, Çalış Sahil.
- Adres: Foça, 1054. Sk. 62h, 48300 Fethiye/Muğla.
- Telefon / WhatsApp: +90 543 212 25 43.
- Instagram: `@flamingocafe.bistro`.
- Çalışma saatleri: Her gün 10:00-23:30.
- Email kullanılmayacaktır.
- Google Maps linki hazırdır; `data/site.ts` güncellenirken onaylı URL kullanılmalıdır.
- WhatsApp yalnızca iletişim kanalı olarak sunulmalıdır; online sipariş veya rezervasyon sistemi gibi konumlandırılmamalıdır.

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

## Lansman Başarı Önceliği

İlk lansman başarı önceliği sırası:

1. Mobilde hızlı ve okunabilir menü erişimi.
2. Güçlü marka izlenimi.
3. Kolay iletişim ve yol tarifi.
4. Yerel SEO temeli.
5. Çok dilli kullanım kalitesi.

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
