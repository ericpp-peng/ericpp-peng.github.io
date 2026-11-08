# Po Peng — Personal Website v2

A separate redesign of `../personal-website`, inspired by the supplied clean academic homepage screenshots. The original website and its Vercel project are untouched.

The new site uses the original Next.js / React stack with a white background, blue links, Source Serif 4 headings (weight 600), a sticky profile sidebar, and subtle education / experience cards. The heading font is self-hosted in `src/fonts/`, with its SIL Open Font License included. The pages are Home, Projects (with category filtering), and Snapshots. Videos use native playback controls and locally generated poster images.

## Run locally

Use Node.js 22 (`nvm use` if available), then:

```sh
npm ci
npm run dev
```

Open the URL printed in the terminal, normally `http://localhost:3000`.

```sh
npm run typecheck
npm run build
```

The build produces a self-contained static site in `out/`. There are no required environment variables or external font dependencies.

## Edit content

- `src/data/profile.ts`: identity, contact links, education, experience, skills, projects, and snapshots.
- `src/pages/index.tsx`: introduction and homepage sections.
- `src/styles.css`: colors, typography, spacing, and responsive layout.
- `public/images/`: profile photo, institution logos, and video posters.
- `public/videos/`: original project and lifestyle videos.

The original site's Qualcomm entry is still marked **Incoming**. Its June–September 2026 dates have passed, but completion has not been assumed. Update `experience` in `profile.ts` when the actual status is confirmed. The homepage retains the original “Open to 2027 full-time opportunities” statement.

The email link now matches the visible UW address, `ericpp@uw.edu`; the personal email from the original remains available in the data file.

### Preview photo framing

With `npm run dev`, open **調整照片** below the profile photo to adjust zoom and horizontal / vertical position live. Preview settings are remembered in this browser. **重設** restores the website defaults. **複製設定** copies the values so you can share them or replace `portraitSettings` at the top of `src/data/profile.ts` to make them the published defaults. The panel and browser overrides are disabled in production; the published site uses `portraitSettings`.

## GitHub Pages deployment

The primary website is deployed to the account's root GitHub Pages URL:

- Website: https://ericpp-peng.github.io/
- Repository: https://github.com/ericpp-peng/ericpp-peng.github.io
- Active branch: `website-v2`
- Workflow: `.github/workflows/pages.yml`

This local `personal-website-v2` folder remains the working source. `origin` points to the root website repository, and `preview` points to the original test repository. Pushing `website-v2` to `origin` automatically builds and deploys the primary website. The root repository's previous `source` and `main` branches are preserved for rollback; the separate local `../ericpp-peng.github.io` checkout and its uncommitted changes are preserved.

```sh
git push
```

Repository **Settings → Pages → Source** must be set to **GitHub Actions**. The workflow reads the site's path from GitHub Pages and sets `NEXT_PUBLIC_BASE_PATH` during the build so navigation, photos, posters, and videos work at either the root or a project path.

The earlier test site remains at https://ericpp-peng.github.io/personal-website-v2/. To update it separately:

```sh
git push preview HEAD:main
```

For a local build using the same path:

```sh
NEXT_PUBLIC_BASE_PATH=/personal-website-v2 npm run build
```

Ordinary `npm run dev` and `npm run build` continue to use `/`. If you switch to a custom domain, the workflow will obtain its new base path from GitHub Pages on the next deployment.

## Vercel deployment

This folder has no connection to the original Vercel project. To review it independently, import it as a **new Vercel project** (using a separate repository, or select `personal-website-v2` as the Root Directory in a parent repository).

- Framework preset: **Next.js**
- Node.js: **22.x**
- Build command: `npm run build`
- Install command: `npm ci`
- Output directory: use the Next.js preset default; `next.config.mjs` enables static export to `out/`.

Use the new project's generated domain to review the redesign. Moving an existing custom domain can happen later once you choose to replace the live site.

## Migration notes

The local content, photo, logos, project videos, and lifestyle videos were copied from the original website. Experience and education details are available in expandable cards. Original template metadata, placeholder testimonials, numeric skill ratings, and the unconnected contact form were replaced with personal metadata, a readable toolkit, and direct email / LinkedIn links.

No reference-site source code, biography, or personal assets were copied. `LICENSE` retains the original template's license notice.
