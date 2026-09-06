# Design QA — East Noise signal showreel

## Visual source and acceptance state

- Approved source: `/Users/josugeun/.codex/generated_images/019f68bf-36e4-7bd1-9705-ba5302e4c96b/exec-33df28dc-9d2a-4942-a4ad-75642e1f26d7.png`.
- Final desktop viewport: 1440 × 1024 CSS pixels, DPR 2.
- Final mobile viewport: 390 × 844 CSS pixels, DPR 2.
- The user-approved dark signal direction, orange hero, editorial rail, and handcrafted product scenes are the source of truth.
- The follow-up requirement changes the compressed long-page product montage into one viewport-sized scene per product.

## Same-input comparisons

- Hero comparison: `cmux-assets/master/browser/20260831-signal-redesign/comparisons/reference-vs-final-hero.png`.
- Luvit scene comparison: `cmux-assets/master/browser/20260831-signal-redesign/comparisons/reference-vs-final-luvit.png`.
- Final hero: `cmux-assets/master/browser/20260831-signal-redesign/home-hero-desktop-final-v2.png`.
- Final full-screen Luvit scene: `cmux-assets/master/browser/20260831-signal-redesign/home-luvit-desktop-transition.png`.
- Final mobile hero and Luvit scene: `cmux-assets/master/browser/20260831-signal-redesign/home-hero-mobile-final.png`, `cmux-assets/master/browser/20260831-signal-redesign/home-luvit-mobile-final.png`.

## Findings and resolutions

1. The hero previously stopped at 980px on a 1024px monitor, exposing the next section.
   - Resolution: the hero now uses exactly `100svh` on desktop and mobile.
2. The product montage previously showed multiple products in one viewport.
   - Resolution: Luvit, Seed, ALPHA, and SCENE each occupy one viewport, with scroll snapping and a sticky product rail preserving orientation.
3. The earlier WebP exports were visibly over-compressed for full-screen use.
   - Resolution: all five scene sources were re-encoded from the 1672 × 941 originals at high WebP quality. At the 1440px desktop viewport they render without upscaling.
4. Product pages, support pages, and legal pages did not share the selected cinematic system.
   - Resolution: dark signal heroes, rectangular CTAs, bold editorial type, product accents, and real scene art are now shared across those routes.
5. HEUM was still publicly reachable while the product is being rebuilt.
   - Resolution: HEUM public routes and company navigation were removed; SCENE was added to the Korean and English product routes.

## Representative browser evidence

- Product detail desktop: `cmux-assets/master/browser/20260831-signal-redesign/luvit-detail-desktop-v3.png`.
- SCENE detail desktop: `cmux-assets/master/browser/20260831-signal-redesign/scene-detail-desktop-v4.png`.
- SCENE detail body: `cmux-assets/master/browser/20260831-signal-redesign/scene-detail-section-desktop.png`.
- Seed privacy mobile: `cmux-assets/master/browser/20260831-signal-redesign/legal-seed-mobile.png`.
- ALPHA support mobile: `cmux-assets/master/browser/20260831-signal-redesign/alpha-support-mobile.png`.

## Interaction, responsive, and accessibility checks

- Desktop scrolling was exercised in normal wheel-sized increments: hero → Luvit lands at the exact viewport boundary, then subsequent product panels advance one scene at a time.
- Mobile hero and product rail were exercised at 390 × 844. The sticky four-product rail remains visible, product copy stays inside the viewport, and no horizontal overflow is visible.
- Primary navigation, product detail links, support links, language routes, and legal routes remain real anchors or routes rather than visual-only controls.
- Semantic headings, landmarks, skip links, visible focus states, 44px-plus primary targets, intrinsic image dimensions, and reduced-motion fallbacks remain present.
- Browser console and browser error lists were empty in the final local pass.
- `npm run check`: 39 files, 0 errors, 0 warnings, 0 hints.
- `npm run build`: 24 static routes built successfully, including `/scene`, `/en/scene`, `/scene/support`, and `/legal/scene/privacy`.

## Mobile overlay refinement

- User-reported issue: the opaque rectangular black copy panels covered the artwork and made the responsive hero feel clipped.
- Before/after comparison: `cmux-assets/master/browser/20260831-signal-redesign/comparisons/mobile-overlay-before-after.png`.
- Resolution: removed the rectangular backgrounds from the responsive hero and all four product copy blocks. Readability now comes from the naturally dark artwork, restrained image dimming, and text shadow rather than a visible card.
- The 547 × 541 reproduction now keeps the complete headline, description, CTA, navigation, and signal mark inside the viewport without horizontal clipping.
- The 390 × 844 product pass confirms Luvit, Seed, ALPHA, and SCENE remain readable without copy cards. Luvit's mobile crop was shifted to keep both rabbits visible.
- Final refinement verification: `npm run check` passed with 0 diagnostics; `npm run build` generated all 24 static routes successfully.

## Sticky boundary regression — 2026-09-01

- Source visual truth: `/var/folders/v4/j5512dks50b49xvjmj3y5xtc0000gn/T/codex-clipboard-ilQzkA.png` (2,296 × 1,104 px). This is the user-reported broken state: the product index remains fixed over the following method section and clips its headline.
- Implementation screenshot: `cmux-assets/master/browser/20260901-method-overlap/after-grid-fix.png` (1,148 × 552 px).
- Comparison viewport and state: 1,148 × 552 CSS px, `/` with `#method` aligned to the viewport top. The 2× source was normalized to 1,148 × 552 px before comparison.
- Full-view comparison evidence: `cmux-assets/master/browser/20260901-method-overlap/comparison-source-after.png` places the normalized source and corrected implementation in one image.
- Focused-region evidence was not needed because the affected product rail, complete method headline, and all three method columns are legible in the full-view comparison.

### Comparison history

1. P0 — the sticky product rail escaped the product section in WebKit and obscured the next section.
   - Earlier evidence: the source screenshot shows the rail covering the left side of the method headline.
   - Cause: `margin-bottom:-100svh` removed the sticky element's height from normal flow and prevented WebKit from resolving the parent-end boundary correctly.
   - Fix: the rail and product panels now overlap in one CSS grid area, preserving the product-scene composition without a negative margin.
   - Post-fix evidence: at the method boundary the product container bottom is `0`, the rail is translated to `-552..0`, and the method heading starts unobscured at `x=24`.
2. Regression checks:
   - Desktop product state: `cmux-assets/master/browser/20260901-method-overlap/desktop-product-seed.png` confirms the rail remains sticky inside the product sequence with zero horizontal overflow.
   - Mobile method state: `cmux-assets/master/browser/20260901-method-overlap/mobile-method.png` confirms the 390px layout has zero horizontal overflow and the compact rail exits above the method section.
   - Typography, color tokens, image assets, and copy are unchanged by this structural fix.
   - Browser console and browser error lists are empty.
   - `npm run check`: 39 files, 0 errors, 0 warnings, 0 hints.
   - `npm run build`: 24 static routes built successfully.

final result: passed
