# Portfolio

Single-page portfolio site. **Only one real page** (`/` at `src/pages/index.astro`).

**Stack**: Astro 7, Tailwind CSS 4, pnpm, Node >=22.12.0

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm dev --background` | Dev server in background |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build |

No test, lint, typecheck, or codegen scripts.

## Conventions

- **Tailwind 4**: Uses `@import "tailwindcss"` in `global.css` (NOT `@tailwind` directives). Configured via `@tailwindcss/vite` plugin in `astro.config.mjs` — no PostCSS or tailwind.config.
- **Language**: All UI text is in Spanish.
- **Route stubs**: `src/constants/pages.ts` defines nav links (`/about-me`, `/projects`, `/experience`, `/education`, `/contact`). `/about-me` has partial content already — `src/constants/about-me.ts` (Persona 3 RPG-styled skill data) and `src/components/about-me-item.astro` (dialog-based skill card) exist. **No page files** (`src/pages/*.astro`) exist for any stub route yet.
- **Custom theme**: Defined in `src/styles/global.css` — fonts `font-jetbrains`, `font-sora`, `font-anton`; color scales `primary-*` (cyan), `secondary-*` (blue), `tertiary-*` (red).
- **No JS framework integrations** (no React, Vue, Svelte, MDX, etc). Only Astro components, vanilla `<script>`, and `astro:transitions` ClientRouter for SPA-like navigation.
- **No environment variables** needed.
- **CLAUDE.md** is an identical duplicate of `AGENTS.md` — keep both in sync.
- **Video assets** live in `src/assets/video/` (not `public/`) and are imported via ESM. `video-bg.astro` uses `requestAnimationFrame` with `loopStart`/`loopEnd` data attributes for custom looping.
- **pnpm workspace quirks**: `pnpm-workspace.yaml` sets `allowBuilds: { esbuild: false, sharp: false }` (blocks postinstall scripts) and `minimumReleaseAgeExclude: [astro@7.0.3]` (bypasses supply-chain age gate for pinned version).

## Build artifacts

- `dist/` and `.astro/` are gitignored generated output.
