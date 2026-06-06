# Flamingo Project Foundation Pack

Bu paket Flamingo Cafe&Bistro websitesi için proje hafızası, agent kuralları ve VSCode hazırlık dosyalarını içerir.

## İçerik

- `AGENTS.md` — Codex/agent proje kuralları
- `.github/copilot-instructions.md` — GitHub Copilot proje kuralları
- `.vscode/settings.json` — workspace ayarları
- `.vscode/extensions.json` — önerilen VSCode eklentileri
- `.vscode/tasks.json` — dev/lint/typecheck/build görevleri
- `docs/project-memory/*` — proje hafızası ve karar dosyaları

## Kullanım

Bu dosyaları Flamingo projesinin kök dizinine kopyalayın.

Sonra Codex'e veya kullandığınız agent'a şu şekilde görev verin:

```txt
Before starting, read AGENTS.md and /docs/project-memory/DECISIONS.md.
Follow the project rules strictly.
```

## Önemli

Bu paket gerçek site sayfalarını oluşturmaz. Önce proje düzenini, kuralları ve çalışma hafızasını hazırlar. Böylece sonraki kodlama görevlerinde spagetti kod riski azalır.
