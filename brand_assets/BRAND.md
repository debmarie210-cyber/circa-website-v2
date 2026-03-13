# CIRCA AI GROUP — Brand System Reference
**Version 3.0 · For Claude Code**

> Read this file at the start of every session before writing any component, page, or style.
> All design decisions must reference these tokens. Never hardcode values.
> Token files: `brand-tokens.css` and `brand-tokens.js`

---

## 1. LOGO

### The Mark
The wordmark is **CIRCA** in a high-contrast luxury serif (Didot/Bodoni territory).
- **CIRC** — rendered in dark near-black
- **A** — rendered in Brand Gold (#C9A84C on dark, #A67C2E on light)
- **·** — a gold dot follows the A. This is part of the logo. Never omit it.

### Current File Status
The logo file is a **JPEG with a black background**. This works on:
- ✅ Navy sections — black background blends into navy
- ✅ True black backgrounds
- ❌ Cream or white backgrounds — requires transparent PNG (request from designer)

### Logo on Light Backgrounds (until transparent PNG is available)
Wrap the logo in a navy pill/container:
```jsx
<div style={{ background: '#0B1526', borderRadius: 10, padding: '10px 18px', display: 'inline-block' }}>
  <img src="/logo.jpg" alt="Circa AI Group" height={32} />
</div>
```

### Favicon / Small Sizes
At 32px and below, use the gold A mark only — a capital A in Brand Gold (#C9A84C) on a Navy (#0B1526) square background with 4px border radius.

### Logo Don'ts
- Never recreate the logo letterforms in code or copy
- Never change the gold color of the A or the dot
- Never place on a mid-tone background (only dark or light)
- Never scale below 32px as a full wordmark
- Never crop, stretch, or alter the logo file
- Never add effects (shadows, outlines, gradients) to the logo

### Subline
`AI GROUP` in DM Sans, 10px, weight 300, letter-spacing 0.4em, uppercase, color #8A93A2 (Steel Gray).
Always place centered beneath the logo mark.

---

## 2. COLORS

Import from `brand-tokens.js`: `import { colors } from '@/lib/brand-tokens'`
Or use CSS variables from `brand-tokens.css`.

### Color Reference

| Token | Hex | Usage |
|---|---|---|
| `colors.navy` | `#0B1526` | Primary background — hero, nav, footer, logo bg |
| `colors.navyMid` | `#122040` | Cards on dark, hover states, depth layers |
| `colors.nearBlack` | `#1C1C1C` | All body copy on light backgrounds |
| `colors.white` | `#FFFFFF` | Cards on cream, text on dark |
| `colors.cream` | `#F9F5EE` | Default light background |
| `colors.gray` | `#8A93A2` | Captions, sublines, secondary text |
| `colors.gold` | `#C9A84C` | Logo A (dark), CTA buttons, highlights |
| `colors.goldLight` | `#E8C97A` | Gradient endings, decorative borders only |
| `colors.goldCognac` | `#A67C2E` | Logo A (light), LinkedIn graphics |
| `colors.success` | `#27AE60` | Result callouts only |
| `colors.warning` | `#E67E22` | Functional use only |
| `colors.error` | `#C0392B` | Functional use only |

### 60-30-10 Rule
- **60%** Navy family (navy, navyMid, nearBlack)
- **30%** Neutral family (cream, white, gray)
- **10%** Gold family (gold, goldLight, goldCognac)

### Gold Usage Rule
- `colors.gold` (#C9A84C) — logo A and CTAs on **dark** backgrounds only
- `colors.goldCognac` (#A67C2E) — logo A and accents on **light** backgrounds only
- `colors.goldLight` (#E8C97A) — gradient endpoint and decorative borders only. Never a standalone CTA or headline color.
- **One gold element per section maximum.** Gold loses authority when overused.

### Color Don'ts
- Never use `colors.navy` as body text on light backgrounds — it reads blue
- Never use `colors.cream` on dark backgrounds
- Never use gold as a background fill for sections
- Never put `colors.gold` text on `colors.cream` — contrast is too low
- Never introduce a color not in this palette

---

## 3. TYPOGRAPHY

Import from `brand-tokens.js`: `import { fonts, fontSize, fontWeights } from '@/lib/brand-tokens'`

### Three Fonts, Three Roles

| Font | Role | Use For |
|---|---|---|
| **Montserrat** | Headlines / Display | Page headlines, section titles, hero statements, eyebrow labels, pull quotes |
| **DM Sans** | Body / UI | All body copy, navigation, buttons, labels, forms, captions, the AI GROUP subline |
| **DM Mono** | Data / Precision | Revenue figures, percentages, scores, statistics — data only |

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Size | Token | Usage | Font | Weight |
|---|---|---|---|---|
| 72–80px | `fontSize.hero` | Hero display | Montserrat | 900 |
| 40–60px | `fontSize.h1` | Page headline | Montserrat | 800–900 |
| 26–44px | `fontSize.h2` | Section title | Montserrat | 700–800 |
| 20–32px | `fontSize.h3` | Card headline | Montserrat | 700 |
| 22px | `fontSize.h4` | Sub-headline | Montserrat | 700 |
| 17px | `fontSize.lead` | Lead body | DM Sans | 300 |
| 15px | `fontSize.body` | Standard body | DM Sans | 400 |
| 13px | `fontSize.small` | Supporting | DM Sans | 400 |
| 11px | `fontSize.caption` | Eyebrow/label | Montserrat | 600, uppercase, tracked |
| 28–48px | `fontSize.data` | Data callout | DM Mono | 500 |

### Eyebrow Label Pattern
```jsx
<p style={{
  fontFamily: fonts.headline,
  fontSize: fontSize.caption,
  fontWeight: fontWeights.semibold,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: colors.goldCognac
}}>
  Revenue Diagnostic · 10 Questions
</p>
```

### Typography Don'ts
- Never use Inter, Roboto, or Space Grotesk — ever
- Never use DM Mono for anything other than numbers and data
- Never use Montserrat for long-form body copy (over 2–3 lines)
- Never use `colors.navy` as body text on light backgrounds

---

## 4. SECTION COLOR MAP

Use `sectionTokens` from `brand-tokens.js` to determine correct colors per section.

| Section | Background | Headline | Body | CTA/Accent |
|---|---|---|---|---|
| Navigation | `navy` | `white` | `gray` | `gold` button |
| Hero | `navy` | `gold` | `white` 300 | `gold` button |
| About / Story | `cream` | `navy` | `nearBlack` | `goldCognac` |
| Services | `navyMid` | `white` | `gray` 300 | `gold` button |
| Social Proof | `cream` | `navy` | `nearBlack` | `success` badge |
| Lead Magnet | `navy` | `gold` | `white` | `gold` button |
| Footer | `navy` | `gold` | `gray` | `goldLight` links |
| LinkedIn Graphics | `cream` | `navy` | `nearBlack` | `goldCognac` |

---

## 5. COMPONENTS

### Primary CTA Button
```jsx
// Gradient gold button — one per section maximum
<button style={{
  padding: '14px 32px',
  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
  color: colors.navy,
  fontFamily: fonts.body,
  fontWeight: fontWeights.bold,
  fontSize: '15px',
  borderRadius: radius.md,
  border: 'none',
  cursor: 'pointer'
}}>
  Book Your Free Workflow Audit →
</button>
```

### Ghost Button (on dark backgrounds)
```jsx
<button style={{
  padding: '13px 31px',
  background: 'transparent',
  color: colors.gold,
  fontFamily: fonts.body,
  fontWeight: fontWeights.bold,
  fontSize: '15px',
  borderRadius: radius.md,
  border: `1.5px solid ${colors.gold}`,
  cursor: 'pointer'
}}>
  Learn More
</button>
```

### Card (light section)
```jsx
<div style={{
  background: colors.white,
  borderRadius: radius.lg,
  boxShadow: shadows.card,
  padding: spacing[8]
}}>
```

### Card (dark section)
```jsx
<div style={{
  background: colors.navyMid,
  border: '1px solid rgba(255, 255, 255, 0.07)',
  borderRadius: radius.lg,
  padding: spacing[8]
}}>
```

### Data Stat
```jsx
<div>
  <span style={{
    fontFamily: fonts.data,
    fontSize: fontSize.data,
    fontWeight: fontWeights.medium,
    color: colors.goldCognac // on light bg — use colors.gold on dark bg
  }}>73%</span>
  <p style={{ fontSize: fontSize.small, color: colors.gray, marginTop: 4 }}>
    of revenue leaks are preventable
  </p>
</div>
```

### Gold Atmosphere (dark sections)
```jsx
// Add as a pseudo-element or overlay div
background: 'radial-gradient(ellipse at 85% 30%, rgba(201,168,76,0.10) 0%, transparent 55%)'
```

---

## 6. LAYOUT

```jsx
// Section container
<div style={{
  maxWidth: layout.maxWidth,   // 1100px
  margin: '0 auto',
  padding: `0 ${layout.gutter}` // 48px desktop / 24px mobile
}}>
```

Standard section vertical padding: `80px` top and bottom on desktop, `48px` on mobile.

---

## 7. VOICE & COPY RULES

These apply to any copy Claude Code generates for the site.

### Brand Voice
- Direct, lean, confident — never corporate or jargon-heavy
- Problem-first positioning — lead with the client's pain, not the solution
- No "I help" openers
- No em dashes (—) in copy
- No guru-bro tone
- Dry wit is welcome; hype is not
- Model: Kate Toon's voice — plain English, professional, relatable

### Copy Patterns That Work
- "Your clients aren't leaving for a better rate. They're leaving in silence."
- "Stop the silent revenue drain."
- "Every client feels like your only client."
- "The $100K Blind Spot."
- "Eliminate the gaps before they cost you."

### Copy Patterns to Avoid
- "Leverage cutting-edge AI solutions to optimize your workflow"
- "I help busy professionals streamline their business"
- "Take your business to the next level"
- "Game-changing results"
- Any sentence starting with "I help"

### CTA Copy
- Specific and action-oriented: "Book Your Free Workflow Audit →"
- Not vague: "Learn More" or "Get Started"
- Arrow → at the end of primary CTAs is on-brand

---

## 8. LOGO FILE NOTES FOR CLAUDE CODE

When generating `<img>` tags for the logo:
```jsx
// Standard logo usage (dark backgrounds)
<img
  src="/logo.jpg"          // or wherever the file lives in the project
  alt="Circa AI Group"
  height={40}              // adjust per context
  style={{ display: 'block' }}
/>

// Logo on light backgrounds (navy pill container — until transparent PNG)
<div style={{
  background: '#0B1526',
  borderRadius: 10,
  padding: '10px 18px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8
}}>
  <img src="/logo.jpg" alt="Circa AI Group" height={28} style={{ display: 'block' }} />
</div>

// Favicon — gold A mark only (generate as SVG or use image asset)
// 32x32 Navy square, gold A character in Didot/Georgia serif approximation
```

### When designer delivers transparent PNG:
- Replace `/logo.jpg` with `/logo.png` throughout
- On cream/white: use Cognac Gold (#A67C2E) version of the A
- Remove navy pill containers on light sections

---

## 9. QUICK REFERENCE CHEATSHEET

```
FONTS:       Montserrat (headlines) · DM Sans (body) · DM Mono (numbers)
DARK BG:     #0B1526 (navy) · #122040 (navy-mid)
LIGHT BG:    #F9F5EE (cream — default) · #FFFFFF (white — sparingly)
BODY TEXT:   #1C1C1C (near-black on light) · #FFFFFF (white on dark)
SECONDARY:   #8A93A2 (gray — captions, sublines)
GOLD DARK:   #C9A84C (CTAs + logo A on dark)
GOLD LIGHT:  #A67C2E (logo A + accents on cream/white)
GOLD DECO:   #E8C97A (gradient endpoint only)
CTA:         gradient(135deg, #C9A84C, #E8C97A) — navy text
SHADOW:      0 2px 14px rgba(11,21,38,0.07)
MAX WIDTH:   1100px
GUTTER:      48px desktop · 24px mobile
```

---

## 10. FILE STRUCTURE REFERENCE

```
/
├── public/
│   └── logo.jpg              ← Current logo (JPEG, black bg)
│   └── logo.png              ← Request from designer (transparent bg)
├── lib/
│   └── brand-tokens.js       ← JS/TS token export
├── styles/
│   └── brand-tokens.css      ← CSS custom properties
└── BRAND.md                  ← This file
```

---

*Circa AI Group · Brand Identity System v3.0*
*circaaigroup.com*
