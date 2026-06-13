// Integrity check for js/data.js and the game layer — run after ANY content edit.
// Usage: node tools/verify.js
const fs = require("fs"), path = require("path");
const read = (f) => fs.readFileSync(path.join(__dirname, "..", "js", f), "utf8");
const readRoot = (f) => fs.readFileSync(path.join(__dirname, "..", f), "utf8");
// load curriculum + game content + game engine together, so the checks below
// run the REAL GameCalc formulas, not a copy that could drift
const { WEEKS, LEVELS, BADGES, GameCalc } =
  new Function(read("data.js") + read("game-data.js") + read("game.js")
    + "; return {WEEKS, LEVELS, BADGES, GameCalc};")();
let ok = true;
const fail = (m) => { console.error("FAIL:", m); ok = false; };

// every tag used in data.js must have a matching .chip style in styles.css
const KNOWN_TAGS = ["CS50", "CS50P", "ODIN", "FSO", "BUILD", "SHIP", "SETUP", "CODEX", "AGENTS", "REST"];
const GUIDE_FIELDS = ["goal", "why", "done", "coach", "reflect"];

function checkText(value, label, min, max) {
  if (typeof value !== "string") return fail(`${label} must be a string`);
  const len = value.trim().length;
  if (len < min) fail(`${label} is too short (${len}, expected at least ${min})`);
  if (len > max) fail(`${label} is too long (${len}, expected at most ${max})`);
  if (/[<>]/.test(value)) fail(`${label} contains raw angle brackets; keep guide text plain`);
}

function checkGuide(day, label) {
  const guide = day.guide;
  if (!guide || typeof guide !== "object") return fail(`${label} missing guide object`);
  GUIDE_FIELDS.forEach(field => {
    const minimums = { goal: 45, why: 70, done: 65, coach: 65, reflect: 30 };
    const maximums = { goal: 240, why: 520, done: 420, coach: 360, reflect: 220 };
    checkText(guide[field], `${label} guide.${field}`, minimums[field], maximums[field]);
  });
  if (!Array.isArray(guide.steps)) fail(`${label} guide.steps must be an array`);
  else {
    const minSteps = day.rest ? 3 : 3;
    const maxSteps = 5;
    if (guide.steps.length < minSteps || guide.steps.length > maxSteps)
      fail(`${label} guide.steps has ${guide.steps.length} steps (expected ${minSteps}-${maxSteps})`);
    guide.steps.forEach((step, i) => checkText(step, `${label} guide.steps[${i}]`, 35, 360));
  }
  if (guide.rule !== undefined) checkText(guide.rule, `${label} guide.rule`, 55, 260);
  if (guide.summary !== undefined) checkText(guide.summary, `${label} guide.summary`, 15, 360);
}

function scanForbiddenProviders() {
  const root = path.join(__dirname, "..");
  const terms = ["cla" + "ude", "anth" + "ropic", "zero2" + "cla" + "ude", "docs." + "cla" + "ude", "skill" + "jar", "CLAU" + "DE.md"];
  let files = [];
  try {
    files = require("child_process")
      .execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
      .trim()
      .split(/\n/)
      .filter(Boolean);
  } catch (e) {
    files = ["AGENTS.md", "README.md", "index.html", "css/styles.css", "js/data.js", "js/app.js", "docs/framework.md", "tools/verify.js"];
  }
  files
    .filter(file => !file.startsWith("dist/") && !file.startsWith(".git/"))
    .forEach(file => {
      const text = readRoot(file);
      const lower = text.toLowerCase();
      terms.forEach(term => {
        if (lower.includes(term.toLowerCase())) fail(`${file} contains forbidden provider reference "${term}"`);
      });
    });
}

if (WEEKS.length !== 36) fail(`expected 36 weeks, got ${WEEKS.length}`);
WEEKS.forEach((w, i) => {
  if (w.days.length !== 7) fail(`week ${i + 1} has ${w.days.length} days (need 7)`);
  if (![1, 2, 3, 4].includes(w.p)) fail(`week ${i + 1} has invalid phase ${w.p}`);
  w.days.forEach((d, j) => {
    const label = `week ${i + 1} day ${j + 1}`;
    if (!d.t || !d.d || !d.g || !d.h) fail(`${label} missing fields`);
    if (!Array.isArray(d.d) || d.d.length === 0) fail(`${label} has no calendar preview tasks`);
    else d.d.forEach((task, k) => checkText(task, `${label} d[${k}]`, 10, 420));
    if (!Array.isArray(d.g) || d.g.length === 0) fail(`${label} has no tags`);
    if (d.rest && !d.g.includes("REST")) fail(`${label} is marked rest but missing REST tag`);
    d.g.forEach(tag => {
      if (!KNOWN_TAGS.includes(tag)) fail(`${label} has unknown tag "${tag}" (no chip style for it)`);
    });
    (d.l || []).forEach(link => {
      if (!Array.isArray(link) || link.length !== 2 || typeof link[0] !== "string" || typeof link[1] !== "string")
        fail(`${label} has a malformed link (need ["label","url"])`);
      else if (!/^https?:\/\//.test(link[1]))
        fail(`${label} link "${link[0]}" is not an http(s) URL`);
    });
    checkGuide(d, label);
  });
  // day 7 is always a Sunday — it must be a rest day
  if (!w.days[6].rest) fail(`week ${i + 1} day 7 (Sunday) is not marked as a rest day`);
});
scanForbiddenProviders();
const counts = [1, 2, 3, 4].map(p => WEEKS.filter(w => w.p === p).length);
if (counts.join(",") !== "6,6,12,12") fail(`phase week counts are ${counts} (expected 6,6,12,12)`);
const totalDays = WEEKS.reduce((n, w) => n + w.days.length, 0);
if (totalDays !== 252) fail(`total days ${totalDays} (expected 252)`);
// date alignment: day 1 must be Mon Jun 15 2026; last day Sun Feb 21 2027
const start = new Date(2026, 5, 15);
const end = new Date(start); end.setDate(end.getDate() + totalDays - 1);
if (start.getDay() !== 1) fail("start date is not a Monday");
if (end.toDateString() !== "Sun Feb 21 2027") fail(`end date is ${end.toDateString()} (expected Sun Feb 21 2027)`);
// ---- game layer checks ----
// the level curve must be sane against the real XP economy
const allDone = new Set(Array.from({ length: 252 }, (_, i) => i + 1));
const totalXP = GameCalc.totalXP(allDone);
if (LEVELS.length !== 20) fail(`expected 20 levels, got ${LEVELS.length}`);
if (LEVELS[0].xp !== 0) fail("level 1 must start at 0 XP");
for (let i = 1; i < LEVELS.length; i++) {
  if (LEVELS[i].xp <= LEVELS[i - 1].xp) fail(`level ${i + 1} XP not above level ${i}`);
  if (!LEVELS[i].title) fail(`level ${i + 1} missing title`);
}
const day1XP = GameCalc.xpForDay(WEEKS[0].days[0]);
if (LEVELS[1].xp > day1XP) fail(`level 2 costs ${LEVELS[1].xp} XP but Day 1 only pays ${day1XP} — the Day-1 level-up hook is broken`);
if (LEVELS[LEVELS.length - 1].xp > totalXP * 0.9) fail(`top level needs ${LEVELS[LEVELS.length - 1].xp} XP but 90% of total (${totalXP}) is ${Math.floor(totalXP * 0.9)} — Founder must be reachable without perfection`);

// every badge must be well-formed and actually earnable
const COND_TYPES = ["days_done", "streak", "phase_complete", "tag_days", "weeks_perfect", "all_done"];
const ids = new Set();
const tagCount = (tag) => WEEKS.reduce((c, w) => c + w.days.filter(d => d.g.includes(tag)).length, 0);
BADGES.forEach(b => {
  if (!b.id || !b.name || !b.icon || !b.desc || !b.cond) fail(`badge "${b.id || b.name}" missing fields`);
  if (ids.has(b.id)) fail(`duplicate badge id "${b.id}"`); ids.add(b.id);
  const c = b.cond;
  if (!COND_TYPES.includes(c.type)) fail(`badge "${b.id}" has unknown cond type "${c.type}"`);
  if (c.type === "days_done" && (c.n < 1 || c.n > 252)) fail(`badge "${b.id}": days_done ${c.n} out of range`);
  if (c.type === "streak" && (c.n < 1 || c.n > 252)) fail(`badge "${b.id}": streak ${c.n} out of range`);
  if (c.type === "phase_complete" && ![1, 2, 3, 4].includes(c.p)) fail(`badge "${b.id}": invalid phase ${c.p}`);
  if (c.type === "tag_days" && tagCount(c.tag) < c.n) fail(`badge "${b.id}" needs ${c.n} ${c.tag} days but only ${tagCount(c.tag)} exist`);
  if (c.type === "weeks_perfect" && (c.n < 1 || c.n > 36)) fail(`badge "${b.id}": weeks_perfect ${c.n} out of range`);
});

console.log(ok ? `OK — 36 weeks, 252 days, guides covered, phases 6/6/12/12, ends ${end.toDateString()} · game: ${LEVELS.length} levels, ${BADGES.length} badges, ${totalXP} total XP` : "VERIFY FAILED");
process.exit(ok ? 0 : 1);
