// ===== Game content: the level ladder and badges =====
// Content only — all rules live in js/game.js. Numbers tuned against the real
// curriculum: 14,890 XP total possible, Day 1 pays 40 XP (so finishing Day 1
// always reaches level 2 — the hook). Run node tools/verify.js after edits.

const LEVELS=[
 {xp:0,    title:"Spark",           blurb:"You showed up. Everything starts here."},
 {xp:40,   title:"Ignition",        blurb:"Day one done. The engine turns over."},
 {xp:200,  title:"Warm-Up",         blurb:"A few days in. The habit is forming."},
 {xp:400,  title:"Idle Hum",        blurb:"First full week. You can hear it running."},
 {xp:750,  title:"First Gear",      blurb:"Moving under your own power now."},
 {xp:1170, title:"Toolsmith",       blurb:"The terminal stopped being scary."},
 {xp:1650, title:"Second Gear",     blurb:"Code is starting to read like language."},
 {xp:2200, title:"Circuit Builder", blurb:"Fundamentals wired in. They can't be taken away."},
 {xp:2790, title:"Third Gear",      blurb:"Real projects. Real commits. Real momentum."},
 {xp:3430, title:"Running Engine",  blurb:"You build things that work. Routinely."},
 {xp:4120, title:"Turbocharged",    blurb:"AI drafts, you steer. The leverage era begins."},
 {xp:4850, title:"Systems Online",  blurb:"Frontend, backend, database — the full machine."},
 {xp:5620, title:"Machine Builder", blurb:"You stopped doing exercises. You're making a product."},
 {xp:6430, title:"Shipping Dock",   blurb:"Strangers can touch what you made."},
 {xp:7280, title:"Production Line", blurb:"Feedback in, fixes out, every single day."},
 {xp:8160, title:"Automation Core", blurb:"The machine is starting to run itself."},
 {xp:9080, title:"Engine Master",   blurb:"Pipelines, agents, workflows — yours to command."},
 {xp:10040,title:"Creative Machine",blurb:"One person, producing like a studio."},
 {xp:11030,title:"Flywheel",        blurb:"Build → document → teach → sell. It's spinning."},
 {xp:12050,title:"Founder",         blurb:"You're not learning to code anymore. You're leading."}
];

// cond types the engine understands: days_done, streak, phase_complete,
// tag_days, weeks_perfect, all_done. verify.js rejects anything else.
const BADGES=[
 {id:"first-spark",        icon:"⚡", name:"First Spark",         desc:"Mark your first day complete.",                cond:{type:"days_done",n:1}},
 {id:"ten-days",           icon:"🔋", name:"Charged Up",          desc:"Complete 10 days.",                            cond:{type:"days_done",n:10}},
 {id:"fifty-days",         icon:"⚙️", name:"Fifty Deep",          desc:"Complete 50 days.",                            cond:{type:"days_done",n:50}},
 {id:"hundred-days",       icon:"🔩", name:"Century Build",       desc:"Complete 100 days.",                           cond:{type:"days_done",n:100}},
 {id:"two-hundred-days",   icon:"🏗️", name:"The Long Haul",       desc:"Complete 200 days.",                           cond:{type:"days_done",n:200}},
 {id:"engine-warm",        icon:"🔥", name:"Engine Warm",         desc:"Hold a 7-day streak.",                         cond:{type:"streak",n:7}},
 {id:"engine-hot",         icon:"🌡️", name:"Engine Hot",          desc:"Hold a 30-day streak.",                        cond:{type:"streak",n:30}},
 {id:"unstoppable",        icon:"🚀", name:"Unstoppable",         desc:"Hold a 100-day streak.",                       cond:{type:"streak",n:100}},
 {id:"fundamentals-forged",icon:"🧱", name:"Fundamentals Forged", desc:"Finish every day of Phase 1.",                 cond:{type:"phase_complete",p:1}},
 {id:"full-stack-alive",   icon:"🕸️", name:"Full Stack Alive",    desc:"Finish every day of Phase 2.",                 cond:{type:"phase_complete",p:2}},
 {id:"the-launch",         icon:"🛳️", name:"The Launch",          desc:"Finish every day of Phase 3.",                 cond:{type:"phase_complete",p:3}},
 {id:"ai-engineer",        icon:"🤖", name:"AI Engineer",         desc:"Finish every day of Phase 4.",                 cond:{type:"phase_complete",p:4}},
 {id:"first-ship",         icon:"📦", name:"First Ship",          desc:"Complete your first SHIP day.",                cond:{type:"tag_days",tag:"SHIP",n:1}},
 {id:"serial-shipper",     icon:"🚢", name:"Serial Shipper",      desc:"Complete 25 SHIP days.",                       cond:{type:"tag_days",tag:"SHIP",n:25}},
 {id:"python-fluent",      icon:"🐍", name:"Python Fluent",       desc:"Complete all 10 Python days.",                 cond:{type:"tag_days",tag:"CS50P",n:10}},
 {id:"full-throttle",      icon:"🛡️", name:"Full Throttle",       desc:"Complete a perfect week — all 7 days.",        cond:{type:"weeks_perfect",n:1}},
 {id:"twelve-cylinders",   icon:"🏎️", name:"Twelve Cylinders",    desc:"Complete 12 perfect weeks.",                   cond:{type:"weeks_perfect",n:12}},
 {id:"the-machine-lives",  icon:"🏆", name:"The Machine Lives",   desc:"All 252 days. LectronicArt is real.",          cond:{type:"all_done"}}
];
