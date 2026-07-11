# Guru Bharosa Sewa Sanstha — Website

A Next.js (App Router) site for GBSS, a shelter and rehabilitation NGO in
Suratgarh, Rajasthan. Built from `DESIGN.md`, `SITEMAP.md`, `CONTENT.md`, and
`COMPONENTS.md`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The build requires network access to
`fonts.googleapis.com` (for Poppins / Inter / Noto Sans Devanagari via
`next/font/google`) — this works in any normal dev machine or CI/host, it was
only blocked in the sandbox this was authored in.

```bash
npm run build && npm start   # production build
```

## What's real vs. placeholder

Every fact, number, name, and phone number in this site comes directly from
`CONTENT.md`. Nothing has been invented. Where `CONTENT.md` / `SITEMAP.md`
flagged a content gap, the site says so honestly instead of fabricating:

- **Photography** — GBSS doesn't yet have a library of consented, real
  photography. Every photo slot uses `<ImagePlaceholder />`
  (`components/media/ImagePlaceholder.tsx`) instead of stock photos of
  unrelated people. Drop real files into `public/images/...` and swap the
  `src` prop on `CircleFrame`, `ImageGrid2x2`, `ImageGrid4x2`, etc. once
  available.
- **12A/80G & FCRA status** — stated as "not yet confirmed," never claimed.
- **Team roles/bios** — only the 3 named contacts + "27 life members" are
  shown; `role` is optional in the `Contact` type.
- **Official email, social handles, office hours** — omitted or marked
  "coming soon" rather than guessed.
- **QR code asset** — `content/donation.ts` has `qrCodeAsset.available =
  false`; add the real image path and flip it to `true` once supplied.
- **Volunteer pipeline** — a simple interest form stands in until a formal
  process exists.

Search the codebase for `CONTENT.md` in comments to find every spot tied to a
flagged gap.

## Structure

Matches `PROJECT_STRUCTURE.md`:

- `app/` — one route per page in the sitemap, plus `layout.tsx` / `globals.css`
- `components/{layout,primitives,media,cards,forms,finance}/` — the component
  contract from `COMPONENTS.md`
- `content/*.ts` — typed, verified content (the source of truth is `CONTENT.md`)
- `hooks/` — `useInViewFadeUp`, `useCountUp` (both respect
  `prefers-reduced-motion`)
- `styles/tokens.css` — the only place raw color hex values live; Tailwind
  reads them via `tailwind.config.ts`

## Design system

Navy (`#0A1C3F`) + gold (`#B89C65`) + cream (`#F3ECE0`), Poppins for display
type, Inter for body, Noto Sans Devanagari for Hindi content. Full rationale
in `DESIGN.md`. The signature element is the dashed-gold circular
before/after portrait pairing (`components/media/BeforeAfterPair.tsx`),
reserved for consented recovery photography on the Gallery and Impact pages.

## Before launch

See "Content Gaps to Resolve Before Launch" in `SITEMAP.md` — none of it
should be fabricated; this build intentionally ships honest placeholders
instead.
