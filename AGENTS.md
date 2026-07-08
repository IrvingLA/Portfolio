# Portfolio

Personal portfolio site. **Pages**: `/` (`src/pages/index.astro`) and `/about-me` (`src/pages/about-me.astro`). Stub routes in `src/constants/pages.ts` (`/projects`, `/experience`, `/education`, `/contact`) have no page files yet.

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

- **Tailwind 4**: Uses `@import "tailwindcss"` in `src/styles/global.css` (NOT `@tailwind` directives). Configured via `@tailwindcss/vite` plugin in `astro.config.mjs` — no PostCSS or tailwind.config.
- **Language**: All UI text is in Spanish.
- **Custom theme**: Defined in `src/styles/global.css` — fonts `font-jetbrains`, `font-sora`, `font-anton` (loaded via Google Fonts `<link>` in `Layout.astro`); color scales `primary-*` (cyan), `secondary-*` (blue), `tertiary-*` (red).
- **Persona 3 theme**: Custom view transition animations (`::view-transition-old`/`::view-transition-new`) and dialog animations (`.dialog-animate`) in `global.css`. Skill cards use HTML `<dialog>` with `showModal()`.
- **No JS frameworks**: Only Astro components, vanilla `<script>`, and `astro:transitions` ClientRouter for SPA navigation.
- **No environment variables** needed.
- **CLAUDE.md** is an identical duplicate — keep both in sync.
- **Assets**: All live in `src/assets/` subdirs (`video/`, `sounds/`, `avatars/`, `character/`, `technologies/`) imported via ESM. `video-bg.astro` uses `requestAnimationFrame` with `loopStart`/`loopEnd` data attributes for custom video looping.
- **pnpm workspace quirk**: `pnpm-workspace.yaml` sets `allowBuilds: { esbuild: false, sharp: false }` (blocks postinstall scripts; `sharp` is a dep but native build is suppressed) and `minimumReleaseAgeExclude: [astro@7.0.3]` (bypasses supply-chain age gate for pinned version).

## Build artifacts

- `dist/` and `.astro/` are gitignored generated output.
