# The 252-Day Builder Calendar

**From "what's a variable?" to launching an AI creative-automation business — one day at a time.**

An interactive learning calendar covering 36 weeks (June 15, 2026 → February 21, 2027):
CS50x → The Odin Project → Full Stack Open → ship a real product → the AI Engineer
track (Claude API, MCP, agents, ComfyUI, video pipelines) → launch the LectronicArt
founding cohort. Click any day for its task list; mark days done; progress saves locally.

Part of **LectronicArt** — AI creative automation for artists, video makers, creators,
and one-person digital builders.

## Run it
No install, no build step:
1. Clone the repo
2. Open `index.html` in a browser (or `npx serve .` if you prefer a local server)

## Develop it
Built deliberately in vanilla HTML/CSS/JS so a beginner can read every line.
Open the folder in VS Code, start Claude Code, and it will pick up `CLAUDE.md`
for project rules. Content lives in `js/data.js`; engine in `js/app.js`.

After editing curriculum content: `node tools/verify.js` (checks 36 weeks × 7 days,
phase counts, and date alignment).

To produce the single-file lead-magnet version: `node tools/build-single-file.js`
→ outputs `dist/builder-calendar.html` (share that file anywhere; it's self-contained).

## Deploy it
Static files — push to GitHub and enable GitHub Pages, or import into Vercel. Done.

## The bigger picture
This calendar is the first artifact of the LectronicArt flywheel:
**BUILD → DOCUMENT → TEACH → SELL.** The full thesis, the ten pillars, and the
product ladder live in [`docs/framework.md`](docs/framework.md). Where this app
is headed next lives in [`docs/roadmap.md`](docs/roadmap.md).
