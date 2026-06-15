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
 {t:"CS50 Lecture 0 — Scratch",d:["Watch Lecture 0 in full (computational thinking, algorithms, abstraction). Take notes by hand or in notes.md.","Don't skip it because it 'feels basic' — Malan is building the mental model everything else sits on."],g:["CS50"],h:"2.5 hrs",l:[["Week 0",CS50+"weeks/0/"]],lesson:{essence:"CS50 Week 0's source-backed foundation: representation, abstraction, algorithms, pseudocode, and Scratch's core blocks",bullets:["Learn how computers represent information and why abstraction lets you build without holding every detail at once.","Translate a problem into an algorithm, then into pseudocode, before worrying about a programming language.","Use Scratch blocks to practice functions, variables, conditionals, loops, events, and parallel threads visually."]}},
 {t:"CS50 Problem Set 0",d:["Build your Scratch project (a game, animation, or interactive toy — your choice).","Notice how you naturally use loops, conditions, and events. You're already programming."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 PSet 0's first project: turning Scratch blocks into an original interactive program with events, sprites, logic, and visible behavior",bullets:["Design a Scratch project that has a clear interaction, not just disconnected blocks on the screen.","Use events, loops, conditions, variables, sounds, sprites, or costumes to make the project respond to a user.","Submit a finished creative artifact and notice which programming ideas already feel natural when they are visual."]}},
 {t:"Odin: Introduction + Prerequisites",d:["Odin Foundations: Introduction section (How this course works, Intro to web dev, Motivation & mindset).","Prerequisites: Computer Basics, How Does the Web Work?, Installation Overview + install VS Code."],g:["ODIN"],h:"2 hrs",l:[["Foundations",ODIN]],lesson:{essence:"Odin's orientation layer: how the curriculum works, what web development is, learning mindset, computer basics, the web, and VS Code setup",bullets:["Understand Odin as a project-based path where reading, building, searching, and debugging are part of the work.","Build a first mental model of the web: browser, internet, websites, files, and developer tools working together.","Finish the prerequisite setup so future lessons can focus on coding instead of account, editor, or installation friction."]}},
 {t:"Odin: Command line + Git setup",d:["Odin: Text Editors, Command Line Basics — practice cd, ls, mkdir, touch until they're reflex.","Odin: Setting Up Git — install Git, create your GitHub account, configure SSH."],g:["ODIN"],h:"2 hrs",lesson:{essence:"Odin's developer-tool foundation: text editor habits, terminal navigation, file commands, Git, GitHub, and SSH setup",bullets:["Practice terminal commands like changing folders, listing files, creating folders, and creating files until they feel physical.","Set up Git and GitHub so every project can have history, checkpoints, and a remote backup.","Configure the connection between your machine and GitHub so pushing code becomes a normal builder habit."]}},
 {t:"Build #1: CLI calculator",d:["Write a command-line calculator yourself (add/subtract/multiply/divide, looping menu). Python or JavaScript via Node.","Rule check: ChatGPT may EXPLAIN syntax and errors, never write the code.","Journal: 3 sentences on what confused you this week."],g:["BUILD"],h:"2.5 hrs",lesson:{essence:"the first independent build: command-line input, arithmetic operations, branching, repeated menu flow, debugging, and plain-English reflection",bullets:["Ask for input, choose an operation, calculate a result, and print feedback in a loop the user controls.","Practice reading your own errors and asking AI for explanations or hints without accepting finished code.","Write the week's confusion in plain language so the learning process itself becomes future teaching material."]}},
 REST("Read this week's calculator code out loud and explain every line to yourself (or to ChatGPT). 5 minutes.")
]},
{p:1,theme:"C & Your First Web Page — CS50 Week 1 · Odin HTML",days:[
 {t:"CS50 Lecture 1 — C (part 1)",d:["Watch the first half of Lecture 1: source code vs machine code, compilers, VS Code, types, variables, conditionals.","In your CS50 codespace, retype every example yourself. No copy-paste."],g:["CS50"],h:"2.5 hrs",l:[["Week 1",CS50+"weeks/1/"]],lesson:{essence:"CS50 Week 1's first C layer: source code, machine code, compilers, VS Code, syntax, types, variables, and conditionals",bullets:["Understand the path from human-written source code to machine code through a compiler.","Practice C syntax with types, variables, operators, conditionals, header files, libraries, and manual pages.","Use VS Code and compiler errors as feedback, not as proof that you are bad at programming."]}},
 {t:"CS50 Lecture 1 — C (part 2) + shorts",d:["Finish Lecture 1: loops, operators, integer overflow, floating-point imprecision.","Watch this week's section video and 1–2 shorts on whatever felt shaky."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Week 1's control-flow and computer-limits layer: loops, operators, comments, pseudocode, integer overflow, and floating-point imprecision",bullets:["Use loops and operators to repeat work and express calculations clearly in C.","See why computers have limits through integer overflow and floating-point imprecision.","Connect comments and pseudocode to the habit of planning before typing code."]}},
 {t:"PSet 1 — mario",d:["Solve mario (the pyramid problem). Sit with bugs 15 minutes before asking ChatGPT — and only ask 'why doesn't this work?', not 'fix it'."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Mario: input validation, row-by-row output, nested loops, spaces, hashes, and translating a visual pyramid into C",bullets:["Prompt for a valid height and keep asking until the input satisfies the problem constraints.","Break the pyramid into rows, spaces, and hashes before writing the loops.","Use nested loops and careful printing to make the output match the specification exactly."]}},
 {t:"PSet 1 — cash/credit",d:["Solve cash (or credit if you're feeling strong).","Ask ChatGPT: 'Quiz me with 5 questions on C variables, loops, and conditionals. Grade my answers.'"],g:["CS50","CODEX"],h:"2.5 hrs",lesson:{essence:"CS50 Cash or Credit: turning real-world rules into C logic through greedy change-making or Luhn card validation",bullets:["For Cash, use a greedy algorithm to turn cents owed into the fewest quarters, dimes, nickels, and pennies.","For Credit, use loops, digit extraction, checksums, and prefixes to validate card numbers with Luhn's algorithm.","Practice explaining the rule in plain English before asking AI for hints about a bug."]}},
 {t:"Odin: Git Basics + HTML begins",d:["Odin: Git Basics section — make your first real commits and push to GitHub.","Odin HTML Foundations: Intro to HTML & CSS, Elements & Tags, HTML Boilerplate."],g:["ODIN"],h:"2.5 hrs",lesson:{essence:"Odin's Git and first HTML layer: commits, GitHub pushes, HTML/CSS roles, elements, tags, and boilerplate",bullets:["Use Git commits and GitHub pushes to create a readable history of your work.","Learn what HTML structures, what CSS styles, and why those jobs stay separate.","Write a basic HTML document with elements, tags, head/body structure, and boilerplate."]}},
 {t:"Odin HTML + start portfolio",d:["Odin: Working with Text, Lists, Links & Images, Commit Messages.","Build #2 begins: create your personal portfolio page in plain HTML (about you, your projects, links). Commit as you go."],g:["ODIN","BUILD"],h:"2.5 hrs",lesson:{essence:"Odin's HTML content layer: headings, paragraphs, emphasis, lists, links, images, commit messages, and starting a portfolio",bullets:["Use headings, paragraphs, bold/italic emphasis, ordered lists, and unordered lists to structure content.","Add links and images so pages can connect to other resources and display media intentionally.","Start the portfolio as plain HTML and commit small checkpoints with messages that explain the work."]}},
 REST()
]},
{p:1,theme:"Arrays & CSS — CS50 Week 2 · Odin CSS",days:[
 {t:"CS50 Lecture 2 — Arrays",d:["Watch Lecture 2: arrays, strings, command-line arguments, cryptography intro.","Retype the examples. Notice how strings are just arrays of chars."],g:["CS50"],h:"2.5 hrs",l:[["Week 2",CS50+"weeks/2/"]],lesson:{essence:"CS50 Week 2's data layer: compiling stages, debugging, arrays, strings as character arrays, command-line arguments, and cryptography",bullets:["Understand the compile pipeline: preprocessing, compiling, assembling, and linking turn C into a runnable program.","Use arrays to store related values and strings as arrays of characters ending in a null terminator.","Read command-line arguments and connect text manipulation to simple cryptography problems."]}},
 {t:"PSet 2 — scrabble/readability",d:["Solve scrabble or readability.","Debugging rule reminder: 15 minutes stuck before asking, then ask for explanation, not solution."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Scrabble or Readability: scoring text with arrays, counting letters or words, and turning language into measurable data",bullets:["For Scrabble, loop through characters and use a score table to calculate each word's value.","For Readability, count letters, words, and sentences before applying a readability formula.","Practice turning text into numbers without losing track of indexes, cases, or punctuation."]}},
 {t:"PSet 2 — caesar",d:["Solve caesar (your first cipher!).","Ask ChatGPT: 'Quiz me on arrays and strings in C — 5 questions.'"],g:["CS50","CODEX"],h:"2.5 hrs",lesson:{essence:"CS50 Caesar: command-line key validation, ASCII character math, modulo wraparound, and preserving letter case",bullets:["Validate the encryption key from the command line before transforming any text.","Shift letters with ASCII arithmetic and modulo so z wraps back around to a.","Preserve uppercase, lowercase, and non-letter characters while changing only what the cipher should change."]}},
 {t:"Odin CSS Foundations (part 1)",d:["Odin: Intro to CSS, The Cascade, Inspecting HTML and CSS — get comfortable with browser DevTools."],g:["ODIN"],h:"2 hrs",lesson:{essence:"Odin's first CSS layer: selectors, classes, IDs, the cascade, specificity, inheritance, and inspecting styles in DevTools",bullets:["Use selectors, classes, and IDs to target page elements intentionally.","Learn why one CSS rule wins over another through cascade, specificity, and inheritance.","Inspect HTML and CSS in browser DevTools so styling becomes observable instead of mysterious."]}},
 {t:"Odin CSS (part 2) + Recipes",d:["Odin: The Box Model, Block and Inline.","Odin Project: Recipes — build the multi-page recipe site (great HTML reps)."],g:["ODIN"],h:"2.5 hrs",lesson:{essence:"Odin's layout foundation: box model, content, padding, border, margin, block and inline behavior, plus the Recipes project",bullets:["Understand how content, padding, border, and margin create the real space around every element.","Compare block and inline behavior so page flow and line breaks make sense.","Use the Recipes project to practice multi-page structure while CSS spacing starts to become physical."]}},
 {t:"Ship the portfolio",d:["Style your portfolio with your new CSS knowledge.","Deploy it to GitHub Pages — your first live URL on the internet.","Journal + send the link to one person (public commitment!)."],g:["BUILD","SHIP"],h:"2.5 hrs",lesson:{essence:"the first public web artifact: applying CSS to a personal portfolio, deploying to GitHub Pages, and sharing the live URL",bullets:["Use CSS selectors, spacing, color, type, and layout to make the plain HTML portfolio feel intentional.","Deploy with GitHub Pages so the project becomes a real URL other people can open.","Share the link with one person and write what changed when practice became public."]}},
 REST()
]},
{p:1,theme:"Algorithms & Flexbox — CS50 Week 3 · Odin Flexbox + JS begins",days:[
 {t:"CS50 Lecture 3 — Algorithms",d:["Watch Lecture 3: searching, sorting, Big O notation, recursion.","Big O is founder-relevant: it's why some apps die at 10,000 users."],g:["CS50"],h:"2.5 hrs",l:[["Week 3",CS50+"weeks/3/"]],lesson:{essence:"CS50 Week 3's algorithm layer: linear search, binary search, Big O, selection sort, bubble sort, merge sort, and recursion",bullets:["Compare search and sort strategies by how their running time grows as input gets larger.","Use Big O as a plain-language way to describe algorithm cost, not as abstract math decoration.","Understand recursion and merge sort as a divide-and-conquer way to solve smaller versions of a problem."]}},
 {t:"PSet 3 — plurality",d:["Solve plurality (a voting program).","Explain your sort choice out loud before coding it."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Plurality: candidate structs, vote tabulation, name matching, arrays of candidates, and winner selection",bullets:["Represent each candidate with a name and vote count instead of loose separate variables.","Match voter input to candidate names, update the correct vote total, and reject invalid names.","Find and print every winner in case the highest vote total is tied."]}},
 {t:"PSet 3 — runoff",d:["Solve runoff. This one is hard — that's the point. The hours stuck are where intuition forms."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Runoff: ranked-choice voting, preference tables, vote tabulation, elimination, ties, and repeated rounds",bullets:["Store each voter's ranked preferences so the program can look beyond first choice when needed.","Tabulate votes only for non-eliminated candidates and detect whether someone has a majority.","Eliminate the lowest candidates and repeat rounds until there is a winner or a complete tie."]}},
 {t:"Odin: Flexbox",d:["Odin Flexbox section: Introduction, Growing and Shrinking, Axes, Alignment.","Play Flexbox Froggy if you want extra reps."],g:["ODIN"],h:"2 hrs",lesson:{essence:"Odin's Flexbox foundation: flex containers, flex items, main/cross axes, growing, shrinking, alignment, and spacing",bullets:["Learn how a flex container controls its child items along the main and cross axes.","Use grow, shrink, and basis rules to understand why items stretch, compress, or keep size.","Practice alignment and spacing so layout starts feeling like a system instead of trial and error."]}},
 {t:"Odin Project: Landing Page",d:["Build the Landing Page project from the design file — your first real layout from a spec, exactly like client work."],g:["ODIN","BUILD"],h:"2.5 hrs",lesson:{essence:"Odin Landing Page: translating a design spec into structured HTML, Flexbox sections, spacing, typography, and visual hierarchy",bullets:["Break the provided design into header, hero, content bands, call-to-action, and footer sections.","Use Flexbox, spacing, colors, and type scale to match the design intentionally.","Practice building from a spec, which is the same muscle used in client work and product implementation."]}},
 {t:"JavaScript begins + Build #3",d:["Odin: Fundamentals Part 1 (variables, numbers, strings, operators).","Build #3: tip calculator as a console script (prompt for bill + tip %, print total). DOM version comes next week."],g:["ODIN","BUILD"],h:"2.5 hrs",lesson:{essence:"Odin's first JavaScript layer: variables, numbers, strings, operators, console output, and a tip-calculator script",bullets:["Use variables to store values and operators to combine numbers or text into useful results.","Practice JavaScript numbers, strings, and console output before adding browser UI complexity.","Build a tip calculator as a console script so basic logic is solid before DOM manipulation begins."]}},
 REST()
]},
{p:1,theme:"Memory & Real JavaScript — CS50 Week 4 · Odin JS Fundamentals",days:[
 {t:"CS50 Lecture 4 — Memory",d:["Watch Lecture 4: pointers, malloc, hexadecimal, memory layout. The hardest and most valuable lecture in the course.","Ask ChatGPT: 'Re-explain pointers with a real-world analogy, then quiz me.'"],g:["CS50","CODEX"],h:"2.5 hrs",l:[["Week 4",CS50+"weeks/4/"]],lesson:{essence:"CS50 Week 4's memory layer: hexadecimal, addresses, pointers, strings in memory, malloc/free, stack vs heap, and file/image bytes",bullets:["Understand memory addresses and pointers as the way C can refer directly to stored data.","Connect strings, arrays, pointer arithmetic, and allocation to what is really happening in memory.","See why malloc, free, stack/heap layout, file I/O, and image bytes matter for powerful but risky programs."]}},
 {t:"PSet 4 — filter/volume",d:["Solve volume, then start filter (image manipulation — grayscale, sepia, reflect)."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Volume and Filter: scaling WAV audio samples, reading BMP pixels, and transforming images through grayscale, sepia, reflect, or blur",bullets:["For Volume, read audio samples and multiply each one by a factor without breaking the WAV structure.","For Filter, treat an image as a grid of pixels whose red, green, and blue values can be transformed.","Practice media programming by changing data directly, then checking whether the visible or audible output matches the spec."]}},
 {t:"PSet 4 — recover",d:["Solve recover (recover deleted JPEGs from a memory card — feels like magic when it works)."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Recover: scanning raw memory-card bytes, detecting JPEG signatures, writing recovered files, and managing file boundaries",bullets:["Read raw bytes in fixed-size blocks and look for JPEG headers that mark a new image.","Open, write, close, and name output files carefully as recovered images appear.","Learn why deleted files can sometimes be recovered when the bytes still exist on storage."]}},
 {t:"Odin: JS Fundamentals 2 + DevTools",d:["Odin: Fundamentals Part 2 (data types, conditionals), JavaScript Developer Tools."],g:["ODIN"],h:"2 hrs",lesson:{essence:"Odin JavaScript Fundamentals 2: data types, conditionals, comparisons, logical operators, and browser DevTools debugging",bullets:["Use JavaScript data types and conditionals to make programs choose between paths.","Practice comparisons and logical operators so decisions are explicit instead of accidental.","Use DevTools and the console to inspect values, errors, and behavior while the code runs."]}},
 {t:"Odin: Functions & problem solving",d:["Odin: Fundamentals Part 3 (functions), Problem Solving, Understanding Errors — three of the most important lessons in the whole path."],g:["ODIN"],h:"2.5 hrs",lesson:{essence:"Odin functions and problem solving: writing reusable logic, naming inputs/outputs, reading errors, and debugging deliberately",bullets:["Use functions to wrap a clear job with inputs, output, and a name you can explain.","Practice the problem-solving loop: understand, plan, divide, solve, and test one piece at a time.","Read errors as clues about where the program disagrees with your mental model."]}},
 {t:"Build: Rock Paper Scissors + tip calc UI",d:["Odin Project: Rock Paper Scissors (console version).","Upgrade your tip calculator with HTML inputs + a button (your first DOM manipulation, slightly ahead of schedule — ChatGPT can explain, not write)."],g:["ODIN","BUILD"],h:"2.5 hrs",lesson:{essence:"the first JavaScript game and UI bridge: Rock Paper Scissors logic, random choice, score flow, and HTML input/button interaction",bullets:["Build Rock Paper Scissors as console logic with user choice, computer choice, result rules, and repeatable rounds.","Upgrade the tip calculator with HTML inputs and a button so JavaScript can respond to page interaction.","Keep ChatGPT in explanation mode while Derrick writes the logic and learns how browser events connect to code."]}},
 REST()
]},
{p:1,theme:"Data Structures & the DOM — CS50 Week 5 · Odin DOM",days:[
 {t:"CS50 Lecture 5 — Data Structures",d:["Watch Lecture 5: linked lists, stacks, queues, trees, hash tables, tries. (You already know stacks/LIFO — enjoy the head start.)"],g:["CS50"],h:"2.5 hrs",l:[["Week 5",CS50+"weeks/5/"]],lesson:{essence:"CS50 Week 5's data-structure layer: linked lists, stacks, queues, trees, hash tables, tries, and tradeoffs between memory and speed",bullets:["See how pointers can connect nodes into structures that grow beyond fixed arrays.","Compare stacks, queues, trees, hash tables, and tries by what they make faster or more flexible.","Learn that choosing a data structure is a design decision, not just syntax."]}},
 {t:"PSet 5 — speller (day 1)",d:["Start speller: implement a dictionary with a hash table. Plan your hash function on paper first."],g:["CS50"],h:"2.5 hrs",lesson:{essence:"CS50 Speller setup: loading a dictionary into memory, choosing a hash table design, and planning how load, check, size, and unload should work",bullets:["Read the dictionary file and store each word in a structure your program can search quickly.","Sketch the hash function, buckets, nodes, and memory ownership before coding the details.","Treat check, load, size, and unload as separate responsibilities that need clear contracts."]}},
 {t:"PSet 5 — speller (day 2)",d:["Finish speller.","Ask ChatGPT: '5 questions on hash tables and linked lists. Grade me hard.'"],g:["CS50","CODEX"],h:"2.5 hrs",lesson:{essence:"CS50 Speller finish: measuring lookup speed, handling linked-list collisions, freeing memory, and proving the spell-checker works",bullets:["Finish lookup logic so misspelled words are detected accurately and quickly.","Handle collisions in hash-table buckets without losing words or corrupting pointers.","Use testing and memory feedback to catch leaks, edge cases, and performance issues."]}},
 {t:"Odin: Arrays, loops & the DOM",d:["Odin: Fundamentals Part 4 (arrays, loops), DOM Manipulation and Events."],g:["ODIN"],h:"2.5 hrs",lesson:{essence:"Odin's JavaScript collection and page-control layer: arrays, loops, DOM selection, events, and changing HTML from code",bullets:["Use arrays to store lists and loops to repeat work over items instead of writing the same code by hand.","Select DOM nodes and change their text, attributes, classes, or structure with JavaScript.","Attach event listeners so button clicks and user actions can run functions in the page."]}},
 {t:"Odin: RPS UI + Etch-a-Sketch",d:["Odin: Revisiting Rock Paper Scissors — add a real UI with buttons and score display.","Start Project: Etch-a-Sketch."],g:["ODIN","BUILD"],h:"2.5 hrs",lesson:{essence:"Odin's first interactive UI projects: turning console game logic into buttons and score display, then drawing a grid for Etch-a-Sketch",bullets:["Reuse Rock Paper Scissors logic behind real buttons, visible results, and score state.","Build Etch-a-Sketch as a dynamic grid whose squares respond to pointer movement.","Practice separating game state, DOM updates, and user events so the UI stays understandable."]}},
 {t:"Build #4: to-do list + Phase 1 exam",d:["Build a to-do list app that saves to localStorage (add, complete, delete, persist).","Phase 1 graduation exam: open any 50-line JS file and explain every line to ChatGPT. If you can — you passed."],g:["BUILD","CODEX"],h:"3 hrs",lesson:{essence:"the Phase 1 capstone: a persistent to-do app, localStorage state, add/complete/delete actions, and explaining code line by line",bullets:["Model tasks as data, then render that data into add, complete, and delete interactions.","Save and reload the task list with localStorage so progress survives a browser refresh.","Pass the Phase 1 exam by explaining a real 50-line JavaScript file without hiding behind AI."]}},
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

function lessonProfile(day, ctx){
  if(day.lesson)return manualLessonProfile(day);
  const title=day.t.toLowerCase();
  const details=day.d.join(" ").toLowerCase();
  const tags=day.g;
  if(day.rest)return {
    essence:"recovery, catch-up judgment, and protecting the long-term streak",
    bullets:[
      "Decide whether today is real rest or one small catch-up block.",
      "Let unfinished work consolidate instead of turning every Sunday into another full study day.",
      "Write the first move for tomorrow so the next block starts cleanly."
    ]
  };
  if(tags.includes("CODEX")&&details.includes("sdks and cli"))return {
    essence:"official SDK setup, API keys, CLI basics, and making the first model request safely",
    bullets:[
      "Install the official SDK or CLI and understand where the API key lives.",
      "Make one minimal request and inspect the response shape instead of treating it as magic.",
      "Write down the boundary between app code, secret configuration, and model output."
    ]
  };
  if(tags.includes("SETUP")&&ctx.phase!==4)return {
    essence:"setting up the learning environment, tutor boundaries, accounts, and the notes habit",
    bullets:[
      "Install the core tools and create the folder where learning projects will live.",
      "Set the AGENTS.md tutor rules so AI explains, quizzes, and hints without writing the learning code.",
      "Create the journal habit that will turn this course into future teaching material."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("introduction"))return {
    essence:"how the Odin course works, what web development is, the mindset for learning, computer basics, and the first VS Code setup",
    bullets:[
      "Understand the shape of the Odin Foundations path and how project-based learning works.",
      "Connect browser, server, files, and tools into a first mental model of web development.",
      "Finish prerequisite setup so the next Odin block starts with learning instead of tool friction."
    ]
  };
  if(title.includes("cs50 lecture 0"))return {
    essence:"computational thinking: algorithms, abstraction, loops, conditions, events, and variables in Scratch",
    bullets:[
      "Turn a fuzzy goal into precise step-by-step instructions a computer can follow.",
      "Recognize the first programming building blocks: events, loops, conditions, variables, and functions.",
      "Use Scratch as a visual sandbox for concepts that later show up in C, JavaScript, and Python."
    ]
  };
  if(title.includes("cs50 lecture 1")&&title.includes("part 1"))return {
    essence:"how C programs become machine instructions, plus types, variables, and conditionals",
    bullets:[
      "Understand source code, machine code, compilers, and why C is closer to the computer.",
      "Practice the basic shape of C: types, variables, operators, conditionals, and simple program flow.",
      "Retype examples so syntax, compiling, running, and reading errors become less mysterious."
    ]
  };
  if(title.includes("cs50 lecture 1"))return {
    essence:"loops, operators, integer overflow, floating-point imprecision, and the limits of computers",
    bullets:[
      "Use loops and operators to repeat work without writing the same instruction over and over.",
      "See why computers have limits through integer overflow and floating-point imprecision.",
      "Connect small C examples to the deeper habit of asking what the machine is really storing."
    ]
  };
  if(title.includes("cs50 lecture 2"))return {
    essence:"arrays, strings, command-line arguments, and how text lives in memory",
    bullets:[
      "Learn arrays as ordered slots of data and strings as arrays of characters.",
      "Practice reading command-line arguments and reasoning about input before the program runs.",
      "See how simple cryptography exercises depend on indexing, characters, and careful loops."
    ]
  };
  if(title.includes("cs50 lecture 3"))return {
    essence:"searching, sorting, Big O notation, recursion, and comparing algorithm tradeoffs",
    bullets:[
      "Compare searching and sorting strategies by what they cost as input grows.",
      "Use Big O as a plain-language way to talk about speed, scale, and tradeoffs.",
      "Meet recursion as a function solving a problem by calling itself on a smaller version."
    ]
  };
  if(title.includes("cs50 lecture 4"))return {
    essence:"memory, pointers, addresses, allocation, hexadecimal, and what data looks like under the hood",
    bullets:[
      "Understand pointers as variables that hold addresses instead of ordinary values.",
      "Connect malloc, memory layout, and hexadecimal to what programs are doing below the surface.",
      "Build patience with the hardest mental model in early CS because it explains many later bugs."
    ]
  };
  if(title.includes("cs50 lecture 5"))return {
    essence:"data structures: linked lists, stacks, queues, trees, hash tables, and tries",
    bullets:[
      "Learn that data structure choice changes how fast a program can search, insert, and organize.",
      "Compare arrays with linked lists, stacks, queues, trees, hash tables, and tries.",
      "Connect structure to product thinking: the shape of stored data affects what the app can do easily."
    ]
  };
  if(tags.includes("CS50")&&title.includes("problem set 0"))return {
    essence:"building a first Scratch project that proves loops, events, conditions, variables, and sprites can become an interactive idea",
    bullets:[
      "Turn the lecture concepts into a small game, animation, or interactive toy.",
      "Use events, loops, conditions, and variables in a project you can actually show someone.",
      "Notice that programming is already a creative process: rules, feedback, timing, and interaction."
    ]
  };
  if(tags.includes("CS50")&&title.includes("mario"))return {
    essence:"using loops and conditionals to turn numeric input into a precise text pattern",
    bullets:[
      "Read a problem specification and translate it into inputs, outputs, and constraints.",
      "Use nested loops to build rows, spaces, and blocks in the exact order required.",
      "Practice debugging by comparing expected output against what your program actually prints."
    ]
  };
  if(tags.includes("CS50")&&(title.includes("cash")||title.includes("credit")))return {
    essence:"numeric logic, loops, validation, and turning real-world rules into code",
    bullets:[
      "Break a money or card problem into small decisions the program can check.",
      "Use loops and conditionals to repeat a calculation until the answer is complete.",
      "Practice asking for hints about logic instead of asking AI for a finished solution."
    ]
  };
  if(tags.includes("CS50")&&(title.includes("scrabble")||title.includes("readability")))return {
    essence:"arrays, strings, scoring, and turning text into measurable data",
    bullets:[
      "Loop through characters and convert text into counts, scores, or readability signals.",
      "Practice indexing arrays and strings without losing track of positions.",
      "Explain the scoring rule before coding so the program mirrors the actual problem."
    ]
  };
  if(tags.includes("CS50")&&title.includes("caesar"))return {
    essence:"command-line arguments, ASCII, modulo arithmetic, and shifting letters safely",
    bullets:[
      "Accept input from the command line and reject invalid arguments cleanly.",
      "Use ASCII values and modulo arithmetic to wrap letters around the alphabet.",
      "Keep uppercase, lowercase, and non-letter characters straight while transforming text."
    ]
  };
  if(tags.includes("CS50")&&(title.includes("plurality")||title.includes("runoff")))return {
    essence:"arrays, structs, votes, and implementing a small election algorithm",
    bullets:[
      "Model candidates, votes, and counts as data instead of loose variables.",
      "Turn election rules into steps the computer can repeat and verify.",
      "Practice reading a longer starter codebase without losing the thread."
    ]
  };
  if(tags.includes("CS50")&&(title.includes("filter")||title.includes("volume")))return {
    essence:"bytes, pixels, samples, and how code changes media data directly",
    bullets:[
      "Treat images and audio as structured data the program can inspect and change.",
      "Use loops to visit pixels or samples and apply a repeatable transformation.",
      "Connect low-level data changes to creative tools that manipulate visuals and sound."
    ]
  };
  if(tags.includes("CS50")&&title.includes("recover"))return {
    essence:"file I/O, signatures, buffers, and recovering JPEG data from raw bytes",
    bullets:[
      "Read binary data in chunks and look for file signatures that mark JPEG boundaries.",
      "Write recovered output files carefully while tracking when one file ends and another begins.",
      "See how low-level file work explains why deleted data can sometimes be restored."
    ]
  };
  if(tags.includes("CS50")&&title.includes("speller"))return {
    essence:"hash tables, linked lists, dictionary loading, lookup speed, and memory cleanup",
    bullets:[
      "Choose a hash function and store dictionary words for fast lookup.",
      "Use linked lists or buckets to handle collisions when words land in the same place.",
      "Balance correctness, speed, and memory cleanup in one larger C program."
    ]
  };
  if(tags.includes("BUILD")&&title.includes("cli calculator"))return {
    essence:"turning basic variables, input, conditionals, arithmetic, and a loop into the first self-written command-line tool",
    bullets:[
      "Ask for user input, choose an operation, calculate a result, and print clear feedback.",
      "Use a looped menu so the program can keep running until the user chooses to stop.",
      "Practice the Phase 1 rule: AI may explain syntax and errors, but the code comes from Derrick."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("git basics + html"))return {
    essence:"Git history, GitHub pushes, HTML/CSS introduction, elements, tags, and boilerplate structure",
    bullets:[
      "Make real commits and push work to GitHub so project history becomes visible.",
      "Learn the basic HTML document shape: elements, tags, and boilerplate.",
      "Connect Git habits to future teamwork: small commits make code easier to review and teach."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("html + start portfolio"))return {
    essence:"HTML text, lists, links, images, commit messages, and starting a personal portfolio page",
    bullets:[
      "Use semantic HTML pieces for text, lists, links, images, and page structure.",
      "Start the portfolio as a plain HTML artifact before worrying about visual polish.",
      "Practice commit messages that describe the work clearly enough for future-you to follow."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("css foundations"))return {
    essence:"CSS selectors, the cascade, browser DevTools, and inspecting why styles appear",
    bullets:[
      "Use selectors to target elements and the cascade to understand which style wins.",
      "Inspect HTML and CSS in DevTools so layout and styling stop being invisible.",
      "Start thinking of CSS as a system of rules, inheritance, specificity, and evidence."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("css (part 2)"))return {
    essence:"the box model, block and inline behavior, and the Recipes project as layout practice",
    bullets:[
      "Learn how content, padding, border, and margin create the actual space an element occupies.",
      "Compare block and inline elements so page flow makes more sense.",
      "Use the Recipes project to practice multi-page HTML and early CSS structure."
    ]
  };
  if(tags.includes("BUILD")&&title.includes("ship the portfolio"))return {
    essence:"applying CSS to the portfolio, deploying with GitHub Pages, and sharing the first live URL",
    bullets:[
      "Style the portfolio with the CSS foundations you just learned.",
      "Deploy to GitHub Pages so the project exists on the public internet.",
      "Share the link with one person and turn private practice into public proof."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("landing page"))return {
    essence:"building a full landing page from a design spec with layout, spacing, sections, and visual hierarchy",
    bullets:[
      "Translate a static design file into real HTML and CSS sections.",
      "Use Flexbox, spacing, typography, and alignment to match an intentional layout.",
      "Practice client-style work: follow the spec, then check the result against the reference."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("javascript begins"))return {
    essence:"JavaScript variables, numbers, strings, operators, and the first calculator-style console script",
    bullets:[
      "Learn the basic value types and operators JavaScript uses for simple logic.",
      "Build a tip calculator as a console program before adding DOM complexity.",
      "Compare JavaScript syntax against C so old concepts start transferring across languages."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("rock paper scissors"))return {
    essence:"Rock Paper Scissors game logic, user choices, random computer choices, and a first DOM-powered calculator UI",
    bullets:[
      "Build the Rock Paper Scissors rules as console logic before adding UI.",
      "Upgrade the tip calculator with HTML inputs, a button, and DOM updates.",
      "See the bridge from pure logic to a page a human can click."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("js fundamentals 2"))return {
    essence:"JavaScript data types, conditionals, and Developer Tools for inspecting browser behavior",
    bullets:[
      "Use data types and conditionals to make JavaScript programs choose paths.",
      "Open JavaScript Developer Tools and treat the console as a learning instrument.",
      "Practice reading browser feedback instead of guessing what the code did."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("arrays, loops"))return {
    essence:"JavaScript arrays, loops, DOM manipulation, and events",
    bullets:[
      "Use arrays and loops to work with collections of values.",
      "Select and update DOM elements so JavaScript can change the page.",
      "Attach events so user actions trigger visible behavior."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("rps ui"))return {
    essence:"turning Rock Paper Scissors into a button-driven UI and starting Etch-a-Sketch",
    bullets:[
      "Move Rock Paper Scissors from console prompts into buttons and visible score state.",
      "Use DOM events to update the interface after each user action.",
      "Start Etch-a-Sketch as repeated practice with grids, events, and interactive state."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("objects"))return {
    essence:"JavaScript objects, object methods, grouping related data, and finishing Etch-a-Sketch",
    bullets:[
      "Use objects to group related values and behaviors under meaningful names.",
      "Practice object methods as functions that belong to a specific data shape.",
      "Finish Etch-a-Sketch with cleaner state now that object thinking is available."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("calculator"))return {
    essence:"the Odin Foundations calculator boss fight: UI, operations, chained calculations, decimals, clear, and edge cases",
    bullets:[
      "Build a calculator interface that accepts input and shows results clearly.",
      "Handle operations, chaining, decimals, clear behavior, and divide-by-zero safely.",
      "Prove the solo-foundations muscle before Phase 2 introduces regular AI drafting."
    ]
  };
  if(tags.includes("BUILD")&&title.includes("to-do list"))return {
    essence:"DOM CRUD, localStorage persistence, and a Phase 1 exam where Derrick explains real JavaScript line by line",
    bullets:[
      "Build add, complete, delete, and persist behavior for a tiny to-do app.",
      "Use localStorage so data survives a page refresh without a backend.",
      "Pass the Phase 1 exam by explaining a real JavaScript file in plain English."
    ]
  };
  if(tags.includes("ODIN")&&details.includes("command line"))return {
    essence:"terminal navigation, file creation, Git setup, GitHub, and SSH",
    bullets:[
      "Practice moving through folders and creating files from the command line.",
      "Set up Git and GitHub so your work can be saved, shared, and reviewed.",
      "Build the comfort with developer tools that makes later projects calmer."
    ]
  };
  if(tags.includes("ODIN")&&details.includes("html"))return {
    essence:"HTML structure, text, lists, links, images, boilerplate, and clear commits",
    bullets:[
      "Use HTML elements to give a page meaningful structure before styling it.",
      "Practice links, images, lists, text hierarchy, and boilerplate by building real pages.",
      "Commit small checkpoints so the history of the project stays understandable."
    ]
  };
  if(tags.includes("ODIN")&&details.includes("css"))return {
    essence:"CSS selectors, the cascade, DevTools, the box model, and page layout fundamentals",
    bullets:[
      "Use selectors and the cascade to understand why one style wins over another.",
      "Inspect layout in browser DevTools instead of guessing.",
      "Practice the box model so spacing, borders, and sizing stop feeling random."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("flexbox"))return {
    essence:"Flexbox axes, alignment, growing, shrinking, and responsive layout habits",
    bullets:[
      "Understand main axis, cross axis, alignment, and spacing inside flexible layouts.",
      "Practice grow and shrink rules so components respond instead of breaking.",
      "Connect layout choices to real client-style spec work."
    ]
  };
  if(tags.includes("ODIN")&&title.includes("functions"))return {
    essence:"JavaScript functions, problem solving, understanding errors, and debugging vocabulary",
    bullets:[
      "Use functions to name a reusable chunk of logic and reduce repetition.",
      "Learn a problem-solving routine: understand the problem, plan, code, test, then debug.",
      "Read error messages as clues instead of treating them like a wall."
    ]
  };
  if(tags.includes("ODIN")&&(details.includes("dom")||title.includes("rps ui")||title.includes("etch"))){
    return {
      essence:"DOM manipulation, browser events, UI state, and turning console logic into interactive pages",
      bullets:[
        "Select page elements and change what the user sees with JavaScript.",
        "Handle clicks and other events so the page responds to human action.",
        "Turn earlier console logic into visible UI with state, feedback, and repeated interaction."
      ]
    };
  }
  if(tags.includes("ODIN")&&details.includes("fundamentals"))return {
    essence:"JavaScript fundamentals: variables, numbers, strings, operators, data types, and conditionals",
    bullets:[
      "Practice the basic vocabulary JavaScript uses to store and transform values.",
      "Use conditionals to make programs choose different paths.",
      "Compare new JavaScript ideas against what CS50 already taught in C."
    ]
  };
  if(tags.includes("FSO")&&title.includes("3a"))return {
    essence:"Node.js, Express, routes, and building the first REST API",
    bullets:[
      "Create a backend server that responds to HTTP requests.",
      "Define routes and handlers for basic API behavior.",
      "Connect frontend thinking to the server code that supplies data."
    ]
  };
  if(tags.includes("FSO")&&(title.includes("part 0")||title.includes("ai assistance unlocked")))return {
    essence:"how web apps work: browser, server, HTTP requests, forms, sequence diagrams, and safe Plan Mode habits",
    bullets:[
      "Learn the browser-server conversation behind ordinary web pages and single-page apps.",
      "Practice describing app behavior with sequence diagrams before jumping into code.",
      "Pair the FSO web-app mental model with the new Phase 2 rule: design first, let Codex assist second."
    ]
  };
  if(tags.includes("FSO")&&title.includes("3b"))return {
    essence:"deploying a backend, connecting frontend and server, and making the app reachable online",
    bullets:[
      "Move a backend from local development to an internet-accessible deployment.",
      "Connect frontend requests to the deployed server instead of a local-only URL.",
      "Learn the difference between code that works locally and code that survives online."
    ]
  };
  if(tags.includes("FSO")&&title.includes("3c"))return {
    essence:"MongoDB, Mongoose models, schemas, and saving data beyond the browser",
    bullets:[
      "Store app data in a real database instead of temporary memory or localStorage.",
      "Use models and schemas to describe the shape of saved data.",
      "Trace how a request becomes a database read or write."
    ]
  };
  if(tags.includes("FSO")&&title.includes("3d"))return {
    essence:"validation, linting, error handling, and making backend code stricter",
    bullets:[
      "Validate incoming data so bad inputs do not silently enter the database.",
      "Use linting as a tool for consistency and catching avoidable mistakes.",
      "Improve backend error paths instead of only testing the happy path."
    ]
  };
  if(tags.includes("FSO")&&title.includes("2a"))return {
    essence:"rendering collections, modules, key props, and breaking React code into pieces",
    bullets:[
      "Render arrays of data as visible lists of components.",
      "Use key props so React can track items safely across updates.",
      "Split code into modules so the project stays readable as it grows."
    ]
  };
  if(tags.includes("FSO")&&title.includes("2b"))return {
    essence:"forms, controlled inputs, submit handlers, and user-entered data",
    bullets:[
      "Connect form inputs to React state so the UI and data stay in sync.",
      "Handle submit events without losing or refreshing the page unexpectedly.",
      "Practice turning user input into app state you can validate and save."
    ]
  };
  if(tags.includes("FSO")&&title.includes("2c"))return {
    essence:"fetching server data, effects, async state, and loading real information into React",
    bullets:[
      "Use effects to request data after a component renders.",
      "Track async states so loading, success, and failure are visible.",
      "Connect API calls to the weather app and later full-stack products."
    ]
  };
  if(tags.includes("FSO")&&title.includes("2d"))return {
    essence:"POST, PUT, DELETE, CRUD, and changing data through HTTP",
    bullets:[
      "Send data to a server instead of only reading from it.",
      "Use HTTP methods to create, update, and delete records intentionally.",
      "Start thinking like a product builder: every button may need a request, response, and error state."
    ]
  };
  if(tags.includes("FSO")&&title.includes("2e"))return {
    essence:"styling React apps and finishing the Part 2 client-side data flow",
    bullets:[
      "Apply styling without hiding the underlying component and state logic.",
      "Finish the Part 2 exercises so collections, forms, effects, and requests connect.",
      "Notice the difference between a working exercise and a readable app."
    ]
  };
  if(tags.includes("FSO")&&title.includes("1a"))return {
    essence:"React components, JSX, props, and rendering small UI pieces",
    bullets:[
      "Learn components as reusable UI functions.",
      "Use JSX to describe markup inside JavaScript.",
      "Pass information through props so one component can configure another."
    ]
  };
  if(tags.includes("FSO")&&title.includes("1b"))return {
    essence:"modern JavaScript review: arrays, objects, functions, destructuring, and methods React depends on",
    bullets:[
      "Review JavaScript features that React code uses constantly.",
      "Practice array and object operations before they appear inside components.",
      "Spot which older fundamentals now matter because the framework leans on them."
    ]
  };
  if(tags.includes("FSO")&&title.includes("1c"))return {
    essence:"component state, event handlers, hooks, and making React respond to clicks",
    bullets:[
      "Use state to remember values that change while the app runs.",
      "Attach event handlers so user actions update the interface.",
      "Meet hooks as the standard way functional components manage behavior."
    ]
  };
  if(tags.includes("FSO")&&title.includes("1d"))return {
    essence:"complex state, debugging React apps, and understanding updates instead of guessing",
    bullets:[
      "Handle state that has more than one value or nested shape.",
      "Use debugging tools and deliberate logging to see what changed.",
      "Explain props and state before asking Codex to tidy the code."
    ]
  };
  if(tags.includes("FSO"))return {
    essence:"full-stack web fundamentals: browser behavior, components, requests, state, and server data",
    bullets:[
      "Connect what the browser shows to the code and data flow underneath.",
      "Do the exercises in the editor so the concept becomes behavior on screen.",
      "Trace one path out loud: user action, state change, request, response, or render."
    ]
  };
  if(tags.includes("CS50P"))return {
    essence:cs50pEssence(title),
    bullets:cs50pBullets(title, day)
  };
  if(ctx.phase===3)return phase3Profile(day, ctx);
  if(tags.includes("AGENTS")&&ctx.phase!==4)return {
    essence:"agent loops, tools, memory, frameworks, and when an agent is better than a simple prompt",
    bullets:[
      "Learn the think-act-observe loop that lets agents decide, use tools, and continue.",
      "Compare agent frameworks by how they organize tools, memory, state, and control flow.",
      "Save teaching notes that explain when agent complexity is worth it and when a simpler prompt is better."
    ]
  };
  if(tags.includes("CODEX")&&details.includes("streaming responses"))return {
    essence:"streaming responses, durable instructions, multi-turn state, and making AI output feel responsive",
    bullets:[
      "Understand why streaming improves perceived speed and how partial output reaches the UI.",
      "Separate instructions, user input, and state so conversations remain predictable.",
      "Build or sketch the smallest loop that proves the response can arrive incrementally."
    ]
  };
  if(tags.includes("CODEX")&&details.includes("tools and function calling"))return {
    essence:"tool schemas, function calling, the tool-call loop, and returning results to the model",
    bullets:[
      "Describe a tool with a schema the model can understand and call safely.",
      "Trace the loop: model asks for a tool, app runs it, app returns results, model continues.",
      "Name what the app owns versus what the model is allowed to decide."
    ]
  };
  if(tags.includes("CODEX")&&details.includes("multiple tools"))return {
    essence:"multiple tools, tool choice, error handling, and owning the orchestration loop in app code",
    bullets:[
      "Decide when the model may choose a tool and when the app should force a specific path.",
      "Handle tool errors as normal states instead of surprise failures.",
      "Keep orchestration readable so future creative automations can be debugged and taught."
    ]
  };
  if(tags.includes("CODEX")&&details.includes("prompt caching"))return {
    essence:"production AI patterns: prompt caching, retries, rate limits, batching, and reasoning-effort tradeoffs",
    bullets:[
      "Learn the reliability and cost patterns that matter once an AI feature has users.",
      "Compare retries, batching, caching, and rate-limit handling as product-engineering decisions.",
      "Write down which production pattern belongs in your first real AI workflow."
    ]
  };
  if(tags.includes("CODEX")&&title.includes("prompt engineering"))return {
    essence:"instructions, examples, structured outputs, evaluation, and prompt iteration as an engineering process",
    bullets:[
      "Treat prompts as testable instructions rather than one-off magic sentences.",
      "Use examples and structured outputs to make model behavior easier to inspect.",
      "Connect prompt iteration to evals so quality can improve with evidence."
    ]
  };
  if(tags.includes("CODEX")&&title.includes("evals"))return {
    essence:"building a tiny evaluation harness to test prompts against examples and scoring criteria",
    bullets:[
      "Create a small test set of inputs that represent the prompt's real job.",
      "Score outputs against explicit criteria instead of trusting vibes.",
      "Save the eval pattern as future proof that LectronicArt systems can be measured."
    ]
  };
  if(tags.includes("CODEX")&&title.includes("build your first mcp"))return {
    essence:"building a minimal MCP server that exposes tools through a reusable protocol",
    bullets:[
      "Create a small MCP server with one clear tool and a testable request path.",
      "Understand transports, messages, tool definitions, and model connection points.",
      "Document the server like a future lesson: what it exposes and why it matters."
    ]
  };
  if(tags.includes("CODEX")&&title.includes("mcp server for your workflow"))return {
    essence:"designing an MCP server around Derrick's real notes, media, or creative workflow",
    bullets:[
      "Choose a personal workflow worth wrapping as tools: notes, ffmpeg, search, or file operations.",
      "Define safe inputs, outputs, and boundaries before connecting it to a model.",
      "Build the server as reusable infrastructure for future creative automation."
    ]
  };
  if(tags.includes("CODEX")&&(title.includes("mcp")||details.includes("mcp")))return {
    essence:"MCP architecture: clients, servers, tools, transports, and reusable AI integrations",
    bullets:[
      "Understand why a protocol is stronger than one-off tool integrations.",
      "Map clients, servers, tools, message passing, and transports in plain language.",
      "Connect MCP to real creative workflows like notes, media processing, or content systems."
    ]
  };
  if(tags.includes("CODEX")&&title.includes("subagents"))return {
    essence:"Codex subagents, project-scoped roles, delegated review, and reusable team-like workflows",
    bullets:[
      "Learn how specialized agents can handle research, review, testing, or implementation slices.",
      "Define agent boundaries so delegation does not turn into confusion.",
      "Save the project-scoped pattern as a future way to teach AI-assisted building."
    ]
  };
  if(ctx.phase===4)return phase4Profile(day, ctx);
  if(tags.includes("CODEX")&&title.includes("level up your codex"))return {
    essence:"Codex best practices, AGENTS.md project instructions, tutor boundaries, and the Phase 2 review habit",
    bullets:[
      "Read the Codex and AGENTS.md guides as workflow tools, not abstract documentation.",
      "Set project instructions that keep AI assistance aligned with Derrick's learning rules.",
      "Practice the Phase 2 habit: ask better questions, review every line, and rebuild what is unclear."
    ]
  };
  if(title.includes("habit tracker"))return {
    essence:"streak logic, data shape design, one Codex-drafted function, and the explain-then-rebuild loop",
    bullets:[
      "Sketch the habit data model before asking Codex for any implementation help.",
      "Let Codex draft one small function, then inspect the logic line by line.",
      "Delete and rebuild the function so the AI-assisted version becomes Derrick's understanding."
    ]
  };
  if(title.includes("weather app: design"))return {
    essence:"weather app architecture: Open-Meteo API, component boundaries, loading states, and UI planning before code",
    bullets:[
      "Sketch the weather UI and decide which pieces should become components.",
      "Identify the API data the app needs before touching fetch code.",
      "Use Plan Mode to pressure-test the architecture while Derrick owns the design."
    ]
  };
  if(title.includes("weather app: build"))return {
    essence:"fetching current weather data, rendering API results, and reviewing improvement suggestions without outsourcing the core",
    bullets:[
      "Write the fetch call and current-weather display yourself.",
      "Trace request, response, parsing, state, and render so the API path is explainable.",
      "Use Codex as a reviewer for improvements, not as the author of the main logic."
    ]
  };
  if(title.includes("weather app: forecast"))return {
    essence:"five-day forecast data, loading state, error state, and making an API demo feel like a usable product",
    bullets:[
      "Add forecast data while keeping the request and render flow understandable.",
      "Show loading and error states so the interface communicates what is happening.",
      "Test a realistic failure path instead of only checking the happy path."
    ]
  };
  if(title.includes("weather app: ship"))return {
    essence:"deploying the weather app, polishing the final flow, and rebuilding the main data-fetching component from memory",
    bullets:[
      "Deploy the weather app so the project has a real public URL.",
      "Polish the path from search/input to forecast display.",
      "Delete and rebuild the main data-fetching component from memory to prove the concept stuck."
    ]
  };
  if(title.includes("notes app: design"))return {
    essence:"notes app data modeling, CRUD scope, component tree, and planning before implementation",
    bullets:[
      "Define what a note is: title, body, created time, edited state, and identifier.",
      "Sketch the component tree before generating code.",
      "Use Plan Mode to narrow CRUD scope so Create, Read, Update, and Delete each stay inspectable."
    ]
  };
  if(title.includes("notes app: create"))return {
    essence:"creating notes, rendering a notes list, and keeping first CRUD state clear",
    bullets:[
      "Build the form path that turns user input into a saved note object.",
      "Render a readable notes list from the current state.",
      "Review any AI-drafted line until the data flow from input to list is explainable."
    ]
  };
  if(title.includes("notes app: update"))return {
    essence:"editing notes, deleting notes, empty states, and finishing the core CRUD loop",
    bullets:[
      "Add edit behavior without losing track of which note is being changed.",
      "Add delete behavior and confirm the list updates correctly.",
      "Design an empty state so the app still feels intentional with no notes."
    ]
  };
  if(title.includes("notes app: markdown"))return {
    essence:"live markdown preview, localStorage persistence, and making notes survive a refresh",
    bullets:[
      "Add markdown preview so writing and rendering stay connected.",
      "Persist notes in localStorage and reload them when the app opens.",
      "Compare local browser storage against the real backend you will build next."
    ]
  };
  if(title.includes("notes app: polish"))return {
    essence:"deployment polish, checkpoint review, and proving React state, props, effects, and CRUD are understood",
    bullets:[
      "Polish and deploy the notes app as a finished Phase 2 artifact.",
      "Quiz the concepts behind the build: state, props, effects, CRUD, and persistence.",
      "Turn weak quiz answers into review slots instead of rushing ahead."
    ]
  };
  if(title.includes("notes app v2: real backend"))return {
    essence:"replacing localStorage with an Express/database backend and reviewing a multi-file Plan Mode change carefully",
    bullets:[
      "Plan the backend data model and API routes before changing files.",
      "Move persistence out of the browser and into a real server/database path.",
      "Review the multi-file diff slowly because backend changes affect the whole app."
    ]
  };
  if(title.includes("notes app v2: full-stack"))return {
    essence:"tracing the full-stack save path from click to frontend state, API request, backend route, and database write",
    bullets:[
      "Finish wiring the React frontend to the backend API.",
      "Trace one Save action from click through request, route, database, response, and UI update.",
      "Explain the full-stack path out loud until every handoff is clear."
    ]
  };
  if(title.includes("pick your clone"))return {
    essence:"mini-SaaS scope selection, spec writing, milestone planning, and cutting features before building",
    bullets:[
      "Choose one small product clone with a core feature that can be finished this week.",
      "Write the spec, milestones, and data needs before implementation.",
      "Cut scope twice so the project teaches shipping, not endless planning."
    ]
  };
  if(title.includes("build day 1"))return {
    essence:"implementing the mini-SaaS core feature with Derrick designing and AI assisting under review",
    bullets:[
      "Build the one behavior the mini-product exists to provide.",
      "Keep the first version narrow enough to test immediately.",
      "Review AI-assisted code line by line before accepting the core logic."
    ]
  };
  if(title.includes("build day 2"))return {
    essence:"adding persistence and edge-case handling to make the mini-SaaS behave like a real app",
    bullets:[
      "Save the product data somewhere durable enough for the chosen scope.",
      "Handle bad input, duplicates, empty states, and other realistic edge cases.",
      "Make the product recover gracefully instead of only working once."
    ]
  };
  if(title.includes("build day 3"))return {
    essence:"UI polish, spacing, typography, feedback states, and turning a functional mini-app into an intentional product",
    bullets:[
      "Improve spacing, typography, visual hierarchy, and state feedback.",
      "Check empty, success, and error states so the app communicates clearly.",
      "Polish only what supports the core feature and user understanding."
    ]
  };
  if(title.includes("deploy + readme"))return {
    essence:"deployment, README product storytelling, screenshots, and explaining who the mini-SaaS is for",
    bullets:[
      "Deploy the mini-SaaS so it can be opened outside your machine.",
      "Write the README like a tiny product page: what it does, who it helps, and how to try it.",
      "Add screenshots or proof so the project can teach future-you what shipped."
    ]
  };
  if(title.includes("phase 2 retro"))return {
    essence:"reviewing FSO Parts 0-3, identifying weak spots, and naming what Derrick can build after 12 weeks",
    bullets:[
      "Quiz the Phase 2 concepts: React, state, effects, CRUD, APIs, backend, and deployment.",
      "Turn the two weakest topics into planned review sessions.",
      "Write what you can now build that was impossible twelve weeks earlier."
    ]
  };
  if(tags.includes("CODEX")&&details.includes("plan mode"))return {
    essence:"using Codex as a planning and review partner while Derrick keeps ownership of design decisions",
    bullets:[
      "Write the intended shape of the feature before any code is drafted.",
      "Use Codex to challenge scope, risks, and tradeoffs instead of blindly accepting output.",
      "Read every changed line so assistance becomes understanding, not dependency."
    ]
  };
  if(tags.includes("CODEX")||tags.includes("AGENTS"))return {
    essence:"AI workflow design: instructions, review habits, tool boundaries, and reusable prompts",
    bullets:[
      "Define what the AI helper is allowed to do and what Derrick still owns.",
      "Turn prompts, rules, or docs into a repeatable workflow.",
      "Save the habit or example so it can become future LectronicArt teaching material."
    ]
  };
  if(tags.includes("SHIP"))return {
    essence:"audience-facing proof, feedback, launch decisions, and evidence from real humans",
    bullets:[
      "Put work in front of someone instead of keeping it private.",
      "Capture the response as evidence: quote, metric, objection, confusion, or silence.",
      "Use the signal to decide the next product, content, or community move."
    ]
  };
  if(tags.includes("BUILD"))return {
    essence:"turning the lesson into a working artifact with one clear happy path and one checked edge case",
    bullets:[
      "Name the smallest version that can work before adding extras.",
      "Build the happy path first, then test one realistic failure or edge case.",
      "Save the artifact, commit, or note so it can become proof of the learning."
    ]
  };
  return {
    essence:"turning today's roadmap instruction into a concrete note, decision, artifact, or next action",
    bullets:[
      cleanLessonBullet(day.d[0]||day.t),
      cleanLessonBullet(day.d[1]||"Write the plain-language takeaway before moving on."),
      "End with one saved note that future-you can use when teaching this lesson."
    ]
  };
}

function manualLessonProfile(day){
  return {
    essence:day.lesson.essence,
    bullets:day.lesson.bullets
  };
}

function phase4Profile(day, ctx){
  const title=day.t.toLowerCase();
  if(title.includes("creative brief generator"))return {
    essence:"shipping a first AI utility that turns OpenAI API basics into a creator-facing brief generator",
    bullets:[
      "Wrap the first API patterns in a small tool a creative person can understand.",
      "Define the inputs, output format, and quality bar for a useful creative brief.",
      "Ship the generator as proof that AI docs can become a reusable creative workflow."
    ]
  };
  if(title.includes("creator prompt templates"))return {
    essence:"prompt templates for creators, reusable inputs, expected outputs, and plain-language usage notes",
    bullets:[
      "Turn repeated creative tasks into templates with clear slots and examples.",
      "Explain when each prompt should be used and what good output looks like.",
      "Save templates as assets future LectronicArt members could actually reuse."
    ]
  };
  if(title.includes("prompt chains"))return {
    essence:"multi-step prompting, handoffs between outputs, and building a repeatable creative workflow",
    bullets:[
      "Chain prompts so one output becomes the input for the next step.",
      "Name each step's job, expected format, and failure point.",
      "Test the chain on more than one creative input so it is not a one-off trick."
    ]
  };
  if(title.includes("prompt system"))return {
    essence:"packaging prompt templates into a documented first digital product prototype",
    bullets:[
      "Assemble the strongest prompts into one organized pack.",
      "Add a plain-language usage guide so another creator can run the system without you.",
      "Treat the pack as an early LectronicArt product artifact, not just notes."
    ]
  };
  if(title.includes("give it away"))return {
    essence:"free distribution, measurement links, feedback capture, and learning what creators actually value",
    bullets:[
      "Share the prompt system where real creators can download or use it.",
      "Track responses, saves, questions, and confusion as product evidence.",
      "Use the feedback to decide what deserves improvement or teaching."
    ]
  };
  if(title.includes("build your first mcp"))return {
    essence:"building a minimal MCP server that exposes tools through a reusable protocol",
    bullets:[
      "Create a small MCP server with one clear tool and a testable request path.",
      "Understand transports, messages, tool definitions, and model connection points.",
      "Document the server like a future lesson: what it exposes and why it matters."
    ]
  };
  if(title.includes("mcp server for your workflow"))return {
    essence:"designing an MCP server around Derrick's real notes, media, or creative workflow",
    bullets:[
      "Choose a personal workflow worth wrapping as tools: notes, ffmpeg, search, or file operations.",
      "Define safe inputs, outputs, and boundaries before connecting it to a model.",
      "Build the server as reusable infrastructure for future creative automation."
    ]
  };
  if(title.includes("finish + connect"))return {
    essence:"connecting the MCP workflow across tools and making the integration usable beyond one demo",
    bullets:[
      "Finish the working MCP path and connect it where it will actually be used.",
      "Check setup steps, tool names, failures, and expected outputs from a cold-start view.",
      "Save notes that make the integration teachable later."
    ]
  };
  if(title.includes("harden"))return {
    essence:"hardening an MCP/tool project, documenting it, and open-sourcing it with clear setup instructions",
    bullets:[
      "Handle obvious errors and confusing setup steps before sharing.",
      "Write a README that explains what the tool does and how to run it.",
      "Open-source it as public proof of an AI workflow Derrick understands."
    ]
  };
  if(title==="teach it")return {
    essence:"turning a built tool into a tutorial, demo, or lesson that another creator can follow",
    bullets:[
      "Explain the workflow in plain language from problem to working result.",
      "Show the tool running instead of only describing architecture.",
      "Capture questions or confusion as material for the next teaching pass."
    ]
  };
  if(title.includes("agent fundamentals"))return {
    essence:"agent basics: goals, tools, memory, the think-act-observe loop, and when agents beat simple prompts",
    bullets:[
      "Learn the think-act-observe loop that lets an agent plan, act, observe, and continue.",
      "Compare agent behavior with a simple one-shot prompt.",
      "Write down when agent complexity is useful and when it is unnecessary."
    ]
  };
  if(title.includes("frameworks tour"))return {
    essence:"agent framework patterns: loops, tools, state, memory, and how frameworks organize orchestration",
    bullets:[
      "Compare how agent frameworks structure actions, observations, and tool calls.",
      "Notice which framework pieces are convenience and which are core concepts.",
      "Translate framework vocabulary back into plain-language teaching notes."
    ]
  };
  if(title.includes("idea-research agent"))return {
    essence:"building a first useful agent that researches ideas and returns structured creative or product insight",
    bullets:[
      "Define the research question and what a useful answer must include.",
      "Give the agent tools, constraints, and an output structure.",
      "Compare agent output against what a simpler prompt would have produced."
    ]
  };
  if(title.includes("holiday hack"))return {
    essence:"optional low-pressure experimentation that keeps curiosity alive without breaking recovery",
    bullets:[
      "Choose one tiny playful AI or creative automation experiment.",
      "Keep the scope small enough to finish without turning rest into pressure.",
      "Save the idea if it teaches something worth revisiting."
    ]
  };
  if(title.includes("agent memory"))return {
    essence:"agent memory, tool use, persistent context, and connecting agent ideas to Derrick's Obsidian-style memory",
    bullets:[
      "Learn how memory changes what an agent can remember across steps or sessions.",
      "Connect persistent context to tools, notes, and retrieval workflows.",
      "Decide what memory should store, what should stay private, and what can be rebuilt."
    ]
  };
  if(title.includes("content engine agent"))return {
    essence:"building a content engine agent that turns ideas into structured posts or creative assets",
    bullets:[
      "Define the content engine's inputs, voice rules, output formats, and review path.",
      "Build the smallest agent loop that can draft one useful content asset.",
      "Save examples for future teaching on AI-assisted publishing systems."
    ]
  };
  if(title.includes("add a critic"))return {
    essence:"adding a critic pass, quality criteria, and before/after comparison to improve AI output",
    bullets:[
      "Define the voice and quality rules the critic should enforce.",
      "Run output through a second review pass and compare with the original.",
      "Save before/after examples as proof that review systems improve creative workflows."
    ]
  };
  if(title.includes("2026 retro"))return {
    essence:"year-end reflection, thesis drafting, and turning the learning journey into LectronicArt strategy",
    bullets:[
      "Compare June Derrick with December Derrick using real artifacts and skills.",
      "Draft the LectronicArt 2027 thesis: audience, transformation, proof, and offer direction.",
      "Turn the retro into founder clarity instead of vague motivation."
    ]
  };
  if(title.includes("ship content engine"))return {
    essence:"shipping the content engine as a usable system and capturing proof that it works",
    bullets:[
      "Run the content engine on real inputs and collect usable outputs.",
      "Package the workflow so it can be repeated later.",
      "Share or save proof that the engine turns ideas into publishable assets."
    ]
  };
  if(title.includes("comfyui setup"))return {
    essence:"ComfyUI setup, first render, node-based image workflow, and saving reproducible creative settings",
    bullets:[
      "Install and open ComfyUI, then generate one successful first render.",
      "Notice nodes as a visual system for inputs, models, settings, and outputs.",
      "Save settings and outputs so the render can become a reproducible lesson."
    ]
  };
  if(title.includes("node literacy"))return {
    essence:"ComfyUI node literacy: checkpoints, samplers, CFG, latent space, VAE, and teaching vocabulary",
    bullets:[
      "Learn what the core ComfyUI nodes do in the generation process.",
      "Translate technical node names into plain creator language.",
      "Create a mini glossary future students can use when the graph feels intimidating."
    ]
  };
  if(title.includes("style consistency"))return {
    essence:"consistent AI art style through prompts, settings, seeds, references, and repeatable comparisons",
    bullets:[
      "Create multiple outputs that intentionally belong to the same visual family.",
      "Track prompts, settings, seeds, and references that affect style consistency.",
      "Compare results and save what makes the workflow reproducible."
    ]
  };
  if(title.includes("comfyui as an api"))return {
    essence:"running ComfyUI through an API-style workflow so image generation can be automated",
    bullets:[
      "Trigger a ComfyUI workflow from code or an API-like request.",
      "Name the inputs the automation can safely change.",
      "Connect visual generation to the broader creative automation stack."
    ]
  };
  if(title.includes("batch generation"))return {
    essence:"batch image generation, variation control, output naming, and repeatable creative production",
    bullets:[
      "Generate multiple outputs from structured prompt or setting variations.",
      "Organize files so good results and failed attempts can be reviewed later.",
      "Treat batch generation as a production workflow, not random image hunting."
    ]
  };
  if(title.includes("ai art workflow"))return {
    essence:"packaging an AI art workflow with inputs, outputs, install steps, and a creator-facing guide",
    bullets:[
      "Export the workflow and explain how another creator can run it.",
      "Document setup, inputs, outputs, and the quality bar for a good result.",
      "Ship the workflow as a free proof artifact for LectronicArt."
    ]
  };
  if(title.includes("video stack"))return {
    essence:"video automation stack survey, ffmpeg basics, codecs, trimming, conversion, and command-line media work",
    bullets:[
      "Learn the role of ffmpeg in manipulating video and audio files.",
      "Run basic trim, convert, or inspect commands so media automation becomes concrete.",
      "Choose which video tasks are worth automating in the LectronicArt stack."
    ]
  };
  if(title.includes("script → voiceover"))return {
    essence:"turning a script into voiceover and first video assembly",
    bullets:[
      "Create a script-to-voiceover-to-video path with clear file inputs and outputs.",
      "Keep the first video workflow simple enough to debug.",
      "Document every handoff so the pipeline can be repeated."
    ]
  };
  if(title.includes("auto-captions"))return {
    essence:"automatic captions, timing, readability, and making generated video easier to consume",
    bullets:[
      "Generate captions from voiceover or transcript text.",
      "Check timing, line length, and readability on the finished video.",
      "Treat captions as accessibility, retention, and polish, not decoration."
    ]
  };
  if(title.includes("b-roll"))return {
    essence:"generated b-roll, image-to-video inserts, and matching visuals to script moments",
    bullets:[
      "Identify script moments that need visual support.",
      "Generate or insert b-roll that clarifies the idea instead of distracting from it.",
      "Save inputs and outputs so the video workflow is repeatable."
    ]
  };
  if(title.includes("finished video"))return {
    essence:"one-prompt video pipeline: script, voice, captions, b-roll, assembly, and final export",
    bullets:[
      "Run the full video pipeline from one starting prompt or brief.",
      "Check every stage: script, voiceover, captions, visuals, assembly, and export.",
      "Save the finished video and the workflow notes as teaching proof."
    ]
  };
  if(title.includes("meta-video"))return {
    essence:"publishing a video about the video automation workflow and teaching the system through proof",
    bullets:[
      "Explain what the video pipeline does and why it matters for creators.",
      "Show enough process that viewers trust the workflow is real.",
      "Publish the meta-video as proof-of-work for LectronicArt."
    ]
  };
  if(title.includes("content os"))return {
    essence:"designing the LectronicArt content operating system: inputs, pipeline, review, publishing, and measurement",
    bullets:[
      "Map how raw ideas become posts, videos, assets, and follow-ups.",
      "Define the roles of AI, Derrick, automation, review, and publishing.",
      "Design the system before wiring tools so the machine serves the strategy."
    ]
  };
  if(title.includes("wire the machine"))return {
    essence:"connecting the content OS pieces into one working automation path",
    bullets:[
      "Connect idea capture, generation, review, scheduling, and measurement pieces.",
      "Run one item through the machine from input to output.",
      "Document the failure points so the system can be improved instead of trusted blindly."
    ]
  };
  if(title.includes("n8n"))return {
    essence:"n8n as the no-code mirror of the same automation logic",
    bullets:[
      "Build or sketch the workflow in n8n to understand visual automation.",
      "Compare code-based automation with no-code nodes and triggers.",
      "Learn which parts creators could manage without writing code."
    ]
  };
  if(title.includes("publishing + measurement"))return {
    essence:"publishing automation, measurement loops, and connecting output to response",
    bullets:[
      "Add or define the publishing step for the content OS.",
      "Track which outputs get attention, replies, saves, or conversions.",
      "Use measurement to decide the next creative system improvement."
    ]
  };
  if(title.includes("run it for real"))return {
    essence:"running the content OS on real LectronicArt material instead of demo inputs",
    bullets:[
      "Feed the system a real idea, proof artifact, or lesson.",
      "Publish or save the output where it can be judged honestly.",
      "Record what broke, what worked, and what should be automated next."
    ]
  };
  if(title.includes("queue a full week"))return {
    essence:"batching a full week of content while preserving quality, review, and measurement",
    bullets:[
      "Generate and review enough assets for a full week of publishing.",
      "Check that the queue has variety, clarity, and a visible content arc.",
      "Use the batch as evidence that the content OS can save real time."
    ]
  };
  if(title.includes("audit your arsenal"))return {
    essence:"auditing every built workflow, prompt, script, template, and proof artifact for product potential",
    bullets:[
      "List the assets built during the journey and what each one does.",
      "Identify which assets are useful, teachable, repeatable, or productizable.",
      "Choose what belongs in the first public starter kit."
    ]
  };
  if(title.includes("templates #1"))return templateProfile("templates #1-2");
  if(title.includes("templates #3"))return templateProfile("templates #3-4");
  if(title.includes("creator os"))return {
    essence:"organizing templates and workflows into a Creator OS that helps a creative builder operate repeatedly",
    bullets:[
      "Group workflows into an operating system instead of scattered files.",
      "Define inputs, outputs, review habits, and naming conventions.",
      "Make the system understandable for a creator who wants leverage, not complexity."
    ]
  };
  if(title.includes("starter kit"))return {
    essence:"packaging the Creator OS into a starter kit with docs, demo proof, and a clear first win",
    bullets:[
      "Choose the smallest kit that can give a new creator a visible result.",
      "Write setup and use instructions in plain language.",
      "Ship the kit with demo proof so value is visible before anyone studies the docs."
    ]
  };
  if(title.includes("beta test"))return {
    essence:"testing the starter kit with real creators and learning where setup, value, or language breaks",
    bullets:[
      "Give the kit to beta testers and watch where they get stuck.",
      "Capture questions, failed setup steps, and missing context.",
      "Turn beta feedback into improvements before the bigger launch."
    ]
  };
  if(title.includes("study the winners"))return {
    essence:"studying successful Skool communities to understand positioning, offers, onboarding, and engagement loops",
    bullets:[
      "Analyze what strong communities promise and how they create first wins.",
      "Look for patterns in onboarding, content cadence, accountability, and offer structure.",
      "Extract lessons without copying another community's identity."
    ]
  };
  if(title.includes("define lectronicart"))return {
    essence:"writing the LectronicArt one-pager: audience, transformation, proof, promise, and positioning",
    bullets:[
      "Define who LectronicArt serves and what transformation it helps them achieve.",
      "Use proof from the journey instead of vague AI hype.",
      "Write positioning that creative builders can recognize themselves inside."
    ]
  };
  if(title.includes("curriculum from your archive"))return {
    essence:"turning nine months of artifacts into a teachable curriculum outline",
    bullets:[
      "Map built artifacts into modules, lessons, and student outcomes.",
      "Choose proof examples that show the journey from foundations to AI systems.",
      "Turn personal notes into curriculum structure future members can follow."
    ]
  };
  if(title.includes("flagship lead magnet"))return {
    essence:"polishing the 252-Day Builder Calendar into a lead magnet that teaches the journey and attracts the right creators",
    bullets:[
      "Improve this calendar as the public artifact that explains the transformation.",
      "Make the roadmap clear enough for strangers to trust and use.",
      "Connect the lead magnet to the LectronicArt community path."
    ]
  };
  if(title.includes("set up shop"))return {
    essence:"setting up the Skool/community shop, offer page, waitlist, and payment/onboarding basics",
    bullets:[
      "Set up the public home for the community or founding cohort.",
      "Connect the offer, waitlist, payment, or contact path clearly.",
      "Check the first visitor journey before inviting anyone in."
    ]
  };
  if(title.includes("founding 30"))return {
    essence:"building a founding-member outreach list from real names, real fit, and specific reasons",
    bullets:[
      "List thirty people who could genuinely benefit from LectronicArt.",
      "Write why each person fits the transformation instead of blasting strangers.",
      "Use the list as relationship-based launch preparation."
    ]
  };
  if(title.includes("module 1"))return moduleProfile("Module 1", "fundamentals and Creator OS setup");
  if(title.includes("module 2"))return moduleProfile("Module 2", "prompt systems and AI workflow fundamentals");
  if(title.includes("accountability engine"))return {
    essence:"designing accountability loops that help members keep building after the first burst of motivation",
    bullets:[
      "Create a rhythm for check-ins, progress proof, and peer visibility.",
      "Define what members should share when they are stuck or shipping.",
      "Make accountability feel useful, not like school homework."
    ]
  };
  if(title.includes("founding offer"))return {
    essence:"founding offer design, pricing experiment, risk reversal, and deciding what evidence will prove demand",
    bullets:[
      "Write the founding offer with transformation, scope, price, and expectations.",
      "Design the experiment so the result teaches something either way.",
      "Name what will count as enough signal to open the cohort."
    ]
  };
  if(title.includes("launch assets"))return {
    essence:"building launch assets: offer page, posts, screenshots, proof, FAQs, and onboarding messages",
    bullets:[
      "Prepare the assets people need to understand and trust the founding cohort.",
      "Use proof from the journey instead of empty promises.",
      "Make each asset point to one clear next action."
    ]
  };
  if(title==="dry run")return {
    essence:"running the entire cohort purchase/onboarding path before real members arrive",
    bullets:[
      "Walk through the path from offer page to payment or signup.",
      "Check welcome messages, first-win instructions, and support contact points.",
      "Fix anything that would make a founding member feel lost."
    ]
  };
  if(title.includes("doors open"))return {
    essence:"opening the founding cohort through personal outreach and public announcement",
    bullets:[
      "Invite the founding list with individual messages, not blasts.",
      "Announce publicly using story, proof, transformation, and a clear ask.",
      "Reply to everything so launch day becomes conversation, not broadcast."
    ]
  };
  if(title.includes("public launch push"))return {
    essence:"launching across channels with story, offer, proof, and follow-up content",
    bullets:[
      "Publish the launch story across the channels where you've built trust.",
      "Lead with the journey and proof, then explain the founding offer.",
      "Queue follow-up content so the launch has momentum beyond one post."
    ]
  };
  if(title.includes("white-glove"))return {
    essence:"personally onboarding founding members and getting each one to a 48-hour first win",
    bullets:[
      "Welcome each member personally and ask what they want to build first.",
      "Guide them toward a fast, visible first win.",
      "Capture repeated onboarding questions as curriculum and community improvements."
    ]
  };
  if(title.includes("first live workshop"))return {
    essence:"hosting the first live workshop by building, debugging, and teaching in public",
    bullets:[
      "Run a live session that shows real building, not polished theory.",
      "Let mistakes and fixes become part of the teaching style.",
      "Turn member questions into the next lesson, template, or support asset."
    ]
  };
  if(title.includes("same-day shipping"))return {
    essence:"shipping the most-requested member improvement during launch week",
    bullets:[
      "Choose the most repeated request or stuck point from founding members.",
      "Ship one useful improvement the same day if it is safe and small.",
      "Tell members what changed so they feel heard and invested."
    ]
  };
  if(title.includes("day 252"))return {
    essence:"final retro: counting the full 36-week transformation, proof, members, lessons, and the Q2 2027 decision",
    bullets:[
      "Count the receipts: skills learned, systems built, members helped, and artifacts shipped.",
      "Write the honest story from beginner to founder-teacher.",
      "Choose the next LectronicArt move from proof, not from fantasy."
    ]
  };
  return {
    essence:"turning a LectronicArt system, creative workflow, or launch move into proof and teaching material",
    bullets:[
      cleanLessonBullet(day.d[0]||day.t),
      cleanLessonBullet(day.d[1]||"Document the system, proof, or member signal this block creates."),
      "Save the artifact so a future creator can understand, reuse, or learn from it."
    ]
  };
}

function templateProfile(name){
  return {
    essence:"building "+name+" as reusable creative-builder assets with clear inputs, outputs, and use cases",
    bullets:[
      "Choose templates that solve repeated creative or business workflow problems.",
      "Document inputs, outputs, setup steps, and example results.",
      "Package each template so another creator can use it without Derrick explaining live."
    ]
  };
}

function moduleProfile(name, focus){
  return {
    essence:"recording "+name+" around "+focus+" with screen recordings, written guide, and a clear student outcome",
    bullets:[
      "Turn the archived proof into a teachable module with a visible outcome.",
      "Record the lesson imperfectly but clearly enough for a founding member to follow.",
      "Save the written guide beside the video so the curriculum can improve later."
    ]
  };
}

function phase3Profile(day, ctx){
  const title=day.t.toLowerCase();
  const theme=ctx.theme.toLowerCase();
  if(title.includes("list 10 real problems"))return {
    essence:"problem discovery: separating real pains from imagined product ideas",
    bullets:[
      "List problems from your own life and communities before naming solutions.",
      "Look for repeated pain, current workarounds, and emotional weight.",
      "Treat the list as raw evidence for the product journey, not a pitch deck."
    ]
  };
  if(title.includes("talk to 3 humans"))return {
    essence:"customer discovery conversations, listening without pitching, and collecting exact words",
    bullets:[
      "Interview three potential users about their version of the problem.",
      "Ask about current behavior and workarounds instead of selling your idea.",
      "Save exact quotes because future product copy should come from real language."
    ]
  };
  if(title.includes("score & commit"))return {
    essence:"idea scoring, MVP feasibility, user evidence, and committing to one problem statement",
    bullets:[
      "Score each idea by personal pain, buildability, infrastructure risk, and user potential.",
      "Choose one winner instead of keeping every possibility alive.",
      "Write a one-page problem statement that names who hurts, how, and what they do today."
    ]
  };
  if(title.includes("sketch the mvp"))return {
    essence:"paper prototyping, ruthless scope cuts, and turning a problem into the smallest usable flow",
    bullets:[
      "Sketch every important screen before creating files.",
      "Cut features until the MVP has one clear path to value.",
      "Use the sketch to make future Codex plans easier to challenge."
    ]
  };
  if(title.includes("define done"))return {
    essence:"MVP boundaries, user stories, README clarity, and protecting the product from scope creep",
    bullets:[
      "Write no more than three user stories that define the whole MVP.",
      "Move extra ideas into later.md so they do not silently become commitments.",
      "Make done visible enough that future decisions can be judged against it."
    ]
  };
  if(title.includes("scaffold the stack"))return {
    essence:"creating the real product repo, connecting the 2026 stack, and setting up deploy-on-push",
    bullets:[
      "Create the Next.js, TypeScript, and Tailwind foundation for the real MVP.",
      "Push to GitHub and connect Vercel so every change has a deployment path.",
      "Treat the scaffold as product infrastructure, not another practice exercise."
    ]
  };
  if(title.includes("supabase: data model"))return {
    essence:"database schema design, table relationships, and challenging the data model before users depend on it",
    bullets:[
      "Plan the Supabase tables around actual user actions and product objects.",
      "Challenge fields, relationships, and ownership rules before creating the schema.",
      "Use Plan Mode to surface data-shape risks while Derrick makes the final call."
    ]
  };
  if(title.includes("supabase: auth"))return {
    essence:"email authentication, protected routes, sessions, and the first real account system",
    bullets:[
      "Wire sign up, log in, log out, and protected pages end to end.",
      "Check what the app shows for signed-out and signed-in users.",
      "Understand auth as product trust, not just a login form."
    ]
  };
  if(title.includes("app shell"))return {
    essence:"navigation, page structure, empty states, and building the core screen with fake data first",
    bullets:[
      "Create the layout and navigation that will hold the MVP.",
      "Write honest empty states so blank screens still explain the product.",
      "Use fake data to shape the core screen before wiring live data."
    ]
  };
  if(title.includes("core screen (live)"))return {
    essence:"connecting the core screen to Supabase and testing the first real data flow",
    bullets:[
      "Replace hardcoded data with real Supabase reads or writes.",
      "Check the screen with a realistic record instead of a perfect demo value.",
      "Show the half-working product to one person so real confusion enters the roadmap."
    ]
  };
  if(title.includes("plan mode: spec feature #1"))return specProfile("feature #1", "the single most important product feature");
  if(title.includes("plan mode: spec feature #2"))return specProfile("feature #2", "the second feature or data flow that connects the product journey");
  if(title==="build"&&theme.includes("sprint 1"))return buildSprintProfile("feature #1", "happy path");
  if(title==="build"&&theme.includes("sprint 2"))return buildSprintProfile("feature #2", "happy path");
  if(title.includes("build + edge cases")&&theme.includes("sprint 1"))return edgeProfile("feature #1");
  if(title.includes("build + edge cases")&&theme.includes("sprint 2"))return edgeProfile("feature #2");
  if(title.includes("manual test"))return {
    essence:"hostile manual testing, finding weak spots, and rebuilding one tricky AI-assisted function from scratch",
    bullets:[
      "Use the feature like an impatient stranger and record every rough edge.",
      "Fix the highest-risk breakage before adding anything new.",
      "Delete and rebuild the trickiest Codex-assisted function to prove the logic is yours."
    ]
  };
  if(title.includes("connect + test"))return {
    essence:"connecting two product features into one end-to-end user journey and testing the whole path",
    bullets:[
      "Make feature #1 and feature #2 work together instead of as isolated pieces.",
      "Trace one full user journey from start to finish.",
      "Run hostile-stranger testing on the connected path and fix the most important break."
    ]
  };
  if(title.includes("demo + journal"))return {
    essence:"showing a build to another person, noticing fear, and turning reactions into product learning",
    bullets:[
      "Demo the feature to someone instead of judging it alone.",
      "Watch where they understand, hesitate, or misunderstand the flow.",
      "Journal what you learned and what scared you so the next sprint has emotional evidence too."
    ]
  };
  if(title.includes("first-minute experience"))return {
    essence:"designing the first 60 seconds of a new user's journey",
    bullets:[
      "Map what a brand-new user sees before they trust the product.",
      "Define the first success moment and remove steps that delay it.",
      "Use Plan Mode to challenge onboarding friction before implementing it."
    ]
  };
  if(title.includes("build onboarding"))return {
    essence:"signup-to-first-success onboarding, self-serve value, and reducing the need for explanation",
    bullets:[
      "Build the path from signup to first meaningful result.",
      "Make the next step obvious without Derrick standing beside the user.",
      "Test whether the app teaches the user what to do through the interface itself."
    ]
  };
  if(title.includes("ux + copy"))return {
    essence:"plain-language interface copy, feedback states, errors, empty states, and reducing confusion",
    bullets:[
      "Rewrite buttons, errors, and empty states in human language.",
      "Add feedback for important actions so users are not left guessing.",
      "Treat words as part of the product experience, not decoration."
    ]
  };
  if(title.includes("mobile pass"))return {
    essence:"using the whole product on a phone and fixing cramped or broken mobile workflows",
    bullets:[
      "Walk the full app on a real phone-sized viewport.",
      "Fix touch targets, cramped layouts, overflow, and hidden content.",
      "Keep mobile behavior focused on the core user journey, not desktop assumptions."
    ]
  };
  if(title.includes("self-serve test"))return {
    essence:"watching a zero-context user try onboarding without help",
    bullets:[
      "Hand the app to someone without explaining the goal.",
      "Stay quiet and note every stumble, hesitation, and question.",
      "Turn the biggest stumble into one onboarding fix or copy change."
    ]
  };
  if(title.includes("error states"))return {
    essence:"loading, error, and empty states for every fetch path",
    bullets:[
      "Audit every data request for loading, success, empty, and error states.",
      "Replace silent failure with clear user-facing feedback.",
      "Make the app feel trustworthy when the network or data path is imperfect."
    ]
  };
  if(title.includes("data integrity"))return {
    essence:"Supabase row-level security, ownership boundaries, and preventing user data leaks",
    bullets:[
      "Check whether user A can ever see or change user B's data.",
      "Use Plan Mode because security changes deserve careful review.",
      "Treat data boundaries as part of the product promise."
    ]
  };
  if(title.includes("performance pass"))return {
    essence:"finding the slowest screen, understanding why it is slow, and proving the fix works",
    bullets:[
      "Identify the slowest interaction or screen before optimizing blindly.",
      "Ask Codex to explain the bottleneck and the tradeoff of the fix.",
      "Verify that the user-visible behavior is faster after the change."
    ]
  };
  if(title.includes("seed data"))return {
    essence:"realistic demo data, demo accounts, and preventing the product from looking empty",
    bullets:[
      "Create believable seed data that shows the product's intended value.",
      "Add a demo flow so new visitors do not stare at a blank app.",
      "Use seed data as a teaching artifact for what good product state looks like."
    ]
  };
  if(title.includes("bug sweep"))return {
    essence:"working through the bug list, declaring feature freeze, and protecting launch stability",
    bullets:[
      "Fix the highest-priority bugs before considering any new feature.",
      "Declare feature freeze so launch prep does not become scope creep.",
      "Write the moment down: the MVP now exists as a real artifact."
    ]
  };
  if(title.includes("production deploy"))return {
    essence:"production deployment, custom domain, and checking the product across real devices",
    bullets:[
      "Deploy the production build and connect the domain.",
      "Check the app on laptop, phone, and one borrowed device.",
      "Treat deployment as the beginning of real product feedback, not the finish line."
    ]
  };
  if(title.includes("friend test"))return friendTestProfile(title);
  if(title.includes("fix round"))return {
    essence:"turning observed user confusion into same-week product fixes",
    bullets:[
      "Review the top confusions from the previous user test.",
      "Fix only the highest-leverage issues instead of redesigning everything.",
      "Test again quickly so the product learns from real behavior in loops."
    ]
  };
  if(title.includes("landing page: the headline"))return {
    essence:"positioning the product by naming the pain instead of bragging about the technology",
    bullets:[
      "Write a headline that speaks to the user's problem in plain language.",
      "Avoid feature-first or AI-first copy unless it helps the pain feel understood.",
      "Use words from real user conversations whenever possible."
    ]
  };
  if(title.includes("landing page: build"))return {
    essence:"landing page structure, benefits, screenshots, demo media, and a clear call to action",
    bullets:[
      "Build the landing page around headline, benefits, screenshots, and one CTA.",
      "Record a short demo GIF or video so the product is visible quickly.",
      "Add a feedback or contact path so interested people can respond."
    ]
  };
  if(title.includes("friend-test cleanup"))return {
    essence:"clearing remaining user-test issues before broader launch",
    bullets:[
      "Review the unresolved issues from friend testing.",
      "Fix the problems that block comprehension or first success.",
      "Leave smaller polish ideas in the backlog if they do not affect launch confidence."
    ]
  };
  if(title.includes("lighthouse"))return {
    essence:"accessibility, performance, image size, contrast, alt text, and focus-state quick wins",
    bullets:[
      "Run Lighthouse and identify the cheap high-impact fixes.",
      "Improve contrast, alt text, focus states, and obvious performance issues.",
      "Treat accessibility as part of making the product usable by strangers."
    ]
  };
  if(title.includes("soft launch"))return {
    essence:"sharing the product in one trusted community and asking for feedback instead of applause",
    bullets:[
      "Choose one community where you already have trust.",
      "Share the product with a clear request for feedback.",
      "Collect response quality, not just likes or compliments."
    ]
  };
  if(title.includes("pricing"))return {
    essence:"pricing decision, Stripe test mode, checkout planning, and payment-risk review",
    bullets:[
      "Decide whether to charge now or capture a paid-tier waitlist, and write the reason.",
      "Use Plan Mode because payments touch trust, data, and edge cases.",
      "Wire Stripe Checkout in test mode before exposing anything live."
    ]
  };
  if(title.includes("stripe: live"))return {
    essence:"live Stripe checkout, webhook events, and responding to real payment state changes",
    bullets:[
      "Move from test checkout to live payment handling carefully.",
      "Handle the webhook events that matter for the product's user experience.",
      "Verify what happens after checkout completes or a subscription changes."
    ]
  };
  if(title.includes("analytics"))return {
    essence:"product analytics, event definition, and measuring whether users reach value",
    bullets:[
      "Choose the three events that reveal whether the product is working.",
      "Instrument signup, first success action, and return behavior clearly.",
      "Use analytics to ask better questions, not to collect noise."
    ]
  };
  if(title.includes("email capture"))return {
    essence:"email capture, welcome message, and continuing the relationship after first interest",
    bullets:[
      "Add an email capture point that makes sense in the user journey.",
      "Write a simple welcome email that sets expectations and invites reply.",
      "Treat the list as a relationship with future users, not just a metric."
    ]
  };
  if(title.includes("full dry run"))return {
    essence:"testing the full customer path from landing page to signup, success, and payment",
    bullets:[
      "Walk the entire journey exactly like a stranger would.",
      "Check landing, signup, first success, payment, and follow-up states.",
      "Fix every snag that interrupts trust before launch week."
    ]
  };
  if(title.includes("launch posts"))return {
    essence:"launch storytelling, Product Hunt/Indie Hackers copy, and recruiting day-one users",
    bullets:[
      "Draft launch posts around the pain, story, and proof instead of only features.",
      "Prepare channel-specific copy before launch pressure arrives.",
      "Line up five people who will try it and say something publicly."
    ]
  };
  if(title.includes("demo video"))return {
    essence:"recording a tight product demo that shows value quickly",
    bullets:[
      "Record a 60-second walkthrough of the product's core value.",
      "Show the problem, the action, and the result without overexplaining.",
      "Ship the imperfect demo rather than delaying launch for polish."
    ]
  };
  if(title.includes("bug bash"))return {
    essence:"trying to break the app through weird inputs, fast clicks, and navigation abuse",
    bullets:[
      "Actively attack the app with odd inputs and impatient behavior.",
      "Check back-button, double-click, refresh, and failure paths.",
      "Fix the worst launch-risk bugs first."
    ]
  };
  if(title.includes("final checks"))return {
    essence:"last launch checks, error monitoring, alerts, and avoiding blind launch-day failures",
    bullets:[
      "Verify the core journey still works after the final fixes.",
      "Confirm monitoring or alerts will tell you when something breaks.",
      "Avoid adding new scope during the final check block."
    ]
  };
  if(title.includes("schedule it"))return {
    essence:"choosing launch timing, preparing drafts, and deliberately resting before launch",
    bullets:[
      "Pick the launch day and time instead of leaving it vague.",
      "Stage the drafts and assets so launch morning is execution, not invention.",
      "Close the laptop after prep so your brain has fuel for response day."
    ]
  };
  if(title.includes("launch: x"))return launchChannelProfile("X and Indie Hackers");
  if(title.includes("product hunt")||title.includes("show hn"))return launchChannelProfile("Product Hunt or Show HN");
  if(title.includes("onboard every signup"))return {
    essence:"personal onboarding, first wins, and learning from every new signup",
    bullets:[
      "Message or guide each signup toward their first successful action.",
      "Capture repeated questions and friction as product evidence.",
      "Balance helping people now with improving the path for the next signup."
    ]
  };
  if(title.includes("same-day shipping"))return {
    essence:"turning launch-day feedback into one fast visible product improvement",
    bullets:[
      "Choose one request or bug that will visibly improve the product today.",
      "Ship the fix with the smallest safe scope.",
      "Tell the users who asked so they learn the product is alive."
    ]
  };
  if(title.includes("what i learned"))return {
    essence:"turning launch numbers, surprises, and honest lessons into public founder content",
    bullets:[
      "Write the follow-up with real numbers, surprises, mistakes, and lessons.",
      "Teach from the process instead of pretending the launch was cleaner than it was.",
      "Use honest builder content as the seed of future community trust."
    ]
  };
  if(title.includes("count + connect"))return {
    essence:"counting launch evidence, thanking supporters, and strengthening the early network",
    bullets:[
      "Count signups, comments, replies, bugs, asks, and useful silence.",
      "Follow up with people who helped, tested, or gave signal.",
      "Turn launch week into relationships, not just a scoreboard."
    ]
  };
  if(title.includes("unblock users"))return {
    essence:"helping users 6-10 reach value and learning where the product still blocks people",
    bullets:[
      "Find the next users who are stuck before they churn quietly.",
      "Help each one reach the product's promised first win.",
      "Turn repeated blockers into fixes, docs, or onboarding changes."
    ]
  };
  if(title.includes("growth experiment"))return {
    essence:"running one small growth experiment with a clear hypothesis and result",
    bullets:[
      "Choose one channel, message, or offer experiment instead of many guesses.",
      "Write the hypothesis and the result you expect before publishing.",
      "Judge the experiment by signal quality, not just vanity numbers."
    ]
  };
  if(title.includes("power-user interview"))return {
    essence:"learning from the most engaged user and finding what they value enough to repeat",
    bullets:[
      "Interview the user who got the most value or showed the most intent.",
      "Ask what they did, why it mattered, and what they wanted next.",
      "Use their language to sharpen the roadmap and future offer."
    ]
  };
  if(title.includes("ship their #1 request"))return {
    essence:"shipping the highest-value user request and proving the product responds to real demand",
    bullets:[
      "Choose the request with the strongest evidence from real users.",
      "Ship the smallest version that solves the real pain.",
      "Tell the requester and observe whether the fix changes behavior."
    ]
  };
  if(title.includes("six-month retro"))return {
    essence:"reviewing the six-month arc from learner to launcher and extracting honest product lessons",
    bullets:[
      "Review what changed in skill, confidence, product sense, and user evidence.",
      "Name the decisions that worked and the assumptions that broke.",
      "Turn the story into teaching material for the future LectronicArt community."
    ]
  };
  if(title.includes("next chapter"))return {
    essence:"choosing the next product, learning, or community direction from evidence instead of excitement",
    bullets:[
      "Use launch evidence, user conversations, and weak spots to pick the next chapter.",
      "Decide what deserves more building, what needs teaching, and what should stop.",
      "Write the next phase as a founder decision, not a vague aspiration."
    ]
  };
  return {
    essence:"moving the real product forward with a specific artifact, user signal, or launch decision",
    bullets:[
      cleanLessonBullet(day.d[0]||day.t),
      cleanLessonBullet(day.d[1]||"Capture what this block teaches about the product or market."),
      "End with saved evidence: a quote, decision, bug, commit, metric, or next action."
    ]
  };
}

function specProfile(label, purpose){
  return {
    essence:"Plan Mode scoping for "+label+": user outcome, risks, data shape, and testable boundaries",
    bullets:[
      "Define the user outcome before asking Codex to help with implementation.",
      "Challenge scope, data shape, edge cases, and failure modes in Plan Mode.",
      "End with a checklist small enough to build and review line by line."
    ]
  };
}

function buildSprintProfile(label, path){
  return {
    essence:"building the "+path+" of "+label+" so the product can do one valuable thing",
    bullets:[
      "Implement the smallest path that proves "+label+" works.",
      "Keep state, data, and UI feedback simple enough to inspect.",
      "Run the path immediately and note what a user would notice."
    ]
  };
}

function edgeProfile(label){
  return {
    essence:"unhappy paths for "+label+": bad inputs, missing data, double-clicks, slow network, and recovery",
    bullets:[
      "List the realistic ways "+label+" can fail for a user.",
      "Handle the most important bad input, missing data, or slow-response state.",
      "Test the fix as a user, not only as the person who wrote it."
    ]
  };
}

function friendTestProfile(title){
  const number=title.includes("#3")?"friend #3":title.includes("#2")?"friend #2":"friend #1";
  return {
    essence:"silent observation with "+number+", exact-note capture, and learning from confusion without rescuing the user",
    bullets:[
      "Watch "+number+" use the product without coaching them through the path.",
      "Write exact moments of confusion, hesitation, questions, and workarounds.",
      "Let observed behavior decide the next fix instead of defending the design."
    ]
  };
}

function launchChannelProfile(channel){
  return {
    essence:"publishing the launch on "+channel+", replying to feedback, and collecting market signal in real time",
    bullets:[
      "Publish the prepared launch message with the pain, story, proof, and clear ask.",
      "Stay present for replies, questions, objections, bugs, and surprise interest.",
      "Record the signal while it is fresh so the product can respond quickly."
    ]
  };
}

function cs50pEssence(title){
  if(title.includes("0+1"))return "Python functions, variables, conditionals, indentation, input(), and f-strings";
  if(title.includes(" 2 ")||title.includes("loops"))return "Python loops, lists, dictionaries, and comprehensions";
  if(title.includes(" 3 ")||title.includes("exceptions"))return "exceptions, try/except, raising errors, and handling bad input safely";
  if(title.includes(" 4 ")||title.includes("libraries"))return "libraries, modules, pip, random/statistics, and making API requests in Python";
  if(title.includes(" 5 ")||title.includes("unit tests"))return "pytest, assert, and proving small functions work";
  if(title.includes(" 6 ")||title.includes("file i/o"))return "file I/O, CSV files, images, and scripts that read or write real files";
  if(title.includes(" 7 ")||title.includes("regular expressions"))return "regular expressions, pattern matching, and validating structured text";
  if(title.includes(" 8 ")||title.includes("object-oriented"))return "classes, methods, properties, and modeling product concepts as objects";
  if(title.includes(" 9 ")||title.includes("et cetera"))return "sets, type hints, docstrings, unpacking, and Python polish";
  if(title.includes("capstone"))return "shipping a useful Python automation connected to the launch";
  return "Python syntax, problem solving, and automation leverage for the product journey";
}

function cs50pBullets(title, day){
  if(title.includes("capstone"))return [
    "Build a small Python automation that serves the actual launch.",
    "Choose a script with clear inputs, outputs, and proof that it saved time.",
    "Treat the capstone as the bridge from course exercises to useful AI-builder tooling."
  ];
  if(title.includes("0+1"))return [
    "Learn Python's basic program shape: functions, variables, conditionals, indentation, input(), and f-strings.",
    "Compare Python syntax against the C and JavaScript concepts you already met.",
    "Solve a few beginner problems so Python becomes a usable tool, not just another course."
  ];
  if(title.includes(" 2 ")||title.includes("loops"))return [
    "Use Python loops with lists, dictionaries, and comprehensions.",
    "Notice how Python can express common data transformations with less ceremony than C-style loops.",
    "Save one data-cleanup or automation idea that could help your product."
  ];
  if(title.includes(" 3 ")||title.includes("exceptions"))return [
    "Use try, except, and raise to handle bad input and expected failure paths.",
    "Connect exception handling to the same edge-case thinking your product needs.",
    "Write one tiny example that fails safely instead of crashing mysteriously."
  ];
  if(title.includes(" 4 ")||title.includes("libraries"))return [
    "Use modules, pip-installed packages, and standard-library helpers.",
    "Practice requests or another library as a bridge from Python to APIs.",
    "Write down when a library saves time and when it hides too much."
  ];
  if(title.includes(" 5 ")||title.includes("unit tests"))return [
    "Use pytest and assert to prove small Python functions work.",
    "Port or model a tiny product logic function and write tests around it.",
    "Treat tests as proof and documentation, not just homework."
  ];
  if(title.includes(" 6 ")||title.includes("file i/o"))return [
    "Read and write files with Python, including CSV data and image files.",
    "Connect file I/O to product operations like seed data, exports, or launch dashboards.",
    "Save one script idea that would reduce manual work later."
  ];
  if(title.includes(" 7 ")||title.includes("regular expressions"))return [
    "Use regular expressions to match, validate, and transform structured text.",
    "Connect pattern matching to real product inputs like emails, URLs, and imported data.",
    "Write one regex slowly enough that you can explain each piece."
  ];
  if(title.includes(" 8 ")||title.includes("object-oriented"))return [
    "Model product concepts with classes, methods, and properties.",
    "Compare object-oriented structure with plain functions and dictionaries.",
    "Name which objects your own product might eventually need."
  ];
  if(title.includes(" 9 ")||title.includes("et cetera"))return [
    "Polish Python fluency with sets, type hints, docstrings, unpacking, and idiomatic patterns.",
    "Identify which final topics make code easier to read, test, or teach.",
    "Use the wrap-up quiz to find weak spots before the AI Engineer track."
  ];
  return [
    cleanLessonBullet(day.d[0]||"Work through the assigned CS50P unit."),
    "Compare the Python idea to how you would solve it in C or JavaScript.",
    "Save one snippet, note, or automation idea that can help the product or launch later."
  ];
}

function cleanLessonBullet(text){
  return String(text||"").replace(/\s+/g," ").replace(/^Work through:\s*/i,"").trim();
}

function whyFor(day, ctx, track){
  if(day.rest)return "Rest days are part of the system. They protect consistency, absorb overflow, and keep the streak from becoming a grind.";
  const title=day.t.toLowerCase();
  const lesson=lessonProfile(day, ctx).essence;
  if(ctx.phase===1){
    const phaseTrack=day.g.includes("BUILD")?"This build":track;
    return "Today is specifically about "+lesson+". Phase 1 is about earning the mental map, not rushing. "+phaseTrack+" gives you one controlled rep in reading instructions, naming errors, and explaining each step before AI helps. "+watchFor(day, ctx.phase);
  }
  if(ctx.phase===2){
    const phaseTrack=title.includes("retro")?"reflection":day.g.includes("FSO")?"Full Stack Open":day.g.includes("ODIN")?"Odin Foundations":day.g.includes("SHIP")?"shipping":day.g.includes("BUILD")?"building":track;
    return "Today is specifically about "+lesson+". Phase 2 is the apprenticeship layer: you still own the design, while "+phaseTrack+" should leave behind something you can explain back: a solo build, diff, component, request, deployment, or decision. "+watchFor(day, ctx.phase);
  }
  if(ctx.phase===3){
    const phaseTrack=day.g.includes("CS50P")?"Python leverage":ctx.theme.toLowerCase().includes("find the pain")||isProblemDiscoveryTitle(title)?"problem discovery":title.includes("pricing")||title.includes("stripe")||title.includes("analytics")||title.includes("email")?"money and measurement":title.includes("launch")?"launch execution":title.includes("retro")||title.includes("next chapter")?"reflection":isUserLearningTitle(title)?"user evidence":day.g.includes("SHIP")&&day.g.includes("BUILD")?"shipping a product fix":day.g.includes("SHIP")?"market evidence":day.g.includes("BUILD")?"product building":track;
    return "Today is specifically about "+lesson+". Phase 3 is founder mode: every block should move a real product, real user conversation, or real launch decision forward. The focus is "+phaseTrack+": turning learning into evidence Derrick can build from later. "+watchFor(day, ctx.phase, ctx);
  }
  if(ctx.phase===4){
    const phaseTrack=phase4Track(day, ctx);
    return "Today is specifically about "+lesson+". Phase 4 is LectronicArt production mode: each block should turn a system into proof, a workflow into a reusable asset, or a launch action into member signal. The focus is "+phaseTrack+". "+watchFor(day, ctx.phase, ctx);
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
  const lesson=lessonProfile(day, ctx);
  return {
    goal:"By the end of this block, "+outcome+".",
    why:whyFor(day, ctx, track),
    steps:buildSteps(day, ctx),
    done:doneFor(day, ctx),
    coach:coachFor(day, ctx.phase, ctx),
    reflect:reflectFor(day, ctx.phase),
    summary:summary,
    lessonFocus:lesson.bullets,
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
