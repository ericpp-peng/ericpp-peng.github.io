# Po Peng — Personal Website v2

A separate redesign of `../personal-website`, inspired by the supplied clean academic homepage screenshots. The original website and its Vercel project are untouched.

The new site uses the original Next.js / React stack with a white background, blue links, Source Serif 4 headings (weight 600), and a sticky profile sidebar. Work Experience appears before Education, with transparent logos in a left column and fully visible content in the right column. Experience entries include skill panels and grouped bullets, followed by education and leadership / mentoring. The heading font is self-hosted in `src/fonts/`, with its SIL Open Font License included. Projects shows the three current resume projects first, followed by the original four video demos in a compact two-column grid. Category filtering applies to both groups. Videos use native playback controls and locally generated poster images. Project previews fill their thumbnails, with a keyboard-accessible play button that loads the video on demand; playback shows the full video without cropping. Project grids become a single column on narrower screens.

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

## Visitor analytics (GA4)

Optional GA4 integration uses `NEXT_PUBLIC_GA_MEASUREMENT_ID`, configured as a GitHub Actions repository variable. It remains disabled until a valid ID is supplied and the website is rebuilt. Development mode never loads analytics. Enhanced measurement handles page views, outbound link clicks, and PDF link clicks; explicit video opening events exclude autoplaying previews. See [the setup and reporting guide](docs/analytics.md) for the Google account steps, activation, and report details.

## Edit content

- `src/data/profile.ts`: identity, contact links, education, experience, mentoring, skills, current resume projects, earlier project demos, and snapshots.
- `src/pages/index.tsx`: introduction and homepage sections.
- `src/styles.css`: colors, typography, spacing, and responsive layout.
- `public/images/`: profile photo, institution logos, and video posters.
- `public/videos/`: original project and lifestyle videos.

The homepage retains the original “Open to 2027 full-time opportunities” statement.

The Moxa protocol gateway and media converter icons show the original site's use case diagrams on hover or keyboard focus. Clicking opens the full diagram in a native dialog, also available by tapping on mobile. Escape, the close button, and the backdrop dismiss the dialog. The gateway diagram retains its original source credit, and both dialogs link to the full-size image.

Snapshots uses uniform square video thumbnails with a cover crop for portrait and landscape media. All four previews autoplay muted and loop when the page opens. Opening a thumbnail also plays the full, uncropped video muted in a native dialog with keyboard / Escape support. The piano caption retains the original “Piano performance” and “Fantaisie-Impromptu, Op. 66 (Chopin)” wording. The homepage availability statement remains below the introduction and uses a pale purple background with bold UW-purple text.

Current career content was based on the AMD application resume. The independently maintained public resume now lives at `../resume/linkedin-githubio/Po-Eric-Peng-Resume.typ`, initially copied unchanged from that application. Its `sync_resume.py` compiles both a LinkedIn upload PDF beside the source and `public/resume/Po-Eric-Peng-Resume.pdf` here. A local background watcher publishes only the website PDF to this repository when the source changes; restart it with `python3 ../resume/linkedin-githubio/sync_resume.py start` after a Mac reboot. See the shared resume folder's README for status and stopping instructions. The site's resume buttons retain the same local PDF URL. This sync updates the downloadable PDF; homepage text remains manually maintained. Contact email is `ericpp.peng@gmail.com`, matching the resume. Earlier project videos and lifestyle media remain available as historical content.

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

The photo, logos, earlier project videos, and lifestyle videos were copied from the original website. Current resume content replaces the older career descriptions, GPA, graduation dates, and skills. Company / school logos use transparent containers; no white tile or enclosing card is added behind them. Original template metadata, placeholder testimonials, numeric skill ratings, and the unconnected contact form were replaced with personal metadata, a readable toolkit, and direct email / LinkedIn links.

No reference-site source code, biography, or personal assets were copied. `LICENSE` retains the original template's license notice.
