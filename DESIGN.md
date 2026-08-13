# East Noise website design context

## Product and first impression

동방의 소음이 실제로 운영하는 Luvit, Seed, ALPHA, HEUM을 한눈에 이해하고 각 제품 또는 문의로 이동하는 회사 웹사이트다. 첫인상은 `차분함`, `정교함`, `실제 제품을 운영하는 팀`이다.

## Visual system

- Background: cool pearl canvas with restrained product-color light fields.
- Functional glass: navigation and primary actions only. Use clear borders, strong labels, and 24–30px blur.
- Content material: text-heavy cards use a thicker near-white surface rather than clear glass.
- Typography: system/Pretendard, large headings with tight optical tracking, body at readable contrast and 1.7+ line height.
- Shape: large surfaces 28–48px; controls use capsules. Do not round every divider or text group.
- Motion: transform and opacity only, interruptible press feedback, no looping background motion. The desktop home collection uses a sticky four-card scroll showreel with a visible progress bar; mobile keeps the same reading order in a linear flow. Reduced Motion removes the sticky stack and all spatial movement.

## Product accents

- Luvit: soft rose
- Seed: fresh green
- ALPHA: near-black with red accent
- HEUM: clear blue

Accent color supports product identity but never replaces text, status copy, or focus state.

## Accessibility and fallbacks

- Minimum interactive height is 44px.
- Focus rings remain visible on light, tinted, and dark surfaces.
- `prefers-reduced-transparency` receives solid surfaces; `prefers-contrast: more` receives stronger borders and near-solid material.
- Long Korean copy wraps naturally; fixed-height text cards are forbidden.

## Reference roles

| Source | Role | Adaptation |
| --- | --- | --- |
| Existing East Noise site and product assets | Product source of truth | Preserve four-product hierarchy, current copy, links, and imagery |
| Apple HIG Materials and Layout | Primary interaction/material reference | Glass is a floating functional layer; content stays legible and aligned |
| OMD KRDS/GOV.UK summaries in the team playbook | Accessibility complement | Clear labels, strong focus, readable Korean text, 44–56px actions |
| Low-contrast generic glass dashboards | Anti-reference | No blur-on-blur stacks, tiny gray captions, hidden hover-only actions, or decorative card grids |
