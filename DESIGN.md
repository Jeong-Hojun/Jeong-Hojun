# DESIGN SYSTEM — Hojun Jeong CV Homepage

> React 18 · TypeScript · Vite · Tailwind CSS 3 · React Router v6

---

## 1. Design Philosophy

**Neurorehabilitation × Editorial**

The site communicates two ideas simultaneously:
- The **scientific rigour** of clinical neural engineering research
- The **editorial ambition** of a researcher who thinks beyond the lab

The visual language draws from:
- High-end editorial portfolios (oversized typography, generous whitespace)
- Clinical scientific software (dark monitor aesthetic, precise line-weight data viz)
- Cinematic science documentary (real 3D neural imagery as full-bleed background)

**Rule of thumb:** if it looks like a game UI or a smartphone app — it's wrong. The benchmark is a premium academic portfolio that also happens to feel like a magazine spread.

---

## 2. Color Palette

Defined in `tailwind.config.js` → `theme.extend.colors` and `src/index.css`.

| Token | Hex | Usage |
|---|---|---|
| `background` | `#070B0F` | Page background, card fills, SVG illustration backgrounds |
| `cream` | `#EFF4FF` | All body text, headings |
| `neon` | `#22D3EE` | **Primary accent** — nav hover, links, all SVG illustration strokes, glow effects |

### Rules
- **No purple.** An earlier version used `#7C3AED` / `#A78BFA`. This was removed because it clashes with the golden-teal cinematic video backgrounds. If you feel the urge to add purple, don't.
- The **only** additional tint allowed is `rgba(239,244,255,x)` (cream with opacity) for secondary text and borders.
- SVG illustrations use `#22D3EE` exclusively, with varying `opacity` / `fillOpacity` (range `0.06–0.9`) to create visual hierarchy.

---

## 3. Typography

Loaded via Google Fonts (`index.html`).

| Token | Font | Usage |
|---|---|---|
| `font-grotesk` | **Anton** (400) | Hero headlines, section headings, card titles — ALL CAPS |
| `font-condiment` | **Condiment** (400) | Italic accent labels ("Research", "Researcher") — mixed case |
| `font-mono` | System monospace stack | Body copy, keywords, labels, overlay text — ALL CAPS |

### Scale (fluid / clamp)

```
Hero headings:   clamp(2.8rem, 8vw, 8rem)
Section heads:   clamp(2.2rem, 5.5vw, 6rem)
Accent labels:   clamp(1.6rem, 3vw, 3rem)
Body / mono:     0.75rem – 0.8rem, tracking-widest
Card titles:     0.88rem, tracking-wide
Overlay labels:  10px, tracking-widest
```

---

## 4. Layout & Sections

Single-page app with smooth-scroll anchors + React Router detail pages.

```
#home         → Hero (full-viewport, video background)
#about        → About (two-column: heading left, statement right, keywords ticker)
#research     → Selected Research (3-column card grid)
#publications → Publications (list with SCI badge)
#contact      → CTA + contact links
```

### Max width
`max-w-8xl` = `1831px`, centered with `mx-auto`. Horizontal padding: `px-5 md:px-14`.

---

## 5. Liquid-Glass Component

Defined in `src/index.css` → `@layer components`.

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.10);
}
/* Gradient border via ::before pseudo-element (padding-mask technique) */
```

**Used on:** nav bar, research cards, publication rows, contact block, card bottom info bars.

---

## 6. Video Backgrounds

Three full-bleed `<video>` sections (muted, autoplay, loop, playsInline).  
Source: Pexels free stock, direct CDN MP4 URLs.

| Section | Description | URL |
|---|---|---|
| Hero | Gold/teal 3D neural fiber network | `https://videos.pexels.com/video-files/37101560/15717707_1920_1080_30fps.mp4` |
| About | Orange glowing neurons, synaptic connections | `https://videos.pexels.com/video-files/29184317/12601884_1920_1080_30fps.mp4` |
| CTA | Cyan biological cell structures | `https://videos.pexels.com/video-files/34913011/14789433_1920_1080_30fps.mp4` |

Videos are overlaid with a dark gradient mask (`from-background/80`) so text remains readable.

---

## 7. Research Card Illustrations

Each of the three research cards contains an inline SVG illustration.  
All illustrations share a **strict design contract**:

### Contract
| Property | Value |
|---|---|
| Background | `#070B0F` (matches page bg exactly — no separate card bubble) |
| Primary color | `#22D3EE` only |
| Secondary | `rgba(255,255,255,x)` for specular highlights |
| Fills | `rgba(34,211,238,0.03–0.12)` — very transparent |
| Stroke weights | `0.5px` (grid/secondary) · `1.0–1.6px` (primary forms) |
| Style archetype | **Thin-line scientific diagram** — not icon, not gaming HUD |
| viewBox | `0 0 300 300` |

### SVG Filters (shared pattern)
```jsx
<filter id="*-glow">   // stdDeviation ~2.5–3   — sharp edge bloom
<filter id="*-bloom">  // stdDeviation ~12–16   — wide ambient halo
```

### CSS Keyframe Animations (`src/index.css`)
```
illus-ring-pulse   — expanding ring fade (pulse rings)
illus-glow-blink   — opacity oscillation (electrodes, signal dots, bars)
illus-scan         — horizontal scan line sweep
illus-dash-flow    — stroke-dashoffset flow
illus-float        — gentle vertical float
```

### Cards
| Card | Key visual | Scientific concept shown |
|---|---|---|
| `VRRehabIllustration` | Frontal skull silhouette + rectangular VR headset overlay + EEG wave inside lenses | VR worn over the brain — motor cortex activity readout |
| `EEGIllustration` | Brain topomap (10-20 system, white Cz peak, cyan electrodes) + 3-channel waveform | EEG-based motor imagery BCI with motor cortex hotspot |
| `HRIIllustration` | Human arm (EMG pads) ↔ BCI chip hub ↔ robot arm with gripper | Bidirectional neural signal → robot control loop |

---

## 8. Content Editing Guide

All copy lives in **constants at the top of `src/App.tsx`** (lines ~15–55).  
You never need to search through JSX to change text.

```ts
PERSON          → name, email
NAV_ITEMS       → navigation labels
SOCIAL_LINKS    → email / LinkedIn / Google Scholar URLs
HERO_LINES      → hero headline (array of strings)
ABOUT_HEADING   → about section heading lines
ABOUT_STMT      → about body paragraph
ABOUT_KEYWORDS  → keyword ticker string
FEATURED_CARDS  → title, subtitle, overlayLabel, overlayValue, href per card
CTA_LINES       → contact section text
VIDEOS          → swap background video URLs here
```

Research detail pages: `src/pages/VRRehabilitation.tsx`, `EEGNeurofeedback.tsx`, `HumanRobotInteraction.tsx`

---

## 9. Tech Stack

```
React 18 + TypeScript      — component framework
Vite 4                     — dev server & bundler  (npm run dev)
Tailwind CSS 3             — utility styling
React Router v6            — SPA routing (detail pages)
Lucide React               — icon set (Mail, Linkedin, ExternalLink, ArrowUpRight)
Node >= 16                 — required (React Router v6 constraint)
```

---

## 10. File Structure

```
src/
  App.tsx              ← Everything: constants, illustrations, all page sections
  main.tsx             ← BrowserRouter wrapper
  index.css            ← Tailwind layers + liquid-glass + keyframe animations
  pages/
    VRRehabilitation.tsx
    EEGNeurofeedback.tsx
    HumanRobotInteraction.tsx
tailwind.config.js     ← Color tokens, font families, max-width extension
index.html             ← Google Fonts import
```

---

## 11. Do / Don't

| Do | Don't |
|---|---|
| Keep all illustrations on `#070B0F` background | Add a separate colored background to any illustration |
| Use `#22D3EE` as the single illustration accent | Introduce purple, orange, or green into illustrations |
| Use thin strokes (≤ 1.6px) and low-opacity fills | Use thick filled shapes — this is a diagram, not an icon |
| Keep body copy in ALL CAPS + monospace | Use sentence-case in body/label text |
| Use `font-grotesk` (Anton) for all big headings | Mix heading fonts |
| Use `font-condiment` (Condiment) only for italic accent labels | Use Condiment for anything structural |
| Source videos from the Pexels animated CGI / microscopy category | Use videos featuring real human faces |
