// Integrity check for js/data.js and the game layer — run after ANY content edit.
// Usage: node tools/verify.js
const fs = require("fs"), path = require("path");
const read = (f) => fs.readFileSync(path.join(__dirname, "..", "js", f), "utf8");
// load curriculum + game content + game engine together, so the checks below
// run the REAL GameCalc formulas, not a copy that could drift
const { WEEKS, LEVELS, BADGES, GameCalc } =
  new Function(read("data.js") + read("game-data.js") + read("game.js")
    + "; return {WEEKS, LEVELS, BADGES, GameCalc};")();
let ok = true;
const fail = (m) => { console.error("FAIL:", m); ok = false; };

// every tag used in data.js must have a matching .chip style in styles.css
const KNOWN_TAGS = ["CS50", "CS50P", "ODIN", "FSO", "BUILD", "SHIP", "SETUP", "CODEX", "AGENTS", "REST"];

if (WEEKS.length !== 36) fail(`expected 36 weeks, got ${WEEKS.length}`);
WEEKS.forEach((w, i) => {
  if (w.days.length !== 7) fail(`week ${i + 1} has ${w.days.length} days (need 7)`);
  if (![1, 2, 3, 4].includes(w.p)) fail(`week ${i + 1} has invalid phase ${w.p}`);
  w.days.forEach((d, j) => {
    if (!d.t || !d.d || !d.g || !d.h) fail(`week ${i + 1} day ${j + 1} missing fields`);
    d.g.forEach(tag => {
      if (!KNOWN_TAGS.includes(tag)) fail(`week ${i + 1} day ${j + 1} has unknown tag "${tag}" (no chip style for it)`);
    });
    (d.l || []).forEach(link => {
      if (!Array.isArray(link) || link.length !== 2 || typeof link[0] !== "string" || typeof link[1] !== "string")
        fail(`week ${i + 1} day ${j + 1} has a malformed link (need ["label","url"])`);
    });
  });
  // day 7 is always a Sunday — it must be a rest day
  if (!w.days[6].rest) fail(`week ${i + 1} day 7 (Sunday) is not marked as a rest day`);
});
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

console.log(ok ? `OK — 36 weeks, 252 days, phases 6/6/12/12, ends ${end.toDateString()} · game: ${LEVELS.length} levels, ${BADGES.length} badges, ${totalXP} total XP` : "VERIFY FAILED");
process.exit(ok ? 0 : 1);
