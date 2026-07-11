# Design QA

- Source visual truth: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/source-combined-mock.png`
- Implementation screenshot: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/home-desktop-1440x1024.png`
- Side-by-side evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/home-source-vs-implementation.png`
- Responsive evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/home-mobile-390x844.png`
- Product-page evidence: `/Users/josugeun/Projects/East-Noise/east-noise-web/artifacts/design-qa/luvit-mobile-390x844.png`
- Viewports: `1440x1024`, `390x844`
- State: Korean homepage with Luvit selected; mobile homepage; Luvit detail; Korean and English legal routes.

## Full-view comparison evidence

The normalized side-by-side image compares both source and implementation at `1440x1024`. The final implementation preserves the source's white upper field, orange lower field, boundary position, left-aligned headline hierarchy, horizontal product selector, large outlined product name, glass sunset sphere placement, and thin black lower edge. The implementation intentionally uses a live Three.js sphere rather than the source's static raster object.

## Focused-region comparison evidence

A separate crop was not required because the source and implementation were normalized to the same viewport and retained readable typography, navigation, product controls, CTA copy, and the full 3D object at original resolution in the combined `2880x1024` evidence image.

## Required fidelity surfaces

- Fonts and typography: Pretendard Variable matches the source's neutral grotesk direction. Headline weight, line height, wrapping, and zero letter spacing are stable on desktop and mobile. The outlined product word was widened to match the source proportion.
- Spacing and layout rhythm: Header, hero copy, white/orange boundary, product selector, outlined word, CTA, and lower edge align closely with the source. Mobile uses fixed breakpoint sizes and has no horizontal overflow.
- Colors and visual tokens: White, black, neutral gray, and sunset orange are centralized and consistent across home, product, and legal pages. Contrast remains readable in both white and orange regions.
- Image quality and asset fidelity: The source sphere is implemented as a real WebGL scene with a physically lit glass shell, internal sunset shader, horizon, and pointer-driven rotation. It remains nonblank at both tested viewports.
- Copy and content: Hero and CTA copy are short and factual. Product states and descriptions come from the shared product data rather than placeholder content.
- Interaction and accessibility: Product selection updates name, tagline, link, progress, orange tone, and 3D lighting. Keyboard focus, semantic navigation, reduced-motion handling, and touch-safe mobile sizing are present.

## Comparison history

### Pass 1

- [P1] The white hero occupied too much of the first viewport. Fixed by aligning the white/orange boundary to the selected source composition.
- [P1] The 3D sphere was too small and too pale. Fixed by increasing camera scale, moving the sphere across the boundary, strengthening the internal sunset colors, and removing a transmission artifact.
- [P2] The outlined product word was materially narrower than the source. Fixed with a wider transform on desktop while retaining a mobile-safe width.
- [P2] The default legal-page header lost its layout styling. Fixed by moving shared chrome rules into global CSS and rechecking the legal route.

### Pass 2

- Post-fix side-by-side comparison found no remaining P0, P1, or P2 differences.
- Homepage, English homepage, Luvit, Seed, Pickie, and Korean/English legal routes rendered without horizontal overflow.
- Product selector test: selecting Seed changed the active product to `Seed`, tagline to `짧은 영상 인증으로 식물이 자랍니다.`, and destination to `/seed`.
- Browser console check: no errors or warnings on the final verification tab.
- Build check: `npm run build` passed for all 16 static routes.

## Findings

- No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- [P3] The live sphere is intentionally cleaner and less photorealistic than the source raster. More reflective texture could be added later, but the current treatment is consistent with the requested minimal direction and preserves real-time interaction.

final result: passed
