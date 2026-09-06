# East Noise website design context

## Product and first impression

동방의 소음이 직접 만들고 운영하는 Luvit, Seed, ALPHA, SCENE을 하나의 제품 세계로 보여주는 회사 웹사이트다. 첫인상은 `어둡고 선명함`, `손으로 만든 물성`, `실제로 출시하고 운영하는 팀`이다. HEUM은 새 방향이 확정될 때까지 공개 라우트와 회사 내비게이션에서 제외한다.

## Visual system

- Background: matte near-black. 밝은 카드형 회사 소개가 아니라 제품 장면이 화면을 점유한다.
- Product imagery: 각 제품은 실제 자산 또는 승인된 독립 이미지 자산을 사용한다. CSS 그림, 임시 SVG, 가짜 목업으로 대체하지 않는다.
- Signal color: 회사 공통 신호는 warm orange. 제품 장면에서는 Luvit rose, Seed green, ALPHA red, SCENE cyan을 제한적으로 쓴다.
- Typography: Pretendard/system sans. 헤드라인은 무겁고 짧게, 본문은 낮은 밀도와 충분한 행간으로 둔다.
- Shape: 큰 라운드 카드보다 edge-to-edge 장면, 직선, hairline divider를 우선한다. CTA만 명확한 직사각형 표면을 가진다.
- Motion: opacity와 짧은 translate reveal만 사용한다. 제품 인덱스는 현재 장면을 색과 선으로 표시하고, Reduced Motion에서는 정적으로 보인다.

## Homepage structure

1. Canonical East Noise signal mark and one-line navigation
2. Hero: `일상을 움직이는 작은 신호.`
3. Sticky product index and four cinematic product scenes: Luvit, Seed, ALPHA, SCENE
4. How we build: small problem → real launch → continued operation
5. Team roles without invented portraits, metrics, clients, or testimonials
6. Contact signal and compact footer

## Accessibility and responsive behavior

- Interactive targets are at least 44px where practical, with visible focus rings.
- Desktop product index becomes a compact sticky horizontal index on mobile.
- Mobile copy uses a solid translucent reading surface instead of relying on image contrast.
- Korean copy keeps words intact; long English copy may wrap naturally without fixed-height text containers.
- Decorative images have empty alt text. Product and navigation links retain explicit accessible names.
- `prefers-reduced-motion` removes reveal movement.

## Product truth

- Luvit: App Store v1.0.5
- Seed: App Store and Google Play v1.0.13
- ALPHA: App Store v1.0.3 and Google Play v1.0.4
- SCENE: iPhone v1.0.0, preparing to launch. Do not publish a store URL until the live listing is verified.

## Reference roles

| Source | Role | Adaptation |
| --- | --- | --- |
| Selected cinematic ImageGen concept | Primary visual truth | Dark editorial composition, product index, edge-to-edge scenes, compact team/contact bands |
| Canonical East Noise signal mark | Brand source of truth | Shape remains unchanged; color may switch to white or orange by context |
| Existing product repositories and store links | Product source of truth | Version, platform, privacy, and release state must be verified before copy changes |
| OMD Studio-style restraint | Composition reference | Minimal chrome, hairline divisions, content and product imagery as the color source |
