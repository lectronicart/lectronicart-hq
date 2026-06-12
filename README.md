# The 252-Day Builder Calendar

**From "what's a variable?" to launching an AI creative-automation business — one day at a time.**

This is an interactive learning calendar that maps out a full year of deliberate skill-building,
starting June 15, 2026. Each of the 252 days has a specific task. Click a day, mark it done,
and your progress saves automatically in your browser. No account required.

Progress is a game: finishing days earns XP, levels you up through 20 ranks
(Spark → Founder), builds a streak that Sundays never break, and unlocks badges
in the trophy case. The game measures consistency — showing up daily is the
hard part of a 252-day journey, so that's what gets rewarded.

Built for artists, video makers, and one-person digital builders who want to stop being
intimidated by code and start using AI to automate the creative work they already do.
Part of **[LectronicArt](https://lectronicart.com)** — AI creative automation for independent creators.

---

## The journey

The calendar runs 36 weeks across four phases:

| Phase | Weeks | Focus |
|-------|-------|-------|
| **Fundamentals** | 1–6 | CS50x + Odin Foundations — how computers actually work; C, HTML/CSS, JavaScript. No AI-written code |
| **Real Projects** | 7–12 | Full Stack Open — React, Node, Express, databases; three shipped apps |
| **Ship Your Product** | 13–24 | Find a real problem, build the MVP, launch publicly, get 10 users — with a weekly Python day (CS50P) running alongside |
| **AI Engineer Track** | 25–36 | Claude API, MCP servers, agents, ComfyUI, video pipelines → LectronicArt founding cohort launch |

Every week is exactly seven days (Monday through Sunday). Every day has a task list.
Every task is written in plain language — no assumed knowledge.

---

## Run it

No install. No build step. No npm.

1. Clone the repo
2. Open `index.html` in a browser

That's it. If you want a local server: `npx serve .`

---

## Develop it

Deliberately built in vanilla HTML/CSS/JS so that someone who is currently *doing* the
curriculum can read every line of the source code.

```
index.html          page skeleton
css/styles.css      design system (graph-paper aesthetic, four phase colors)
js/data.js          THE CURRICULUM — 36-week WEEKS array (content only)
js/app.js           engine: render, day panel, progress tracking, navigation
tools/verify.js     integrity check — run after every content edit
```

After editing `js/data.js`, always run: `node tools/verify.js`

To build the single-file lead-magnet version: `node tools/build-single-file.js`
→ outputs `dist/builder-calendar.html` (fully self-contained; share anywhere)

---

## Deploy it

Static files only — enable GitHub Pages on this repo, or drag the folder into Vercel.
No server, no database, no configuration.

---

## The bigger picture

This calendar is artifact #1 of the LectronicArt flywheel: **BUILD → DOCUMENT → TEACH → SELL.**

The full thesis — ten pillars of AI creative automation, the product ladder, and the
community vision — lives in [`docs/framework.md`](docs/framework.md).

Where this project is headed (v2 community edition, Skool integration, cohort features)
lives in [`docs/roadmap.md`](docs/roadmap.md).
