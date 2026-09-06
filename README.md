# Layago Holidays — Luxury Travel Discovery

Rebranded from Azure template to **Layago Holidays**.

## Tech Stack

- TanStack Start (SSR, file-based routing)
- TypeScript + React 19
- Tailwind CSS 4, shadcn/ui (Radix)
- Vite 8 + Nitro (cloudflare-module)

## Project Structure

- `src/routes/__root.tsx:1` — App shell, fonts, nav
- `src/routes/index.tsx:1` — Home / Hero + Featured Places + Categories + Experience
- `src/routes/explore.tsx:1` — Explore grid with SearchBar
- `src/routes/destination.$slug.tsx:1` — Dynamic detail with gallery
- `src/routes/experience.tsx:1` — Immersive swim/reef sections
- `src/routes/saved.tsx:1` + `src/routes/profile.tsx:1`
- `src/components/HeroSection.tsx:1`, `FeaturedDestinationCard.tsx:1`, `DestinationDetails.tsx:1`, `DesktopNavigation.tsx:1`, `BottomNavigation.tsx:1`
- `src/lib/destinations.ts:1` — 6 destinations + 6 categories + guides
- `src/assets/` — hero-krabi.jpg + dest-_.jpg + cat-_.jpg (sourced from your uploads)

## Scripts

```sh
npm i
npm run dev      # vite dev on http://localhost:3000
npm run build    # production build -> .output/
npm run preview  # preview built output
```

## Images

All uploads copied to `src/assets`:

- aerial island (Ao Nang Krabi) -> hero-krabi.jpg, cat-* duplicates
- pool resort (Tahiti Beach) -> dest-tahiti.jpg (det.png)
- other hash jpgs -> dest-bali/maldives/obernberg/santorini

Branding updated: package.json name `layago-holidays`, titles/meta from `Azure` -> `Layago Holidays`.

Build verified: `vite build` succeeds (client + SSR + Nitro).
