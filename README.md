# Kutaibah Halima — Portfolio

Personal portfolio site for **Kutaibah Halima** — Developer & Creator. Built with Next.js 16 and the App Router, styled with Tailwind CSS v4, and composed from shadcn/ui primitives.

**Live:** [kutaibah.me](https://kutaibah.me)

## Features

- **Landing page** with animated hero introduction (`/`).
- **Projects** showcase driven by `data/projects.json` (`/projects`).
- **Quotes** collection driven by `data/quotes.json` (`/quotes`).
- **Contact** page (`/contact`).
- Dark-mode-first design using CSS variables and `tw-animate-css` for entrance animations.
- Vercel Analytics built in.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/) primitives
- [Hugeicons](https://hugeicons.com/) for iconography
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [pnpm](https://pnpm.io/) workspace

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other available scripts:

```bash
pnpm build   # Production build
pnpm start   # Run the production build
pnpm lint    # Lint with ESLint
```

## Project Structure

```text
app/
  layout.tsx         # Root layout, fonts, metadata, Analytics
  page.tsx           # Animated landing/hero page
  globals.css        # Tailwind v4 + theme tokens
  projects/page.tsx  # Projects route
  quotes/page.tsx    # Quotes route
  contact/page.tsx   # Contact route
components/
  navigation.tsx     # Site navigation
  ui/                # shadcn/ui primitives (button, card, input, ...)
data/
  projects.json      # Project entries rendered on /projects
  quotes.json        # Quote entries rendered on /quotes
lib/
  utils.ts           # Shared helpers (e.g. `cn`)
public/              # Static assets
```

## Editing Content

- Update **projects** by editing `data/projects.json`.
- Update **quotes** by editing `data/quotes.json`.
- Tweak the hero copy in `app/page.tsx` and site metadata in `app/layout.tsx`.

## Deployment

Deployed on [Vercel](https://vercel.com/) at [kutaibah.me](https://kutaibah.me). Push to the connected Git provider and Vercel will build and deploy automatically. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
