// ===== 252-day curriculum data =====
// Start: Monday June 15, 2026. 36 weeks. Days: [Mon..Sun].
const CS50="https://cs50.harvard.edu/x/";
const ODIN="https://www.theodinproject.com/paths/foundations/courses/foundations";
const FSO="https://fullstackopen.com/en/";
const Z2C="https://zero2claude.dev/";

const REST=(note)=>({t:"Rest day",d:[note||"No new material. If you're behind, use today to catch up — otherwise genuinely rest. Streaks are built on recovery."],g:["REST"],h:"0–1 hr",rest:true});

const WEEKS=[
// ---------- PHASE 1 ----------
{p:1,theme:"Setup & First Programs — CS50 Week 0 · Odin Intro",days:[
 {t:"Mission setup",d:["Install Claude Code and create a 'learning-code' folder with a CLAUDE.md tutor file (the 6 rules from your roadmap: explain before writing, simpler over clever, comment non-obvious steps, ask my approach first, name every library, stop me before bad practice).","Enroll in CS50x 2026 (free) and create your edX account.","Start your notes.md learning journal — entry #1: why you're doing this."],g:["SETUP","CLAUDE"],h:"2 hrs",l:[["CS50x",CS50],["Claude Code","https://www.anthropic.com/claude-code"]]},
 {t:"CS50 Lecture 0 — Scratch",d:["Watch Lecture 0 in full (computational thinking, algorithms, abstraction). Take notes by hand or in notes.md.","Don't skip it because it 'feels basic' — Malan is building the mental model everything else sits on."],g:["CS50"],h:"2.5 hrs",l:[["Week 0",CS50+"weeks/0/"]]},
 {t:"CS50 Problem Set 0",d:["Build your Scratch project (a game, animation, or interactive toy — your choice).","Notice how you naturally use loops, conditions, and events. You're already programming."],g:["CS50"],h:"2.5 hrs"},
 {t:"Odin: Introduction + Prerequisites",d:["Odin Foundations: Introduction section (How this course works, Intro to web dev, Motivation & mindset).","Prerequisites: Computer Basics, How Does the Web Work?, Installation Overview + install VS Code."],g:["ODIN"],h:"2 hrs",l:[["Foundations",ODIN]]},
 {t:"Odin: Command line + Git setup",d:["Odin: Text Editors, Command Line Basics — practice cd, ls, mkdir, touch until they're reflex.","Odin: Setting Up Git — install Git, create your GitHub account, configure SSH."],g:["ODIN"],h:"2 hrs"},
 {t:"Build #1: CLI calculator",d:["Write a command-line calculator yourself (add/subtract/multiply/divide, looping menu). Python or JavaScript via Node.","Rule check: Claude may EXPLAIN syntax and errors, never write the code.","Journal: 3 sentences on what confused you this week."],g:["BUILD"],h:"2.5 hrs"},
 REST("Read this week's calculator code out loud and explain every line to yourself (or to Claude). 5 minutes.")
]},
{p:1,theme:"C & Your First Web Page — CS50 Week 1 · Odin HTML",days:[
 {t:"CS50 Lecture 1 — C (part 1)",d:["Watch the first half of Lecture 1: source code vs machine code, compilers, VS Code, types, variables, conditionals.","In your CS50 codespace, retype every example yourself. No copy-paste."],g:["CS50"],h:"2.5 hrs",l:[["Week 1",CS50+"weeks/1/"]]},
 {t:"CS50 Lecture 1 — C (part 2) + shorts",d:["Finish Lecture 1: loops, operators, integer overflow, floating-point imprecision.","Watch this week's section video and 1–2 shorts on whatever felt shaky."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 1 — mario",d:["Solve mario (the pyramid problem). Sit with bugs 15 minutes before asking Claude — and only ask 'why doesn't this work?', not 'fix it'."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 1 — cash/credit",d:["Solve cash (or credit if you're feeling strong).","Ask Claude: 'Quiz me with 5 questions on C variables, loops, and conditionals. Grade my answers.'"],g:["CS50","CLAUDE"],h:"2.5 hrs"},
 {t:"Odin: Git Basics + HTML begins",d:["Odin: Git Basics section — make your first real commits and push to GitHub.","Odin HTML Foundations: Intro to HTML & CSS, Elements & Tags, HTML Boilerplate."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Odin HTML + start portfolio",d:["Odin: Working with Text, Lists, Links & Images, Commit Messages.","Build #2 begins: create your personal portfolio page in plain HTML (about you, your projects, links). Commit as you go."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:1,theme:"Arrays & CSS — CS50 Week 2 · Odin CSS",days:[
 {t:"CS50 Lecture 2 — Arrays",d:["Watch Lecture 2: arrays, strings, command-line arguments, cryptography intro.","Retype the examples. Notice how strings are just arrays of chars."],g:["CS50"],h:"2.5 hrs",l:[["Week 2",CS50+"weeks/2/"]]},
 {t:"PSet 2 — scrabble/readability",d:["Solve scrabble or readability.","Debugging rule reminder: 15 minutes stuck before asking, then ask for explanation, not solution."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 2 — caesar",d:["Solve caesar (your first cipher!).","Ask Claude: 'Quiz me on arrays and strings in C — 5 questions.'"],g:["CS50","CLAUDE"],h:"2.5 hrs"},
 {t:"Odin CSS Foundations (part 1)",d:["Odin: Intro to CSS, The Cascade, Inspecting HTML and CSS — get comfortable with browser DevTools."],g:["ODIN"],h:"2 hrs"},
 {t:"Odin CSS (part 2) + Recipes",d:["Odin: The Box Model, Block and Inline.","Odin Project: Recipes — build the multi-page recipe site (great HTML reps)."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Ship the portfolio",d:["Style your portfolio with your new CSS knowledge.","Deploy it to GitHub Pages — your first live URL on the internet.","Journal + send the link to one person (public commitment!)."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:1,theme:"Algorithms & Flexbox — CS50 Week 3 · Odin Flexbox + JS begins",days:[
 {t:"CS50 Lecture 3 — Algorithms",d:["Watch Lecture 3: searching, sorting, Big O notation, recursion.","Big O is founder-relevant: it's why some apps die at 10,000 users."],g:["CS50"],h:"2.5 hrs",l:[["Week 3",CS50+"weeks/3/"]]},
 {t:"PSet 3 — plurality",d:["Solve plurality (a voting program).","Explain your sort choice out loud before coding it."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 3 — runoff",d:["Solve runoff. This one is hard — that's the point. The hours stuck are where intuition forms."],g:["CS50"],h:"2.5 hrs"},
 {t:"Odin: Flexbox",d:["Odin Flexbox section: Introduction, Growing and Shrinking, Axes, Alignment.","Play Flexbox Froggy if you want extra reps."],g:["ODIN"],h:"2 hrs"},
 {t:"Odin Project: Landing Page",d:["Build the Landing Page project from the design file — your first real layout from a spec, exactly like client work."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"JavaScript begins + Build #3",d:["Odin: Fundamentals Part 1 (variables, numbers, strings, operators).","Build #3: tip calculator as a console script (prompt for bill + tip %, print total). DOM version comes next week."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:1,theme:"Memory & Real JavaScript — CS50 Week 4 · Odin JS Fundamentals",days:[
 {t:"CS50 Lecture 4 — Memory",d:["Watch Lecture 4: pointers, malloc, hexadecimal, memory layout. The hardest and most valuable lecture in the course.","Ask Claude: 'Re-explain pointers with a real-world analogy, then quiz me.'"],g:["CS50","CLAUDE"],h:"2.5 hrs",l:[["Week 4",CS50+"weeks/4/"]]},
 {t:"PSet 4 — filter/volume",d:["Solve volume, then start filter (image manipulation — grayscale, sepia, reflect)."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 4 — recover",d:["Solve recover (recover deleted JPEGs from a memory card — feels like magic when it works)."],g:["CS50"],h:"2.5 hrs"},
 {t:"Odin: JS Fundamentals 2 + DevTools",d:["Odin: Fundamentals Part 2 (data types, conditionals), JavaScript Developer Tools."],g:["ODIN"],h:"2 hrs"},
 {t:"Odin: Functions & problem solving",d:["Odin: Fundamentals Part 3 (functions), Problem Solving, Understanding Errors — three of the most important lessons in the whole path."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Build: Rock Paper Scissors + tip calc UI",d:["Odin Project: Rock Paper Scissors (console version).","Upgrade your tip calculator with HTML inputs + a button (your first DOM manipulation, slightly ahead of schedule — Claude can explain, not write)."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:1,theme:"Data Structures & the DOM — CS50 Week 5 · Odin DOM",days:[
 {t:"CS50 Lecture 5 — Data Structures",d:["Watch Lecture 5: linked lists, stacks, queues, trees, hash tables, tries. (You already know stacks/LIFO — enjoy the head start.)"],g:["CS50"],h:"2.5 hrs",l:[["Week 5",CS50+"weeks/5/"]]},
 {t:"PSet 5 — speller (day 1)",d:["Start speller: implement a dictionary with a hash table. Plan your hash function on paper first."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 5 — speller (day 2)",d:["Finish speller.","Ask Claude: '5 questions on hash tables and linked lists. Grade me hard.'"],g:["CS50","CLAUDE"],h:"2.5 hrs"},
 {t:"Odin: Arrays, loops & the DOM",d:["Odin: Fundamentals Part 4 (arrays, loops), DOM Manipulation and Events."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Odin: RPS UI + Etch-a-Sketch",d:["Odin: Revisiting Rock Paper Scissors — add a real UI with buttons and score display.","Start Project: Etch-a-Sketch."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"Build #4: to-do list + Phase 1 exam",d:["Build a to-do list app that saves to localStorage (add, complete, delete, persist).","Phase 1 graduation exam: open any 50-line JS file and explain every line to Claude. If you can — you passed."],g:["BUILD","CLAUDE"],h:"3 hrs"},
 REST("Phase 1 complete. Six weeks of pure fundamentals — the foundation almost everyone skips. Next week you earn AI assistance.")
]},
// ---------- PHASE 2 ----------
{p:2,theme:"Graduation Week — finish Odin JS · Plan Mode unlocked",days:[
 {t:"Odin: Objects + Etch-a-Sketch",d:["Odin: Fundamentals Part 5 (objects, object methods).","Finish Etch-a-Sketch."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Odin Project: Calculator (day 1)",d:["The Foundations boss fight. Build the UI and basic operations. Still no AI-written code — this is your final solo project."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"Odin Calculator (day 2) — Foundations done!",d:["Finish the calculator: chained operations, decimal, clear, edge cases (divide by zero!).","Odin Foundations: complete. Screenshot it. You've finished what most people quit."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"AI assistance unlocked: Plan Mode",d:["Full Stack Open Part 0 (a+b): Fundamentals of Web Apps.","First official Plan Mode session in Claude Code (Shift+Tab twice). Practice: plan a tiny feature, review the plan, approve, read every line of the diff."],g:["FSO","CLAUDE"],h:"2.5 hrs",l:[["FSO Part 0",FSO+"part0"]]},
 {t:"Level up your Claude Code workflow",d:["Run through the first chunk of Zero to Claude Code (terminal + workflow lessons).","Set up a fresh project with your tutor CLAUDE.md. New rule for Phase 2: read every line before accepting, and ask 'teach me' questions, not 'do it' questions."],g:["CLAUDE"],h:"2 hrs",l:[["Zero to Claude Code",Z2C]]},
 {t:"Build #5: habit tracker",d:["Design a habit tracker with streak logic yourself (sketch the data shape first).","Let Claude draft ONE function in Plan Mode. Review every line. Then delete it and rebuild it from scratch — the explain-then-rebuild loop."],g:["BUILD","CLAUDE"],h:"3 hrs"},
 REST()
]},
{p:2,theme:"React Begins — Full Stack Open Part 1",days:[
 {t:"FSO 1a — Introduction to React",d:["Work through 1a + exercises. Components and JSX will feel weird for ~3 days. That's normal."],g:["FSO"],h:"2.5 hrs",l:[["FSO Part 1",FSO+"part1"]]},
 {t:"FSO 1b — JavaScript refresher",d:["Work through 1b. This should mostly feel familiar after Odin — note anything that doesn't and drill it with Claude."],g:["FSO","CLAUDE"],h:"2 hrs"},
 {t:"FSO 1c — Component state",d:["Work through 1c: state, event handlers, hooks intro. Do every exercise."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 1d — Complex state & debugging",d:["Work through 1d + finish all Part 1 exercises.","Ask Claude: 'Quiz me: 5 questions on React state and props.'"],g:["FSO","CLAUDE"],h:"2.5 hrs"},
 {t:"Weather app: design day",d:["Build #6 begins: weather app using the free Open-Meteo API.","Plan Mode session: sketch the UI, define components, write the plan WITH Claude — but no code today. Architecture first."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Weather app: build the core",d:["Write the fetch + current-weather display yourself; Claude reviews your code and suggests improvements (read every suggestion before accepting)."],g:["BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:2,theme:"Talking to Servers — Full Stack Open Part 2",days:[
 {t:"FSO 2a — Rendering collections",d:["Work through 2a: rendering lists, modules, key props."],g:["FSO"],h:"2.5 hrs",l:[["FSO Part 2",FSO+"part2"]]},
 {t:"FSO 2b — Forms",d:["Work through 2b: controlled components, form handling."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 2c — Getting data from server",d:["Work through 2c: axios/fetch, effects, async data. This connects directly to your weather app."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 2d — Altering server data",d:["Work through 2d: POST, PUT, DELETE — full CRUD over HTTP."],g:["FSO"],h:"2.5 hrs"},
 {t:"Weather app: forecast + states",d:["Add a 5-day forecast, plus proper loading and error states (the difference between a demo and a product)."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Weather app: ship it",d:["Polish and deploy to Vercel.","Explain-then-rebuild: delete your main data-fetching component and rewrite it from memory."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:2,theme:"Styling & CRUD — FSO Part 2 done · Notes app",days:[
 {t:"FSO 2e — Styling React apps",d:["Work through 2e and finish all Part 2 exercises."],g:["FSO"],h:"2.5 hrs"},
 {t:"Notes app: design day",d:["Build #7: markdown notes app with full CRUD.","Plan Mode: define the data model and component tree with Claude. You design, AI drafts, you review."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Notes app: Create + Read",d:["Build note creation and the notes list. Review every AI-drafted line; rewrite anything you can't explain."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Notes app: Update + Delete",d:["Build editing and deletion. Handle the empty state nicely."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Notes app: markdown + persistence",d:["Add live markdown preview (marked.js) and localStorage persistence."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Notes app: polish + checkpoint quiz",d:["Polish and deploy.","Ask Claude: '10 questions across React state, props, effects, and CRUD. Grade me.' Anything below 8/10, schedule a review day."],g:["BUILD","CLAUDE","SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:2,theme:"Your First Backend — Full Stack Open Part 3",days:[
 {t:"FSO 3a — Node.js & Express",d:["Work through 3a: build your first REST API."],g:["FSO"],h:"2.5 hrs",l:[["FSO Part 3",FSO+"part3"]]},
 {t:"FSO 3b — Deploying to the internet",d:["Work through 3b: deploy your backend (Fly.io/Render), connect the frontend."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 3c — Saving data to MongoDB",d:["Work through 3c: database persistence, Mongoose models."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 3d — Validation & ESLint",d:["Work through 3d and finish Part 3 exercises."],g:["FSO"],h:"2.5 hrs"},
 {t:"Notes app v2: real backend",d:["Plan Mode: replace localStorage with an Express + database backend. Review the plan hard before approving — this touches 3+ files."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Notes app v2: full-stack trace",d:["Finish wiring frontend ↔ backend.","Ask Claude: 'Walk me through what happens when I click Save — trace it from click to database write.' The full-stack mental model, locked in."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 REST()
]},
{p:2,theme:"Mini-SaaS Sprint — Phase 2 capstone",days:[
 {t:"Pick your clone + spec it",d:["Choose one: URL shortener, link-in-bio page builder, or pomodoro timer with analytics.","Plan Mode: write the full spec and milestone list with Claude. Cut scope twice before starting."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Build day 1: core feature",d:["Build the one thing the product does. You design, AI drafts, you review every line."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build day 2: persistence + edges",d:["Add data persistence and handle edge cases (bad input, duplicates, empty states)."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build day 3: UI polish",d:["Make it look intentional: spacing, typography, error and loading states."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Deploy + README",d:["Deploy. Write the README like a product landing page: what it does, who it's for, screenshots."],g:["SHIP"],h:"2 hrs"},
 {t:"Phase 2 retro",d:["Ask Claude: 'Quiz me on everything from FSO Parts 0–3.' Identify your 2 weakest topics and book review slots on future Sundays.","Journal: what can you build now that you couldn't 12 weeks ago?"],g:["CLAUDE"],h:"2 hrs"},
 REST("Phase 2 complete. Tomorrow you stop building practice projects. Founder mode begins.")
]},
// ---------- PHASE 3 ----------
{p:3,theme:"Find the Pain — problem discovery week",days:[
 {t:"List 10 real problems",d:["Write 10 problems you, your girlfriend, friends, or your communities actually have. Your community-helping business idea lives somewhere in this list.","No solutions yet. Just pain."],g:["SHIP"],h:"2 hrs"},
 {t:"Talk to 3 humans",d:["Interview 3 potential users about their version of these problems. Only listen and take notes — don't pitch anything."],g:["SHIP"],h:"2 hrs"},
 {t:"Score the ideas",d:["Score each idea: Do I personally feel this pain? MVP buildable in 4–6 weeks? No heavy infra (no realtime video/blockchain/heavy ML)? Can I imagine 100 users?"],g:["SHIP"],h:"2 hrs"},
 {t:"Commit to ONE",d:["Pick the winner. Write a one-page problem statement: who has the pain, how bad it is, what they do about it today."],g:["SHIP"],h:"2 hrs"},
 {t:"Sketch the MVP",d:["Sketch every screen on paper. Then cut features until it hurts. The MVP is what's left."],g:["SHIP"],h:"2 hrs"},
 {t:"Define done",d:["Write a maximum of 3 user stories in your repo README. That's the whole MVP. Anything else goes in a 'later.md' file."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:3,theme:"Foundation Pour — the 2026 builder stack",days:[
 {t:"Scaffold the stack",d:["Create the repo: Next.js + TypeScript + Tailwind. Push to GitHub; connect Vercel so every push auto-deploys."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Supabase: data model",d:["Plan Mode first: design your database tables with Claude, argue about the schema, then create them in Supabase."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Supabase: auth",d:["Wire up email login end-to-end: sign up, log in, log out, protected pages."],g:["BUILD"],h:"2.5 hrs"},
 {t:"App shell",d:["Build the layout: navigation, page structure, and honest empty states ('No projects yet — create your first one')."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Core screen (static)",d:["Build the most important screen with fake hardcoded data. Get the shape right before the plumbing."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Core screen (live)",d:["Wire it to real Supabase data. Demo it to one person tonight, even half-broken."],g:["BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 1 — core feature #1",days:[
 {t:"Plan Mode: spec feature #1",d:["Spec the single most important feature with Claude in Plan Mode. Stay in Plan Mode all sprint for anything touching 3+ files."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Build",d:["Implement the happy path of feature #1."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build + edge cases",d:["Handle the unhappy paths: bad input, missing data, double-clicks, slow network."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Manual test + fix",d:["Use the feature like a hostile stranger would. Fix what breaks."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Explain-then-rebuild",d:["Take the trickiest function Claude drafted this week. Delete it. Rebuild it yourself from scratch."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Demo + journal",d:["Demo the feature to someone. Journal what you learned and what scared you."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 2 — core feature #2 & data flows",days:[
 {t:"Plan Mode: spec feature #2",d:["Spec the second core feature (or the data flows connecting feature #1 to the rest of the app)."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Build",d:["Implement the happy path."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build + edge cases",d:["Unhappy paths again. They're 60% of real software."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Connect the pieces",d:["Make features #1 and #2 work together. Trace one full user journey end to end."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Test + fix",d:["Hostile-stranger testing round 2."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Demo + journal",d:["Demo to a different person this time. Their confusion is your roadmap."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 3 — onboarding & UX",days:[
 {t:"The first-minute experience",d:["Plan Mode: design what a brand-new user sees in their first 60 seconds. That minute decides everything."],g:["BUILD","CLAUDE"],h:"2 hrs"},
 {t:"Build onboarding",d:["Implement the signup → first-success flow. A new user must reach value without your help."],g:["BUILD"],h:"2.5 hrs"},
 {t:"UX polish pass",d:["Fix the rough edges: confusing labels, missing feedback, dead ends."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Mobile pass",d:["Use the entire app on your phone. Fix everything that's broken or cramped."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Copy pass",d:["Rewrite every button, error, and empty state in plain human language. Words are UI."],g:["BUILD"],h:"2 hrs"},
 {t:"Self-serve test",d:["Hand your phone to someone with zero context. Can they sign up and succeed alone? Note every stumble."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 4 — hardening & feature freeze",days:[
 {t:"Error states everywhere",d:["Audit the app: every fetch needs loading, error, and empty states. No silent failures."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Data integrity",d:["Check Supabase row-level security rules: can user A see user B's data? Fix anything scary (Plan Mode — security deserves it)."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Performance pass",d:["Find the slowest screen and make it fast. Ask Claude to explain what was slow and why the fix works."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Seed data + demo account",d:["Create realistic seed data and a demo flow so the app never looks empty to a new visitor."],g:["BUILD"],h:"2 hrs"},
 {t:"Bug sweep",d:["Work through your bug list top to bottom."],g:["BUILD"],h:"2.5 hrs"},
 {t:"FEATURE FREEZE",d:["No new features after today until launch. Write it somewhere visible.","Journal: the MVP exists. Four weeks ago it was a paper sketch."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Real Humans — watch them use it",days:[
 {t:"Production deploy",d:["Deploy the production build. Buy/connect a custom domain. Check it on your phone, your laptop, and one borrowed device."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Friend test #1",d:["Watch friend #1 use it. Say NOTHING. Every time you want to help, write down what confused them instead."],g:["SHIP"],h:"2 hrs"},
 {t:"Fix round 1",d:["Fix the top 3 confusions from yesterday. Nothing else."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Friend test #2",d:["Watch friend #2 (your girlfriend is a great candidate — she'll be honest). Same rule: silence + notes."],g:["SHIP"],h:"2 hrs"},
 {t:"Fix round 2",d:["Fix the new top 3."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Friend test #3 + fix",d:["Test with friend #3, fix the worst of it same-day. Three real users have now used your product."],g:["SHIP","BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:3,theme:"Polish & Tell the Story",days:[
 {t:"Landing page: the headline",d:["Write the landing page headline. It names the PAIN, not the tech. 'Stop losing recipes in your camera roll' beats 'AI-powered recipe management'."],g:["SHIP"],h:"2 hrs"},
 {t:"Landing page: build it",d:["Build the page: headline, 3 benefits, screenshots, one clear call to action."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Demo GIF + feedback channel",d:["Record a 30–60s demo GIF/video.","Add a simple feedback widget or a visible contact link."],g:["SHIP"],h:"2 hrs"},
 {t:"Friend-test cleanup",d:["Clear the remaining issues from last week's tests."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Lighthouse + accessibility",d:["Run Lighthouse. Fix the cheap wins: image sizes, contrast, alt text, focus states."],g:["BUILD"],h:"2 hrs"},
 {t:"Soft launch",d:["Share it in ONE community you're already a trusted member of. Ask for feedback, not applause."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Money & Measurement",days:[
 {t:"Pricing decision",d:["Decide: charge now, or free with a waitlist for a paid tier? Write down WHY. (Charging earlier than feels comfortable is usually right.)"],g:["SHIP"],h:"1.5 hrs"},
 {t:"Stripe: test mode",d:["Plan Mode — payments deserve maximum care. Wire Stripe Checkout in test mode."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Stripe: live + webhooks",d:["Go live. Handle the webhook events that actually matter (checkout completed, subscription canceled)."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Analytics",d:["Add PostHog or Plausible. Define the 3 events that tell you if the product works (signup, first success action, return visit)."],g:["BUILD"],h:"2 hrs"},
 {t:"Email capture",d:["Add email capture + one simple welcome email."],g:["BUILD"],h:"2 hrs"},
 {t:"Full dry run",d:["Run the whole journey yourself: land → sign up → succeed → pay. Fix every snag. This exact path is what strangers will walk next week."],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:3,theme:"Launch Prep",days:[
 {t:"Write the launch posts",d:["Draft your X/Twitter thread, Product Hunt listing, and Indie Hackers post. Lead with the pain and the story, not the feature list."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Demo video",d:["Record a tight 60-second demo. Imperfect and shipped beats polished and pending."],g:["SHIP"],h:"2 hrs"},
 {t:"Recruit day-one users",d:["Line up 5 people who'll try it on launch day and say something publicly."],g:["SHIP"],h:"1.5 hrs"},
 {t:"Bug bash",d:["Spend 2 hours actively trying to break your own app. Weird inputs, fast clicking, back-button abuse. Fix the worst finds."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Final checks",d:["Final fixes. Verify error monitoring/alerts work so you'll know if launch day breaks something."],g:["BUILD"],h:"2 hrs"},
 {t:"Schedule it",d:["Pick your launch day/time for next week. Prep everything in drafts. Then close the laptop and breathe."],g:["SHIP"],h:"1.5 hrs"},
 REST("Big week ahead. Rest like it's your job.")
]},
{p:3,theme:"LAUNCH WEEK",days:[
 {t:"🚀 Launch: X + Indie Hackers",d:["Post the thread. Post on Indie Hackers. Reply to every single comment within the hour.","Watch your analytics like a nervous parent. That's allowed today."],g:["SHIP"],h:"3 hrs"},
 {t:"🚀 Launch: Product Hunt / Show HN",d:["Launch on Product Hunt (or Show HN). Be present in the comments all day — founders who engage get traction."],g:["SHIP"],h:"3 hrs"},
 {t:"Onboard every signup",d:["Personally message every new user. Ask each one exactly one question: 'What were you hoping this would do?'"],g:["SHIP"],h:"2.5 hrs"},
 {t:"Same-day shipping",d:["Pick the most-requested small fix from user feedback and ship it TODAY. Then tell the person who asked."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"The 'what I learned' post",d:["Write a follow-up post: launch numbers, surprises, lessons. Builders sharing honestly is its own growth channel — and the seed of the community you want to build."],g:["SHIP"],h:"2 hrs"},
 {t:"Count + connect",d:["Count your users. Message each one personally. You're not running a faceless startup; you're a person helping people."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:3,theme:"First 10 Users & the Six-Month Retro",days:[
 {t:"Unblock users 6–10",d:["What's stopping the next users from signing up or sticking? Find it in analytics + conversations. Fix it."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"One growth experiment",d:["Run exactly one: a community post, 10 thoughtful cold DMs, or one SEO page targeting the pain. Measure it."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Power-user interview",d:["Talk to your most active user for 20 minutes. Ask what they'd be disappointed to lose."],g:["SHIP"],h:"2 hrs"},
 {t:"Ship their #1 request",d:["Build and ship the thing your best user asked for."],g:["BUILD"],h:"2.5 hrs"},
 {t:"The six-month retro",d:["Write it: what you can build now vs. June 15. What surprised you. What the vibe-coding trap looks like from the other side. What's next."],g:["SHIP"],h:"2 hrs"},
 {t:"Day 168: plan the next chapter",d:["Decide: double down on this product, or place a new bet with everything you've learned? Sketch the next 6 months.","Either way — you're no longer learning to code. You're a builder who codes. 🎉"],g:["SHIP"],h:"2 hrs"},
 REST("Phase 3 done. Tomorrow: the AI Engineer track begins — and everything you build from here becomes LectronicArt curriculum.")
]},
// ---------- PHASE 4: AI ENGINEER TRACK ----------
{p:4,theme:"Claude API Foundations — Anthropic Academy flagship begins",days:[
 {t:"First API call",d:["Anthropic Academy: 'Building with the Claude API' — opening sections (accessing the API, message requests/responses).","Get your API key, write your first script outside of any framework: send a message, print the response. Feel how simple the core actually is.","New journal file: ai-engineer-log.md. This log becomes LectronicArt course material later — write it like someone's reading."],g:["SETUP","CLAUDE"],h:"2.5 hrs",l:[["Anthropic Academy","https://anthropic.skilljar.com/"]]},
 {t:"Streaming + system prompts",d:["Academy: streaming responses, system prompts, multi-turn conversations.","Build a small CLI chat tool with conversation memory — you've used these for months; now you're building one."],g:["CLAUDE","BUILD"],h:"2.5 hrs"},
 {t:"Tool use, part 1",d:["Academy: tool use fundamentals — schemas, the tool call loop, returning results.","This is THE concept of agentic AI. Don't move on until you can explain the loop on a whiteboard."],g:["CLAUDE"],h:"2.5 hrs"},
 {t:"Tool use, part 2",d:["Academy: multiple tools, choosing tools, error handling in tool calls.","Build: give your CLI chat two real tools (e.g., read a local file, fetch weather). Watch Claude decide when to use them."],g:["CLAUDE","BUILD"],h:"2.5 hrs"},
 {t:"Production patterns",d:["Academy: prompt caching, extended thinking, retries, rate limits, batching.","Refactor your chat tool with proper error handling. Amateur scripts crash; products retry."],g:["CLAUDE"],h:"2.5 hrs"},
 {t:"Ship: Creative Brief Generator",d:["Build and ship your first LectronicArt micro-tool: paste a rough idea → get a structured creative brief (audience, hook, format, shot list).","Deploy it (Vercel) and post it publicly: 'I built this in a day. Here's how.' Your first artifact where the audience IS the customer."],g:["BUILD","SHIP"],h:"3 hrs"},
 REST()
]},
{p:4,theme:"Prompt Systems — your first sellable system",days:[
 {t:"Prompt engineering, seriously",d:["Study Anthropic's prompt engineering docs end to end: roles, examples, chain-of-thought, XML structure, prefilling.","Start a prompt library in your Obsidian vault: one note per prompt, with version, use case, and example output."],g:["CLAUDE"],h:"2.5 hrs",l:[["Prompting docs","https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"]]},
 {t:"Creator prompt templates",d:["Write reusable, parameterized prompts for creator work: image prompt builder, video script writer, caption pack generator, hook variations.","Test each one 5 times. Keep what's consistently good; rewrite what's flaky."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Evals: prove your prompts work",d:["Build a tiny eval harness: run a prompt against 10 test inputs, score outputs against criteria.","This is what separates 'prompt tips' influencers from engineers. You'll teach this someday."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Prompt chains",d:["Chain prompts into a pipeline: idea → outline → script → captions → image prompts. Each step's output feeds the next.","Notice where chains beat one mega-prompt, and where they don't. Write it down."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Package: Prompt System v1",d:["Assemble your best prompts into a clean, documented pack — your first real digital product prototype (markdown/Notion format, with usage guide)."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Give it away, measure everything",d:["Post Prompt System v1 free in one creator community + your channels. Ask for one thing in return: feedback.","Track: downloads, replies, questions. This is market research disguised as generosity."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:4,theme:"MCP — the plumbing of creative automation",days:[
 {t:"MCP concepts",d:["Anthropic Academy: MCP course — architecture, servers vs clients, why a protocol beats one-off integrations.","Connect this to what you already know: your Obsidian vault, your Telegram bot — MCP is how tools like these plug into any AI."],g:["CLAUDE"],h:"2.5 hrs"},
 {t:"Build your first MCP server",d:["Academy: follow the build — message passing, transports, exposing tools.","Get the example server running and connected to Claude Code."],g:["CLAUDE","BUILD"],h:"2.5 hrs"},
 {t:"MCP server for YOUR workflow",d:["Design + build an MCP server that serves your real life: e.g., search/write notes in your Obsidian vault, or wrap ffmpeg operations (trim, caption, convert) as tools.","Plan Mode for the design; you review every line."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Finish + connect everywhere",d:["Finish the server. Connect it to Claude Code and Claude Desktop. Use it for a real task today."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Harden + open-source it",d:["Clean up, write a great README (install steps, demo GIF), publish on GitHub under lectronicart."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Teach it",d:["Create your first real tutorial: 'I built an MCP server that [does X] for creators' — post or video, beginner-friendly, plain-language analogies (your specialty).","This is a dress rehearsal for the community classroom."],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"Agents I — holiday week, lighter load",days:[
 {t:"Agent fundamentals",d:["Hugging Face Agents Course: unit 1 — what agents are, the think-act-observe loop, when agents beat simple prompts."],g:["AGENTS"],h:"2 hrs",l:[["HF Agents Course","https://huggingface.co/learn/agents-course"]]},
 {t:"Frameworks tour",d:["HF course: framework units — see how agent frameworks structure the loop you already understand from tool use.","You've RUN multi-agent systems (Hermes + Atlas). Now you're learning to BUILD them."],g:["AGENTS"],h:"2 hrs"},
 {t:"Build: idea-research agent",d:["Build a simple research agent: give it a content topic → it searches, gathers, and returns an angle brief with sources."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Claude Code subagents",d:["Anthropic Academy: Introduction to Subagents.","Design (on paper) a content-pipeline subagent team: researcher, writer, editor, formatter. You'll build it next week."],g:["CLAUDE"],h:"2 hrs"},
 {t:"Holiday 🎄",d:["Rest. Be with people you love. The machine can wait."],g:["REST"],h:"0 hrs",rest:true},
 {t:"Holiday hack (optional)",d:["Optional fun-only build: an AI gift — a custom card generator, a year-in-review for your girlfriend, anything playful. No pressure, no shipping."],g:["BUILD"],h:"0–2 hrs"},
 REST()
]},
{p:4,theme:"Agents II — content engine v1 + the 2027 plan",days:[
 {t:"Agent memory & tools",d:["HF Agents Course: tools and memory units — give agents persistent context (you literally built an Obsidian memory vault for this; connect the concept)."],g:["AGENTS"],h:"2.5 hrs"},
 {t:"Build: content engine agent v1",d:["Build the repurposer: one long-form input (script/post/transcript) → thread, 3 short posts, newsletter section, 5 hooks.","Use your subagent design from last week."],g:["BUILD"],h:"3 hrs"},
 {t:"Add a critic",d:["Add a quality-check step: a second agent pass that critiques and revises the output against your voice guidelines. Compare with/without — save examples (future teaching material)."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"2026 retro → 2027 thesis",d:["Write your year retro: June you vs December you.","Draft the LectronicArt 2027 thesis: who it serves, what transformation it sells, why you. One page."],g:["SHIP"],h:"2 hrs"},
 {t:"New Year 🎉",d:["Rest. Raise a glass to the builder you became this year."],g:["REST"],h:"0 hrs",rest:true},
 {t:"Ship content engine v1",d:["Run the engine on a real piece of your content. Post the before/after publicly: 'My AI content engine turned 1 video into 9 assets. Here's the system.'"],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"AI Art Workflows — ComfyUI deep dive",days:[
 {t:"ComfyUI setup + first render",d:["Install ComfyUI on your Windows/WSL2 rig (you've survived worse Docker battles).","Run your first text-to-image workflow; understand the default graph node by node."],g:["SETUP","BUILD"],h:"2.5 hrs",l:[["ComfyUI","https://github.com/comfyanonymous/ComfyUI"]]},
 {t:"Node literacy",d:["Learn the core nodes: checkpoints, samplers, CFG, latent space, VAE. Ask Claude to explain each like you'd explain to your future students.","Experiment deliberately: change ONE parameter at a time, note what it does."],g:["BUILD","CLAUDE"],h:"2.5 hrs"},
 {t:"Style consistency",d:["Build a brand-consistent workflow: LoRAs/style references that produce recognizably LectronicArt visuals every time.","This becomes your brand's visual engine AND a flagship teaching example."],g:["BUILD"],h:"2.5 hrs"},
 {t:"ComfyUI as an API",d:["Drive ComfyUI programmatically: queue a workflow from a Python script, retrieve the image.","The bridge moment: your coding skills × creative tools = automation nobody else in the art community can teach."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Batch generation",d:["Script a batch run: 50 variations from a prompt list, auto-saved and named. Curate the best 10.","Time how long manual would've taken. That number is your marketing."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Package: AI Art Workflow #1",d:["Export the workflow + write a plain-language install/use guide. Ship it free.","Tutorial post: 'A repeatable AI art pipeline for artists who hate repeating themselves.'"],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"AI Video Workflows — the pipeline",days:[
 {t:"Video stack survey + ffmpeg basics",d:["Survey current video-gen APIs on Replicate/fal.ai (this changes monthly — research fresh).","ffmpeg fundamentals: trim, concat, overlay, audio mix. The unglamorous backbone of every video automation."],g:["BUILD"],h:"2.5 hrs",l:[["Replicate","https://replicate.com"],["fal.ai","https://fal.ai"]]},
 {t:"Script → voiceover → video v1",d:["Build pipeline v1: script (from your content engine!) → TTS voiceover → stitched with visuals via ffmpeg."],g:["BUILD"],h:"3 hrs"},
 {t:"Auto-captions",d:["Add transcription (Whisper) → styled burned-in captions. Captions are non-negotiable for creator content; automating them is a gift to your future members."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Generated b-roll",d:["Add image-to-video or generated b-roll segments via API where the script calls for visuals."],g:["BUILD"],h:"2.5 hrs"},
 {t:"One prompt → finished video",d:["Connect everything end to end: topic in, rendered short video out. Document every step in the pipeline diagram."],g:["BUILD"],h:"3 hrs"},
 {t:"The meta-video",d:["Publish a video MADE BY the pipeline, ABOUT the pipeline. Peak proof-of-work content. Watch what happens."],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"The Content Engine — full creator operating system",days:[
 {t:"Design the LectronicArt content OS",d:["On paper: content pillars, weekly cadence, the repurposing map (1 pillar piece → N derivatives), where each asset publishes."],g:["SHIP"],h:"2 hrs"},
 {t:"Wire the machine",d:["Connect your agents + pipelines into one flow: pillar content in → all derivatives out, organized in folders ready to post."],g:["BUILD"],h:"3 hrs"},
 {t:"n8n: the no-code mirror",d:["Self-host n8n in Docker (trivial for you). Rebuild ONE pipeline visually in n8n.","Why: half your future members won't code. n8n is how you meet them where they are — and you teaching both layers is the moat."],g:["BUILD"],h:"2.5 hrs",l:[["n8n","https://n8n.io"]]},
 {t:"Publishing + measurement",d:["Add scheduling/publishing automation where APIs allow; set up a simple metrics sheet (posts, views, replies, subscribers) the engine updates."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Run it for real",d:["Feed the engine one real pillar piece. Fix every point of friction you hit. Friction you fix now is friction your students never feel."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Queue a full week",d:["Use the engine to queue 7 days of content. Post the system diagram publicly: 'My content runs on this machine. Building it in public.'"],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"Automation Templates & the Creator OS kit",days:[
 {t:"Audit your arsenal",d:["List every build from the last 8 months. Score each: how teachable? how templatable? how badly do creators want it?","Pick the top 5 to productize."],g:["SHIP"],h:"2 hrs"},
 {t:"Templates #1–2",d:["Productize the first two: clean code/workflow, install script or import file, plain-language README, demo GIF."],g:["BUILD"],h:"3 hrs"},
 {t:"Templates #3–4",d:["Productize two more. Consistent naming, consistent docs — this is a product line, not a junk drawer."],g:["BUILD"],h:"3 hrs"},
 {t:"The Creator OS",d:["Build the system that ties it together: an Obsidian/Notion workspace template — projects, prompt library, asset pipeline, content calendar, metrics. The 'operating system' your community will run on."],g:["BUILD"],h:"2.5 hrs"},
 {t:"The Starter Kit",d:["Bundle: Creator OS + top templates + Prompt System v1 + the roadmap itself = the LectronicArt Starter Kit."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Beta test the kit",d:["Offer the kit free to 10 creators in exchange for honest feedback + a testimonial if they love it. Watch 2 of them set it up live on a call."],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"Skool Foundations — community as product",days:[
 {t:"Study the winners",d:["Deep-dive 3 successful Skool communities in adjacent niches (AI automation, creator economy, AI art). Note: pricing, free vs paid split, classroom structure, what keeps members active, gamification use."],g:["SHIP"],h:"2.5 hrs",l:[["Skool","https://www.skool.com"]]},
 {t:"Define LectronicArt",d:["Write the community one-pager: the promise (transformation, not features), who it's for, the member journey from joining to their first shipped automation.","Decide the ladder: free community → paid tier → (later) cohort."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Curriculum from your archive",d:["Map 9 months of artifacts into a classroom outline: Module 1 fundamentals mindset → prompt systems → art workflows → video pipelines → content engine → templates → business experiments.","You're not creating a course. You're organizing receipts."],g:["SHIP"],h:"2.5 hrs"},
 {t:"The flagship lead magnet",d:["Polish THIS roadmap + calendar into the lead magnet: 'The 252-Day Builder Calendar.' The thing that brought you here brings them in."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Set up shop",d:["Set up the Skool community (or a waitlist page if you want more runway): about page, categories, classroom shell, payment connected."],g:["SETUP","SHIP"],h:"2.5 hrs"},
 {t:"The founding 30",d:["Build your founding-member outreach list: 30 real names from your audience, communities, and beta testers. Note why each one specifically would benefit."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:4,theme:"Founding Cohort Prep",days:[
 {t:"Module 1: record it",d:["Create Module 1 (fundamentals + Creator OS setup) — screen recordings + the written guide. Done beats perfect; you'll re-record everything in 6 months anyway."],g:["BUILD"],h:"3 hrs"},
 {t:"Module 2: record it",d:["Create Module 2 (Prompt Systems). Same bar: clear, real, yours."],g:["BUILD"],h:"3 hrs"},
 {t:"The accountability engine",d:["Design the community rhythm: weekly build challenge, ship-it Friday thread, monthly live workshop, onboarding checklist that gets every member to a first win in 48 hours.","Accountability is the product. The content is the excuse."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Founding offer + experiment design",d:["Set founding pricing (low, locked-for-life, capped seats). Define the experiment: goal = 10 founding members in 7 days; what you'll learn either way."],g:["SHIP"],h:"2 hrs"},
 {t:"Launch assets",d:["Create launch content with your own content engine: announcement video, thread, DM scripts, email. Eat your own cooking, publicly."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Dry run",d:["Onboard 2 friendly testers through the entire experience: join → onboard → first win. Fix every snag tonight."],g:["SHIP"],h:"2.5 hrs"},
 REST("Launch week ahead. Sleep well. You've been building toward this for 35 weeks.")
]},
{p:4,theme:"LAUNCH LECTRONICART — founding cohort week",days:[
 {t:"🚀 Doors open",d:["Open the founding cohort. Personal outreach to all 30 names — individual messages, not blasts.","Post the announcement everywhere you've been building in public. Reply to everything."],g:["SHIP"],h:"3 hrs"},
 {t:"Public launch push",d:["Launch content across channels: the story (June 2026: couldn't read code → February 2027: this), the offer, the proof.","Your content engine queues the follow-ups."],g:["SHIP"],h:"3 hrs"},
 {t:"White-glove onboarding",d:["Personally welcome every member. Get each one to their 48-hour first win. Ask each: 'What do you want to build first?'"],g:["SHIP"],h:"2.5 hrs"},
 {t:"First live workshop",d:["Host the first community call: build something live, mess up live, fix it live. That's the brand — real builder, real process."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Same-day shipping",d:["Take the most-requested thing from members this week and ship it today. Then tell them. Day-one members who feel heard become evangelists."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Day 252: the retro",d:["Write the full retro: 36 weeks, zero to founder-teacher. Count members, lessons, builds shipped.","Plan Q2 2027: cohort #2? The paid tier? New pillar content? You decide — you're the founder now. 🎉"],g:["SHIP"],h:"2.5 hrs"},
 REST("252 days. From 'what's a stack?' to running an AI education business. LectronicArt is live.")
]}
];
