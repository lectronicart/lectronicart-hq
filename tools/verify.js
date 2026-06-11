// Integrity check for js/data.js — run after ANY curriculum edit.
// Usage: node tools/verify.js
const fs = require("fs"), path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "js", "data.js"), "utf8");
const { WEEKS } = new Function(src + "; return {WEEKS};")();
let ok = true;
const fail = (m) => { console.error("FAIL:", m); ok = false; };

if (WEEKS.length !== 36) fail(`expected 36 weeks, got ${WEEKS.length}`);
WEEKS.forEach((w, i) => {
  if (w.days.length !== 7) fail(`week ${i + 1} has ${w.days.length} days (need 7)`);
  if (![1, 2, 3, 4].includes(w.p)) fail(`week ${i + 1} has invalid phase ${w.p}`);
  w.days.forEach((d, j) => {
    if (!d.t || !d.d || !d.g || !d.h) fail(`week ${i + 1} day ${j + 1} missing fields`);
  });
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
console.log(ok ? `OK — 36 weeks, 252 days, phases 6/6/12/12, ends ${end.toDateString()}` : "VERIFY FAILED");
process.exit(ok ? 0 : 1);
