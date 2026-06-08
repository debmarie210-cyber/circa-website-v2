# UI AUDIT — Circa AI Group Landing Page
**Audited against DESIGN.md + brand_assets/BRAND.md**
**Date: 2026-05-23**

---

## SEVERITY KEY
- **CRITICAL** — Brand violation or broken UX
- **HIGH** — Visual inconsistency visible to users
- **MEDIUM** — Token drift or minor polish issue
- **LOW** — Nitpick, consistency improvement

---

## 1. NAVBAR

### [LOW] Logo height oversized
- **Issue:** `.nav-logo img` is `height: 80px` but navbar is only `72px` tall. Logo overflows or forces vertical compression.
- **Fix:** Reduce to `height: 60px` or increase navbar height to `80px`.

### [MEDIUM] Missing mobile hamburger menu
- **Issue:** `.nav-links { display: none }` on mobile but no hamburger toggle exists. Nav links become completely inaccessible on mobile.
- **Fix:** Add a hamburger icon button visible at `max-width: 768px` that toggles nav links.

---

## 2. HERO

### [HIGH] Inter + Lora fonts violate brand typography
- **Issue:** Hero uses `Inter` (eyebrow, proof bar, ROI card labels) and `Lora` (subhead). BRAND.md explicitly states: "Never use Inter, Roboto, or Space Grotesk — ever." Lora is not in the brand font stack.
- **Fix:** Replace all `Inter` references with `'DM Sans', sans-serif`. Replace `Lora` with `'DM Sans', sans-serif` (weight 300, no italic) or use Georgia as the serif fallback.
- **Files:** [index.html:139](index.html#L139), [index.html:158](index.html#L158), [index.html:167](index.html#L167), [index.html:182](index.html#L182), [index.html:200](index.html#L200), [index.html:231](index.html#L231), [index.html:249](index.html#L249), [index.html:259](index.html#L259), [index.html:279](index.html#L279), [index.html:335](index.html#L335)

### [MEDIUM] Hero max-width inconsistent
- **Issue:** `.hero-inner` uses `max-width: 1200px` while all other sections use `1100px` (the brand token `--max-width`).
- **Fix:** Change to `max-width: 1100px` for consistency, or document `1200px` as the hero-specific exception.
- **File:** [index.html:122](index.html#L122)

### [LOW] Hero title color is `#1C1C1C` not gold
- **Issue:** BRAND.md Section Color Map says Hero headline should be `gold`. Currently `#1C1C1C` (nearBlack). However, the hero was redesigned to a light background, so this may be intentional.
- **Fix:** If light hero is intentional (it appears to be), update BRAND.md Section Color Map to reflect `cream` hero with nearBlack headline. Otherwise, apply gold color.

---

## 3. TRUST STRIP

### [MEDIUM] Trust strip uses Inter font
- **Issue:** `.trust-strip-text` uses `font-family: 'Inter', 'DM Sans', sans-serif`.
- **Fix:** Change to `font-family: 'DM Sans', sans-serif`.
- **File:** [index.html:335](index.html#L335)

---

## 4. AI GAP SECTION

### [LOW] Background color not in brand tokens
- **Issue:** Background is `#f0f0ee`. Closest brand token is `cream` (`#F9F5EE`). This is an undocumented warm gray.
- **Fix:** Either use `#F9F5EE` (brand cream) or formally add `#f0f0ee` as a token (e.g., `--color-warm-gray`).

### [MEDIUM] Glass card border color unusual
- **Issue:** `.sp-glass` has `border: 1px solid rgba(255,255,255,0.92)` — nearly pure white border. On a `#f0f0ee` background this creates a visible white stroke.
- **Fix:** Change to `border: 1px solid rgba(0,0,0,0.06)` to match the section's light context.
- **File:** [index.html:457](index.html#L457)

---

## 5. APPROACH SECTION

### [LOW] Clean — no issues found
- Colors, typography, gradients, and layout match DESIGN.md tokens.

---

## 6. SERVICES SECTION

### [MEDIUM] Max-width exceeds brand token
- **Issue:** `.services-inner` uses `max-width: 1300px` vs. brand standard `1100px`.
- **Fix:** Reduce to `1100px` for consistency, or document as a services-specific exception for the flip card track width.
- **File:** [index.html:575](index.html#L575)

### [HIGH] `transition-all` violation via brand-tokens.css
- **Issue:** `brand-tokens.css` defines `--ease-default: all 0.2s ease` and `--ease-slow: all 0.35s ease`. CLAUDE.md and DESIGN.md both state "Never `transition-all`." While these CSS variables aren't directly used in the inline styles, they set a bad precedent.
- **Fix:** In `brand-tokens.css`, change transitions to target specific properties:
  ```css
  --ease-default: opacity 0.2s ease, transform 0.2s ease;
  --ease-slow: opacity 0.35s ease, transform 0.35s ease;
  ```
- **File:** [brand_assets/brand-tokens.css:99-100](brand_assets/brand-tokens.css#L99-L100)

---

## 7. RESULTS SECTION

### [LOW] Clean — no issues found
- Matches design tokens throughout.

---

## 8. CASE STUDY — TOSHA SCOTT

### [MEDIUM] Background color not in brand tokens
- **Issue:** `.cs-section` background is `#f6f6f6`. Not a brand color (closest: cream `#F9F5EE` or the AI Gap warm gray `#f0f0ee`).
- **Fix:** Change to `#F9F5EE` (cream) or `#f0f0ee` (warm gray) for token consistency.
- **File:** [index.html:821](index.html#L821)

### [MEDIUM] Body text color not in brand tokens
- **Issue:** `.cs-narrative p` uses `#3a4455` and `.cs-deliverables li` uses `#3a4455`. Not a defined brand color.
- **Fix:** Use `#1C1C1C` (nearBlack) for body text on light backgrounds per brand standard.
- **Files:** [index.html:899](index.html#L899), [index.html:914](index.html#L914)

---

## 9. CASE STUDY — NORRITA JOHNSON

### [LOW] Good implementation
- Dark variant properly overrides all text colors. Gold gradient stat cards read well.

### [MEDIUM] No `id` anchor differentiation in nav
- **Issue:** Both case studies use similar structure but only Tosha's has `id="case-study"`. Norrita's has `id="case-study-norrita"` but neither is linked from the nav.
- **Fix:** Consider adding a "Results" or "Case Studies" nav link pointing to `#case-study` to surface both.

---

## 10. OPERATIONAL IMPACT

### [HIGH] Section label color off-brand
- **Issue:** `[04. Operational Impact]` label uses `color: #43c2fd` (bright cyan/blue). This is not a brand color. Brand standard for dark section labels is `#C9A84C` (gold) or `#8A93A2` (gray).
- **Fix:** Change to `color: #C9A84C`.
- **File:** [index.html:1776](index.html#L1776)

### [MEDIUM] Body text uses Montserrat for long-form
- **Issue:** The section subhead paragraph uses `font-family: 'Montserrat'` at `17px` for a 3-line paragraph. BRAND.md states: "Never use Montserrat for long-form body copy (over 2-3 lines)."
- **Fix:** Change to `font-family: 'DM Sans', sans-serif`.
- **File:** [index.html:1778](index.html#L1778)

### [MEDIUM] Gutter inconsistency
- **Issue:** Section padding is `100px 24px` (24px side gutters) while all other sections use `48px` desktop gutters. This makes the content narrower than adjacent sections.
- **Fix:** Change to `padding: 100px 48px` and add mobile override `padding: 64px 24px`.
- **File:** [index.html:1773](index.html#L1773)

### [MEDIUM] Inline styles instead of classes
- **Issue:** Entire section uses inline styles while the rest of the site uses CSS classes. Makes maintenance harder and increases HTML weight.
- **Fix:** Extract to CSS classes (`.impact-section`, etc.) to match the pattern used by all other sections.

---

## 11. ABOUT SECTION

### [HIGH] Background color not in brand tokens
- **Issue:** `background: #082567` is not a brand color. Not navy (`#0B1526`), not navyMid (`#122040`). It's a medium blue that doesn't appear in the brand palette.
- **Fix:** Change to `#0B1526` (navy) for consistency with other dark sections, or add `#082567` formally as `--color-about-blue` to the token system.
- **File:** [index.html:1823](index.html#L1823)

### [MEDIUM] Gutter inconsistency (same as Impact)
- **Issue:** Section padding is `100px 24px` — uses mobile gutters (`24px`) on desktop.
- **Fix:** Change to `padding: 100px 48px`.
- **File:** [index.html:1823](index.html#L1823)

### [HIGH] Headshot image source may not resolve
- **Issue:** `src="brand_assets/debbie-headshot.png"` — file exists but the original file was `Debbie Wright ER.png`. Verify `debbie-headshot.png` is the correct processed version and not a broken reference.
- **Fix:** Confirm both files exist (they do per Glob). No action needed if `debbie-headshot.png` loads correctly.

### [MEDIUM] Inline styles instead of classes
- **Issue:** Same as Operational Impact — entire section uses inline styles.
- **Fix:** Extract to CSS classes for maintainability.

### [LOW] Gradient overlay uses section-specific color
- **Issue:** Headshot gradient overlay uses `rgba(8,37,103,...)` which is derived from `#082567` (the about section bg). If the bg changes, the gradient will mismatch.
- **Fix:** If bg changes to brand navy, update overlay to `rgba(11,21,38,...)`.

---

## 12. FAQ SECTION

### [LOW] Padding uses rem instead of px
- **Issue:** `.faq-section` uses `padding: 10rem 4rem` while all other sections use `px` values. At default font size, 10rem = 160px (much larger than the standard 96px).
- **Fix:** Change to `padding: 96px 48px` for consistency with other sections.
- **File:** [index.html:966](index.html#L966)

### [LOW] Background color same issue as AI Gap
- **Issue:** `#f0f0ee` not a formal brand token.
- **Fix:** Same as AI Gap — formalize or switch to `#F9F5EE`.

---

## 13. FOOTER

### [LOW] Copyright text says "Circa Group AI" not "Circa AI Group"
- **Issue:** Line 1958: `© 2026 Copyright · Circa Group AI`. The brand name is **Circa AI Group**, not "Circa Group AI."
- **Fix:** Change to `© 2026 Circa AI Group`.
- **File:** [index.html:1958](index.html#L1958)

### [LOW] Redundant "Copyright" word
- **Issue:** `© 2026 Copyright` — the © symbol already means copyright. This is redundant.
- **Fix:** Change to `© 2026 Circa AI Group` (remove the word "Copyright").

---

## 14. GLOBAL / CROSS-SECTION ISSUES

### [HIGH] `transition-all` used in CSS
- **Issue:** CLAUDE.md says "Do not use `transition-all`." However, the `brand-tokens.css` file defines `--ease-default: all 0.2s ease`. Even if not referenced in inline styles, this is a latent violation.
- **Fix:** Update token definitions to target specific properties.
- **File:** [brand_assets/brand-tokens.css:99-100](brand_assets/brand-tokens.css#L99-L100)

### [MEDIUM] Three undocumented colors used across site
- **Issue:** `#f0f0ee` (AI Gap, FAQ), `#f6f6f6` (Case Study light), `#082567` (About) are used but not in brand tokens.
- **Fix:** Either replace with brand tokens or formally add them:
  ```css
  --color-warm-gray: #f0f0ee;
  --color-light-gray: #f6f6f6;
  --color-about-blue: #082567;
  ```

### [MEDIUM] ROI card bar gradient uses off-brand blue
- **Issue:** `.roi-bar-fill` uses `linear-gradient(90deg, #43c2fd, #1a9be8)`. These bright blues are not in the brand palette.
- **Fix:** Replace with gold gradient `linear-gradient(90deg, #C9A84C, #E8C97A)` or formalize `#43c2fd` as a data visualization color.
- **File:** [index.html:298](index.html#L298)

### [MEDIUM] No focus-visible styles on interactive elements
- **Issue:** CLAUDE.md requires "Every clickable element needs hover, focus-visible, and active states. No exceptions." Many buttons only have `:hover`. No `:focus-visible` outlines exist.
- **Fix:** Add global focus-visible style:
  ```css
  :focus-visible { outline: 2px solid #C9A84C; outline-offset: 2px; }
  ```

### [LOW] No `<meta name="description">` tag
- **Issue:** Missing SEO meta description.
- **Fix:** Add `<meta name="description" content="Circa AI Group — AI consulting for SMB service businesses. We find where AI saves you the most time and money, then build it.">` to `<head>`.

---

## SUMMARY

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 5 |
| MEDIUM | 15 |
| LOW | 10 |

### TOP 5 FIXES (highest impact)

1. **Replace Inter/Lora with DM Sans** in hero section (~10 CSS rules) — brand font violation
2. **Change `#43c2fd` label to `#C9A84C`** in Operational Impact — off-brand accent color
3. **Fix copyright** from "Circa Group AI" to "Circa AI Group" — brand name is wrong
4. **Add `:focus-visible` styles** globally — accessibility and brand requirement
5. **Standardize gutters** on Impact + About sections from `24px` to `48px` desktop — visual alignment with rest of site

---

*Audited against DESIGN.md, brand_assets/BRAND.md, brand_assets/brand-tokens.css, and CLAUDE.md guardrails.*
