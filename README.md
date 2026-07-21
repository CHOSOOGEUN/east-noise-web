# East Noise Web

Astro-based company website for East Noise / 동방의 소음.

## Routes

- `/` Korean company homepage
- `/en/` English company homepage
- `/luvit`, `/en/luvit` Luvit landing pages
- `/pickie`, `/en/pickie` Pickie landing pages
- `/seed`, `/en/seed` Seed landing pages
- `/alpha`, `/en/alpha` ALPHA product pages
- `/alpha/support`, `/en/alpha/support` ALPHA support pages
- `/legal/...` product legal pages

## Commands

```sh
npm install
npm run dev -- --host 127.0.0.1
npm run build
npm run preview
```

## Content Sources

- Shared company copy: `src/i18n/strings.ts`
- Product cards: `src/data/apps.ts`
- Main homepage sections: `src/components/`
- Static screenshots and SEO assets: `public/`

Before changing product status copy, check the relevant project note or App Store state because review and release statuses change frequently.
