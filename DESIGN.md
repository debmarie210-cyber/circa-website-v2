# DESIGN.md — Circa AI Group Visual System
**Impeccable Stitch Format · Extracted from live site + brand tokens**

---

## 1. COLOR TOKENS

### Primary Palette

| Token | Hex | Role |
|---|---|---|
| Navy | `#0B1526` | Primary dark background, footer, nav on dark |
| Navy Mid | `#122040` | Cards on dark, hover states, depth layers |
| Near Black | `#1C1C1C` | Body copy on light backgrounds |
| White | `#FFFFFF` | Cards on cream, text on dark |
| Cream | `#F9F5EE` | Default light background (hero, nav) |
| Gray | `#8A93A2` | Captions, metadata, secondary text |

### Gold Family

| Token | Hex | Role |
|---|---|---|
| Gold | `#C9A84C` | CTA buttons, logo A on dark, highlights |
| Gold Light | `#E8C97A` | Gradient endpoint, decorative borders only |
| Gold Cognac | `#A67C2E` | Logo A on light, accents on cream/white |

### Extended (live site deviations from tokens)

| Hex | Where Used |
|---|---|
| `#f0f0ee` | AI Gap section, FAQ section backgrounds |
| `#f6f6f6` | Case study (light variant) background |
| `#060f1e` | Operational Impact section background |
| `#082567` | About section background |
| `#43c2fd` | Section number labels (e.g., `[04. Operational Impact]`) |
| `#3a4455` | Narrative body text on light case study cards |
| `#5a6578` | Hero subhead, FAQ answers, muted body text |
| `#0F6E56` | ROI card success value |
| `#C0392B` | ROI card danger value, brand error |
| `#1D9E75` | Live status dot (ROI card) |

### Status Colors

| Token | Hex | Role |
|---|---|---|
| Success | `#27AE60` | Result callouts, positive badges |
| Warning | `#E67E22` | Functional warnings |
| Error | `#C0392B` | Functional errors |

### 60-30-10 Rule
- **60%** Navy family (navy, navyMid, nearBlack)
- **30%** Neutral family (cream, white, gray)
- **10%** Gold family (gold, goldLight, goldCognac)

### Gold Usage Constraints
- `#C9A84C` on dark backgrounds only
- `#A67C2E` on light backgrounds only
- `#E8C97A` gradient endpoint and decorative borders only, never standalone CTA
- One gold element per section maximum

---

## 2. TYPOGRAPHY

### Font Stack

| Font | Role | Use |
|---|---|---|
| **Montserrat** | Headlines / Display | Page titles, section titles, hero, eyebrows, stat numbers |
| **DM Sans** | Body / UI | Body copy, nav, buttons, labels, forms, captions |
| **DM Mono** | Data / Precision | Revenue figures, percentages, statistics, section labels |
| **Inter** | Hero UI | Hero eyebrow, proof bar, ROI card labels (hero only) |
| **Lora** | Hero Serif | Hero subhead (italic, hero only) |

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;1,400&family=Montserrat:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale (Live Values)

| Size | Usage | Font | Weight |
|---|---|---|---|
| `clamp(2.25rem, 4.5vw, 3.5rem)` | Hero title | Montserrat | 800 |
| `clamp(28px, 4vw, 44px)` | Section titles (gap, services, impact) | Montserrat | 800 |
| `clamp(28px, 3.8vw, 52px)` | Case study title | Montserrat | 800 |
| `clamp(26px, 3.5vw, 40px)` | Approach title | Montserrat | 800 |
| `clamp(2.5rem, 5vw, 4rem)` | FAQ heading | Montserrat | 800 |
| `clamp(28px, 4.5vw, 56px)` | Footer CTA | Montserrat | 800 |
| `clamp(36px, 4vw, 52px)` | Data metrics | DM Mono | 500 |
| `clamp(30px, 3.5vw, 48px)` | Gap stat numbers | DM Mono | 500 |
| `clamp(22px, 2.8vw, 32px)` | Stat card numbers | Montserrat | 800 |
| 17px | Lead body | DM Sans | 300 |
| 16px | Standard body (case study narrative) | DM Sans | 400 |
| 15px | Body / nav links / buttons | DM Sans | 400–700 |
| 14px | Impact block body, supporting text | DM Sans | 400 |
| 13px | Gap labels, stat labels, trust strip | DM Sans / Inter | 400–500 |
| 11px | Eyebrow labels, section labels | Montserrat / DM Mono | 500–600 |
| 10px | Stage numbers, footer booking label | DM Mono | 500 |

### Letter Spacing

| Context | Value |
|---|---|
| Eyebrow labels | `0.18em–0.2em` |
| Subline (AI GROUP) | `0.4em` |
| Section label (DM Mono) | `0.12em–0.18em` |
| Hero eyebrow (Inter) | `0.12em` |
| Large headlines | `-0.025em` to `-0.03em` |

### Line Height

| Context | Value |
|---|---|
| Hero headline | `1.1` |
| Section headlines | `1.08–1.15` |
| Body copy | `1.7–1.75` |
| UI text | `1.5–1.6` |
| Impact block body | `1.75` |

---

## 3. SPACING TOKENS

### CSS Custom Properties (from brand-tokens.css)

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

### Section Padding (Live Values)

| Section | Desktop | Mobile |
|---|---|---|
| Hero | `clamp(80px, 12vh, 140px) 48px clamp(60px, 10vh, 120px)` | `56px 24px 52px` |
| AI Gap | `96px 48px` | `56px 24px` |
| Approach | `96px 48px` | `64px 24px` |
| Services | `96px 48px` | `64px 24px` |
| Results | `96px 48px` | `64px 24px` |
| Case Study | `96px 48px` | `64px 24px` |
| Operational Impact | `100px 24px` | — |
| FAQ | `10rem 4rem` | `6rem 1.5rem` |
| Footer | `96px 48px 48px` | `64px 24px 40px` |

### Layout Constants

| Property | Value |
|---|---|
| Max width (content) | `1100px` |
| Max width (hero/services) | `1200px–1300px` |
| Gutter (desktop) | `48px` |
| Gutter (mobile) | `24px` |
| Navbar height | `72px` |

---

## 4. GRADIENTS & BACKGROUNDS

### CTA Gradient
```css
linear-gradient(135deg, #C9A84C, #E8C97A)
```

### Dark Section Atmospheres
```css
/* Approach — gold glow top-right, blue depth bottom-left */
radial-gradient(ellipse at 85% 30%, rgba(201,168,76,0.07) 0%, transparent 52%),
radial-gradient(ellipse at 15% 75%, rgba(26,45,82,0.5) 0%, transparent 48%),
#0B1526

/* Services — layered blue/gold/ambient over deep navy gradient */
radial-gradient(ellipse at 50% 45%, rgba(67,194,253,0.08) 0%, transparent 55%),
radial-gradient(ellipse at 50% 90%, rgba(240,180,41,0.06) 0%, transparent 40%),
radial-gradient(ellipse at 50% 50%, rgba(20,60,120,0.3) 0%, transparent 70%),
linear-gradient(180deg, #040c1a 0%, #0a1e3d 40%, #0f2847 65%, #091a30 100%)

/* Results — subtle gold glow left */
radial-gradient(ellipse at 18% 50%, rgba(201,168,76,0.05) 0%, transparent 48%),
#0B1526

/* Footer — gold glow top-right */
radial-gradient(ellipse at 85% 25%, rgba(201,168,76,0.07) 0%, transparent 48%),
#0B1526

/* Flip card back face */
linear-gradient(145deg, #1a2f58, #0d1e3c)

/* Gold stat cards (light case study) */
linear-gradient(135deg, #0B1526, #1a2d52)

/* Gold stat cards (dark case study) */
linear-gradient(135deg, #C9A84C, #A67C2E)
```

### Hero Noise Texture
```html
<svg class="hero-noise" xmlns="http://www.w3.org/2000/svg">
  <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.03"/>
</svg>
```

---

## 5. SHADOWS

| Token | Value | Usage |
|---|---|---|
| Card | `0 2px 14px rgba(11,21,38,0.07)` | Default card elevation |
| Hover | `0 10px 28px rgba(11,21,38,0.12)` | Card hover state |
| Strong | `0 20px 48px rgba(11,21,38,0.18)` | Floating elements |
| ROI Card | `0 4px 24px rgba(6,15,30,0.07), 0 1px 4px rgba(6,15,30,0.04)` | Layered hero card |
| Glass card | `0 8px 48px rgba(11,21,38,0.07), 0 2px 8px rgba(11,21,38,0.04)` | Frosted glass |
| Gold CTA hover | `0 12px 30px rgba(201,168,76,0.28)` | Gold button hover glow |
| Dark stat card | `0 2px 12px rgba(0,0,0,0.25)` | Dark variant case study |

---

## 6. BORDER RADIUS

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Small elements |
| `--radius-md` | 8–10px | Buttons, CTA |
| `--radius-lg` | 12–14px | Cards, stat cards, ROI card |
| `--radius-xl` | 16–20px | Flip cards, glass panels |
| `--radius-pill` | 999px | Pills, badges, tags |

---

## 7. COMPONENTS

### Navbar
- Sticky, `z-index: 100`
- Background: `#F9F5EE` (cream)
- Border bottom: `1px solid rgba(0,0,0,0.07)`
- Height: `72px`, max-width: `1100px`
- Logo: `80px` height, `NEWCIRCALOGOTRANS.png`
- Subline: DM Sans 9px/300/0.4em tracking, `#8A93A2`
- Links: DM Sans 15px/500, `#1C1C1C`, hover `opacity: 0.5`
- CTA: gold gradient, 14px/700, `border-radius: 8px`, `padding: 11px 22px`
- Mobile: links hidden, logo auto-margin

### Primary CTA Button (`.btn-gold`)
```css
padding: 16px 32px;
background: linear-gradient(135deg, #C9A84C, #E8C97A);
color: #0B1526;
font-family: 'DM Sans', sans-serif;
font-size: 15px;
font-weight: 700;
border-radius: 10px;
/* Hover: opacity 0.9, translateY(-2px), gold glow shadow */
```

### Ghost Button (`.btn-ghost`)
```css
padding: 15px 31px;
background: transparent;
color: #C9A84C;
font-size: 15px;
font-weight: 700;
border: 1.5px solid #C9A84C;
border-radius: 10px;
/* Hover: background rgba(201,168,76,0.08), translateY(-1px) */
```

### Hero Outline Button (`.btn-hero-outline`)
```css
padding: 14px 28px;
background: transparent;
color: #1C1C1C;
border: 1px solid rgba(6,15,30,0.15);
border-radius: 8px;
/* Hover: background rgba(6,15,30,0.04), border darkens */
```

### Glass Card (`.sp-glass`)
```css
background: rgba(255,255,255,0.78);
backdrop-filter: blur(14px);
border: 1px solid rgba(255,255,255,0.92);
border-radius: 20px;
padding: 56px 48px;
box-shadow: 0 8px 48px rgba(11,21,38,0.07), 0 2px 8px rgba(11,21,38,0.04);
```

### Card (light section)
```css
background: #ffffff;
border: 1px solid rgba(0,0,0,0.08);
border-radius: 14px;
padding: 28px 24px;
box-shadow: 0 2px 12px rgba(11,21,38,0.06);
```

### Card (dark section)
```css
background: #122040;
border: 1px solid rgba(255,255,255,0.08);
border-radius: 16px;
```

### Credential Card (`.cred-card`)
```css
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.09);
border-radius: 8px;
padding: 28px;
/* Hover: bg 0.08, border gold 0.3, translateY(-2px) */
```

### Flip Card
- Perspective: `900px`, height: `360px`
- Front: `#122040`, border `rgba(255,255,255,0.08)`, radius `16px`
- Back: `linear-gradient(145deg, #1a2f58, #0d1e3c)`, border `rgba(201,168,76,0.3)`
- Transition: `transform 0.6s cubic-bezier(0.34, 1.3, 0.64, 1)`
- Trigger: hover or focus-within

### ROI Finder Card
- Max-width: `380px`, border-radius: `12px`
- Header: `#fafaf9` bg, border-bottom `rgba(6,15,30,0.06)`
- Body: padding `20px 18px`, gap `16px`
- Metrics panel: `#f8f8f6` bg, radius `8px`, padding `14px`
- Bar: track `#ece9e2`, fill `linear-gradient(90deg, #43c2fd, #1a9be8)`
- Auto-cycles every `3500ms` with opacity fade transition

### Live Badge / Pulsing Dot
```css
/* Badge */
background: rgba(201,168,76,0.12);
border: 1px solid rgba(201,168,76,0.35);
border-radius: 99px;
color: #C9A84C;

/* Dot */
width: 7px; height: 7px; border-radius: 50%; background: #C9A84C;
animation: livePulse 1.8s ease-in-out infinite;

@keyframes livePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.75); }
}
```

### Tag Pill (footer)
```css
padding: 8px 20px;
border: 1px solid rgba(201,168,76,0.45);
border-radius: 999px;
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.06em;
text-transform: uppercase;
color: rgba(255,255,255,0.75);
```

### Evidence Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1px;
background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.06);
border-radius: 14px;
overflow: hidden;
```

### Eyebrow Label Pattern
```css
font-family: 'Montserrat', sans-serif;
font-size: 11px;
font-weight: 600;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #A67C2E; /* light bg */
color: #C9A84C; /* dark bg */
```

### Section Label (DM Mono variant)
```css
font-family: 'DM Mono', monospace;
font-size: 10–11px;
letter-spacing: 0.12em–0.18em;
text-transform: uppercase;
color: #8A93A2; /* or #C9A84C on dark */
```

---

## 8. SECTION COLOR MAP (Live Site)

| Section | Background | Headline | Body | Accent |
|---|---|---|---|---|
| Navbar | `#F9F5EE` | — | `#1C1C1C` | Gold gradient CTA |
| Hero | `#F9F5EE` | `#1C1C1C` | `#5a6578` (Lora italic) | Gold gradient CTA |
| Trust Strip | `#F9F5EE` | — | `#8A93A2` | — |
| AI Gap | `#f0f0ee` | `#0B1526` | `#1C1C1C` | `#A67C2E` eyebrow, `#C9A84C` stats |
| Approach | `#0B1526` + gold/blue radials | `#FFFFFF` | `rgba(255,255,255,0.62)` | `#C9A84C` highlights |
| Services | Layered gradient (deep navy) | `#FFFFFF` | `rgba(255,255,255,0.62)` | `#C9A84C` connectors |
| Results | `#0B1526` + gold radial | `#FFFFFF` | `rgba(255,255,255,0.5)` | `#C9A84C` data metrics |
| Case Study (light) | `#f6f6f6` | `#0B1526` | `#3a4455` | `#C9A84C` eyebrow/arrows |
| Case Study (dark) | `#0B1526` | `#F9F5EE` | `rgba(249,245,238,0.78)` | Gold gradient stat cards |
| Operational Impact | `#060f1e` | `#FFFFFF` | `rgba(255,255,255,0.52)` | `#43c2fd` label, `#C9A84C` labels |
| About | `#082567` | `#FFFFFF` | `rgba(255,255,255,0.62)` | `#C9A84C` cred cards |
| FAQ | `#f0f0ee` | `#0B1526` | `#5a6578` | `#A67C2E` label/toggle |
| Footer | `#0B1526` + gold radial | `#FFFFFF` | `rgba(255,255,255,0.6)` | `#C9A84C` gold CTAs |

---

## 9. LAYOUT PATTERNS

### Two-Column Grid (Hero)
```css
display: grid;
grid-template-columns: 56fr 44fr;
gap: 64px;
align-items: center;
/* Mobile: single column */
```

### Two-Column Grid (Approach)
```css
grid-template-columns: 1fr 1.8fr;
gap: 88px;
align-items: start;
```

### Two-Column Grid (Case Study Body)
```css
grid-template-columns: 1fr 1fr;
gap: 64px;
align-items: start;
```

### Three-Column Grid (Impact Blocks)
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 0;
border: 1px solid rgba(255,255,255,0.09);
border-radius: 8px;
overflow: hidden;
```

### Four-Column Grid (Stats)
```css
grid-template-columns: repeat(4, 1fr);
gap: 40px;
```

### Flip Card Track (Horizontal)
```css
display: flex;
gap: 0; /* connectors fill gaps */
align-items: stretch;
overflow-x: auto;
/* Cards: flex: 1 1 0, min-width: 200px */
/* Connectors: flex: 0 0 24px, height: 3px */
```

---

## 10. ANIMATIONS & TRANSITIONS

### Allowed Properties
Only animate `transform` and `opacity`. Never `transition-all`.

### Scroll Reveal (Intersection Observer)
```css
.element {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.element.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Staggered delays: 0.05s, 0.15s, 0.25s, 0.35s per child */
```

### Card Hover
```css
transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
/* translateY(-2px) on hover */
```

### Flip Card
```css
transition: transform 0.6s cubic-bezier(0.34, 1.3, 0.64, 1);
/* Spring-style overshoot easing */
```

### Electric Pulse (Connectors)
```css
@keyframes elec-pulse {
  0%   { left: -100%; }
  100% { left: 200%; }
}
/* Staggered: 0s, 0.4s, 0.8s, 1.2s delay */
```

### ROI Card Cycling
- Interval: `3500ms`
- Fade out card (opacity 0), swap content after 300ms, fade in (opacity 1)

---

## 11. RESPONSIVE BREAKPOINTS

| Breakpoint | Usage |
|---|---|
| `max-width: 1024px` | Hero grid collapse to equal columns |
| `max-width: 900px` | Flip cards stack vertical, connectors hidden |
| `max-width: 768px` | Primary mobile breakpoint: single columns, reduced padding, nav links hidden |

### Mobile Behavior
- All grids collapse to single column at 768px
- Gutters reduce from 48px to 24px
- Section padding reduces (96px to 56–64px)
- Hero buttons stack vertically at full width
- Stats grids stay 2-column on mobile (case study)
- FAQ padding: `10rem 4rem` to `6rem 1.5rem`

---

## 12. BRAND ASSETS

| File | Purpose |
|---|---|
| `brand_assets/NEWCIRCALOGOTRANS.png` | Primary logo (transparent bg) |
| `brand_assets/CIRCAlogo.png` | Logo variant |
| `brand_assets/CIRCA GLOW LOGO GOLD DOT.png` | Glow logo for footer |
| `brand_assets/CIRCA-FAVICON.png` | Favicon |
| `brand_assets/Debbie Wright ER.png` | Founder headshot (original) |
| `brand_assets/debbie-headshot.png` | Founder headshot (processed) |
| `brand_assets/BRAND.md` | Full brand system reference |
| `brand_assets/brand-tokens.css` | CSS custom properties |
| `brand_assets/brand-tokens.js` | JS token exports |

---

## 13. SELECTION & GLOBAL STYLES

```css
::selection { background: #0B1526; color: #C9A84C; }
body {
  font-family: 'DM Sans', sans-serif;
  background-color: #0B1526;
  color: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
```

---

*Circa AI Group Visual System · Extracted 2026-05-23*
*Source: index.html (live), brand_assets/BRAND.md, brand_assets/brand-tokens.css*
