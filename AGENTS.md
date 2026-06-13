# LectronicArt Builder Calendar - Project Context for Codex

## What this project is
A static, framework-free web app: the **252-Day Builder Calendar**. It is an
interactive learning calendar that takes Derrick, and later LectronicArt
community members, from zero coding knowledge to launching an AI
creative-automation business.

The app runs for 36 weeks across 4 phases. Each day is a clickable card, and
progress is saved in localStorage.

This app is also a product: it will become the LectronicArt lead magnet
(roadmap Week 34) and eventually a companion tool for the Skool community.
Treat code quality accordingly. Strangers will read this someday.

## The person you are working with
Derrick is currently working through the curriculum this app contains. Match
assistance to his current phase:

- **Phase 1 (weeks 1-6):** Explain everything; write no code for him on
  learning projects. For this repo, keep diffs tiny and reviewed, and explain
  every changed line in plain language.
- **Phase 2 (weeks 7-12):** Derrick designs, Codex drafts in Plan Mode, and he
  reviews every line.
- **Phase 3+:** Derrick orchestrates; still explain anything non-obvious.

## Hard conventions
1. **Vanilla HTML/CSS/JS only. No frameworks, no build step, no npm
   dependencies.** The app must run by double-clicking `index.html`. A React
   rebuild is planned as a deliberate learning exercise in Phase 2. Do not
   introduce it early, even if asked casually; ask "is this the Phase 2
   rebuild?" first.
2. **Content and engine never mix.** Curriculum data lives in `js/data.js`
   (the `WEEKS` array). Rendering and interaction logic lives in `js/app.js`.
   Styling lives in `css/styles.css`.
3. **Do not change localStorage keys without a migration.** The progress key is
   `coding101-progress-v1`. The game layer also uses `coding101-activity-v1`
   and `coding101-game-v1`. XP, levels, and badges are always computed from the
   done-set; never store computed values.
4. **Dates are load-bearing.** Day 1 is Monday June 15, 2026. Every week is
   exactly 7 days, Monday through Sunday. 36 weeks equals 252 days. If you touch
   `js/data.js`, run `node tools/verify.js`.
5. **Plain language everywhere.** Comments, commit messages, and UI copy should
   be understandable to an artist with zero terminal experience.

## Working agreement
- Use Plan Mode for anything touching 2+ files or `js/data.js`.
- Keep commits small, with messages like `area: what changed and why`.
- After any `js/data.js` change, run `node tools/verify.js`.
- Never add analytics, trackers, or external scripts beyond Google Fonts.
- Rebuild the single-file lead magnet with `node tools/build-single-file.js`
  only when source changes should be reflected in `dist/`; `dist/` is ignored
  generated output.

## File map
```text
index.html                  page skeleton: header, phase cards, grid, panels
css/styles.css              design system: graph-paper aesthetic, phase colors
js/data.js                  curriculum data: 36-week WEEKS array only
js/game-data.js             game content: level ladder and badge definitions
js/app.js                   calendar engine: render, panels, progress, nav
js/game.js                  game engine: XP, levels, streaks, badges
tools/verify.js             integrity check for curriculum and game data
tools/build-single-file.js  bundles dist/builder-calendar.html
docs/framework.md           LectronicArt foundation and framework
docs/roadmap.md             product evolution plan
```

## Product context
LectronicArt = AI creative automation for artists, video makers, and one-person
digital builders. Flywheel: BUILD -> DOCUMENT -> TEACH -> SELL. This calendar
is artifact #1 of that flywheel. Full thesis in `docs/framework.md`.
