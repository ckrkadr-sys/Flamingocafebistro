# Definition of Done

Bir görev ancak aşağıdaki koşullar sağlandığında tamamlanmış kabul edilir.

## Mimari

- Değişiklik mevcut mimariye uygundur.
- Yeni dosya gerekiyorsa doğru klasöre eklenmiştir.
- Aynı sorumluluk için ikinci sistem oluşturulmamıştır.
- Page dosyaları gereksiz büyütülmemiştir.
- Reusable component ihtiyacı varsa shared/component yapısı kullanılmıştır.

## I18N

- Kullanıcıya görünen hiçbir metin hard coded değildir.
- Tüm yeni metinler dictionary sistemine eklenmiştir.
- Tüm desteklenen locale'ler işlenmiştir: `tr`, `en`, `ru`, `de`.
- Dil değiştirici davranışı bozulmamıştır.

## Menü

- Menü ürünleri data-driven kalmıştır.
- Ürün listesi component içine yazılmamıştır.
- Fiyatlar numeric kalmıştır.
- Ürün adı/açıklaması tüm dillerde desteklenmiştir.

## UI/UX

- Mobil görünüm düşünülmüştür.
- Masaüstü görünüm düşünülmüştür.
- Butonlar ve tıklama alanları kullanılabilir büyüklüktedir.
- Renk kontrastı okunabilirliği bozmaz.
- Gereksiz animasyon veya ağır slider eklenmemiştir.

## SEO

- Sayfa metadata'sı gerekiyorsa locale bazlıdır.
- Hreflang/canonical yapısı bozulmamıştır.
- Görsellerde anlamlı alt text kullanılmıştır.

## Kalite Kontrol

Mümkün olduğunda şu komutlar çalıştırılmalıdır:

```bash
npm run lint
npm run typecheck
npm run build
```

Kod veya mimari routing/metadata/shared component etkiliyorsa build çalıştırılmalıdır.

## Raporlama

Görev sonunda agent şunları raporlamalıdır:

- Değişen dosyalar
- Ne değişti
- Hangi kontroller çalıştı
- Varsa riskler
- Varsa sonraki önerilen adım
