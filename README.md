# shegadelakun.com

Personal site for Olusegun "Sheg" Adelakun — Senior Cloud Performance Engineer.
Next.js App Router + TypeScript + Tailwind v4, fully statically exported.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

Deploy: push to GitHub and import into Vercel or Netlify (zero config — the
build outputs a static site to `out/`), or upload `out/` to any static host.

## Before going live (TODO)

1. **Contact links** — `content/data.ts` → `CONTACT`: replace the placeholder
   LinkedIn/GitHub URLs and email with your real public profiles.
2. **Badges** — download the official CKA and CKAD badge PNGs from your Linux
   Foundation / Credly account and drop them in `public/assets/badges/` as
   `cka.png` and `ckad.png` (the CKS slot renders a desaturated monogram until
   `cks.png` exists). Missing images fall back to monogram tiles, never broken
   images.
3. **Headshot (optional)** — drop a square photo at
   `public/assets/headshot.jpg`. If absent, the About section renders
   text-only with no broken image.
4. **Resume** — drop your PDF at `public/resume.pdf`, or set
   `CONTACT.resume = null` in `content/data.ts` to hide the link.
5. **Analytics (optional)** — uncomment the Plausible script in
   `app/layout.tsx` after registering the domain.

## Editing content

Everything that changes over time lives in `content/data.ts`:
credentials, case studies, impact items, craft areas, philosophy, the Now
card, and notes. Adding any of them is a data edit only — no markup changes.

- **New certification**: append to `CREDENTIALS`, drop the badge PNG in
  `public/assets/badges/`. Status `"in-progress"` renders desaturated with no
  ID; flip to `"active"` and add `credId`/`verifyUrl` when earned.
- **New note**: uncomment/append an entry in `NOTES` and add the page under
  `app/notes/<slug>/page.tsx` (MDX-ready structure; the Notes section renders
  cards automatically once the array is non-empty).

## Self-observability

The bottom-right chip reports the page's own metrics (TTFB, LCP, CLS, load,
transfer size) measured at runtime in the visitor's browser via the
Performance API, plus the build timestamp injected in `next.config.ts`.
Nothing is hardcoded. A Lighthouse score is intentionally NOT displayed —
wire Lighthouse CI into the deploy pipeline first if you want one.
