# RIFD — Data Completion Checklist

These facts are **missing on purpose**. Nothing was invented. Each one lives in `src/data/content.ts`. Once you fill it in, the matching slide shows it automatically; until then the slide shows nothing for it, so the deck never looks unfinished.

| # | Item | Where | Slide | Priority |
|---|---|---|---|---|
| 1 | **Team names, roles, qualifications** | `TEAM.members` | 11 | **Essential.** "أعضاء الفريق ومسمياتهم" is a mandatory official topic. While empty, the slide shows execution roles instead of names. |
| 2 | Interview / survey results | `VALIDATION.evidence` (e.g. `{ value: '24', label: 'مقابلة مع طلبة' }`) | 03 | High. An evidence row appears as soon as one entry exists. |
| 3 | Funding or support amount for the ask | `TEAM.asks` | 11 | Optional. Add only if the team confirms one. |
| 4 | Pilot university (if a letter of interest exists) | `MARKET.entry[1]` | 07 | Optional. Only name a partner with written agreement. |
| 5 | Institutional subscription price | `BUSINESS.payers[1].rifd` | 09 | Later. Currently "priced after the pilot". |

## Already verified (keep the sources)
- 145,885 higher-education students · 39,194 admissions 2024/25 · 47.4% gross enrolment rate. NCSI Education Statistics 2026, via [Muscat Daily, 23 Sep 2026](https://www.muscatdaily.com/2026/09/23/education-sector-expands-as-school-enrolment-grows/).
- Competitor descriptions: [Knack](https://blog.joinknack.com/why-knack-makes-sense-for-students) · [Riipen](https://www.riipen.com/virtual-internships) · [TutorOcean](https://us.fitgap.com/products/058570/tutorocean).

## Labelled assumptions (shown on screen as "افتراض للتحقق")
- B2C commission 10–15%.
- Market calculator presets (conservative / base / ambitious).
- Session-split example on slide 09.
