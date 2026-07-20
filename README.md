<div align="center">
  <h1>Paisa·Pulse</h1>
  <p><strong>AI-Driven Cash Flow Prediction & Risk Flagging for Rural Micro-Enterprises</strong></p>
  <p>Turning every UPI payment into credit intelligence — for the 63 million businesses banks cannot see.</p>
</div>

---

## Overview

**Paisa·Pulse** is a marketing / product site for an AI platform that helps rural micro-enterprises get visibility, forecasts and a bank-grade financial health score — using only the data they already generate (UPI transactions, mandi prices, weather, sales patterns).

This repository contains the **marketing site** (`Vite + React + TypeScript + Tailwind CSS`).

## Signature moments

- **The Financial Heartbeat** — a live-animated SVG "pulse" in the hero that visualises UPI signals streaming into a health score in real time. This is the site's memorable visual.
- **A deliberate palette** grounded in "night-sky over rural India at sunrise":
  - `#0F1E3D` Midnight (deep base)
  - `#FFF9F0` Ivory (warm cream body)
  - `#F4EBDC` Parchment (section washes)
  - `#F59E0B` Saffron (primary accent)
  - `#EF6C1A` Marigold (warm secondary)
  - `#3DDC97` Mint (health / success)
  - `#E4572E` Terracotta (risk / alert)
- **Typography** — `Fraunces` (editorial serif, optical + soft variations) paired with `Inter` for body.
- **Motion** — IntersectionObserver-driven reveals, mouse-following hero glow, ambient float chips, subtle hover micro-interactions. All respect `prefers-reduced-motion`.

## Sections

1. Hero — with the live financial heartbeat
2. Problem — Rural India is flying blind
3. Solution — Four AI capabilities
4. How it works — 4-step pipeline
5. Key features — with per-feature mini-visualisations
6. System architecture — stacked chevron layers
7. Impact — stakeholder cards + government block
8. What makes us different — 3 differentiators
9. Technology stack — clean editorial list
10. Roadmap — What's next
11. CTA — with sunrise-village SVG ornament and pull-quote
12. Footer

## Local development

```bash
# 1. Install dependencies (Node ≥ 18)
npm install

# 2. Run the dev server
npm run dev
#    → http://localhost:5173

# 3. Production build
npm run build
npm run preview
```

## Tech stack

| Layer         | Tech                                      |
|---------------|-------------------------------------------|
| Framework     | React 18 + TypeScript                     |
| Bundler       | Vite 5                                    |
| Styling       | Tailwind CSS 3                            |
| Icons         | lucide-react                              |
| Fonts         | Google Fonts — Fraunces + Inter + JetBrains Mono |

## Accessibility & performance

- ✅ Keyboard focus is visible (custom `:focus-visible` ring)
- ✅ `prefers-reduced-motion` disables all animations
- ✅ Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`
- ✅ Fully responsive from 360 px → 1440 px+
- ✅ No decorative gradients, no heavy shadows — 1px hairline borders + micro-motion

## Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
└── components/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── Heartbeat.tsx         # ← the signature visual
    ├── SectionHeading.tsx
    ├── Problem.tsx
    ├── Solution.tsx
    ├── HowItWorks.tsx
    ├── Features.tsx
    ├── Architecture.tsx
    ├── Impact.tsx
    ├── Differentiators.tsx
    ├── TechStack.tsx
    ├── Roadmap.tsx
    ├── CTA.tsx
    └── Footer.tsx
```

## Deploy

Any static host (Vercel / Netlify / Cloudflare Pages / GitHub Pages).

```bash
npm run build   # → ./dist
```

## Credits

Content derived from **TeamCodeHolics** proposal for the AI-Driven Cash Flow Prediction & Risk Flagging System.

## License

MIT © 2025 TeamCodeHolics
