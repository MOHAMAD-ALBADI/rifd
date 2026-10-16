# رِفد | RIFD — Interactive Pitch

The pitch presentation for **Techstars Startup Weekend Buraimi City 2026**. It's an Arabic-first, RTL, midnight-navy interactive web presentation on a 1920×1080 stage, with genuine WebGL scenes (React Three Fiber) and a fully interactive two-scenario MVP.

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
2. In the repo, go to **Settings → Pages → Source: Deploy from a branch → gh-pages / (root)** (one time).
3. The included workflow `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to the `gh-pages` branch.

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

The mouse wheel and touch swipes also navigate. Deep links `#s1` … `#s9` open a specific slide. Interactive demos have their own **↺ إعادة** (reset) buttons.

- **Phones and narrow windows:** slides stack and scroll vertically.
- **Reduced motion:** respects the OS setting.

## Section map (9 scenes)

| # | Scene | Official topic | Centrepiece |
|---|---|---|---|
| 01 | Cover | اسم الشركة | **WebGL** product hero: dashboard device + request, skill and opportunity cards, one camera move |
| 02 | Problem | المشكلة | Three mini product scenarios; "منظومة واحدة" toggle |
| 03 | Solution | الحل | Four modules, each with a representative product interface |
| 04 | Six AI agents | — | **WebGL** service-to-opportunity journey (6 product objects), active agent + human approvals |
| 05 | Live MVP | — | Scenario A: student support (9 screens). Scenario B: designer → paid club project (7 screens) |
| 06 | Market & validation | — | Customer groups, verified context, 3-phase entry; revenue logic in a secondary panel |
| 07 | Competition | المنافسون / القيمة المضافة | Four pillars of RIFD's journey vs. what each alternative publicly states |
| 08 | Business model | نموذج العمل التجاري | Customer → value → payment for 5 streams; full canvas on demand |
| 09 | Team & ask | أعضاء الفريق ومسمياتهم | Roadmap, team roles, achieved, the ask; **WebGL** finale resolving into the RIFD mark |

Missing facts are listed in **DATA_CHECKLIST.md**. If WebGL is unavailable (or with `?nogl`), interactive 2D fallbacks render instead.

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

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · three.js · React Three Fiber · Drei. three.js loads lazily the first time a 3D scene appears; text on 3D cards is real Arabic drawn with the bundled Tajawal font.
