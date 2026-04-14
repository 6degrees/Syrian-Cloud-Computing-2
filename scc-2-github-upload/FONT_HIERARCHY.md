# Font Hierarchy — Syrian Cloud Computing

Typography system used in the current design. Use this for consistency when adding or editing content.

---

## 1. Font families

| Token   | Stack | Role |
|--------|--------|------|
| **SF** (Display) | `'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif` | Headlines, card titles, stats, logo wordmark |
| **SFText** (Body) | `'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif` | Body copy, nav links, buttons, descriptions, footer text |
| **SFMono** (Labels) | `'SF Mono', ui-monospace, 'Cascadia Code', 'Fira Code', monospace` | Eyebrows, labels, numbers, small caps, footer column titles |

---

## 2. Hierarchy levels

### Level 1 — Hero headline (largest)

| Property | Value | Usage |
|----------|--------|--------|
| Font | SF (Display) | Hero H1 |
| Size | `clamp(40px, 7vw, 78px)` → **38px** on mobile (≤768px) |
| Weight | 800 |
| Line height | 1.02 |
| Letter spacing | -0.025em |
| Color | C.text (#F0EDE6) |

**Where:** Main hero headline — “Building Cloud Solutions / everything better”

---

### Level 2 — Section headlines (H2)

| Property | Value | Usage |
|----------|--------|------|
| Font | SF (Display) | Section H2 |
| Size | `clamp(32px, 4vw, 52px)` |
| Weight | 800 |
| Line height | 1.08 |
| Letter spacing | -0.02em |
| Color | C.text |

**Where:** “Cloud solutions built for your scale”, “Why Syrian Cloud Computing?”, “Ready to move your business to the cloud?”

---

### Level 3 — CTA headline

| Property | Value | Usage |
|----------|--------|------|
| Font | SF (Display) | CTA H2 |
| Size | `clamp(36px, 5vw, 60px)` |
| Weight | 800 |
| Line height | 1.06 |
| Letter spacing | -0.025em |
| Color | C.text |

**Where:** CTA section main headline.

---

### Level 4 — Card / feature titles

| Property | Value | Usage |
|----------|--------|------|
| Font | SF (Display) | Card title, feature title |
| Size | **18px** (card), **17px** (feature row) |
| Weight | 600 |
| Color | C.text |

**Where:** Service card titles (e.g. “Data Backup & Recovery”), “Why us” feature titles (e.g. “Regional Expertise”).

---

### Level 5 — Stats value

| Property | Value | Usage |
|----------|--------|------|
| Font | SF (Display) | Stat number |
| Size | 32px |
| Weight | 700 |
| Line height | 1 |
| Color | C.gold (#D3B988) |

**Where:** Stats bar — “99.99%”, “10 Gbps”, “24/7”, “ISO 27001”.

---

### Level 6 — Body large / intro

| Property | Value | Usage |
|----------|--------|------|
| Font | SFText | Hero subtitle, section subtext, CTA sub, footer intro |
| Size | **16px** (subText, ctaSub, footer intro 13.5) or **clamp(15px, 1.5vw, 18px)** (hero) |
| Weight | 400 |
| Line height | 1.65–1.7 |
| Color | C.muted (#7a9490) or C.text where needed |

**Where:** Hero supporting line, “Enterprise-grade infrastructure…”, CTA supporting copy, footer brand description.

---

### Level 7 — Body default

| Property | Value | Usage |
|----------|--------|------|
| Font | SFText | Nav links, card description, feature description, footer links, secondary links |
| Size | **13.5px** or **14px** (buttons, why CTA) |
| Weight | 400 (body), 500 (CTAs, card link) |
| Line height | 1.65 |
| Color | C.muted, C.gold (links/CTAs), C.text (nav hover) |

**Where:** Nav links, service card descriptions, “Why us” feature descriptions, footer links, “Learn more”, “Talk to an engineer”.

---

### Level 8 — Buttons

| Property | Value | Usage |
|----------|--------|------|
| Font | SFText | All buttons |
| Size | **14px** (hero), **15px** (CTA primary) |
| Weight | 500 (primary), 400 (ghost) |
| Color | C.bg on C.text / C.gold (primary); C.text (ghost) |

**Where:** “Get Started”, “Learn More”, “Start Your Journey”, “See our full story”.

---

### Level 9 — Eyebrow / overline

| Property | Value | Usage |
|----------|--------|------|
| Font | SFMono | Section eyebrow |
| Size | 11px |
| Weight | (default) |
| Letter spacing | 0.2em |
| Text transform | Uppercase |
| Color | C.green (#5C7F78) |

**Where:** “What We Do”, “Our Philosophy”, “Get Started”.

---

### Level 10 — Labels & small caps

| Property | Value | Usage |
|----------|--------|------|
| Font | SFMono | Stats label, scroll label, footer column title, card number, feature number |
| Size | **10px** (scroll “Scroll”, footer column title), **11px** (badge, card num), **12px** (stat label, feature num, footer copy, social link) |
| Letter spacing | 0.06em–0.18em |
| Text transform | Uppercase (where used) |
| Color | C.muted, C.green (footer col), C.bronze (feature num), rgba(122,148,144,0.4) (card num) |

**Where:** “Uptime Guarantee”, “Scroll”, “Navigation” / “Contact”, “01” on cards, “01”–“04” in Why us, copyright, “LinkedIn” / “Twitter”.

---

### Level 11 — Logo wordmark

| Property | Value | Usage |
|----------|--------|------|
| Font | SF (Display) | Nav logo text |
| Size | 11px |
| Weight | 600 |
| Letter spacing | 0.14em |
| Text transform | Uppercase |
| Color | C.text, opacity 0.9 |

**Where:** “Syrian Cloud Computing” in the nav.

---

### Level 12 — Hero badge

| Property | Value | Usage |
|----------|--------|------|
| Font | SFText | Hero badge pill |
| Size | 12px |
| Weight | 500 |
| Letter spacing | 0.04em |
| Color | C.gold |

**Where:** “Cloud Infrastructure for the Modern Era” pill above the hero headline.

---

## 3. Quick reference table

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|--------|
| Hero H1 | SF | 40–78px (38px mobile) | 800 | Tight tracking |
| Section H2 | SF | 32–52px | 800 | Slightly tight |
| CTA H2 | SF | 36–60px | 800 | Same as H2 style |
| Card / feature title | SF | 17–18px | 600 | — |
| Stat value | SF | 32px | 700 | Gold |
| Body large | SFText | 16px, hero 15–18px | 400 | 1.65–1.7 lh |
| Body default | SFText | 13.5–14px | 400/500 | Descriptions, links |
| Buttons | SFText | 14–15px | 500 | — |
| Eyebrow | SFMono | 11px | — | Uppercase, green |
| Labels / small | SFMono | 10–12px | — | Uppercase, varied color |
| Logo | SF | 11px | 600 | Uppercase |
| Badge | SFText | 12px | 500 | Gold pill |

---

## 4. Responsive notes

- **Hero H1:** `clamp(40px, 7vw, 78px)`; below 768px overridden to **38px** in CSS.
- **Section H2:** `clamp(32px, 4vw, 52px)`.
- **CTA H2:** `clamp(36px, 5vw, 60px)`.
- All other sizes are fixed in px; scale further in media queries if you add more breakpoints.

Use this hierarchy to keep type consistent when extending the site or handing off to another designer/developer.
