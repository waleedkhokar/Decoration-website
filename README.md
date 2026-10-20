# Hasnain Decoration — Final Website (Next.js port)

**Stack:** Next.js 14 + TypeScript + Tailwind CSS + GSAP (npm) + Three.js (npm)

This project is a faithful code port of the FINAL approved design — the same
design as the three self-contained HTML exports in
`~/workspace/hasnain-decoration-final-website/`. No design or content changes
were made during the port.

## Routes
| Route | Page | Source export |
|---|---|---|
| `/` | Home (Page 1, final version) | `index.html` |
| `/our-work` | Our Work (Page 2, old style — navbar "Book Now", birthday heading, hero chips) | `our-work.html` |
| `/how-we-work` | How We Work (4 steps) | `how-we-work.html` |

## How it is built
- Each page's markup was converted 1:1 into React components under
  `src/components/<page>/` (Navbar, one component per section, Footer, Lightbox).
- Each page keeps its own frozen stylesheet: `src/styles/home.css`,
  `src/styles/our-work.css`, `src/styles/how-we-work.css`, imported by that
  route's `layout.tsx`. Tailwind stays configured (`tailwind.config.ts`,
  `src/app/globals.css`) for layout primitives.
- All photos/videos were extracted from the exports' base64 into real files in
  `public/assets/` and are referenced by path — no base64 blobs in the code.
- Each page's original inline behaviour script (before/after sliders, services
  & FAQ accordions, reviews carousel, moments filter + lightbox, marquee,
  mobile menu, dark-mode toggle) lives in `src/components/<page>/Effects.tsx`
  as a client component running the same logic in `useEffect`. GSAP +
  ScrollTrigger and Three.js now come from the npm packages instead of the
  CDN links the exports used; the hero's Three.js gold-dust (`canvas#dust`)
  is powered by the npm `three` package — the same approach as the original
  base project's `src/components/GoldParticles.tsx` (kept in the repo).
- Dark mode: navbar toggle only, saved in `localStorage` key `hd-theme`
  (pages 1–2 use the `.dark` class on `<html>`, page 3 uses `data-theme`),
  applied before first paint by the script in `src/app/layout.tsx`.

## Run it
```bash
npm install
npm run build
npm run start        # http://localhost:3000
```

## Still a placeholder (same as the frozen design)
- WhatsApp number is `https://wa.me/923000000000` (+92 300 0000000) everywhere.
  When Jamil's real number is available, search the project for
  `923000000000` and replace it in the components.
- Photos/reviews are the frozen design's sample set, ready to be swapped with
  real event photos (drop files in `public/assets/` and update the paths in
  the relevant component / `Effects.tsx` data lists — the ported data lists
  keep the original comments explaining how to add more moments/events).

## Deliberate port notes
- React sometimes drops the `muted` attribute on `<video>`; `Effects.tsx`
  re-applies `muted` and calls `play()` for autoplay videos so the hero and
  phone videos behave exactly like the static originals.
- On client-side route changes the ported scripts re-run per page (guarded),
  and ScrollTriggers are killed on unmount.
