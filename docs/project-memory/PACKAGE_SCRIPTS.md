# Package Scripts

Bu dosya `package.json` içine eklenmesi önerilen scriptleri açıklar.

## Önerilen Scriptler

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "quality:check": "npm run lint && npm run typecheck && npm run build"
  }
}
```

## Not

Next.js sürümüne bağlı olarak `next lint` desteklenmiyorsa `lint` script'i şu şekilde değiştirilebilir:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## Neden Gerekli?

Agent her değişiklikten sonra kalite kontrol yapabilmelidir:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Bu komutlar olmadan Codex/Copilot/Gemini değişiklikleri sağlıklı doğrulayamaz.
