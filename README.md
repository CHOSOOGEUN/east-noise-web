# East Noise Web

Astro-based company website for East Noise / 동방의 소음.

## Routes

- `/` Korean company homepage
- `/en/` English company homepage
- `/luvit`, `/en/luvit` Luvit landing pages
- `/seed`, `/en/seed` Seed landing pages
- `/alpha`, `/en/alpha` ALPHA product pages
- `/scene`, `/en/scene` SCENE product pages
- `/alpha/support`, `/en/alpha/support` ALPHA support pages
- `/legal/...` product legal pages
- `/scene/support` SCENE support in English, Korean, Japanese, Spanish, and German
- `/legal/scene/privacy` SCENE privacy policy in the same five languages

## Commands

```sh
npm install
npm run dev -- --host 127.0.0.1
npm run check
npm run build
npm run preview
```

## Production deployment

Production is deployed only from a clean local `master` that exactly matches
`origin/master`:

```sh
npm run deploy:production
```

The deployment guard fetches the current GitHub `master`, rejects uncommitted
files or a mismatched commit, and runs Astro check/build before Vercel. Do not
run `vercel --prod` directly because it can replace the production aliases with
an unmerged local version.

## Content Sources

- Shared company copy: `src/i18n/strings.ts`
- Product cards: `src/data/apps.ts`
- Main homepage sections: `src/components/`
- Static screenshots and SEO assets: `public/`

Before changing product status copy, check the relevant project note or App Store state because review and release statuses change frequently.
