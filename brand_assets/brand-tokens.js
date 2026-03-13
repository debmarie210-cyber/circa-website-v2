/**
 * CIRCA AI GROUP — Brand Tokens (JS/TS)
 * Version 3.0
 *
 * Usage:
 *   import { brand } from '@/lib/brand-tokens'
 *   import { colors, fonts, spacing } from '@/lib/brand-tokens'
 *
 * Claude Code: Reference this file for all design decisions.
 * Never hardcode hex values — always use these tokens.
 */

// ─────────────────────────────────────────────
// COLORS
// ─────────────────────────────────────────────

export const colors = {
  // Dark backgrounds
  navy:       '#0B1526', // Primary BG — hero, nav, footer, logo background
  navyMid:    '#122040', // Secondary dark — cards on dark, hover states

  // Neutrals
  nearBlack:  '#1C1C1C', // Body copy on light backgrounds — NEVER use navy here
  white:      '#FFFFFF', // Cards on cream, text on dark, max contrast
  cream:      '#F9F5EE', // Default light background — preferred over plain white
  gray:       '#8A93A2', // Captions, metadata, sublines, secondary text

  // Gold (the brand mark)
  gold:       '#C9A84C', // Logo A on dark/navy, CTA buttons, primary highlights
  goldLight:  '#E8C97A', // Gradient endings, decorative — never use as CTA
  goldCognac: '#A67C2E', // Logo A on cream/white (transparent PNG), LinkedIn graphics

  // Status (functional use only)
  success:    '#27AE60', // Result callouts, positive badges
  warning:    '#E67E22', // Functional warnings only
  error:      '#C0392B', // Functional errors only
} as const

// ─────────────────────────────────────────────
// GRADIENTS
// ─────────────────────────────────────────────

export const gradients = {
  gold:      'linear-gradient(135deg, #C9A84C, #E8C97A)',  // CTA buttons
  navyHero:  'linear-gradient(180deg, #0B1526 0%, #122040 100%)',  // Hero sections
  goldGlow:  'radial-gradient(ellipse at 85% 30%, rgba(201,168,76,0.10) 0%, transparent 55%)',  // Dark bg atmosphere
} as const

// ─────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────

export const fonts = {
  headline:  "'Montserrat', sans-serif",  // Headlines, section titles, eyebrows
  body:      "'DM Sans', sans-serif",     // All body copy, nav, buttons, labels
  data:      "'DM Mono', monospace",      // Numbers, stats, revenue figures, scores
} as const

export const fontWeights = {
  light:      300,
  regular:    400,
  medium:     500,
  semibold:   600,
  bold:       700,
  extrabold:  800,
  black:      900,
} as const

export const fontSize = {
  hero:    'clamp(52px, 7vw, 80px)',    // Hero display — Montserrat 900
  h1:      'clamp(36px, 5vw, 60px)',   // Page headline — Montserrat 800-900
  h2:      'clamp(26px, 3.5vw, 44px)',  // Section title — Montserrat 700-800
  h3:      'clamp(20px, 2.5vw, 32px)', // Card headline — Montserrat 700
  h4:      '22px',                      // Sub-headline — Montserrat 700
  lead:    '17px',                      // Lead body — DM Sans 300
  body:    '15px',                      // Standard body — DM Sans 400
  small:   '13px',                      // Supporting text
  caption: '11px',                      // Eyebrows — Montserrat 600, uppercase
  data:    'clamp(28px, 3vw, 48px)',   // Data callouts — DM Mono 500
} as const

export const lineHeight = {
  tight:    1.05,  // Hero headlines
  snug:     1.15,  // Section headlines
  normal:   1.5,   // UI text
  relaxed:  1.7,   // Body copy
} as const

export const letterSpacing = {
  eyebrow:   '0.2em',  // Uppercase eyebrow labels
  subline:   '0.4em',  // AI GROUP subline
  normal:    '0',
} as const

// ─────────────────────────────────────────────
// SPACING
// ─────────────────────────────────────────────

export const spacing = {
  1:   '4px',
  2:   '8px',
  3:   '12px',
  4:   '16px',
  5:   '20px',
  6:   '24px',
  8:   '32px',
  10:  '40px',
  12:  '48px',
  16:  '64px',
  20:  '80px',
  24:  '96px',
} as const

// ─────────────────────────────────────────────
// BORDER RADIUS
// ─────────────────────────────────────────────

export const radius = {
  sm:   '6px',
  md:   '10px',
  lg:   '14px',
  xl:   '20px',
  pill: '999px',
} as const

// ─────────────────────────────────────────────
// SHADOWS
// ─────────────────────────────────────────────

export const shadows = {
  card:    '0 2px 14px rgba(11, 21, 38, 0.07)',
  hover:   '0 10px 28px rgba(11, 21, 38, 0.12)',
  strong:  '0 20px 48px rgba(11, 21, 38, 0.18)',
} as const

// ─────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────

export const layout = {
  maxWidth:      '1100px',
  gutter:        '48px',
  gutterMobile:  '24px',
} as const

// ─────────────────────────────────────────────
// TRANSITIONS
// ─────────────────────────────────────────────

export const transitions = {
  default:  'all 0.2s ease',
  slow:     'all 0.35s ease',
} as const

// ─────────────────────────────────────────────
// SECTION COLOR MAPS
// Maps each website section to its correct token set.
// Claude Code: Use this to determine the right colors per section.
// ─────────────────────────────────────────────

export const sectionTokens = {
  navigation: {
    background: colors.navy,
    logo:       'current-jpeg',    // Black BG blends into navy — works as-is
    headline:   colors.white,
    body:       colors.gray,
    cta:        colors.gold,
    note:       'Sticky — always Navy',
  },
  hero: {
    background: colors.navy,
    logo:       'current-jpeg',
    headline:   colors.gold,
    body:       colors.white,      // DM Sans 300
    cta:        colors.gold,
    note:       'Maximum first impression — headline in gold',
  },
  about: {
    background: colors.cream,
    logo:       'navy-pill-container', // Wrap logo in navy pill until transparent PNG available
    headline:   colors.navy,
    body:       colors.nearBlack,
    accent:     colors.goldCognac,
    note:       'Warm, human, personal tone',
  },
  services: {
    background: colors.navyMid,
    logo:       'current-jpeg',
    headline:   colors.white,      // Montserrat 700
    body:       colors.gray,       // DM Sans 300
    cta:        colors.gold,
    note:       'Dark signals premium value',
  },
  socialProof: {
    background: colors.cream,
    logo:       'navy-pill-container',
    headline:   colors.navy,
    body:       colors.nearBlack,
    badge:      colors.success,    // Green for result callouts ONLY
    note:       'Green for positive results only — never decorative',
  },
  leadMagnet: {
    background: colors.navy,
    logo:       'current-jpeg',
    headline:   colors.gold,
    body:       colors.white,
    cta:        colors.gold,
    note:       'Scorecard section home',
  },
  footer: {
    background: colors.navy,
    logo:       'current-jpeg',
    headline:   colors.gold,
    body:       colors.gray,
    links:      colors.goldLight,
    note:       'Bookend — open and close with Navy',
  },
  linkedInGraphics: {
    background: colors.cream,
    logo:       'navy-pill-container',
    headline:   colors.navy,
    body:       colors.nearBlack,
    accent:     colors.goldCognac, // Cognac reads in bright LinkedIn feed
    note:       'Cognac Gold — Brand Gold washes out in light feed',
  },
} as const

// ─────────────────────────────────────────────
// COMPOSITE EXPORT
// ─────────────────────────────────────────────

export const brand = {
  colors,
  gradients,
  fonts,
  fontWeights,
  fontSize,
  lineHeight,
  letterSpacing,
  spacing,
  radius,
  shadows,
  layout,
  transitions,
  sectionTokens,
} as const

export default brand

// ─────────────────────────────────────────────
// TAILWIND CONFIG EXTENSION (if using Tailwind)
// Add this to tailwind.config.js > theme > extend
// ─────────────────────────────────────────────

export const tailwindExtension = {
  colors: {
    navy:       '#0B1526',
    'navy-mid': '#122040',
    gold:       '#C9A84C',
    'gold-light':'#E8C97A',
    'gold-cognac':'#A67C2E',
    cream:      '#F9F5EE',
    'near-black':'#1C1C1C',
    'steel-gray':'#8A93A2',
  },
  fontFamily: {
    headline: ["'Montserrat'", 'sans-serif'],
    body:     ["'DM Sans'",    'sans-serif'],
    data:     ["'DM Mono'",    'monospace'],
  },
  boxShadow: {
    card:   '0 2px 14px rgba(11, 21, 38, 0.07)',
    hover:  '0 10px 28px rgba(11, 21, 38, 0.12)',
    strong: '0 20px 48px rgba(11, 21, 38, 0.18)',
  },
  borderRadius: {
    sm:   '6px',
    md:   '10px',
    lg:   '14px',
    xl:   '20px',
  },
  maxWidth: {
    brand: '1100px',
  },
}
