# Portfolio

Personal portfolio (Irving Ibarra). **Scream Architecture** — business domains are first-class citizens in `src/`.

**Stack**: Astro 7, Tailwind CSS 4, pnpm, Node >=22.12.0

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build |
| `pnpm check` | `astro check` — type-check .astro files |
| `pnpm astro ...` | Astro CLI (`astro add`, etc.) |

No test, lint, or codegen scripts.

## Architecture

```
src/
├── pages/             # Routing — .astro page files
├── navigation/        # Home page domain (NavItem, pages.data)
├── about-me/          # "Sobre mí" — skill dialogs via <dialog>
├── education/         # Educación — slide-in/out detail panels
├── contact/           # Contacto — social links
├── projects/          # (empty — future)
├── experience/        # (empty — future)
└── shared/            # Cross-cutting: Layout, VideoBg, styles, sounds
```

Each domain owns `components/`, `constants/`, `assets/`. Pages import from domains, never the reverse. To add a page: create the domain, then import from a page in `pages/`.

## Conventions

- **Tailwind 4**: `@import "tailwindcss"` in `global.css` (NOT `@tailwind`). Theme via `@theme` block — custom fonts (`font-jetbrains`, `font-sora`, `font-anton`) and color scales (`primary-*` cyan, `secondary-*` blue, `tertiary-*` red). Configured via `@tailwindcss/vite` plugin — no PostCSS or `tailwind.config`.
- **Language**: All UI text in Spanish.
- **No JS frameworks**: Only Astro components + vanilla `<script>`. SPA navigation via `astro:transitions` `ClientRouter`.
- **TypeScript**: Strict via `astro/tsconfigs/strict` — type errors block builds.
- **VideoBg**: Custom video looping via `data-loop-start`/`data-loop-end` HTML attributes. Re-initializes on every SPA navigation via `astro:page-load` event.
- **Sound effects**: 3 `.mp3` files (`select`, `open-modal`, `hide-modal`) mirrored in `src/shared/assets/sounds/` (source) and `public/sounds/` (runtime). Update both when changing sounds.
- **`data-hover-sound`**: Any element with this attribute plays `select.mp3` on `mouseenter` via delegated listener in `Layout.astro` (`<script is:inline>`).
- **Page interaction patterns**:
  - `/about-me`: `<button data-dialog-id>` opens `<dialog>` via `showModal()`; plays `open-modal.mp3` / `hide-modal.mp3`.
  - `/education`: data-attr-driven slide animations (`.p3r-slide-in`/`.p3r-slide-out`), not `<dialog>`; same sound convention.
- **Page routes**: `src/navigation/constants/pages.data.ts` defines 5 routes (`/about-me`, `/projects`, `/experience`, `/education`, `/contact`). Existing pages: `/`, `/about-me`, `/contact`, `/education`. `projects` and `experience` are placeholders.
- **pnpm-workspace.yaml quirks**: `allowBuilds: { esbuild: false, sharp: true }` (blocks esbuild postinstall); `minimumReleaseAgeExclude: [astro@7.0.3]`.

## Sync

`CLAUDE.md` must remain an identical duplicate of this file.
