// ===== 252-day curriculum data =====
// Start: Monday June 15, 2026. 36 weeks. Days: [Mon..Sun].
const CS50="https://cs50.harvard.edu/x/";
const ODIN="https://www.theodinproject.com/paths/foundations/courses/foundations";
const FSO="https://fullstackopen.com/en/";
const PYL="https://cs50.harvard.edu/python/";
const CODEX_AGENTS="https://developers.openai.com/codex/guides/agents-md";
const CODEX_BEST="https://developers.openai.com/codex/learn/best-practices";
const OPENAI_SDK="https://developers.openai.com/api/docs/libraries";
const RESPONSES="https://developers.openai.com/api/docs/guides/migrate-to-responses";
const STREAMING="https://developers.openai.com/api/docs/guides/streaming-responses";
const TOOLS="https://developers.openai.com/api/docs/guides/tools";
const PROMPTING="https://developers.openai.com/api/docs/guides/prompt-engineering";
const MCP_OPENAI="https://developers.openai.com/api/docs/guides/tools-connectors-mcp";
const AGENTS_SDK="https://developers.openai.com/api/docs/guides/agents";
const CODEX_SUBAGENTS="https://developers.openai.com/codex/subagents";

const REST=(note)=>({t:"Rest day",d:[note||"No new material. If you're behind, use today to catch up — otherwise genuinely rest. Streaks are built on recovery."],g:["REST"],h:"0–1 hr",rest:true});

const WEEKS=[
// ---------- PHASE 1 ----------
{p:1,theme:"Setup & First Programs — CS50 Week 0 · Odin Intro",days:[
 {t:"Mission setup",d:["Install Codex and create a 'learning-code' folder with an AGENTS.md tutor file (the 6 rules from your roadmap: explain before writing, simpler over clever, comment non-obvious steps, ask my approach first, name every library, stop me before bad practice).","Enroll in CS50x 2026 (free) and create your edX account.","Start your notes.md learning journal — entry #1: why you're doing this."],g:["SETUP","CODEX"],h:"2 hrs",l:[["CS50x",CS50],["Codex AGENTS.md",CODEX_AGENTS]]},
 {t:"CS50 Lecture 0 — Scratch",d:["Watch Lecture 0 in full (computational thinking, algorithms, abstraction). Take notes by hand or in notes.md.","Don't skip it because it 'feels basic' — Malan is building the mental model everything else sits on."],g:["CS50"],h:"2.5 hrs",l:[["Week 0",CS50+"weeks/0/"]]},
 {t:"CS50 Problem Set 0",d:["Build your Scratch project (a game, animation, or interactive toy — your choice).","Notice how you naturally use loops, conditions, and events. You're already programming."],g:["CS50"],h:"2.5 hrs"},
 {t:"Odin: Introduction + Prerequisites",d:["Odin Foundations: Introduction section (How this course works, Intro to web dev, Motivation & mindset).","Prerequisites: Computer Basics, How Does the Web Work?, Installation Overview + install VS Code."],g:["ODIN"],h:"2 hrs",l:[["Foundations",ODIN]]},
 {t:"Odin: Command line + Git setup",d:["Odin: Text Editors, Command Line Basics — practice cd, ls, mkdir, touch until they're reflex.","Odin: Setting Up Git — install Git, create your GitHub account, configure SSH."],g:["ODIN"],h:"2 hrs"},
 {t:"Build #1: CLI calculator",d:["Write a command-line calculator yourself (add/subtract/multiply/divide, looping menu). Python or JavaScript via Node.","Rule check: ChatGPT may EXPLAIN syntax and errors, never write the code.","Journal: 3 sentences on what confused you this week."],g:["BUILD"],h:"2.5 hrs"},
 REST("Read this week's calculator code out loud and explain every line to yourself (or to ChatGPT). 5 minutes.")
]},
{p:1,theme:"C & Your First Web Page — CS50 Week 1 · Odin HTML",days:[
 {t:"CS50 Lecture 1 — C (part 1)",d:["Watch the first half of Lecture 1: source code vs machine code, compilers, VS Code, types, variables, conditionals.","In your CS50 codespace, retype every example yourself. No copy-paste."],g:["CS50"],h:"2.5 hrs",l:[["Week 1",CS50+"weeks/1/"]]},
 {t:"CS50 Lecture 1 — C (part 2) + shorts",d:["Finish Lecture 1: loops, operators, integer overflow, floating-point imprecision.","Watch this week's section video and 1–2 shorts on whatever felt shaky."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 1 — mario",d:["Solve mario (the pyramid problem). Sit with bugs 15 minutes before asking ChatGPT — and only ask 'why doesn't this work?', not 'fix it'."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 1 — cash/credit",d:["Solve cash (or credit if you're feeling strong).","Ask ChatGPT: 'Quiz me with 5 questions on C variables, loops, and conditionals. Grade my answers.'"],g:["CS50","CODEX"],h:"2.5 hrs"},
 {t:"Odin: Git Basics + HTML begins",d:["Odin: Git Basics section — make your first real commits and push to GitHub.","Odin HTML Foundations: Intro to HTML & CSS, Elements & Tags, HTML Boilerplate."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Odin HTML + start portfolio",d:["Odin: Working with Text, Lists, Links & Images, Commit Messages.","Build #2 begins: create your personal portfolio page in plain HTML (about you, your projects, links). Commit as you go."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:1,theme:"Arrays & CSS — CS50 Week 2 · Odin CSS",days:[
 {t:"CS50 Lecture 2 — Arrays",d:["Watch Lecture 2: arrays, strings, command-line arguments, cryptography intro.","Retype the examples. Notice how strings are just arrays of chars."],g:["CS50"],h:"2.5 hrs",l:[["Week 2",CS50+"weeks/2/"]]},
 {t:"PSet 2 — scrabble/readability",d:["Solve scrabble or readability.","Debugging rule reminder: 15 minutes stuck before asking, then ask for explanation, not solution."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 2 — caesar",d:["Solve caesar (your first cipher!).","Ask ChatGPT: 'Quiz me on arrays and strings in C — 5 questions.'"],g:["CS50","CODEX"],h:"2.5 hrs"},
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
 {t:"CS50 Lecture 4 — Memory",d:["Watch Lecture 4: pointers, malloc, hexadecimal, memory layout. The hardest and most valuable lecture in the course.","Ask ChatGPT: 'Re-explain pointers with a real-world analogy, then quiz me.'"],g:["CS50","CODEX"],h:"2.5 hrs",l:[["Week 4",CS50+"weeks/4/"]]},
 {t:"PSet 4 — filter/volume",d:["Solve volume, then start filter (image manipulation — grayscale, sepia, reflect)."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 4 — recover",d:["Solve recover (recover deleted JPEGs from a memory card — feels like magic when it works)."],g:["CS50"],h:"2.5 hrs"},
 {t:"Odin: JS Fundamentals 2 + DevTools",d:["Odin: Fundamentals Part 2 (data types, conditionals), JavaScript Developer Tools."],g:["ODIN"],h:"2 hrs"},
 {t:"Odin: Functions & problem solving",d:["Odin: Fundamentals Part 3 (functions), Problem Solving, Understanding Errors — three of the most important lessons in the whole path."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Build: Rock Paper Scissors + tip calc UI",d:["Odin Project: Rock Paper Scissors (console version).","Upgrade your tip calculator with HTML inputs + a button (your first DOM manipulation, slightly ahead of schedule — ChatGPT can explain, not write)."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 REST()
]},
{p:1,theme:"Data Structures & the DOM — CS50 Week 5 · Odin DOM",days:[
 {t:"CS50 Lecture 5 — Data Structures",d:["Watch Lecture 5: linked lists, stacks, queues, trees, hash tables, tries. (You already know stacks/LIFO — enjoy the head start.)"],g:["CS50"],h:"2.5 hrs",l:[["Week 5",CS50+"weeks/5/"]]},
 {t:"PSet 5 — speller (day 1)",d:["Start speller: implement a dictionary with a hash table. Plan your hash function on paper first."],g:["CS50"],h:"2.5 hrs"},
 {t:"PSet 5 — speller (day 2)",d:["Finish speller.","Ask ChatGPT: '5 questions on hash tables and linked lists. Grade me hard.'"],g:["CS50","CODEX"],h:"2.5 hrs"},
 {t:"Odin: Arrays, loops & the DOM",d:["Odin: Fundamentals Part 4 (arrays, loops), DOM Manipulation and Events."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Odin: RPS UI + Etch-a-Sketch",d:["Odin: Revisiting Rock Paper Scissors — add a real UI with buttons and score display.","Start Project: Etch-a-Sketch."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"Build #4: to-do list + Phase 1 exam",d:["Build a to-do list app that saves to localStorage (add, complete, delete, persist).","Phase 1 graduation exam: open any 50-line JS file and explain every line to ChatGPT. If you can — you passed."],g:["BUILD","CODEX"],h:"3 hrs"},
 REST("Phase 1 complete. Six weeks of pure fundamentals — the foundation almost everyone skips. Next week you earn AI assistance.")
]},
// ---------- PHASE 2 ----------
{p:2,theme:"Graduation Week — finish Odin JS · Plan Mode unlocked",days:[
 {t:"Odin: Objects + Etch-a-Sketch",d:["Odin: Fundamentals Part 5 (objects, object methods).","Finish Etch-a-Sketch."],g:["ODIN"],h:"2.5 hrs"},
 {t:"Odin Project: Calculator (day 1)",d:["The Foundations boss fight. Build the UI and basic operations. Still no AI-written code — this is your final solo project."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"Odin Calculator (day 2) — Foundations done!",d:["Finish the calculator: chained operations, decimal, clear, edge cases (divide by zero!).","Odin Foundations: complete. Screenshot it. You've finished what most people quit."],g:["ODIN","BUILD"],h:"2.5 hrs"},
 {t:"AI assistance unlocked: Plan Mode",d:["Full Stack Open Part 0 (a+b): Fundamentals of Web Apps.","First official Plan Mode session in Codex. Practice: plan a tiny feature, review the plan, approve, read every line of the diff."],g:["FSO","CODEX"],h:"2.5 hrs",l:[["FSO Part 0",FSO+"part0"],["Codex best practices",CODEX_BEST]]},
 {t:"Level up your Codex workflow",d:["Read the Codex best-practices guide and the AGENTS.md guide.","Set up a fresh project with your tutor AGENTS.md. New rule for Phase 2: read every line before accepting, and ask 'teach me' questions, not 'do it' questions."],g:["CODEX"],h:"2 hrs",l:[["Codex best practices",CODEX_BEST],["AGENTS.md guide",CODEX_AGENTS]]},
 {t:"Build #5: habit tracker",d:["Design a habit tracker with streak logic yourself (sketch the data shape first).","Let Codex draft ONE function in Plan Mode. Review every line. Then delete it and rebuild it from scratch — the explain-then-rebuild loop."],g:["BUILD","CODEX"],h:"3 hrs"},
 REST()
]},
{p:2,theme:"React Begins — Full Stack Open Part 1",days:[
 {t:"FSO 1a — Introduction to React",d:["Work through 1a + exercises. Components and JSX will feel weird for ~3 days. That's normal."],g:["FSO"],h:"2.5 hrs",l:[["FSO Part 1",FSO+"part1"]]},
 {t:"FSO 1b — JavaScript refresher",d:["Work through 1b. This should mostly feel familiar after Odin — note anything that doesn't and drill it with ChatGPT."],g:["FSO","CODEX"],h:"2 hrs"},
 {t:"FSO 1c — Component state",d:["Work through 1c: state, event handlers, hooks intro. Do every exercise."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 1d — Complex state & debugging",d:["Work through 1d + finish all Part 1 exercises.","Ask ChatGPT: 'Quiz me: 5 questions on React state and props.'"],g:["FSO","CODEX"],h:"2.5 hrs"},
 {t:"Weather app: design day",d:["Build #6 begins: weather app using the free Open-Meteo API.","Plan Mode session: sketch the UI, define components, write the plan with Codex — but no code today. Architecture first."],g:["BUILD","CODEX"],h:"2 hrs"},
 {t:"Weather app: build the core",d:["Write the fetch + current-weather display yourself; Codex reviews your code and suggests improvements (read every suggestion before accepting)."],g:["BUILD"],h:"2.5 hrs"},
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
 {t:"Notes app: design day",d:["Build #7: markdown notes app with full CRUD.","Plan Mode: define the data model and component tree with Codex. You design, AI drafts, you review."],g:["BUILD","CODEX"],h:"2 hrs"},
 {t:"Notes app: Create + Read",d:["Build note creation and the notes list. Review every AI-drafted line; rewrite anything you can't explain."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Notes app: Update + Delete",d:["Build editing and deletion. Handle the empty state nicely."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Notes app: markdown + persistence",d:["Add live markdown preview (marked.js) and localStorage persistence."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Notes app: polish + checkpoint quiz",d:["Polish and deploy.","Ask ChatGPT: '10 questions across React state, props, effects, and CRUD. Grade me.' Anything below 8/10, schedule a review day."],g:["BUILD","CODEX","SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:2,theme:"Your First Backend — Full Stack Open Part 3",days:[
 {t:"FSO 3a — Node.js & Express",d:["Work through 3a: build your first REST API."],g:["FSO"],h:"2.5 hrs",l:[["FSO Part 3",FSO+"part3"]]},
 {t:"FSO 3b — Deploying to the internet",d:["Work through 3b: deploy your backend (Fly.io/Render), connect the frontend."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 3c — Saving data to MongoDB",d:["Work through 3c: database persistence, Mongoose models."],g:["FSO"],h:"2.5 hrs"},
 {t:"FSO 3d — Validation & ESLint",d:["Work through 3d and finish Part 3 exercises."],g:["FSO"],h:"2.5 hrs"},
 {t:"Notes app v2: real backend",d:["Plan Mode: replace localStorage with an Express + database backend. Review the plan hard before approving — this touches 3+ files."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Notes app v2: full-stack trace",d:["Finish wiring frontend ↔ backend.","Ask ChatGPT: 'Walk me through what happens when I click Save — trace it from click to database write.' The full-stack mental model, locked in."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 REST()
]},
{p:2,theme:"Mini-SaaS Sprint — Phase 2 capstone",days:[
 {t:"Pick your clone + spec it",d:["Choose one: URL shortener, link-in-bio page builder, or pomodoro timer with analytics.","Plan Mode: write the full spec and milestone list with Codex. Cut scope twice before starting."],g:["BUILD","CODEX"],h:"2 hrs"},
 {t:"Build day 1: core feature",d:["Build the one thing the product does. You design, AI drafts, you review every line."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build day 2: persistence + edges",d:["Add data persistence and handle edge cases (bad input, duplicates, empty states)."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build day 3: UI polish",d:["Make it look intentional: spacing, typography, error and loading states."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Deploy + README",d:["Deploy. Write the README like a product landing page: what it does, who it's for, screenshots."],g:["SHIP"],h:"2 hrs"},
 {t:"Phase 2 retro",d:["Ask ChatGPT: 'Quiz me on everything from FSO Parts 0–3.' Identify your 2 weakest topics and book review slots on future Sundays.","Journal: what can you build now that you couldn't 12 weeks ago?"],g:["CODEX"],h:"2 hrs"},
 REST("Phase 2 complete. Tomorrow you stop building practice projects. Founder mode begins.")
]},
// ---------- PHASE 3 ----------
{p:3,theme:"Find the Pain — problem discovery · Python begins",days:[
 {t:"List 10 real problems",d:["Write 10 problems you, your girlfriend, friends, or your communities actually have. Your community-helping business idea lives somewhere in this list.","No solutions yet. Just pain."],g:["SHIP"],h:"2 hrs"},
 {t:"Talk to 3 humans",d:["Interview 3 potential users about their version of these problems. Only listen and take notes — don't pitch anything."],g:["SHIP"],h:"2 hrs"},
 {t:"Score & commit",d:["Score each idea: Do I personally feel this pain? MVP buildable in 4–6 weeks? No heavy infra (no realtime video/blockchain/heavy ML)? Can I imagine 100 users?","Pick the winner. Write a one-page problem statement: who has the pain, how bad it is, what they do about it today."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Python begins — CS50P 0+1",d:["New weekly thread: one CS50P unit per week from now through week 22, so Python is fluent before the AI Engineer track needs it.","Install Python. Watch Lectures 0 (Functions, Variables) and 1 (Conditionals) at speed — you know these ideas from C and JS; focus on what's different: indentation instead of braces, input(), f-strings.","Do the 2–3 most interesting problems from each problem set."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 {t:"Sketch the MVP",d:["Sketch every screen on paper. Then cut features until it hurts. The MVP is what's left."],g:["SHIP"],h:"2 hrs"},
 {t:"Define done",d:["Write a maximum of 3 user stories in your repo README. That's the whole MVP. Anything else goes in a 'later.md' file."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:3,theme:"Foundation Pour — the 2026 builder stack",days:[
 {t:"Scaffold the stack",d:["Create the repo: Next.js + TypeScript + Tailwind. Push to GitHub; connect Vercel so every push auto-deploys."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Supabase: data model",d:["Plan Mode first: design your database tables with Codex, challenge the schema, then create them in Supabase."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Supabase: auth",d:["Wire up email login end-to-end: sign up, log in, log out, protected pages."],g:["BUILD"],h:"2.5 hrs"},
 {t:"App shell + core screen (static)",d:["Build the layout: navigation, page structure, and honest empty states ('No projects yet — create your first one').","Then build the most important screen with fake hardcoded data. Get the shape right before the plumbing."],g:["BUILD"],h:"3 hrs"},
 {t:"Core screen (live)",d:["Wire it to real Supabase data. Demo it to one person tonight, even half-broken."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Python: CS50P 2 — Loops",d:["Watch Lecture 2. Lists, dicts, and comprehensions are Python's superpower over C-style loops — this is where Python starts feeling like Python.","ps2: pick 2–3 problems and solve them."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 REST()
]},
{p:3,theme:"Build Sprint 1 — core feature #1",days:[
 {t:"Plan Mode: spec feature #1",d:["Spec the single most important feature with Codex in Plan Mode. Stay in Plan Mode all sprint for anything touching 3+ files."],g:["BUILD","CODEX"],h:"2 hrs"},
 {t:"Build",d:["Implement the happy path of feature #1."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build + edge cases",d:["Handle the unhappy paths: bad input, missing data, double-clicks, slow network."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Manual test + explain-then-rebuild",d:["Use the feature like a hostile stranger would. Fix what breaks.","Then take the trickiest function Codex drafted this week, delete it, and rebuild it yourself from scratch."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Python: CS50P 3 — Exceptions",d:["Watch Lecture 3. try/except/raise — the same edge-case muscle you used on your product this week, different language.","ps3: 2–3 problems."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 {t:"Demo + journal",d:["Demo the feature to someone. Journal what you learned and what scared you."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 2 — core feature #2 & data flows",days:[
 {t:"Plan Mode: spec feature #2",d:["Spec the second core feature (or the data flows connecting feature #1 to the rest of the app)."],g:["BUILD","CODEX"],h:"2 hrs"},
 {t:"Build",d:["Implement the happy path."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Build + edge cases",d:["Unhappy paths again. They're 60% of real software."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Connect + test the journey",d:["Make features #1 and #2 work together. Trace one full user journey end to end.","Hostile-stranger testing round 2, on the full journey. Fix what breaks."],g:["BUILD"],h:"3 hrs"},
 {t:"Python: CS50P 4 — Libraries",d:["Watch Lecture 4. Modules, pip, random/statistics — and requests: you've called APIs from JavaScript; now do it in Python.","ps4: 2–3 problems."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 {t:"Demo + journal",d:["Demo to a different person this time. Their confusion is your roadmap."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 3 — onboarding & UX",days:[
 {t:"The first-minute experience",d:["Plan Mode: design what a brand-new user sees in their first 60 seconds. That minute decides everything."],g:["BUILD","CODEX"],h:"2 hrs"},
 {t:"Build onboarding",d:["Implement the signup → first-success flow. A new user must reach value without your help."],g:["BUILD"],h:"2.5 hrs"},
 {t:"UX + copy polish",d:["Fix the rough edges: confusing labels, missing feedback, dead ends.","Rewrite every button, error, and empty state in plain human language. Words are UI."],g:["BUILD"],h:"3 hrs"},
 {t:"Mobile pass",d:["Use the entire app on your phone. Fix everything that's broken or cramped."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Python: CS50P 5 — Unit Tests",d:["Watch Lecture 5. pytest and assert — proof beats hope.","Port two small functions from your product's logic to Python and write tests for them."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 {t:"Self-serve test",d:["Hand your phone to someone with zero context. Can they sign up and succeed alone? Note every stumble."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:3,theme:"Build Sprint 4 — hardening & feature freeze",days:[
 {t:"Error states everywhere",d:["Audit the app: every fetch needs loading, error, and empty states. No silent failures."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Data integrity",d:["Check Supabase row-level security rules: can user A see user B's data? Fix anything scary (Plan Mode — security deserves it)."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Performance pass",d:["Find the slowest screen and make it fast. Ask Codex to explain what was slow and why the fix works."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Seed data + demo account",d:["Create realistic seed data and a demo flow so the app never looks empty to a new visitor."],g:["BUILD"],h:"2 hrs"},
 {t:"Bug sweep + FEATURE FREEZE",d:["Work through your bug list top to bottom.","Then: no new features until launch. Write it somewhere visible.","Journal: the MVP exists. Four weeks ago it was a paper sketch."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Python: CS50P 6 — File I/O",d:["Watch Lecture 6. with open(), CSV files, images with PIL.","Bonus rep: regenerate this week's seed data with a Python script instead of by hand."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 REST()
]},
{p:3,theme:"Real Humans — watch them use it",days:[
 {t:"Production deploy",d:["Deploy the production build. Buy/connect a custom domain. Check it on your phone, your laptop, and one borrowed device."],g:["SHIP"],h:"2.5 hrs"},
 {t:"Friend test #1",d:["Watch friend #1 use it. Say NOTHING. Every time you want to help, write down what confused them instead."],g:["SHIP"],h:"2 hrs"},
 {t:"Fix round 1",d:["Fix the top 3 confusions from yesterday. Nothing else."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Friend test #2",d:["Watch friend #2 (your girlfriend is a great candidate — she'll be honest). Same rule: silence + notes."],g:["SHIP"],h:"2 hrs"},
 {t:"Fix round 2 + friend test #3",d:["Morning: fix the new top 3 from yesterday's test.","Then test with friend #3 and fix the worst of it same-day. Three real users have now used your product."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Python: CS50P 7 — Regular Expressions",d:["Watch Lecture 7. The re module — the email validation your signup form does; now you know how it actually works.","ps7: 2–3 problems."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 REST()
]},
{p:3,theme:"Polish & Tell the Story",days:[
 {t:"Landing page: the headline",d:["Write the landing page headline. It names the PAIN, not the tech. 'Stop losing recipes in your camera roll' beats 'AI-powered recipe management'."],g:["SHIP"],h:"2 hrs"},
 {t:"Landing page: build it + demo GIF",d:["Build the page: headline, 3 benefits, screenshots, one clear call to action.","Record a 30–60s demo GIF/video for it, and add a simple feedback widget or visible contact link."],g:["BUILD","SHIP"],h:"3 hrs"},
 {t:"Friend-test cleanup",d:["Clear the remaining issues from last week's tests."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Lighthouse + accessibility",d:["Run Lighthouse. Fix the cheap wins: image sizes, contrast, alt text, focus states."],g:["BUILD"],h:"2 hrs"},
 {t:"Python: CS50P 8 — Object-Oriented Programming",d:["Watch Lecture 8. Classes, properties, methods.","For reps: model your product's core objects (User, Project, whatever yours are) as Python classes."],g:["CS50P"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 {t:"Soft launch",d:["Share it in ONE community you're already a trusted member of. Ask for feedback, not applause."],g:["SHIP"],h:"1.5 hrs"},
 REST()
]},
{p:3,theme:"Money & Measurement",days:[
 {t:"Pricing + Stripe test mode",d:["Decide: charge now, or free with a waitlist for a paid tier? Write down WHY. (Charging earlier than feels comfortable is usually right.)","Then, Plan Mode — payments deserve maximum care. Wire Stripe Checkout in test mode."],g:["SHIP","BUILD","CODEX"],h:"3 hrs"},
 {t:"Stripe: live + webhooks",d:["Go live. Handle the webhook events that actually matter (checkout completed, subscription canceled)."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Analytics",d:["Add PostHog or Plausible. Define the 3 events that tell you if the product works (signup, first success action, return visit)."],g:["BUILD"],h:"2 hrs"},
 {t:"Email capture",d:["Add email capture + one simple welcome email."],g:["BUILD"],h:"2 hrs"},
 {t:"Python: CS50P 9 — Et Cetera + wrap",d:["Watch Lecture 9: sets, type hints, docstrings, unpacking — the Pythonic finishing touches.","Then ask ChatGPT: 'Quiz me across all of CS50P. Grade me hard.' Anything shaky goes on a Sunday review slot."],g:["CS50P","CODEX"],h:"2.5 hrs",l:[["CS50P",PYL]]},
 {t:"Full dry run",d:["Run the whole journey yourself: land → sign up → succeed → pay. Fix every snag. This exact path is what strangers will walk next week."],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:3,theme:"Launch Prep",days:[
 {t:"Write the launch posts + recruit day-one users",d:["Draft your X/Twitter thread, Product Hunt listing, and Indie Hackers post. Lead with the pain and the story, not the feature list.","Line up 5 people who'll try it on launch day and say something publicly."],g:["SHIP"],h:"3 hrs"},
 {t:"Demo video",d:["Record a tight 60-second demo. Imperfect and shipped beats polished and pending."],g:["SHIP"],h:"2 hrs"},
 {t:"Python ship: CS50P capstone",d:["Final Python day: build a small automation for YOUR launch — a script that pulls signups into a launch-day dashboard, or generates social post variants from your launch copy.","Your first genuinely useful Python program. If you want the CS50P certificate, this can grow into the final project.","The AI Engineer track starts in 3 weeks — you now speak its language."],g:["CS50P","BUILD"],h:"2.5 hrs",l:[["CS50P",PYL]]},
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
{p:4,theme:"OpenAI API Foundations — Responses API begins",days:[
 {t:"First OpenAI API call",d:["OpenAI docs: SDKs and CLI — install the official SDK and understand where your API key lives.","Write your first script outside of any framework: send a message through the Responses API, print the response, and keep the code small enough to explain.","New journal file: ai-engineer-log.md. This log becomes LectronicArt course material later — write it like someone's reading."],g:["SETUP","CODEX"],h:"2.5 hrs",l:[["OpenAI SDKs/CLI",OPENAI_SDK],["Responses API",RESPONSES]]},
 {t:"Streaming + instructions",d:["OpenAI docs: streaming responses, instructions, and multi-turn state.","Build a small CLI chat tool with conversation memory — you've used these for months; now you're building one."],g:["CODEX","BUILD"],h:"2.5 hrs",l:[["Streaming",STREAMING],["Responses API",RESPONSES]]},
 {t:"Tool use, part 1",d:["OpenAI docs: tools and function calling — schemas, the tool call loop, returning results.","This is THE concept of agentic AI. Don't move on until you can explain the loop on a whiteboard."],g:["CODEX"],h:"2.5 hrs",l:[["Using tools",TOOLS]]},
 {t:"Tool use, part 2",d:["OpenAI docs: multiple tools, tool choice, error handling, and when the app should own the loop.","Build: give your CLI chat two real tools (e.g., read a local file, fetch weather). Watch the model decide when to use them."],g:["CODEX","BUILD"],h:"2.5 hrs",l:[["Using tools",TOOLS]]},
 {t:"Production patterns",d:["Study prompt caching, retries, rate limits, batching, and reasoning-effort tradeoffs in the OpenAI docs.","Refactor your chat tool with proper error handling. Amateur scripts crash; products retry."],g:["CODEX"],h:"2.5 hrs",l:[["Responses API",RESPONSES]]},
 {t:"Ship: Creative Brief Generator",d:["Build and ship your first LectronicArt micro-tool: paste a rough idea → get a structured creative brief (audience, hook, format, shot list).","Deploy it (Vercel) and post it publicly: 'I built this in a day. Here's how.' Your first artifact where the audience IS the customer."],g:["BUILD","SHIP"],h:"3 hrs"},
 REST()
]},
{p:4,theme:"Prompt Systems — your first sellable system",days:[
 {t:"Prompt engineering, seriously",d:["Study OpenAI's prompt engineering docs end to end: instructions, examples, structured outputs, evaluation, and prompt iteration.","Start a prompt library in your Obsidian vault: one note per prompt, with version, use case, and example output."],g:["CODEX"],h:"2.5 hrs",l:[["Prompting docs",PROMPTING]]},
 {t:"Creator prompt templates",d:["Write reusable, parameterized prompts for creator work: image prompt builder, video script writer, caption pack generator, hook variations.","Test each one 5 times. Keep what's consistently good; rewrite what's flaky."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Evals: prove your prompts work",d:["Build a tiny eval harness: run a prompt against 10 test inputs, score outputs against criteria.","This is what separates 'prompt tips' influencers from engineers. You'll teach this someday."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Prompt chains",d:["Chain prompts into a pipeline: idea → outline → script → captions → image prompts. Each step's output feeds the next.","Notice where chains beat one mega-prompt, and where they don't. Write it down."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Package: Prompt System v1",d:["Assemble your best prompts into a clean, documented pack — your first real digital product prototype (markdown/Notion format, with usage guide)."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Give it away, measure everything",d:["Post Prompt System v1 free in one creator community + your channels. Ask for one thing in return: feedback.","Track: downloads, replies, questions. This is market research disguised as generosity."],g:["SHIP"],h:"2 hrs"},
 REST()
]},
{p:4,theme:"MCP — the plumbing of creative automation",days:[
 {t:"MCP concepts",d:["OpenAI docs: MCP and connectors — architecture, servers vs clients, and why a protocol beats one-off integrations.","Connect this to what you already know: your Obsidian vault, your Telegram bot — MCP is how tools like these plug into any AI."],g:["CODEX"],h:"2.5 hrs",l:[["MCP and connectors",MCP_OPENAI]]},
 {t:"Build your first MCP server",d:["Follow the current OpenAI MCP guidance: message passing, transports, exposing tools, and connecting a server to a model request.","Get the example server running and connected through the OpenAI tools path."],g:["CODEX","BUILD"],h:"2.5 hrs",l:[["MCP and connectors",MCP_OPENAI]]},
 {t:"MCP server for YOUR workflow",d:["Design + build an MCP server that serves your real life: e.g., search/write notes in your Obsidian vault, or wrap ffmpeg operations (trim, caption, convert) as tools.","Plan Mode for the design; you review every line."],g:["BUILD","CODEX"],h:"2.5 hrs"},
 {t:"Finish + connect everywhere",d:["Finish the server. Connect it to Codex and to your OpenAI API workflow. Use it for a real task today."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Harden + open-source it",d:["Clean up, write a great README (install steps, demo GIF), publish on GitHub under lectronicart."],g:["BUILD","SHIP"],h:"2.5 hrs"},
 {t:"Teach it",d:["Create your first real tutorial: 'I built an MCP server that [does X] for creators' — post or video, beginner-friendly, plain-language analogies (your specialty).","This is a dress rehearsal for the community classroom."],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"Agents I — holiday week, lighter load",days:[
 {t:"Agent fundamentals",d:["Hugging Face Agents Course: unit 1 — what agents are, the think-act-observe loop, when agents beat simple prompts."],g:["AGENTS"],h:"2 hrs",l:[["HF Agents Course","https://huggingface.co/learn/agents-course"]]},
 {t:"Frameworks tour",d:["HF course: framework units — see how agent frameworks structure the loop you already understand from tool use.","You've RUN multi-agent systems (Hermes + Atlas). Now you're learning to BUILD them."],g:["AGENTS"],h:"2 hrs"},
 {t:"Build: idea-research agent",d:["Build a simple research agent: give it a content topic → it searches, gathers, and returns an angle brief with sources."],g:["BUILD"],h:"2.5 hrs"},
 {t:"Codex subagents",d:["OpenAI docs: Codex subagents and project-scoped custom agents.","Design (on paper) a content-pipeline subagent team: researcher, writer, editor, formatter. You'll build it next week."],g:["CODEX"],h:"2 hrs",l:[["Codex subagents",CODEX_SUBAGENTS]]},
 {t:"Holiday 🎄",d:["Rest. Be with people you love. The machine can wait."],g:["REST"],h:"0 hrs",rest:true},
 {t:"Holiday hack (optional)",d:["Optional fun-only build: an AI gift — a custom card generator, a year-in-review for your girlfriend, anything playful. No pressure, no shipping."],g:["BUILD"],h:"0–2 hrs"},
 REST()
]},
{p:4,theme:"Agents II — content engine v1 + the 2027 plan",days:[
 {t:"Agent memory & tools",d:["HF Agents Course: tools and memory units — give agents persistent context (you literally built an Obsidian memory vault for this; connect the concept)."],g:["AGENTS"],h:"2.5 hrs"},
 {t:"Build: content engine agent v1",d:["Build the repurposer: one long-form input (script/post/transcript) → thread, 3 short posts, newsletter section, 5 hooks.","Use your subagent design from last week."],g:["BUILD"],h:"3 hrs"},
 {t:"Add a critic",d:["Add a quality-check step: a second agent pass that critiques and revises the output against your voice guidelines. Compare with/without — save examples (future teaching material)."],g:["BUILD","CODEX"],h:"2.5 hrs",l:[["Agents SDK",AGENTS_SDK]]},
 {t:"2026 retro → 2027 thesis",d:["Write your year retro: June you vs December you.","Draft the LectronicArt 2027 thesis: who it serves, what transformation it sells, why you. One page."],g:["SHIP"],h:"2 hrs"},
 {t:"New Year 🎉",d:["Rest. Raise a glass to the builder you became this year."],g:["REST"],h:"0 hrs",rest:true},
 {t:"Ship content engine v1",d:["Run the engine on a real piece of your content. Post the before/after publicly: 'My AI content engine turned 1 video into 9 assets. Here's the system.'"],g:["SHIP"],h:"2.5 hrs"},
 REST()
]},
{p:4,theme:"AI Art Workflows — ComfyUI deep dive",days:[
 {t:"ComfyUI setup + first render",d:["Install ComfyUI on your Windows/WSL2 rig (you've survived worse Docker battles).","Run your first text-to-image workflow; understand the default graph node by node."],g:["SETUP","BUILD"],h:"2.5 hrs",l:[["ComfyUI","https://github.com/comfyanonymous/ComfyUI"]]},
 {t:"Node literacy",d:["Learn the core nodes: checkpoints, samplers, CFG, latent space, VAE. Ask ChatGPT to explain each like you'd explain to your future students.","Experiment deliberately: change ONE parameter at a time, note what it does."],g:["BUILD","CODEX"],h:"2.5 hrs"},
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

function sourceTrack(day){
  if(day.g.includes("CS50"))return "CS50x";
  if(day.g.includes("CS50P"))return "CS50P";
  if(day.g.includes("ODIN"))return "Odin Foundations";
  if(day.g.includes("FSO"))return "Full Stack Open";
  if(day.g.includes("CODEX"))return "Codex/OpenAI";
  if(day.g.includes("AGENTS"))return "agent systems";
  if(day.g.includes("SHIP"))return "shipping";
  if(day.g.includes("BUILD"))return "building";
  return "the roadmap";
}

function phaseRule(phase){
  if(phase===1)return "In Phase 1, ChatGPT is a tutor, not a co-author: ask for plain-language explanations, analogies, quizzes, and hints, but write and debug the code yourself.";
  if(phase===2)return "In Phase 2, you design first and Codex assists second: plan small, approve intentionally, read every changed line, and rebuild anything you cannot explain.";
  if(phase===3)return "In Phase 3, Codex is a senior pair on real product work: you choose the user problem, define done, test with humans, and use AI to surface risks.";
  if(phase===4)return "In Phase 4, build AI systems, package reusable creative automation, document the work, and teach each artifact as LectronicArt proof-of-work.";
  return "Use OpenAI and Codex as the engineering stack: build small, test the loop, document the system, then teach it.";
}

function outcomeFor(day, week, phase){
  const title=day.t.toLowerCase();
  if(day.rest)return "protect recovery and keep the calendar sustainable";
  if(title.includes("lecture")||title.includes("fso ")||title.includes("odin:")||title.includes("academy")||title.includes("docs"))
    return "turn the assigned material into notes, working examples, and questions you can answer without rereading";
  if(title.includes("pset")||title.includes("problem set")||title.includes("exercises"))
    return "make real progress on the assignment by reading the spec, writing code, testing, and explaining the result";
  if(phase===3&&isProblemDiscoveryTitle(title))
    return "turn a fuzzy product idea into written evidence, sharper scope, and the next user-learning question";
  if(title.includes("plan")||title.includes("design")||title.includes("spec")||title.includes("define"))
    return "leave with a clear written plan that is small enough to execute in the next build block";
  if(day.g.includes("SHIP"))
    return "put something in front of another person, a public channel, or your future audience";
  if(day.g.includes("BUILD"))
    return "produce a working artifact, not just notes about an artifact";
  if(day.g.includes("SETUP"))
    return "finish the setup once so tomorrow starts with learning instead of friction";
  return "move the week forward with one focused, visible piece of progress";
}

function isUserLearningTitle(title){
  return title.includes("interview")
    || title.includes("humans")
    || title.includes("friend")
    || title.includes("user")
    || title.includes("onboard every signup")
    || title.includes("self-serve test");
}

function isProblemDiscoveryTitle(title){
  return title.includes("problems")
    || title.includes("score")
    || title.includes("mvp")
    || title.includes("define done");
}

function phase4Track(day, ctx){
  const title=day.t.toLowerCase();
  const theme=ctx.theme.toLowerCase();
  if(title.includes("retro")||title.includes("thesis")||title.includes("day 252"))return "reflection and proof";
  if(theme.includes("launch lectronicart")||title.includes("doors open")||title.includes("public launch")||title.includes("white-glove")||title.includes("workshop")||title.includes("founding offer")||title.includes("dry run")||title.includes("launch assets"))return "founding launch";
  if(theme.includes("skool")||theme.includes("cohort")||title.includes("community")||title.includes("accountability")||title.includes("founding")||title.includes("module"))return "community product";
  if(theme.includes("templates")||theme.includes("creator os")||title.includes("template")||title.includes("starter kit")||title.includes("kit")||title.includes("package")||title.includes("productize"))return "productized templates";
  if(title.startsWith("ship")||title.includes("give it away")||title.includes("teach it")||title.includes("meta-video")||title.includes("queue a full week"))return "public proof";
  if(theme.includes("art workflows")||theme.includes("video workflows")||theme.includes("content engine")||title.includes("comfy")||title.includes("ffmpeg")||title.includes("pipeline")||title.includes("content os"))return "creative automation";
  if(theme.includes("openai")||theme.includes("prompt")||theme.includes("mcp")||theme.includes("agents")||day.g.includes("AGENTS")||title.includes("agent")||title.includes("api")||title.includes("prompt"))return "AI engineering";
  if(day.g.includes("SHIP"))return "public proof";
  if(day.g.includes("BUILD"))return "system building";
  return "LectronicArt teaching";
}

function phase4Kind(day, ctx){
  const track=phase4Track(day, ctx);
  if(track==="reflection and proof")return "retro";
  if(track==="founding launch")return "launch";
  if(track==="community product")return "community";
  if(track==="productized templates")return "template";
  if(track==="creative automation")return "creative";
  if(track==="AI engineering")return "ai";
  if(track==="public proof")return "ship";
  return "build";
}

function watchFor(day, phase, ctx){
  const title=day.t.toLowerCase();
  const details=day.d.join(" ").toLowerCase();
  const isPlanMode=day.g.includes("CODEX")&&(title.includes("plan")||title.includes("design")||title.includes("spec")||details.includes("plan mode"));
  const isUserTest=isUserLearningTitle(title);
  const p4=phase===4?phase4Kind(day,ctx||{theme:"",phase:4}):"";
  if(phase===1&&day.g.includes("CS50")&&title.includes("pset"))return "Protect the learning reps: read the spec slowly, draw the input and output, and ask for hints only after you can describe the exact stuck point.";
  if(phase===1&&day.g.includes("CS50"))return "You do not need to memorize every symbol or term today. Capture the idea in your own words, then retype enough examples that your hands meet the concept.";
  if(phase===1&&day.g.includes("ODIN"))return "Treat the setup, terminal, Git, and browser lessons like studio fundamentals. They feel small now because they are becoming reflexes.";
  if(phase===1&&day.g.includes("BUILD"))return "Before asking for help, write what you expected to happen and what actually happened. That sentence is the start of debugging.";
  if(phase===1&&day.g.includes("CODEX"))return "Set the tutor boundary early: explanations, questions, and tiny hints are welcome; finished code is not.";
  if(phase===2&&title.includes("retro"))return "The retro is a handoff into Phase 3. Turn weak spots into review slots, and turn wins into proof that the design-review-rebuild loop is working.";
  if(phase===2&&day.g.includes("ODIN"))return "This is the last solo stretch before regular AI drafting. Use Codex for questions or review, but keep the project logic in your hands.";
  if(phase===2&&isPlanMode)return "Treat Plan Mode as a design review, not a permission slip. Tighten the plan until the next change is small enough to inspect line by line.";
  if(phase===2&&day.g.includes("SHIP"))return "A Phase 2 ship should prove the loop works: narrow core, visible states, deployment notes, and one sentence explaining where the data lives.";
  if(phase===2&&day.g.includes("FSO"))return "React and backend lessons count when data moves on screen. Trace props, state, effects, and requests out loud before accepting a tidy explanation.";
  if(phase===2&&day.g.includes("BUILD"))return "Before Codex drafts, draw the data shape and component boundary yourself. After it drafts, explain the diff like you are teaching future-you.";
  if(phase===2&&day.g.includes("CODEX"))return "Keep a reviewer mindset: ask for tradeoffs, reject vague plans, and turn every accepted suggestion into something you understand.";
  if(phase===3&&(title.includes("retro")||title.includes("next chapter")))return "This is evidence-based strategy work. Let shipped code, user conversations, and real numbers decide what the next chapter deserves.";
  if(phase===3&&title.includes("launch"))return "Launch days are response days. Publish, reply, measure, and keep notes while the market is still talking back.";
  if(phase===3&&isUserTest)return "Do not explain the product while someone uses it. Watch the stumble, write the exact words, then fix the pattern, not your feelings.";
  if(phase===3&&day.g.includes("CS50P"))return "Python is no longer separate homework. Tie each unit to automation, testing, data cleanup, or launch leverage you can reuse.";
  if(phase===3&&isPlanMode)return "Plan Mode now protects real users and real data. Ask Codex to challenge scope, failure modes, privacy, and what evidence would prove the plan worked.";
  if(phase===3&&isProblemDiscoveryTitle(title))return "Stay with the problem longer than feels comfortable. Founder clarity comes from pain, current workarounds, and tight scope.";
  if(phase===3&&day.g.includes("SHIP"))return "Shipping now means evidence: a person saw it, a metric moved, a message went out, or a decision got clearer.";
  if(phase===3&&day.g.includes("BUILD"))return "Build against one named user journey. The product improves when a real person can complete one important path with less friction.";
  if(phase===4&&p4==="retro")return "Count receipts before making claims. The final lesson should come from artifacts, members, systems, and shipped proof.";
  if(phase===4&&p4==="launch")return "Community launch work is product work. Personal replies, onboarding friction, and first wins matter more than polished announcements.";
  if(phase===4&&p4==="community")return "Design the member journey, not just the content. A strong community turns a newcomer into someone with a first win quickly.";
  if(phase===4&&p4==="template")return "A template is only real when another creator can install it, understand it, and get a visible result without you in the room.";
  if(phase===4&&p4==="creative")return "Creative automation must be reproducible. Save inputs, outputs, settings, timing, and the plain-language explanation a creator would need.";
  if(phase===4&&p4==="ai")return "Do not stop at reading docs. Build the smallest testable loop, name the system boundary, and save the example as teaching material.";
  if(phase===4&&day.g.includes("SHIP"))return "Public proof beats private polish. Ship the artifact with enough context that another creator understands why it matters.";
  if(phase===4&&day.g.includes("BUILD"))return "Build for reuse. Clear inputs, outputs, setup steps, and failure notes turn a one-off script into LectronicArt curriculum.";
  if(day.g.includes("CS50")&&title.includes("pset"))return "Do not ask for a finished solution. If you are stuck, ask for a hint, a failing-test idea, or an explanation of one error message.";
  if(day.g.includes("CS50"))return "Pause when the lecture introduces a new mental model. Rephrase it in your own words before continuing.";
  if(day.g.includes("ODIN"))return "Do not skim the setup lessons. The boring terminal, Git, and browser habits are what make later projects feel calm.";
  if(day.g.includes("FSO"))return "Do the exercises in your editor, not in your head. React and full-stack concepts stick when state changes on the screen.";
  if(day.g.includes("CS50P"))return "Notice where Python feels easier than C or JavaScript, then write down the tradeoff instead of just enjoying the shortcut.";
  if(day.g.includes("CODEX"))return "Keep the steering wheel. Codex can draft, but you decide the shape, review the diff, and explain the result.";
  if(day.g.includes("SHIP"))return "Shipping does not mean perfect. It means another human can see it, try it, or respond to it.";
  if(day.g.includes("BUILD"))return "Favor the smallest working version. A tiny finished loop teaches more than a large half-built idea.";
  return "Keep the session concrete. Write down the next action before opening another tab.";
}

function coachFor(day, phase, ctx){
  const title=day.t.replace(/"/g,"'");
  const plainTitle=title.toLowerCase();
  const p4=phase===4?phase4Kind(day,ctx||{theme:"",phase:4}):"";
  if(day.rest)return "ChatGPT, help me choose a humane catch-up plan for this rest day. Ask what is unfinished, pick the smallest useful recovery block, and protect real rest.";
  if(phase===1)return "ChatGPT, be my beginner tutor for today's task: '"+title+"'. Ask what I tried first, explain one idea at a time, quiz me, and do not write the final code.";
  if(phase===2&&(plainTitle.includes("odin")||plainTitle.includes("calculator")))return "Codex, act as a reviewer only for today's final solo task: '"+title+"'. Ask questions, point out risks, and do not draft the project code for me.";
  if(phase===2&&plainTitle.includes("retro"))return "Codex, help me run today's Phase 2 retro: quiz me hard, identify weak spots, turn them into review blocks, and name what I am ready to build next.";
  if(phase===2)return "Codex, help me plan and review today's task: '"+title+"'. Ask for my approach first, keep the scope small, explain tradeoffs, and make me inspect every changed line before accepting.";
  if(phase===3&&day.g.includes("CS50P"))return "Codex, help me connect today's Python work to my product or launch. Quiz me, suggest one useful automation angle, and keep the code explainable.";
  if(phase===3&&isUserLearningTitle(plainTitle))return "Codex, help me prepare for today's user-learning task: '"+title+"'. Give me observation prompts, bias checks, and a tight way to turn notes into fixes.";
  if(phase===3&&(plainTitle.includes("launch")||plainTitle.includes("post")||plainTitle.includes("product hunt")||plainTitle.includes("show hn")))return "Codex, help me run today's launch task: '"+title+"'. Sharpen the message, list risks, and help me respond to real feedback without overreacting.";
  if(phase===3&&(plainTitle.includes("retro")||plainTitle.includes("next chapter")))return "Codex, help me turn today's reflection into a decision. Use shipped work, user evidence, and weak spots to name the next honest move.";
  if(phase===3)return "Codex, act as my senior product-building pair for '"+title+"'. Challenge assumptions, identify risks, and keep the next step small enough to test with real people.";
  if(phase===4&&p4==="retro")return "Codex, help me turn today's proof into LectronicArt strategy. Count the receipts, extract teachable lessons, and name the next honest offer or cohort move.";
  if(phase===4&&p4==="launch")return "Codex, help me run today's founding launch task: '"+title+"'. Sharpen the message, protect personal outreach, and turn replies into onboarding fixes.";
  if(phase===4&&p4==="community")return "Codex, help me design today's community asset: '"+title+"'. Focus on the member journey, first win, accountability loop, and what must be reusable later.";
  if(phase===4&&p4==="template")return "Codex, help me package today's template or kit: '"+title+"'. Check setup steps, demo proof, plain-language docs, and what a creator needs to succeed alone.";
  if(phase===4&&p4==="creative")return "Codex, help me make today's creative workflow reproducible: '"+title+"'. Identify inputs, outputs, failure points, quality checks, and the teaching notes to save.";
  if(phase===4&&p4==="ai")return "Codex, help me build today's AI-engineering loop: '"+title+"'. Keep it testable, name the interfaces, cover failures, and turn the example into teaching material.";
  if(phase===4&&p4==="ship")return "Codex, help me publish today's public proof: '"+title+"'. Make the context clear, name the audience, and turn any response into the next teaching or product note.";
  if(phase===4)return "Codex, help me turn today's LectronicArt work into a system, proof artifact, and teaching note. Keep it reusable, testable, and clear for future members.";
  return "Codex, help me build today's AI-engineering artifact: '"+title+"'. Keep the system testable, explain the loop, and turn the work into teaching notes.";
}

function reflectFor(day, phase){
  if(day.rest)return "What did I recover, clarify, or consciously postpone today?";
  if(phase===1)return "What can I explain in plain English now, and where did I still need a hint?";
  if(phase===2)return "What did I design myself, what did Codex help with, and which line or data flow can I explain better now?";
  if(phase===3)return "What evidence changed my next product decision: a user quote, test result, metric, bug, or constraint?";
  if(phase===4)return "What system, proof artifact, or teaching asset did I create today, and what would a future member need next?";
  return "What part of today's system could become a lesson, template, or public proof-of-work later?";
}

function taskStep(text){
  const clean=String(text||"today's main assignment").trim();
  if(clean.length<35)return "Work through this task carefully: "+clean+" Confirm the exact result before moving on.";
  return "Work through: "+clean;
}

function buildSteps(day, ctx){
  const title=day.t.toLowerCase();
  const base=day.d.map(taskStep);
  const details=day.d.join(" ").toLowerCase();
  const phase2Plan=ctx.phase===2&&day.g.includes("CODEX")&&(title.includes("plan")||title.includes("design")||title.includes("spec")||details.includes("plan mode"));
  const phase3Plan=ctx.phase===3&&day.g.includes("CODEX")&&(title.includes("plan")||title.includes("design")||title.includes("spec")||details.includes("plan mode"));
  const phase3UserTest=ctx.phase===3&&isUserLearningTitle(title);
  const phase3Launch=ctx.phase===3&&(title.includes("launch")||title.includes("product hunt")||title.includes("show hn"));
  const phase3Retro=ctx.phase===3&&(title.includes("retro")||title.includes("next chapter"));
  const phase3Discovery=ctx.phase===3&&(ctx.theme.toLowerCase().includes("find the pain")||isProblemDiscoveryTitle(title));
  const phase4=ctx.phase===4?phase4Kind(day, ctx):"";
  const steps=[];
  if(day.rest){
    return [
      "Start with a 5-minute status check: what is done, what is unfinished, and what can safely wait?",
      "If you are caught up, take real rest. Close the editor and let the work consolidate.",
      "If you are behind, choose exactly one small catch-up target and stop when it is complete.",
      "End with a short note for tomorrow so the next study block has a clear first move."
    ];
  }
  if(ctx.phase===1&&day.g.includes("SETUP")){
    steps.push(base[0]||"Create the folder, account, or file today's setup asks for.");
    steps.push(base[1]||"Open each new tool once so you know it is ready before the first lesson starts.");
    steps.push(base[2]||"Write the first journal note in plain language: why this learning block matters.");
    steps.push("End by naming tomorrow's first click so the next session starts without friction.");
  }else if(ctx.phase===1&&day.g.includes("CS50")&&title.includes("lecture")){
    steps.push(base[0]||"Watch the assigned CS50 lecture section with notes open.");
    if(base[1])steps.push(base[1]);
    steps.push("Keep a tiny glossary: new word, plain-English meaning, one example.");
    steps.push("Retype or recreate at least one example so your hands connect the idea to code.");
    steps.push("Ask ChatGPT for a quiz on the two blurriest ideas, then answer before reading feedback.");
  }else if(ctx.phase===1&&day.g.includes("CS50")&&(title.includes("pset")||title.includes("problem set"))){
    steps.push(base[0]||"Read the problem specification slowly before writing code.");
    steps.push("Before coding, write the input, output, and two tiny test cases in your own words.");
    steps.push("Build one small piece, run it, and write down the first error or wrong result exactly.");
    if(base[1])steps.push(base[1]);
    steps.push("After 15 honest minutes stuck, ask ChatGPT for one hint or explanation, not finished code.");
  }else if(ctx.phase===1&&day.g.includes("ODIN")){
    steps.push(base[0]||"Work through the assigned Odin lesson or project section.");
    steps.push("Type every command or example yourself; these are muscle-memory reps.");
    if(base[1])steps.push(base[1]);
    steps.push("Commit one meaningful checkpoint or write one note naming the habit this lesson installs.");
  }else if(ctx.phase===1&&day.g.includes("BUILD")){
    steps.push(base[0]||"Name the smallest working version of today's build before writing code.");
    steps.push("Write the smallest version in plain English before code: input, action, output.");
    if(base[1])steps.push(base[1]);
    if(base[2])steps.push(base[2]);
    steps.push("When it works, explain every line you changed and save the artifact, note, or commit.");
  }else if(ctx.phase===2&&title.includes("retro")){
    steps.push(base[0]||"Quiz yourself across the Phase 2 material and name the weakest topics.");
    if(base[1])steps.push(base[1]);
    steps.push("Turn the two weakest topics into named review blocks: concept, exercise, and question.");
    steps.push("Write a before/after note: what you can build now, what still feels brittle, and what Phase 3 should protect.");
    steps.push("Choose the first founder-mode move for tomorrow so the transition is concrete.");
  }else if(ctx.phase===2&&day.g.includes("ODIN")){
    steps.push(base[0]||"Work through the assigned Odin lesson or project section.");
    steps.push("Finish the solo attempt before asking Codex to review; this protects the final Foundations reps.");
    if(base[1])steps.push(base[1]);
    steps.push("After it works, ask Codex for review questions, then fix only the changes you understand.");
  }else if(phase2Plan){
    steps.push(base[0]||"Write your own first-pass plan or sketch before asking Codex for help.");
    steps.push("Sketch the data, component, screen, or request path in your own words first.");
    if(base[1])steps.push(base[1]);
    steps.push("Ask Codex to critique scope and tradeoffs, then cut the next step until it is inspectable.");
    steps.push("Turn the approved plan into a checklist, and review any diff line by line before accepting it.");
  }else if(ctx.phase===2&&day.g.includes("SHIP")){
    steps.push(base[0]||"Prepare the smallest deployable version of today's project.");
    steps.push("Run it like a new user: empty state, happy path, and one bad input or error path.");
    if(base[1])steps.push(base[1]);
    steps.push("Update the README, screenshots, or deployment note so future-you can understand what changed.");
    steps.push("Write one paragraph naming what Codex helped with and what you can now explain yourself.");
  }else if(ctx.phase===2&&day.g.includes("FSO")){
    steps.push(base[0]||"Work through the assigned Full Stack Open section in your editor.");
    if(base[1])steps.push(base[1]);
    steps.push("Run the exercise code locally and make one tiny change to prove you know where the behavior lives.");
    steps.push("Trace one data path out loud: props, state, effect, request, response, or render.");
    steps.push("Ask for a quiz on the blurriest concept, then write the answer in your notes before moving on.");
  }else if(ctx.phase===2&&day.g.includes("BUILD")){
    steps.push(base[0]||"Name the smallest working version of today's build before writing code.");
    steps.push("Sketch the component, data, or request path before letting Codex suggest code.");
    if(base[1])steps.push(base[1]);
    steps.push("Use Codex for one small draft or review pass, then read the diff line by line.");
    steps.push("Rebuild or rewrite any part you cannot explain without looking at the answer.");
  }else if(ctx.phase===2&&day.g.includes("CODEX")){
    steps.push(base[0]||"Open the Codex or OpenAI guide for today's workflow.");
    if(base[1])steps.push(base[1]);
    steps.push("Write the rule, prompt, checklist, or review habit this session is supposed to install.");
    steps.push("Test the habit on one tiny example before using it on a bigger project.");
    steps.push("Save the takeaway somewhere you will see it before the next Plan Mode session.");
  }else if(phase3Retro){
    steps.push(base[0]||"Write the honest retro or next-chapter decision.");
    if(base[1])steps.push(base[1]);
    steps.push("Pull evidence from shipped work: users, numbers, bugs, conversations, and moments of real confidence.");
    steps.push("Name the lesson that should become LectronicArt teaching material later.");
    steps.push("Choose the next bet or review block, and write why it earned attention.");
  }else if(phase3Launch){
    steps.push(base[0]||"Publish the prepared launch asset or message.");
    if(base[1])steps.push(base[1]);
    steps.push("Stay present for replies, questions, objections, and broken-path reports.");
    steps.push("Record the useful signal: signups, comments, confusion, objections, or requests.");
    steps.push("End with one same-day follow-up: reply, fix, note, or draft for tomorrow.");
  }else if(phase3UserTest){
    steps.push(base[0]||"Prepare the user-learning session before touching code.");
    steps.push("Write the one behavior you are trying to observe, then stay quiet while the person tries it.");
    if(base[1])steps.push(base[1]);
    steps.push("Capture exact words, stuck points, and workarounds instead of summarizing too early.");
    steps.push("Pick the top pattern and turn it into one concrete fix, question, or product decision.");
  }else if(ctx.phase===3&&day.g.includes("CS50P")){
    steps.push(base[0]||"Work through the assigned CS50P unit with a fresh Python file open.");
    steps.push("Run the code locally, then change one example so you know which part controls the behavior.");
    if(base[1])steps.push(base[1]);
    steps.push("Connect the Python idea to your product: automation, validation, data cleanup, testing, or launch ops.");
    steps.push("Save one reusable snippet, note, or script idea for the AI Engineer track.");
  }else if(phase3Plan){
    steps.push(base[0]||"Write the product outcome and the user problem before asking Codex for a plan.");
    steps.push("Ask Codex to challenge scope, data shape, edge cases, privacy, and failure modes.");
    if(base[1])steps.push(base[1]);
    steps.push("Cut the plan to the smallest testable change and define how you will know it worked.");
    steps.push("Save the approved checklist before editing files, especially if the work touches 3+ files.");
  }else if(ctx.phase===3&&day.g.includes("BUILD")&&day.g.includes("SHIP")){
    steps.push(base[0]||"Pick the smallest user-facing improvement that can ship today.");
    steps.push("Trace the affected path before editing: entry point, data, success state, and failure state.");
    if(base[1])steps.push(base[1]);
    steps.push("Ship it, then tell the person or channel connected to the request.");
    steps.push("Record what changed in the product and what evidence you expect to see next.");
  }else if(ctx.phase===3&&day.g.includes("SHIP")){
    if(phase3Discovery){
      steps.push(base[0]||"Write the product-discovery note this block needs.");
      steps.push("Stay with the pain before solutions: who has it, how often, what they do today, and why it matters.");
      if(base[1])steps.push(base[1]);
      steps.push("Turn the work into evidence: problem, current workaround, severity, uncertainty, and what still needs a real human check.");
      steps.push("Write the next product move or user-learning question this evidence supports.");
    }else{
      steps.push(base[0]||"Define the audience-facing outcome before opening the tools.");
      steps.push("Put the work where another human can see it, use it, answer it, or react to it.");
      if(base[1])steps.push(base[1]);
      steps.push("Capture the response as evidence: quote, metric, silence, objection, request, or decision.");
      steps.push("Write the next product move that this evidence supports.");
    }
  }else if(ctx.phase===3&&day.g.includes("BUILD")){
    steps.push(base[0]||"Name the user journey this build block improves.");
    steps.push("Sketch the screen, data, or request path before writing code.");
    if(base[1])steps.push(base[1]);
    steps.push("Build the happy path, then test one realistic failure path a user might hit.");
    steps.push("Leave a product note: what changed, how you tested it, and what a real user should notice.");
  }else if(phase4==="retro"){
    steps.push(base[0]||"Write the honest proof-of-work retro or next LectronicArt decision.");
    if(base[1])steps.push(base[1]);
    steps.push("Count receipts: systems built, templates shipped, lessons recorded, users helped, members reached, and questions answered.");
    steps.push("Extract the lesson that belongs in the future curriculum or offer page.");
    steps.push("Choose the next LectronicArt move and write why the evidence supports it.");
  }else if(phase4==="launch"){
    steps.push(base[0]||"Publish, open, or send the audience-facing launch action.");
    if(base[1])steps.push(base[1]);
    steps.push("Stay present for replies, questions, objections, member needs, and broken onboarding paths.");
    steps.push("Turn one signal into a same-day fix, follow-up, or classroom note.");
    steps.push("Record the launch proof: names, numbers, quotes, questions, wins, and what happens next.");
  }else if(phase4==="community"){
    steps.push(base[0]||"Define the member action this community asset should create.");
    if(base[1])steps.push(base[1]);
    steps.push("Map the member path: first click, first win, likely stuck point, and next prompt.");
    steps.push("Create the reusable asset: checklist, lesson, script, classroom outline, onboarding step, or outreach list.");
    steps.push("Test it by reading it as a new member and note one friction point to fix.");
  }else if(phase4==="template"){
    steps.push(base[0]||"Choose the template, kit, or workflow piece to productize today.");
    if(base[1])steps.push(base[1]);
    steps.push("Package it with clear inputs, outputs, setup steps, naming, and a plain-language README or guide.");
    steps.push("Run the setup or import path from a cold-start mindset and fix the first confusing step.");
    steps.push("Save a demo artifact so the value is visible before anyone reads the docs.");
  }else if(phase4==="creative"){
    steps.push(base[0]||"Build the smallest reproducible version of today's creative workflow.");
    if(base[1])steps.push(base[1]);
    steps.push("Document inputs, outputs, settings, timing, file paths, and the quality bar for a good result.");
    steps.push("Capture before/after proof or a finished asset that shows why the automation matters.");
    steps.push("Write the creator-facing note: what this saves, where it breaks, and how to run it again.");
  }else if(phase4==="ai"){
    steps.push(base[0]||"Read the assigned docs with one minimal working loop in mind.");
    if(base[1])steps.push(base[1]);
    steps.push("Build or run the smallest example that proves the core loop works.");
    steps.push("Name the system boundary: inputs, outputs, model/tool calls, state, errors, and ownership.");
    steps.push("Save a teaching note or code comment explaining the loop in plain language.");
  }else if(ctx.phase===4&&day.g.includes("SHIP")){
    steps.push(base[0]||"Define the public proof this block should create.");
    if(base[1])steps.push(base[1]);
    steps.push("Put the artifact where a creator, tester, or future member can see it and understand the value.");
    steps.push("Capture the response: downloads, replies, questions, objections, saves, or member interest.");
    steps.push("Write the next improvement or lesson this proof unlocks.");
  }else if(ctx.phase===4&&day.g.includes("BUILD")){
    steps.push(base[0]||"Name the reusable system this build block should leave behind.");
    steps.push("Sketch inputs, outputs, happy path, failure path, and what a creator would configure.");
    if(base[1])steps.push(base[1]);
    steps.push("Run the loop once end to end, then capture the evidence that it worked.");
    steps.push("Save the implementation note that turns the build into future teaching material.");
  }else if(day.g.includes("CS50")&&title.includes("lecture")){
    steps.push(base[0]||"Watch the assigned CS50 lecture section with notes open.");
    steps.push("Pause after each major idea and write a one-sentence plain-language explanation before moving on.");
    steps.push("Retype or recreate at least one example so the concept moves from watching to doing.");
    steps.push("List the two shakiest concepts and ask ChatGPT for a quiz or analogy, not a shortcut.");
  }else if(day.g.includes("CS50")&&(title.includes("pset")||title.includes("problem set"))){
    steps.push(base[0]||"Read the problem specification slowly before writing code.");
    steps.push("Write down the input, output, and two test cases in your own words.");
    steps.push("Implement one small piece at a time, run it, then fix the first concrete failure you see.");
    steps.push("After 15 honest minutes stuck, ask ChatGPT for a hint about the bug or concept, not a completed solution.");
  }else if(day.g.includes("ODIN")){
    steps.push(base[0]||"Work through the assigned Odin lesson or project section.");
    steps.push("Type the commands or examples yourself and commit meaningful checkpoints as you go.");
    steps.push(base[1]||"Turn the lesson into a tiny visible artifact, note, or habit you can reuse tomorrow.");
    steps.push("Write one sentence naming the tool, browser behavior, or coding habit this lesson is trying to install.");
  }else if(day.g.includes("FSO")){
    steps.push(base[0]||"Work through the assigned Full Stack Open section in your editor.");
    steps.push("Do the exercises immediately after the relevant reading, while the concept is still fresh.");
    steps.push("Trace the data flow out loud: what changes, where state lives, and what triggers a render or request.");
    steps.push("Capture one confusion for ChatGPT or Codex, then resolve it before adding more features.");
  }else if(day.g.includes("CS50P")){
    steps.push(base[0]||"Watch or read the assigned CS50P unit with a fresh Python file open.");
    steps.push("Rebuild two examples from memory, then change one detail to prove you understand it.");
    steps.push(base[1]||"Pick a few problem-set reps that exercise the new Python idea directly.");
    steps.push("Compare the Python version to how you would solve it in JavaScript or C.");
  }else if(day.g.includes("SHIP")){
    steps.push(base[0]||"Define the audience-facing outcome before you open the tools.");
    steps.push("Create the smallest version another person can read, click, watch, or respond to.");
    steps.push(base[1]||"Put the work somewhere visible: a demo, post, link, message, or launch draft.");
    steps.push("Record what happened: feedback, silence, questions, numbers, or what you would change next.");
  }else if(day.g.includes("BUILD")){
    steps.push(base[0]||"Name the smallest working version of today's build before writing code.");
    steps.push("Sketch the data, screen, or pipeline path so you know what connects to what.");
    steps.push(base[1]||"Build the happy path first, then test one realistic edge case.");
    steps.push("Leave the code cleaner than a demo: clear names, obvious states, and a note for the next session.");
  }else{
    steps.push(...base.slice(0,2));
    steps.push("Turn the instruction into one concrete artifact: a note, sketch, checklist, commit, or decision.");
    steps.push("End by writing the next move so tomorrow starts quickly.");
  }
  while(steps.length<4)steps.push("Write a short note about what changed in your understanding and what you will do next.");
  return steps.slice(0,5);
}

function whyFor(day, ctx, track){
  if(day.rest)return "Rest days are part of the system. They protect consistency, absorb overflow, and keep the streak from becoming a grind.";
  const title=day.t.toLowerCase();
  if(ctx.phase===1){
    const phaseTrack=day.g.includes("BUILD")?"building":track;
    return "Phase 1 is about earning the mental map, not rushing. Inside "+ctx.theme+", "+phaseTrack+" gives you one controlled rep in reading instructions, naming errors, and explaining each step before AI helps. "+watchFor(day, ctx.phase);
  }
  if(ctx.phase===2){
    const phaseTrack=title.includes("retro")?"reflection":day.g.includes("FSO")?"Full Stack Open":day.g.includes("ODIN")?"Odin Foundations":day.g.includes("SHIP")?"shipping":day.g.includes("BUILD")?"building":track;
    return "Phase 2 is the apprenticeship layer: you still own the design, but Codex can now help plan, draft, and review small changes. Inside "+ctx.theme+", "+phaseTrack+" should leave behind something you can explain back: a solo build, diff, component, request, deployment, or decision. "+watchFor(day, ctx.phase);
  }
  if(ctx.phase===3){
    const phaseTrack=day.g.includes("CS50P")?"Python leverage":ctx.theme.toLowerCase().includes("find the pain")||isProblemDiscoveryTitle(title)?"problem discovery":title.includes("pricing")||title.includes("stripe")||title.includes("analytics")||title.includes("email")?"money and measurement":title.includes("launch")?"launch execution":title.includes("retro")||title.includes("next chapter")?"reflection":isUserLearningTitle(title)?"user evidence":day.g.includes("SHIP")&&day.g.includes("BUILD")?"shipping a product fix":day.g.includes("SHIP")?"market evidence":day.g.includes("BUILD")?"product building":track;
    return "Phase 3 is founder mode: every block should move a real product, real user conversation, or real launch decision forward. Inside "+ctx.theme+", the focus is "+phaseTrack+": turning learning into evidence Derrick can build from later. "+watchFor(day, ctx.phase, ctx);
  }
  if(ctx.phase===4){
    const phaseTrack=phase4Track(day, ctx);
    return "Phase 4 is LectronicArt production mode: each block should turn a system into proof, a workflow into a reusable asset, or a launch action into member signal. Inside "+ctx.theme+", the focus is "+phaseTrack+". "+watchFor(day, ctx.phase, ctx);
  }
  return "This day sits inside "+ctx.theme+" and connects "+track+" to the larger builder arc. "+watchFor(day, ctx.phase, ctx);
}

function doneFor(day, ctx){
  if(day.rest)return "Done means you either truly rested or cleared one deliberately chosen catch-up item without turning Sunday into another full workday.";
  if(ctx.phase===1)return "Done means the main instruction is complete, you can explain the important code or tool steps in plain language, and you saved the note, artifact, or commit where future-you can find it.";
  if(ctx.phase===2&&day.g.includes("ODIN"))return "Done means the final solo task is complete, no AI-written project code was accepted, and you saved the working artifact, commit, or note that proves you understand it.";
  if(ctx.phase===2)return "Done means the main task is complete, any Codex-assisted plan or diff has been read line by line, and you saved the artifact, commit, deployment note, or learning note that proves you understood it.";
  if(ctx.phase===3&&day.g.includes("CS50P"))return "Done means the Python work runs, you can explain the useful idea in plain language, and you saved a note, snippet, or automation angle that connects back to the product.";
  if(ctx.phase===3)return "Done means the product or launch moved in a visible way, the evidence is saved somewhere durable, and the next decision is clearer than it was at the start of the block.";
  if(ctx.phase===4){
    const kind=phase4Kind(day, ctx);
    if(kind==="retro")return "Done means the receipts are counted, the lesson is written clearly, and the next LectronicArt decision is based on proof instead of vibes.";
    if(kind==="launch")return "Done means a real audience or member action happened, the signal is saved, and one onboarding, offer, or classroom improvement is clear.";
    if(kind==="community")return "Done means the member-facing asset or path is clearer, the first-win friction is named, and the reusable community note is saved.";
    if(kind==="template")return "Done means the template or kit is packaged, the setup path has been checked, and a demo artifact proves another creator can understand the value.";
    if(kind==="creative")return "Done means the workflow runs reproducibly, inputs and outputs are documented, and a finished asset shows what the automation makes possible.";
    if(kind==="ai")return "Done means the AI loop runs, the interfaces and failure points are named, and the example is saved as future LectronicArt teaching material.";
    if(kind==="ship")return "Done means the proof artifact is public or ready to share, the context is clear, and the response or next teaching note is saved.";
    return "Done means the system, proof artifact, or teaching note is saved somewhere durable and the next reuse, lesson, or launch move is clear.";
  }
  return "Done means the main instruction is complete, you can explain what you did in plain language, and you have saved the artifact, notes, commit, or next-step decision somewhere you can find it.";
}

function buildGuide(day, ctx){
  const track=sourceTrack(day);
  const outcome=outcomeFor(day, ctx.week, ctx.phase);
  const summary=day.d[0]||day.t;
  return {
    goal:"By the end of this block, "+outcome+".",
    why:whyFor(day, ctx, track),
    steps:buildSteps(day, ctx),
    done:doneFor(day, ctx),
    coach:coachFor(day, ctx.phase, ctx),
    reflect:reflectFor(day, ctx.phase),
    summary:summary,
    rule:phaseRule(ctx.phase)
  };
}

function attachGuides(weeks){
  weeks.forEach((week, wi)=>{
    week.days.forEach((day, di)=>{
      if(!day.guide)day.guide=buildGuide(day,{week:wi+1,day:di+1,phase:week.p,theme:week.theme});
    });
  });
}
attachGuides(WEEKS);
