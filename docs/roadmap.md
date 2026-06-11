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
- **Streak counter + share card** (canvas-generated image: "Day 47/252 🔥")
- **Dark mode** (CSS variables are already set up for it)
- **ICS export** so days appear in Google/Apple Calendar

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
- **Product name (public):** The Builder Calendar / The 252-Day Builder Calendar
- **What it is (technically):** a static single-page web app
- **What to call it in marketing:** "free interactive roadmap" or "tracker" — concrete and self-explanatory
- **Repo:** builder-calendar
