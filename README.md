# رِفد | RIFD — Interactive Pitch

The pitch presentation for **Techstars Startup Weekend Buraimi City 2026**. It's an Arabic-first, RTL, browser-based deck with three WebGL scenes, a working MVP demo, and a print/PDF version.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview    # serve dist/ at http://localhost:4173
```

The build has no network dependencies. Fonts are bundled, and there are no APIs or CDNs, so it works offline on the venue laptop. Open `dist/index.html` through any static server. (Opening it with `file://` won't work, because browsers block ES modules there.)

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo.
2. In the repo, go to **Settings → Pages → Source: GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

`vite.config.ts` uses `base: './'`, so the site works under any sub-path (for example `user.github.io/rifd/`). You can also upload the contents of `dist/` to any static host.

## Presenter controls

| Key | Action |
|---|---|
| → ↓ Space PageDown (clicker) | Next slide |
| ← ↑ PageUp | Previous slide |
| 1–9 · Home · End | Jump to a slide |
| F | Fullscreen |
| N | Speaker notes |
| G | Overview / direct navigation |
| R | Replay the current slide's animation |
| Esc | Close panels |

The mouse wheel and touch swipes also navigate. Deep links `#s1` … `#s11` open a specific slide. Interactive demos have their own **↺ إعادة** (reset) buttons.

- **Print / PDF:** open `…/#print`, then print to PDF (1600×900 pages). A ready file is included as `RIFD-Pitch.pdf`.
- **No WebGL / older laptop:** the deck switches to SVG fallbacks automatically. Add `?nogl` to force them.
- **Phones and narrow windows:** slides stack and scroll vertically.
- **Reduced motion:** respects the OS setting.

## Section map

| # | Section | Official topic | Main interaction |
|---|---|---|---|
| 01 | Cover | اسم الشركة | 3D "opportunity dome" (WebGL) |
| 02 | Problem | المشكلة | 3D disconnected clusters + "ماذا لو اتصلت؟" toggle |
| 03 | Problem validation | — | Verified NCSI stats, evidence slots, hypotheses |
| 04 | Solution | الحل | Ecosystem orbit (auto-tour + hover) |
| 05 | How it works + 6 AI agents | — | Journey stepper bound to 3D agent network |
| 06 | MVP demo | — | Working request → match → book → complete → verified record; club project mini-demo |
| 07 | Market | — | TAM/SAM/SOM rings + revenue-logic simulator |
| 08 | Competition | المنافسون / القيمة المضافة | Comparison table ⇄ positioning map, sourced evidence |
| 09 | Business model | نموذج العمل التجاري | 9-block canvas + who-pays panel |
| 10 | Roadmap | — | Phase timeline with milestones / metrics / risks |
| 11 | Team & ask | أعضاء الفريق ومسمياتهم | Team cards, the ask, closing line |

## Editing

All copy lives in **`src/data/content.ts`**: headlines, team, figures, prices, roadmap and speaker notes. The demo's fictional people and keyword classifier live in `src/data/demo.ts`. You don't need to touch the layout files.

- **Team:** edit `TEAM.members` and set `placeholder: false` on each member you fill in.
- **Evidence:** in `VALIDATION.evidence`, replace `value: null` with real results (for example `'24 مقابلة'`).
- **Market SAM/SOM:** in `MARKET.rings`, add the value and switch `status` to `verified` once sourced.
- **The ask:** edit `TEAM.asks`. No funding amount is included unless you add one.
- **Brand:** colors are in `tailwind.config.js` and the logo files are in `public/assets/brand/`.

Every claim carries a `status` (`verified`, `proposed`, `assumption`, `demo`, `placeholder`, `achieved`, `planned`), and the slides label it on screen.

## Assets

- `public/assets/brand/`: the RIFD icon and wordmarks, alpha-matted from the supplied brand sheet. Nothing was redrawn.
- `public/assets/organizers/` and `public/assets/sponsors/`: the original PNGs extracted unchanged from the official template (`ppt/media`). They sit on white surfaces so their colors stay authentic. The template's people illustration (`image1.png`) was not used because it isn't a logo.

## Sources used on slides

- NCSI Education Statistics 2026, via Muscat Daily (23 Sep 2026): https://www.muscatdaily.com/2026/09/23/education-sector-expands-as-school-enrolment-grows/
- Knack: https://blog.joinknack.com/why-knack-makes-sense-for-students
- Riipen: https://www.riipen.com/virtual-internships
- TutorOcean: https://us.fitgap.com/products/058570/tutorocean

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · three.js · React Three Fiber · Drei. three.js loads lazily, only when a 3D slide first appears.
