# Portfolio

Personal portfolio (Irving Ibarra). **Scream Architecture** — business domains are first-class citizens in `src/`.

**Stack**: Astro 7, Tailwind CSS 4, pnpm, Node >=22.12.0

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm dev --background` | Dev server in background |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build |
| `pnpm check` | `astro check` — type-check `.astro` files |
| `pnpm astro ...` | Astro CLI (`astro add`, etc.) |

No test, lint, or codegen scripts.

## Architecture

```
src/
├── pages/             # Thin routing layer — page .astro files only
├── navigation/        # Home page domain
├── about-me/          # "Sobre mí" page domain
├── contact/           # Contacto page domain
├── projects/          # (empty — future)
├── experience/        # (empty — future)
├── education/         # (empty — future)
└── shared/            # Cross-cutting: Layout, VideoBg, styles, assets
```

Each domain owns its `components/`, `constants/`, and `assets/`. Pages import from domains, never the reverse. To create a new page: create the domain, then import its components from a page in `pages/`.

## Conventions

- **Tailwind 4**: `@import "tailwindcss"` in `shared/styles/global.css` (NOT `@tailwind` directives). Configured via `@tailwindcss/vite` plugin in `astro.config.mjs` — no PostCSS or tailwind.config.
- **Language**: All UI text in Spanish.
- **Custom theme**: Defined via `@theme` in `global.css` — fonts `font-jetbrains`, `font-sora`, `font-anton` (loaded via Google Fonts `<link>` in `Layout.astro`); color scales `primary-*` (cyan), `secondary-*` (blue), `tertiary-*` (red).
- **Persona 3 theme**: Custom view transition animations (`::view-transition-old`/`::view-transition-new`) and dialog animations (`.dialog-animate`) in `global.css`. Skill cards use HTML `<dialog>` with `showModal()`.
- **No JS frameworks**: Only Astro components, vanilla `<script>`, and `astro:transitions` `ClientRouter` for SPA navigation.
- **TypeScript**: Strict mode via `astro/tsconfigs/strict` — type errors block builds.
- **Video looping**: `VideoBg` uses `timeupdate`/`ended` events with `loopStart`/`loopEnd` data attributes for custom looping.
- **Video → page mapping**: `navigation/assets/video/menu.mp4` → `/`; `about-me/assets/video/stats.mp4` → `/about-me`. Each page passes mobile variant via `mobileSrc` prop.
- **Sound effects**: Three sound files mirrored between `src/shared/assets/sounds/` (source) and `public/sounds/` (runtime): `select.mp3`, `open-modal.mp3`, `hide-modal.mp3`. To change sounds, update both locations.
- **Hover sound**: Any element with `data-hover-sound` triggers `select.mp3` via a `mouseenter` event delegation listener in `Layout.astro` (`<script is:inline>`).
- **Dialog modal sounds**: Page-level `<script>` in `about-me.astro` plays `open-modal.mp3` on `<button data-dialog-id>` click and `hide-modal.mp3` on `<dialog>` close event.
- **CLAUDE.md**: Must remain an identical duplicate of this file.
- **pnpm workspace quirk**: `pnpm-workspace.yaml` sets `allowBuilds: { esbuild: false, sharp: true }` (blocks esbuild postinstall; sharp allowed but native build suppressed) and `minimumReleaseAgeExclude: [astro@7.0.3]` (bypasses supply-chain age gate).
- **`src/navigation/constants/pages.data.ts`**: Defines 5 routes (`/about-me`, `/projects`, `/experience`, `/education`, `/contact`). Pages exist for `/`, `/about-me`, and `/contact`; the rest are future placeholders.

## Build artifacts

- `dist/` and `.astro/` are gitignored generated output.
