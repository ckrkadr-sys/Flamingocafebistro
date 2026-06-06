# MCP and Skills Guide

## Amaç

MCP ve benzeri tool bağlantıları sadece gerçekten gerekli olduğunda kullanılmalıdır. Fazla yetki ve fazla bağlantı agent'ın projeyi dağıtma riskini artırır.

## İlk Versiyon İçin Önerilen Minimum Set

### 1. Filesystem / Workspace Access

Amaç:

- Proje dosyalarını okumak
- Kod düzenlemek
- Yeni dosya oluşturmak
- Build/lint sonuçlarını görmek

Kural:

- Erişim sadece Flamingo proje klasörüyle sınırlı olmalı.
- Agent repo dışına dosya yazmamalı.

### 2. GitHub Access

Amaç:

- Branch yönetimi
- Commit/PR takibi
- Issue oluşturma
- Kod değişikliklerini izleme

Kural:

- Agent doğrudan main branch'e büyük değişiklik yapmamalı.
- Her büyük iş ayrı branch/faz olarak ilerlemeli.

### 3. Browser / Playwright Access

Amaç:

- Sayfayı gerçek tarayıcıda kontrol etmek
- Mobil/desktop görünümü test etmek
- Header, dil switcher, menü arama gibi etkileşimleri kontrol etmek

Kural:

- UI işi bittikten sonra görsel ve fonksiyonel kontrol yapılmalı.

## Opsiyonel Bağlantılar

### Figma MCP

Sadece gerçek Figma tasarım dosyası varsa bağlanmalı.

Kullanım:

- Renk, spacing, layout, component referansı almak.

### Google Drive MCP

Sadece menü dosyaları, logo veya fotoğraflar Drive'da tutuluyorsa faydalı.

Kullanım:

- Menü Excel/PDF dosyalarını bulmak
- Logo/görsel klasörlerine erişmek

### Supabase MCP

İlk versiyonda gerek yok.

Ne zaman gerekir?

- Admin panel yapılacaksa
- Menü database'den yönetilecekse
- Rezervasyon/sipariş sistemi yapılacaksa

## Şimdilik Bağlanmaması Gerekenler

- Payment provider MCP
- Production database write access
- Email provider write access
- Hosting/deployment write access
- Admin panel database erişimi

## Skills / Agent Yetenekleri

Agent görevlerinde şu beceriler kullanılmalı:

- Next.js App Router
- TypeScript
- i18n architecture
- SEO metadata
- LocalBusiness structured data
- Responsive UI
- Accessibility checks
- Data modeling
- Code review
- Build/lint/typecheck verification

## Güvenlik Kuralı

Agent'a gereğinden fazla canlı sistem yetkisi verme.

İlk hedef:

```txt
Codebase + GitHub + Browser kontrolü yeterli.
```

Database, ödeme, e-posta ve deploy yetkileri sonraki fazlara bırakılmalıdır.
