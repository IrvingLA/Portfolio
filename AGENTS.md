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
- **Route stubs**: `src/constants/pages.ts` defines nav links (`/about-me`, `/projects`, `/experience`, `/education`, `/contact`) but **no page files exist** for those routes yet.
- **Custom theme**: Defined in `src/styles/global.css` — fonts `font-jetbrains`, `font-sora`, `font-anton`; color scales `primary-*` (cyan), `secondary-*` (blue), `tertiary-*` (red).
- **No JS framework integrations** (no React, Vue, Svelte, MDX, etc). Only Astro components and vanilla `<script>`.
- **No environment variables** needed.

## Build artifacts

- `dist/` and `.astro/` are gitignored generated output.
