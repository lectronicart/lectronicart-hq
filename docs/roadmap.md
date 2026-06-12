# Product Roadmap — Builder Calendar

What this app is today and where it goes. Versions map loosely to Derrick's own
curriculum phases, because the app should never be more advanced than its builder.

## v1.0 — now (static web app)
36-week interactive calendar, day panel, localStorage progress, phase navigation.
Status: shipped.

## v1.x — Phase 1–2 era (small vanilla-JS improvements)
Each of these is a good 1–2 evening project. In rough priority order:
- **Export / import progress** as a JSON file (protects streaks across devices)
- **Print / PDF view** — one page per week, for people who like paper
- **"Shift my start date"** — recompute all dates from a user-chosen Day 1
  (needed before strangers use it; not everyone starts June 15)
- **Per-day notes field** (stored alongside progress — journal lite)
- **Share card** (canvas-generated image: "Day 47/252 🔥 lvl 7" — pulls level/XP/streak from the game layer)
- **Dark mode** (CSS variables are already set up for it)
- **ICS export** so days appear in Google/Apple Calendar

## v1.5 — the game layer (built on branch test-new-idea)
The calendar becomes a game, boot.dev-style but honest about what it measures
(consistency, not mastery — completion is self-reported): XP per day, 20 levels
from Spark to Founder, forgiving streaks (Sundays never break the chain; shields
earned from perfect weeks absorb missed days), 18 badges, and a trophy case.
Everything is computed from the done-set — nothing stored that can drift.
Level/badge content lives in `js/game-data.js`; rules in `js/game.js`.
The social half (cohort streaks, leaderboards) waits for the community edition below.

## v2.0 — Phase 2 exercise (the React rebuild)
Rebuild the UI in React + TypeScript as a Full Stack Open capstone. Same data.js.
Purpose: learning. The vanilla version remains the distributed lead magnet until
v2 is clearly better.

## v2.x — Phase 3/4 era (the community edition)
When LectronicArt launches, the calendar grows into the community companion:
- Supabase auth + synced progress (replaces localStorage)
- Cohort view: see your founding-cohort classmates' streaks (accountability = the product)
- Custom tracks: same engine, different data.js files (e.g. a "30-Day Content Engine" track)
- Embed/companion mode for Skool

## Naming
- **Product name (public):** The LectronicArt Creative Engine Roadmap 
- **What it is (technically):** a static single-page web app
- **What to call it in marketing:** "free interactive roadmap" or "tracker" — concrete and self-explanatory
- **Repo:** lectronicart-hq 
