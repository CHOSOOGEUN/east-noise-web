# Design QA

- Source visual truth: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/source-east-apartment-selected.png`
- Final implementation screenshot: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/home-desktop-full-polish.png`
- Desktop viewport: `1440x1024`
- Mobile viewport: `390x844`
- State: Korean homepage, English homepage, six-window focus/click interaction, Luvit detail, Seed detail.

## Full-view comparison evidence

- Final side-by-side: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/source-vs-implementation-polish.png`
- The implementation preserves the selected source's rainy midnight apartment, left-side brand message, six lit windows, pink Luvit room, mint Seed room, blue-black heum desk, short cinematic scene rhythm, and quiet footer tone.
- The implementation intentionally continues below the source composition with the remaining three products, studio information, and contact section so existing company-site content and destinations remain available.

## Focused-region comparison evidence

- Hero and product-room comparison: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/source-vs-implementation-focused-pass3.png`
- Focused comparison confirms the facade occupies the same right-side proportion, the Korean display title follows the same scale and placement, scene heights track the source bands, and Luvit/Seed screens sit in the same visual zone as the source devices.
- Focus state evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/home-desktop-window-focus-pass4.png`

## Required fidelity surfaces

- Fonts and typography: Pretendard Variable provides the neutral Korean grotesk direction in the source. Display sizes, medium optical weight, tight tracking, line height, and wrapping were checked at both viewports. Long English copy remains inside its columns.
- Spacing and layout rhythm: The hero uses the source's left-third copy/right-two-thirds facade composition. Desktop product scenes were reduced from near-full-screen panels to source-matched cinematic bands. Mobile sections remain tall enough for copy and real screenshots without overlap.
- Colors and visual tokens: Midnight navy, moonlight white, dusty pink, muted mint, and cool blue replace the previous orange system across home, product, metadata, selection, focus, and legal surfaces.
- Image quality and asset fidelity: Four project-local raster assets are optimized by Astro into responsive WebP variants. Luvit and Seed use real app screenshots instead of generated interfaces. No placeholder imagery, handcrafted SVG, CSS illustration, or generated fake product UI remains.
- Copy and content: The selected source's short room-based language is preserved while current product status, product links, team names, contact details, Korean/English routes, and remaining products stay factual.
- Accessibility and interactions: Six window targets are semantic links with labels. Keyboard focus reveals the room name, clicking reaches `#luvit-room`, mobile shortcuts remain horizontally scrollable without page overflow, controls meet the 44px target, and reduced motion is supported.

## Comparison history

### Pass 1

- [P1] Luvit, Seed, and heum sections were roughly 1.4–1.6 times taller than the source, weakening the source's short cinematic cut rhythm.
  - Fix: Replaced near-full-viewport desktop rooms with source-ratio heights: approximately `43vw`, `39vw`, and `42vw`.
- [P2] The three additional product cards used decorative colored rectangles that read like placeholder graphics.
  - Fix: Removed the decorative rectangles and tightened the cards into a typography-led archive.
- [P2] Product body copy and detail links were visibly smaller than the source at normalized scale.
  - Fix: Increased room body and link type while retaining mobile-safe sizes.

### Pass 2

- [P2] The apartment facade began around 42% of the frame instead of the source's roughly 36%, leaving excessive empty space on the left.
  - Fix: Right-aligned the source image crop so the facade occupies the intended right-side proportion.
- [P2] The Luvit and Seed screens sat too close to the right edge.
  - Fix: Moved Luvit to `right: 28vw` and Seed to `right: 24vw`, matching the source's device zones.
- [P2] Window hotspots no longer aligned after the facade crop changed.
  - Fix: Shifted the hotspot grid left and rechecked the first window focus outline against the pink window.

### Pass 3 and interaction check

- Final full-view and focused side-by-side comparison found no remaining actionable P0, P1, or P2 difference.
- Homepage, English homepage, Luvit, and Seed returned 200 with no browser console errors or page errors.
- Desktop and mobile reported no horizontal page overflow.
- Window focus result: label visible and element focused.
- Window click result: hash changed to `#luvit-room` and the destination room was visible.

### Copy and launch polish

- Replaced generic product-team language with shorter room-based copy that expresses the team's operating point of view while keeping product claims factual.
- Added an active section marker to desktop navigation, a structured company footer, clearly labeled Seed legal links, richer Open Graph metadata, canonical/alternate URLs, and organization structured data.
- Rechecked Korean home at `1440x1024` and `390x844`, English home at `1440x1024`, and Luvit at `390x844`.
- All checked pages and internal routes returned 200, no horizontal overflow was reported, and there were no browser console, page, or failed-request errors.
- Mobile evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/home-mobile-full-polish.png`
- Product mobile evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/luvit-mobile-full-polish.png`

### Pass 4 — window hotspot alignment

- [P1] The desktop hotspot layer used one equal `2 × 3` grid even though the apartment windows have different widths and shorter glass areas. The Luvit focus border visibly extended far beyond the lit window.
  - User evidence: `/var/folders/v4/j5512dks50b49xvjmj3y5xtc0000gn/T/codex-clipboard-lMddij.png`
  - Fix: Replaced the equal grid with six source-image rectangles measured in the original `1586 × 992` coordinate system. The rendered image and hotspot layer now share the same cover crop, right/center positioning, scale, and pointer parallax transform.
  - Post-fix focused comparison: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/window-map-before-after-focus.png`
- Rechecked the focused Luvit window at `1440 × 1024`, `1280 × 800`, and `1024 × 768`.
  - Evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/window-map-1440x1024-focus.png`
  - Evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/window-map-1280x800-focus.png`
  - Evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/window-map-1024x768-focus.png`
- Across all six windows and three desktop viewports, rendered hotspot geometry matched the corresponding image geometry within `0.016px`. Focus border and label reached full visibility, click navigation resolved to the intended section, and no console or page errors were reported.
- Mobile composition was rechecked at `390 × 844`; desktop hotspots remain hidden there and the existing product shortcut rail remains available.
  - Evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/window-map-mobile-390x844.png`

### Pass 5 — current product sync

- Rebuilt the operating list from the active folders and their current README, PRD, package, app, and publishing metadata rather than carrying forward the old homepage claims.
- Corrected public product facts:
  - Luvit delivers its daily mission at 9 AM and remains live at App Store version 1.0.2.
  - Seed is now `Seed. 루틴으로 키우는 식물`, live at version 1.0.3, with Daily Story and longer review flows reflected in the copy.
  - heum is a browser mystery game with `09:04` and `ROOM 404`, not a lifestyle pattern quiz.
- Removed Nambona from the active product list because its workspace now lives under `실패/`.
- Added the active ALPHA Magazine, ALPHA app, Mystery Platform, 오늘치, and Buying OS work with explicit public, prototype, and internal-operation statuses.
- Expanded the lower archive from three to five cards. Desktop uses a `3 + 2` grid with no empty placeholder cell; mobile uses five full-width cards.
- Browser verification covered all 10 generated routes at `1440 × 1024` and `390 × 844`: 20 successful responses, no horizontal overflow, and no console or page errors.
- Current-content evidence:
  - `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/other-rooms-desktop-latest-content.png`
  - `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/other-rooms-mobile-latest-content-fixed.png`

## Findings

- No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- [P3] The source shows hands holding the Luvit phone, while the implementation deliberately floats the real app screenshot over the room so product UI stays accurate and updateable.
- [P3] The additional product, studio, and contact sections extend beyond the selected mock's ending but preserve required company-site information without changing the selected four-scene visual core.

final result: passed
