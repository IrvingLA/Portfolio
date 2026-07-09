# Portfolio

Personal portfolio. Organizado por **Scream Architecture** — los dominios de negocio son ciudadanos de primera clase en `src/`.

**Stack**: Astro 7, Tailwind CSS 4, pnpm, Node >=22.12.0

## Estructura

```
src/
├── pages/                 # Thin routing layer (Astro requirement)
│   ├── index.astro        → re-exporta de navigation/HomePage.astro
│   └── about-me.astro     → re-exporta de about-me/AboutMePage.astro
│
├── navigation/            # Menú principal (página home)
│   ├── HomePage.astro     # Página "/"
│   ├── NavItem.astro
│   ├── pages.data.ts      # Rutas definidas (5, solo 2 con página)
│   └── assets/video/      # menu.mp4, menu-mobile.mp4
│
├── about-me/              # Sección "Sobre mí"
│   ├── AboutMePage.astro  # Página "/about-me"
│   ├── AboutMeItem.astro
│   ├── AboutMeText.astro
│   ├── SkillDialog.astro
│   ├── SkillStats.astro
│   ├── TechnicalSkills.astro
│   ├── SoftSkills.astro
│   ├── sections.data.ts
│   └── assets/
│       ├── avatars/
│       ├── character/
│       └── video/         # stats.mp4, stats-mobile.mp4
│
├── projects/              # (futuro)
├── experience/            # (futuro)
├── education/             # (futuro)
├── contact/               # (futuro)
│
└── shared/                # Infraestructura transversal
    ├── Layout.astro
    ├── VideoBg.astro
    ├── SoundEffect.astro
    ├── technologies.data.ts
    ├── styles/
    │   └── global.css
    └── assets/
        ├── technologies/  # 16 iconos PNG
        ├── background.svg
        ├── astro.svg
        └── sounds/        # source (mirror to public/sounds/)
```

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm dev --background` | Dev server in background |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build |
| `pnpm astro ...` | Run Astro CLI (`astro add`, `astro check`, etc.) |

No test, lint, typecheck, or codegen scripts.

## Conventions

- **Tailwind 4**: Uses `@import "tailwindcss"` in `shared/styles/global.css` (NOT `@tailwind` directives). Configured via `@tailwindcss/vite` plugin in `astro.config.mjs` — no PostCSS or tailwind.config.
- **Language**: All UI text is in Spanish.
- **Custom theme**: Defined in `shared/styles/global.css` — fonts `font-jetbrains`, `font-sora`, `font-anton` (loaded via Google Fonts `<link>` in `Layout.astro`); color scales `primary-*` (cyan), `secondary-*` (blue), `tertiary-*` (red).
- **Persona 3 theme**: Custom view transition animations (`::view-transition-old`/`::view-transition-new`) and dialog animations (`.dialog-animate`) in `global.css`. Skill cards use HTML `<dialog>` with `showModal()`.
- **No JS frameworks**: Only Astro components, vanilla `<script>`, and `astro:transitions` ClientRouter for SPA navigation.
- **No environment variables** needed.
- **TypeScript**: Strict mode via `astro/tsconfigs/strict` — type errors block builds.
- **CLAUDE.md** is an identical duplicate — keep both in sync.
- **Assets**: Viven en el dominio que los usa (`navigation/assets/`, `about-me/assets/`, `shared/assets/`), importados via ESM. `VideoBg` usa `timeupdate`/`ended` events con `loopStart`/`loopEnd` data attributes para looping personalizado.
- **Video files** map to pages: `navigation/assets/video/menu.mp4` → home; `about-me/assets/video/stats.mp4` → about-me.
- **Sound effect convention**: `shared/SoundEffect.astro` carga `/sounds/select.mp3` desde `public/sounds/` en runtime. Source files están en `shared/assets/sounds/`. Para cambiar sonidos, actualizar ambas ubicaciones.
- **Hover sound trigger**: Cualquier elemento con `data-hover-sound` dispara el hover audio vía delegación global en `SoundEffect`.
- **Scream Architecture**: Cada dominio (navigation/, about-me/, etc.) contiene sus componentes, datos y assets. `pages/` solo re-exporta. Para crear una página nueva: crear el dominio, poner un `*Page.astro`, y re-exportar desde `pages/`.
- **pnpm workspace quirk**: `pnpm-workspace.yaml` sets `allowBuilds: { esbuild: false, sharp: false }` (blocks postinstall scripts; `sharp` is a dep but native build is suppressed) and `minimumReleaseAgeExclude: [astro@7.0.3]` (bypasses supply-chain age gate for pinned version).

## Build artifacts

- `dist/` and `.astro/` are gitignored generated output.
