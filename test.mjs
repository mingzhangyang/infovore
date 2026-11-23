/* infovore — test.mjs
 * Node checks for data.js + the scoring rules (replicated from app.js, SPEC §2–§3).
 * Run: node test.mjs
 */
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { UI, QUESTIONS, ANIMALS, DIMENSIONS } = require("./data.js");

let failures = 0;
function assert(cond, msg) {
  if (cond) { console.log("  ok  " + msg); }
  else { failures++; console.log("FAIL  " + msg); }
}

/* ---------- scoring, replicated from app.js ---------- */
const MAX = {};
for (const d of DIMENSIONS) {
  MAX[d] = QUESTIONS.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.score[d] || 0)), 0);
}
function computeResult(answers) {
  const raw = Object.fromEntries(DIMENSIONS.map(d => [d, 0]));
  let near = 0;
  answers.forEach((optId, i) => {
    const opt = QUESTIONS[i].options.find(o => o.id === optId);
    for (const d of DIMENSIONS) raw[d] += opt.score[d] || 0;
    near += opt.score.near || 0;
  });
  const scores = {};
  for (const d of DIMENSIONS) scores[d] = MAX[d] ? Math.round((raw[d] / MAX[d]) * 100) : 0;
  if (near >= 4 && scores.reach > 35) scores.reach = 35;
  return { raw, scores, near, animal: assignAnimal(scores) };
}
function assignAnimal(s) {
  if (s.depth >= 75 && s.breadth <= 35 && s.novelty <= 45) return "frog_scholar";
  if (s.reach >= 75 && s.breadth >= 60 && s.depth < 70) return "migrant";
  if (s.breadth >= 70 && s.depth <= 40) return "hummingbird";
  if (s.novelty >= 70 && s.dissent >= 65 && s.breadth >= 55) return "fox";
  if (s.depth >= 70 && s.reach >= 60) return "whale";
  if (s.depth >= 65 && s.novelty >= 60 && s.breadth < 60) return "owl";
  if (s.reach <= 35 && s.dissent <= 50) return "ant";
  return "otter";
}

/* ---------- structure checks ---------- */
console.log("structure:");
assert(QUESTIONS.length === 32, "exactly 32 questions");
assert(QUESTIONS.every(q => q.options.length === 4), "every question has 4 options");
assert(QUESTIONS.every(q => q.prompt.zh && q.prompt.en), "every prompt has zh + en");
assert(QUESTIONS.every(q => q.options.every(o => o.text.zh && o.text.en)), "every option has zh + en text");
assert(QUESTIONS.every(q => q.options.every(o =>
  ["breadth", "depth", "novelty", "dissent", "reach", "near"].every(k => Number.isInteger(o.score[k]) && o.score[k] >= 0)
)), "every option score has all 6 integer fields");

function flatten(obj, prefix = "", out = []) {
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? prefix + "." + k : k;
    if (v && typeof v === "object" && !Array.isArray(v)) flatten(v, p, out); else out.push(p);
  }
  return out.sort();
}
const zhKeys = flatten(UI.zh), enKeys = flatten(UI.en);
assert(JSON.stringify(zhKeys) === JSON.stringify(enKeys), `UI key parity zh/en (${zhKeys.length} keys)`);

const animalKeys = Object.keys(ANIMALS).sort();
assert(JSON.stringify(animalKeys) === JSON.stringify(
  ["ant", "fox", "frog_scholar", "hummingbird", "migrant", "otter", "owl", "whale"]),
  "exactly the 8 expected animals");
let animalParity = true;
for (const a of Object.values(ANIMALS)) {
  for (const f of ["name", "tagline", "verdict", "strengths", "blindspot", "map_shape", "first_step"]) {
    if (!a[f] || !a[f].zh || !a[f].en) animalParity = false;
  }
  if (!Number.isInteger(a.rarity)) animalParity = false;
}
assert(animalParity, "every animal field present in zh + en, rarity integer");
assert(Object.values(ANIMALS).reduce((s, a) => s + a.rarity, 0) === 100, "rarities sum to 100");

/* ---------- Monte Carlo ---------- */
console.log("monte carlo:");
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20261123);
const seen = {};
let allValid = true;
/* Real respondents answer consistently, not uniformly at random — a uniform
 * draw averages every dimension to ~50 and can only ever produce the fallback
 * types. So each run first draws a random latent tendency (a weight per
 * dimension), then answers each question by the option that best fits that
 * tendency, plus noise. Still 2000 fully random answer sets, but drawn from
 * the same kind of correlated distribution real users produce. */
for (let run = 0; run < 2000; run++) {
  const w = Object.fromEntries(DIMENSIONS.map(d => [d, rand() * rand() * 2]));
  const answers = QUESTIONS.map(q => {
    let best = null, bestVal = -Infinity;
    for (const o of q.options) {
      let v = rand() * 0.9;
      for (const d of DIMENSIONS) v += w[d] * (o.score[d] || 0);
      if (v > bestVal) { bestVal = v; best = o.id; }
    }
    return best;
  });
  const r = computeResult(answers);
  if (!ANIMALS[r.animal]) allValid = false;
  for (const d of DIMENSIONS) if (r.scores[d] < 0 || r.scores[d] > 100) allValid = false;
  seen[r.animal] = (seen[r.animal] || 0) + 1;
}
assert(allValid, "2000 random answer sets: all yield a valid animal, scores within 0–100");
assert(Object.keys(seen).length >= 4, `at least 4 distinct animals (got ${Object.keys(seen).length})`);
console.log("  distribution:", JSON.stringify(seen));

/* ---------- hand-built frog_scholar set ----------
 * Deep-digging, narrow, novelty-averse answers (SPEC §3 rule 1):
 * depth raw should be near max, breadth and novelty near zero. */
console.log("hand-built sets:");
const frogAnswers = [
  "c", "b", "b", "c", "a", "c", "a", "c",   // Q1–Q8
  "a", "c", "a", "a", "d", "d", "d", "d",   // Q9–Q16
  "b", "d", "b", "a", "b", "d", "a", "b",   // Q17–Q24
  "a", "d", "a", "c", "d", "c", "d", "b"    // Q25–Q32
];
const frog = computeResult(frogAnswers);
console.log("  frog set scores:", JSON.stringify(frog.scores), "near:", frog.near);
assert(frog.animal === "frog_scholar", `hand-built deep/narrow set yields frog_scholar (got ${frog.animal})`);

console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
