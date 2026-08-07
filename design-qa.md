# Design QA — Approved East Noise homepage

## Comparison target

- Source visual truth: `/Users/josugeun/.codex/generated_images/019f68bf-36e4-7bd1-9705-ba5302e4c96b/exec-6c08b936-cba4-401d-a0cb-87c614912797.png`
- Source pixels and state: 1488 × 1058, Korean desktop homepage hero.
- Final implementation screenshot: `artifacts/design-qa/product-home-original-diorama-pass3.png`, captured after restoring the original product world.
- Layout baseline: `artifacts/design-qa/product-home-approved-current-1488x1058-pass2-normalized.png`, captured at the source's exact 1488 × 1058 viewport before the isolated image-source swap.
- Mobile evidence: `artifacts/design-qa/product-home-approved-current-mobile-390x844-pass2.png`, 390 × 844 CSS pixels at DPR 2, saved as 780 × 1688.
- Full-view side-by-side comparison: `artifacts/design-qa/product-home-approved-source-vs-current-pass2.png`.

## Approved original product world restored

- Luvit uses the original two plush rabbits, heart letter, and miniature house.
- Seed uses the original growing sprout in its moss planter.
- ALPHA uses the original black-and-red 90-day staircase.
- HEUM uses the original ivory H monument and delivery-tracking evidence.
- The exact current App Store/local source screenshots remain in the four detailed product sections below the hero.

## Comparison history

1. Pass 1 — P1: the approved continuous four-product diorama had been replaced by four independent rounded screenshot cards. This changed the primary composition, hierarchy, material language, and first impression.
   - Fix: removed the card grid and restored one uninterrupted, edge-to-edge handcrafted product world in the original four-zone order.
2. Pass 1 — P1: the first current-product diorama was too tall and collided with the body copy and CTA. The display heading was also larger and lower than the source.
   - Fix: regenerated the product world with the approved lower, wider silhouette; calibrated the desktop heading, body, CTA, negative margin, and baseline to the source viewport.
3. Pass 2 — the source and implementation now align on header height, centered hero hierarchy, headline wrapping, body and CTA placement, full-width diorama baseline, four-zone order, warm-white palette, and overlaid product rail. No actionable P0, P1, or P2 mismatch remains.
   - Evidence: `artifacts/design-qa/product-home-approved-source-vs-current-pass2.png`.
4. Pass 3 — at the user's direction, the regenerated current-product diorama was removed and the exact original approved product-world asset was restored. No approximate regeneration is used.
   - Evidence: `artifacts/design-qa/product-home-original-diorama-pass3.png`, 1234 × 768 browser viewport.
   - The only rendering change from the exact-viewport Pass 2 baseline is the hero `<img>` source and its intrinsic dimensions; layout CSS and interaction markup are unchanged.

## Required fidelity surfaces

- Typography: the Korean headline now matches the source's two-line scale, weight, tracking, and vertical position; secondary copy and CTA hierarchy are aligned.
- Spacing and layout rhythm: header, hero copy, CTA, diorama baseline, and rail occupy the same first-viewport bands as the approved source.
- Colors and tokens: warm white, near-black, muted gray, navy CTA, Luvit pink, Seed green, ALPHA red/black, and HEUM blue match the approved palette.
- Image quality: the hero is one high-resolution raster asset rather than CSS art or placeholder cards. Detailed sections use exact current store/repository screenshots.
- Copy and content: current Luvit, Seed, ALPHA, and HEUM feature definitions remain intact in Korean and English.

## Responsive and interaction checks

- Desktop was visually compared at the source's exact 1488 × 1058 viewport.
- The restored original diorama was visually regression-checked in the live browser at 1234 × 768; its four original objects, labels, grounding surfaces, and CTA clearance are intact.
- Mobile was visually inspected at 390 × 844 with no horizontal page overflow; the continuous world intentionally crops to the central Seed/ALPHA area while the four-product rail remains available below it.
- Hero CTA and product rail anchors remain authored as functional internal navigation; product, Instagram, language, and HEUM destinations were preserved.
- The Astro development toolbar visible at the bottom of local captures is development-only and excluded from production builds.

## Product detail redesign — Luvit, Seed, ALPHA, HEUM

### Comparison target

- Shared visual source: `public/visuals/company/product-world-hero.webp`, the exact warm-white handcrafted four-product diorama approved for the homepage.
- Product-specific source assets: `public/visuals/company/{luvit,seed,alpha,heum}-world-detail-v1.webp`, generated from the approved source composition and material language.
- Same-input comparison board: `artifacts/design-qa/detail-source-vs-four-desktop-pass1.png` places the approved source and all four implemented first screens in one 1848 × 768 image.
- Desktop implementation captures: `artifacts/design-qa/detail-{luvit,seed,alpha,heum}-desktop-pass1.png`, captured in Chrome at 1234 × 768.
- Mobile comparison board: `artifacts/design-qa/detail-four-mobile-390x829-pass1.png`, four 390 × 829 CSS-pixel captures at DPR 2.

### Visual findings and resolutions

1. The selected homepage visual depends on one continuous warm-white miniature world, low-profile fabric and paper surfaces, near-black editorial typography, and one product accent per scene.
   - Resolution: each detail page uses the same material palette and spatial logic while giving the product its own close-up object and accent: Luvit pink rabbits, Seed green sprout, ALPHA red-black stairs, HEUM blue delivery evidence.
2. Product meaning needed to remain visible rather than becoming a decorative campaign page.
   - Resolution: every page now pairs a short product thesis with a three-step real flow and exact current app or game screenshots.
3. At 1234 × 768, all four hero objects remain clear of headings, body copy, status, CTAs, and the lower stats rail. No actionable P0, P1, or P2 overlap, crop, or hierarchy issue remains.
4. At 390 × 829, headings keep deliberate Korean line breaks, CTAs become full-width 44px-plus targets, hero objects follow the copy, stats stack vertically, and real screenshots become a single column without horizontal overflow.
5. The Luvit product-evidence anchor and vertical scroll were exercised in the live responsive viewport; the sticky header, black evidence section, both current screenshots, and lower flow remain readable and navigable.

### Content and route checks

- Luvit reflects the current daily mission, next-day partner judgment, shared 30P, penalty, room, and memory flow; the removed guessing flow is not presented.
- Seed reflects 2–4 second video check-ins, eight plants with seven stages, Daily Story, and long-term review.
- ALPHA remains a paid product-first 90-day self-control app with three 30-day courses, daily close, reflection, and retry; the retired magazine language is explicitly excluded.
- HEUM now has its own `/heum` and `/en/heum` introduction pages for Season 01 `반송 예정`, while the primary action continues to the browser-native experience on `heum.cloud`.
- Korean and English route sets share the same component, legal links are preserved for Seed and ALPHA, and product-to-product navigation now includes the local HEUM detail route.

### Second polish pass

1. The mobile hero previously left too much dead space before the product object.
   - Resolution: tightened the mobile top rhythm, copy-to-action spacing, and image handoff without changing the approved desktop composition.
   - Evidence: `artifacts/design-qa/detail-luvit-mobile-390x829-pass2.png` and `artifacts/design-qa/detail-heum-mobile-390x829-pass2.png`, both captured in Chrome's 390 x 829 responsive viewport at DPR 2.
2. Sticky-header section jumps could place headings under the header, and the active section was not visible in navigation.
   - Resolution: added the shared 72px anchor offset and an `IntersectionObserver`-driven current-section state. The scroll progress update is requestAnimationFrame-throttled.
3. The product switcher had insufficient context when scanning all four products.
   - Resolution: each item now carries its product number, name, and category while retaining the product-specific accent and current-page state.
4. Product screenshots did not declare intrinsic dimensions.
   - Resolution: all hero and evidence images now include their real width and height to stabilize layout while loading.
5. Final desktop review used `artifacts/design-qa/detail-{luvit,seed,alpha,heum}-desktop-pass2.png`; the approved composition, text hierarchy, CTA clearance, object crop, and stats rail remain intact across all four products.
6. The sticky anchor, language and local product routes, CTA destinations, and responsive evidence flow were exercised. Chrome DevTools reported zero console messages during the responsive pass.

final result: passed
