# Assets — drop your files here

This folder holds everything I can't generate from code. Drop files into the matching
subfolder and **name them exactly as listed** so my code picks them up automatically.
If you can't get a particular item, leave it out — I'll substitute a generated fallback.

---

## 1. logo/  (brand mark for the header + footer)
The poster shows "The Story House" wordmark next to a small open-book icon.

- `logo.svg`            ← preferred: full lockup (icon + "THE STORY HOUSE"). SVG = crispest.
- `logo-mark.svg`       ← just the book icon on its own (optional)
- `logo.png`            ← only if you have no SVG (use a transparent PNG, 2x size)

If you don't have a logo, I'll set the wordmark in Cormorant Garamond + a Lucide book icon.

## 2. book-covers/  (the product-card preview)
The card shows "The Invisible Library" by Genevieve Cogman.

- `the-invisible-library.jpg`   ← the exact cover, ~600px wide, portrait

If unavailable, I'll drop in a placeholder cover styled to match.

## 3. illustrations/  (decorative art)
Bottom-right of the poster has a small stacked-books + vase-with-plant illustration,
plus a few thin leaf/sprig accents.

- `books-vase.svg`      ← the stacked books + vase illustration (SVG preferred, else PNG w/ transparent bg)
- `sprig.svg`           ← the small leaf/branch accent (optional)

If unavailable, I'll recreate simple SVG versions in the same muted style.

## 4. fonts/  (OPTIONAL)
By default I load Cormorant Garamond + Inter from Google Fonts (free, no files needed).
Only put files here if you want the page to work fully offline:

- `Cormorant-Garamond/…`  (woff2 files)
- `Inter/…`               (woff2 files)

---

### Quick priority
Must-have for best fidelity: **logo** + **book cover**.
Nice-to-have: **illustrations**.
Skip unless offline: **fonts**.

Formats: prefer **SVG** for logo/illustrations, **JPG/PNG** for the book cover.
Transparent backgrounds for anything that sits on the warm-paper background.
