# LectronicArt Builder Calendar — Project Context for Claude Code

## What this project is
A static, framework-free web app: the **252-Day Builder Calendar** — an interactive
learning calendar that takes Derrick (and later, LectronicArt community members)
from zero coding knowledge to launching an AI creative-automation business.
36 weeks, 4 phases, one clickable card per day, progress saved in localStorage.

This app is also a **product**: it will become the LectronicArt lead magnet
(roadmap Week 34) and eventually a companion tool for the Skool community.
Treat code quality accordingly — strangers will read this someday.

## The person you're working with
Derrick is *currently working through the curriculum this app contains*.
Match assistance to his current phase:
- **Phase 1 (weeks 1–6):** Explain everything; write NO code for him on learning
  projects. For THIS repo, tiny reviewed diffs only, every line explained in
  plain language with analogies.
- **Phase 2 (weeks 7–12):** He designs, you draft in Plan Mode, he reviews every line.
- **Phase 3+ :** He orchestrates; still explain anything non-obvious.

## Hard conventions
1. **Vanilla HTML/CSS/JS only. No frameworks, no build step, no npm dependencies.**
   The app must run by double-clicking index.html. A React rebuild is planned as
   a deliberate learning exercise in Phase 2 — do not introduce it early, even if asked
   casually. Ask "is this the Phase 2 rebuild?" first.
2. **Content and engine never mix.** All curriculum data lives in `js/data.js`
   (the WEEKS array). All rendering/interaction logic lives in `js/app.js`.
   Styling lives in `css/styles.css`.
3. **localStorage key is `coding101-progress-v1`.** Never change it without a
   migration — users would lose their streaks, and streaks are the product.
4. **Dates are load-bearing.** Day 1 = Monday June 15, 2026. Every week is exactly
   7 days [Mon..Sun]. 36 weeks = 252 days. If you touch data.js, re-verify:
   `node tools/verify.js` must pass before any commit.
5. **Plain language everywhere** — comments, commit messages, UI copy. If an
   artist with zero terminal experience couldn't follow it, rewrite it.

## Working agreement
- Plan Mode for anything touching 2+ files or data.js.
- Small commits, message format: `area: what changed and why` (e.g. `data: fix week 9 FSO link`).
- After any data.js change: run `node tools/verify.js`.
- Never add analytics, trackers, or external scripts beyond Google Fonts.

## File map
```
index.html            page skeleton (header, phase cards, grid, day panel)
css/styles.css        design system (graph-paper aesthetic, phase colors)
js/data.js            THE CURRICULUM — 36-week WEEKS array (content only)
js/app.js             engine: calendar render, day panel, progress, nav
tools/verify.js       integrity check for data.js (run after every content edit)
tools/build-single-file.js   bundles everything into dist/builder-calendar.html (lead-magnet build)
docs/framework.md     the LectronicArt foundation & framework (the "why")
docs/roadmap.md       product evolution plan (v1 → community edition)
```

## Product context (the short version)
LectronicArt = AI creative automation for artists, video makers, and one-person
digital builders. Flywheel: BUILD → DOCUMENT → TEACH → SELL. This calendar is
artifact #1 of that flywheel. Full thesis in docs/framework.md.
