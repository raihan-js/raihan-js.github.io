// Result charts as pure SVG strings. No dependencies.
//
// Every chart is drawn on a 400x250 canvas so text stays >= 10px when the card
// is ~380px wide. Colours come from CSS variables (see index.css), so the same
// markup follows the site's light/dark toggle when inlined in the page, and
// renders standalone for README / dev.to exports (scripts/render-visuals.mjs).
//
// Every number below is copied from the project's own README / results table.
// Source of each chart is noted above its renderer.

const W = 400;
const H = 250;

const INK = "var(--fg, #111)";
const INK2 = "var(--fg-muted, #555)";
const RULE = "var(--border, #e3e3e0)";
const RULE2 = "var(--border-strong, #cfcfca)";
const SURF = "var(--bg-elev, #fcfcfb)";
const S1 = "var(--viz-s1, #2a78d6)"; // blue
const S2 = "var(--viz-s2, #eb6834)"; // orange
const S3 = "var(--viz-s3, #1baf7a)"; // aqua
const CTX = "var(--viz-ctx, #b4b3ab)"; // context grey
const FONT = "var(--sans, system-ui, -apple-system, 'Segoe UI', sans-serif)";
const MONO = "var(--mono, ui-monospace, monospace)";

const f = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Rough text width, used only for laying out legends.
const tw = (s, size) => s.length * size * 0.56;

const text = (x, y, s, { size = 11, weight = 400, fill = INK2, anchor = "start", mono = false } = {}) =>
  `<text x="${f(x)}" y="${f(y)}" text-anchor="${anchor}" style="font:${weight} ${size}px ${mono ? MONO : FONT};fill:${fill}">${esc(s)}</text>`;

const rect = (x, y, w, h, fill, extra = "") =>
  `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" style="fill:${fill}${extra}"/>`;

const line = (x1, y1, x2, y2, stroke = RULE, width = 1) =>
  `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" style="stroke:${stroke};stroke-width:${width}"/>`;

// Horizontal bar growing right from x; 4px rounded data end, square at the baseline.
const hbar = (x, y, w, h, fill, r = 4) => {
  if (w <= 0) return "";
  const k = Math.min(r, w, h / 2);
  return `<path d="M${f(x)} ${f(y)}H${f(x + w - k)}Q${f(x + w)} ${f(y)} ${f(x + w)} ${f(y + k)}V${f(y + h - k)}Q${f(x + w)} ${f(y + h)} ${f(x + w - k)} ${f(y + h)}H${f(x)}Z" style="fill:${fill}"/>`;
};

// Horizontal bar growing left from xRight; rounded left end.
const hbarL = (xRight, y, w, h, fill, r = 4) => {
  if (w <= 0) return "";
  const k = Math.min(r, w, h / 2);
  const x = xRight - w;
  return `<path d="M${f(xRight)} ${f(y)}H${f(x + k)}Q${f(x)} ${f(y)} ${f(x)} ${f(y + k)}V${f(y + h - k)}Q${f(x)} ${f(y + h)} ${f(x + k)} ${f(y + h)}H${f(xRight)}Z" style="fill:${fill}"/>`;
};

// Column growing up from yBase; rounded top.
const vbar = (x, yBase, w, h, fill, r = 4) => {
  if (h <= 0) return "";
  const k = Math.min(r, h, w / 2);
  const y = yBase - h;
  return `<path d="M${f(x)} ${f(yBase)}V${f(y + k)}Q${f(x)} ${f(y)} ${f(x + k)} ${f(y)}H${f(x + w - k)}Q${f(x + w)} ${f(y)} ${f(x + w)} ${f(y + k)}V${f(yBase)}Z" style="fill:${fill}"/>`;
};

const legend = (y, items, x0 = 16) => {
  let x = x0;
  return items
    .map(({ color, label }) => {
      const out = rect(x, y - 8, 8, 8, color) + text(x + 12, y, label, { size: 10.5, fill: INK2 });
      x += 12 + tw(label, 10.5) + 14;
      return out;
    })
    .join("");
};

function frame({ headline, sub, footer = [], body, alt, desc }) {
  const n = footer.length;
  const foot = footer
    .map((l, i) => text(16, H - 12 - (n - 1 - i) * 12.5, l, { size: 10, fill: INK2 }))
    .join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(alt)}" ` +
    `style="display:block;width:100%;height:auto"><title>${esc(alt)}</title><desc>${esc(desc)}</desc>` +
    text(16, 26, headline, { size: 14.5, weight: 600, fill: INK }) +
    text(16, 43, sub, { size: 11, fill: INK2 }) +
    body +
    foot +
    `</svg>`
  );
}

// ---------------------------------------------------------------- FlipGate
// Source: flipgate/README.md, GSM8K n=1000, bf16 vs AWQ / GPTQ-Int4 (HF generate, 1,024-token cap, 0% truncated; re-run 2026-10-05).
function flipgate() {
  const rows = [
    { name: "AWQ", delta: "\u22123.5", broke: 91, fixed: 56 },
    { name: "GPTQ-Int4", delta: "\u22123.7", broke: 91, fixed: 54 },
  ];
  const cx = 160;
  const k = 0.95;
  let body = line(cx, 62, cx, 166, RULE2);
  rows.forEach((r, i) => {
    const y0 = 78 + i * 54;
    body += text(16, y0, r.name, { size: 11.5, weight: 600, fill: INK });
    body += text(384, y0, `net accuracy ${r.delta} pts`, { size: 11, anchor: "end" });
    const by = y0 + 7;
    body += hbarL(cx - 1, by, r.broke * k, 18, S2);
    body += hbar(cx + 1, by, r.fixed * k, 18, S1);
    body += text(cx - 1 - r.broke * k - 4, by + 13, String(r.broke), { size: 11, weight: 600, fill: INK, anchor: "end" });
    body += text(cx + 1 + r.fixed * k + 4, by + 13, String(r.fixed), { size: 11, weight: 600, fill: INK });
  });
  body += legend(188, [
    { color: S2, label: "Right → wrong (broke)" },
    { color: S1, label: "Wrong → right (fixed)" },
  ]);
  return frame({
    headline: "Quantised: 91 correct answers broke",
    sub: "GSM8K, 1,000 items, quantised vs bf16 baseline",
    footer: ["Qwen2.5-3B-Instruct, temp 0, 1,024-token cap, 0% truncated.", "McNemar p = 0.0050 (AWQ), 0.0028 (GPTQ). The gate fails both."],
    body,
    alt: "FlipGate: on GSM8K, 91 previously correct answers broke under both AWQ and GPTQ-Int4, with accuracy down 3.5 and 3.7 points",
    desc: "GSM8K n=1000 versus bf16, 1,024-token cap, no truncated answers. AWQ: 91 right-to-wrong, 56 wrong-to-right, net -3.5 points, McNemar p = 0.0050. GPTQ-Int4: 91 right-to-wrong, 54 wrong-to-right, net -3.7 points, p = 0.0028.",
  });
}

// ------------------------------------------------------------ GraphProof-QA
// Source: graphproof-qa/devto_article.md results tables (6,000 MetaQA questions; 531 renamed-entity questions).
function graphproof() {
  const base = 170;
  const maxH = 90;
  const colW = 26;
  const col = (x, v, color) =>
    vbar(x, base, colW, (v / 100) * maxH, color) +
    text(x + colW / 2, base - (v / 100) * maxH - 5, `${v}%`, { size: 11, weight: 600, fill: INK, anchor: "middle" });
  let body = line(16, base, 384, base, RULE2) + line(200, 62, 200, base, RULE);
  body += col(59, 34.2, CTX) + col(95, 93.3, S1) + col(131, 96.8, S3);
  body += col(261, 5.8, CTX) + col(297, 81.4, S1);
  body += text(108, base + 15, "Overall · 6,000 questions", { size: 11, fill: INK, anchor: "middle" });
  body += text(292, base + 15, "Renamed entities · 531", { size: 11, fill: INK, anchor: "middle" });
  body += legend(204, [
    { color: CTX, label: "A · direct answer" },
    { color: S1, label: "B · writes a query" },
    { color: S3, label: "C · query + grammar" },
  ]);
  return frame({
    headline: "Writing a query beats answering directly",
    sub: "MetaQA Hits@1, Qwen2.5-1.5B + LoRA, same data and budget",
    footer: ["Renamed-entity test: names never seen in training,", "B vs A McNemar p < 1e-80."],
    body,
    alt: "GraphProof-QA: compile-to-query system B scores 93.3 percent versus 34.2 percent for direct answering, and 81.4 versus 5.8 on renamed entities",
    desc: "Hits@1 on 6,000 MetaQA questions: A direct 34.2%, B DSL 93.3%, C constrained 96.8%. On 531 renamed-entity questions: A 5.8%, B 81.4%.",
  });
}

// -------------------------------------------------------- FedProc-Constrained
// Source: fedproc-constrained/results/v2_summary.json (v2 run, Qwen2.5-1.5B-Instruct, 75 prompts).
// Percent of each prompt kind. "good" = right clause, or NONE where none applies.
function fedproc() {
  const groups = [
    { name: "Fake topic", rows: [
      { tag: "free", fab: 97, sub: 3, good: 0, other: 0 },        // 29 fabricated, 1 real-but-wrong of 30
      { tag: "grammar", fab: 0, sub: 100, good: 0, other: 0 },    // forced: no abstain option
      { tag: "+ NONE", fab: 0, sub: 27, good: 73, other: 0 },     // 22 abstained, 8 real-but-wrong
    ] },
    { name: "Real clause", rows: [
      { tag: "free", fab: 0, sub: 0, good: 100, other: 0 },       // 15 of 15 (the number is in the prompt)
      { tag: "grammar", fab: 0, sub: 0, good: 100, other: 0 },
      { tag: "+ NONE", fab: 0, sub: 0, good: 0, other: 100 },     // 15 of 15 wrongly abstained
    ] },
    { name: "Absent number", rows: [
      { tag: "free", fab: 93, sub: 0, good: 0, other: 0 },        // 14 fabricated; 1 malformed output is not drawn
      { tag: "grammar", fab: 0, sub: 87, good: 13, other: 0 },    // 13 real-but-wrong, 2 correct
      { tag: "+ NONE", fab: 0, sub: 0, good: 100, other: 0 },     // 15 of 15 abstained
    ] },
  ];
  const x0 = 136;
  const k = 2.5;
  let body = "";
  groups.forEach((g, gi) => {
    g.rows.forEach((r, ri) => {
      const y = 54 + gi * 48 + ri * 13;
      if (ri === 0) body += text(16, y + 9, g.name, { size: 10.5, weight: 600, fill: INK });
      body += text(128, y + 9, r.tag, { size: 10, fill: INK2, anchor: "end" });
      const segs = [
        { v: r.fab, c: S2 }, { v: r.sub, c: S1 }, { v: r.good, c: S3 }, { v: r.other, c: CTX },
      ].filter((s) => s.v > 0);
      let x = x0;
      segs.forEach((s, j) => {
        const w = s.v * k - (j < segs.length - 1 ? 2 : 0);
        body += j === segs.length - 1 ? hbar(x, y, w, 11, s.c) : rect(x, y, w, 11, s.c);
        if (s.v >= 25) body += text(x + 5, y + 9, `${s.v}%`, { size: 9.5, weight: 600, fill: s.c === CTX ? INK : "#fff" });
        x += s.v * k;
      });
    });
  });
  body += legend(204, [
    { color: S2, label: "Fabricated" },
    { color: S1, label: "Real, wrong" },
    { color: S3, label: "Good" },
    { color: CTX, label: "Wrongly refused" },
  ]);
  return frame({
    headline: "Grammar + abstain: it refuses real clauses too",
    sub: "% per prompt kind (n = 30, 15, 15), Qwen2.5-1.5B",
    footer: ["Good = right clause, or NONE where none applies. With NONE", "it refused all 30 prompts that name a clause number."],
    body,
    alt: "FedProc-Constrained v2: a registry grammar removes fabricated clause numbers, and adding an abstain option makes the model refuse every prompt that names a clause number, including all 15 real clauses",
    desc: "v2 run, 75 prompts. Fake topics (30): free 29 fabricated and 1 real-but-wrong; enum grammar 30 real-but-wrong; grammar plus NONE 22 abstained and 8 real-but-wrong. Real clauses (15): free 15 correct; grammar 15 correct; grammar plus NONE 15 wrongly abstained. Absent numbers (15): free 14 fabricated and 1 malformed output (not drawn); grammar 13 real-but-wrong and 2 correct; grammar plus NONE 15 abstained.",
  });
}

// ---------------------------------------------------------------- OracleBench
// Source: oraclebench/results/summary.json (1,760 oracle-checked items, rebuilt 2026-10-05).
function oraclebench() {
  const rows = [
    { name: "Overall", a: 11.0, b: 40.6, ciA: [9.5, 12.8], ciB: [38.0, 43.2], bold: true },
    { name: "GSM8K", a: 10.1, b: 94.8 },
    { name: "IFEval", a: 21.4, b: 13.7 },
    { name: "FedProc", a: 0.5, b: 1.0 },
  ];
  const x0 = 70;
  const k = 2.7;
  let body = line(x0, 58, x0, 190, RULE2);
  rows.forEach((r, i) => {
    const y = 64 + i * 34;
    body += text(16, y + 14, r.name, { size: 11, fill: INK, weight: r.bold ? 600 : 400 });
    [
      { v: r.a, ci: r.ciA, c: S1, dy: 0 },
      { v: r.b, ci: r.ciB, c: S2, dy: 11 },
    ].forEach(({ v, ci, c, dy }) => {
      const yy = y + dy;
      body += hbar(x0 + 1, yy, Math.max(v * k, 1.5), 9, c, 3);
      let tipX = x0 + 1 + v * k;
      if (ci) {
        const lo = x0 + 1 + ci[0] * k;
        const hi = x0 + 1 + ci[1] * k;
        body += line(lo, yy + 4.5, hi, yy + 4.5, INK, 1.25) + line(lo, yy + 1, lo, yy + 8, INK, 1.25) + line(hi, yy + 1, hi, yy + 8, INK, 1.25);
        tipX = hi;
      }
      body += text(tipX + 5, yy + 8, `${v.toFixed(1)}%`, { size: 10.5, weight: 600, fill: INK });
    });
  });
  body += legend(206, [
    { color: S1, label: "Qwen2.5-3B judge" },
    { color: S2, label: "Qwen2.5-0.5B judge" },
  ]);
  return frame({
    headline: "Small judges approve wrong answers",
    sub: "False-accept: judged CORRECT when the oracle says wrong",
    footer: ["1,760 items, 95% CI on overall. Matched pairwise: the 3B judge", "picks the right answer 80.5% of the time, the 0.5B judge 53.8%."],
    body,
    alt: "OracleBench: a 3B judge falsely accepts 11.0 percent of wrong answers and a 0.5B judge 40.6 percent; the 0.5B judge accepts 94.8 percent of wrong arithmetic",
    desc: "False-accept rate on 1,760 items. Overall: Qwen-3B 11.0% [9.5, 12.8], Qwen-0.5B 40.6% [38.0, 43.2]. GSM8K 10.1 and 94.8. IFEval 21.4 and 13.7. FedProc 0.5 and 1.0 (blanket rejection, 0% true-accept). Matched pairwise: the 3B judge picks the right answer 80.5% of the time, the 0.5B judge 53.8%.",
  });
}

// ------------------------------------------------------------------ ShiftWatch
// Source: shiftwatch/README.md result tables (24 slices x 1,000 items, ModernBERT-base).
function shiftwatch() {
  const names = ["Temp. scaling", "Mean confidence", "Error pred. (LR)", "NLL", "Error pred. (MLP)", "CBPE", "DoC"];
  const bank = [0.0109, 0.011, 0.0123, 0.0174, 0.0344, 0.1237, 0.2473];
  const clinc = [0.014, 0.0234, 0.0125, 0.011, 0.0101, 0.0657, 0.1308];
  const missed = [false, false, false, false, false, true, true]; // detect rate 0.00 on both datasets
  const x1 = 126;
  const x2 = 262;
  const k = 360;
  const panel = (x0, vals, title) => {
    let out = text(x0, 66, title, { size: 11, weight: 600, fill: INK }) + line(x0, 70, x0, 70 + names.length * 17, RULE2);
    const best = Math.min(...vals);
    vals.forEach((v, i) => {
      const y = 75 + i * 17;
      const c = missed[i] ? S2 : v === best ? S1 : CTX;
      out += hbar(x0 + 1, y, Math.max(v * k, 1.5), 9, c, 3);
      out += text(x0 + 1 + v * k + 4, y + 8, (v * 100).toFixed(1), { size: 10, weight: v === best ? 600 : 400, fill: v === best ? INK : INK2 });
    });
    return out;
  };
  let body = names.map((n, i) => text(16, 75 + i * 17 + 8, n, { size: 10.5, fill: INK })).join("");
  body += panel(x1, bank, "Banking77") + panel(x2, clinc, "CLINC150");
  body += legend(203, [
    { color: S1, label: "Lowest error" },
    { color: S2, label: "Never detected the drop" },
    { color: CTX, label: "Others" },
  ]);
  return frame({
    headline: "No estimator wins everywhere",
    sub: "Error estimating accuracy with no labels (points, lower is better)",
    footer: ["24 shifted slices x 1,000 items, ModernBERT-base. Error =", "mean abs. gap between estimated and true accuracy."].slice(0, 2),
    body,
    alt: "ShiftWatch: six label-free accuracy estimators compared on Banking77 and CLINC150; the best estimator differs by dataset and two never detect the drop",
    desc: "Mean absolute error in accuracy points. Banking77: temperature scaling 1.09, mean confidence 1.10, error predictor 1.23, NLL 1.74, MLP error predictor 3.44, CBPE 12.37, DoC 24.73. CLINC150: MLP error predictor 1.01, NLL 1.10, error predictor 1.25, temperature scaling 1.40, mean confidence 2.34, CBPE 6.57, DoC 13.08.",
  });
}

// ------------------------------------------------------ tiny-bilingual-retriever
// Source: tiny-bilingual-retriever/README.md baselines + distillation tables (EN-JA nDCG@10).
function tiny() {
  const rows = [
    { name: "bge-m3 teacher", v: 0.6742 },
    { name: "ruri-v3-30m", v: 0.5418 },
    { name: "Distilled student", v: 0.4809, hi: true },
    { name: "multilingual-e5-small", v: 0.4795 },
    { name: "Untrained base (37M)", v: 0.0373 },
  ];
  const x0 = 150;
  const k = 262;
  let body = line(x0, 58, x0, 188, RULE2);
  rows.forEach((r, i) => {
    const y = 64 + i * 26;
    body += text(16, y + 11, r.name, { size: 11, fill: INK, weight: r.hi ? 600 : 400 });
    body += hbar(x0 + 1, y, r.v * k, 14, r.hi ? S1 : CTX);
    body += text(x0 + 1 + r.v * k + 5, y + 11, (Math.round(r.v * 1000 + 1e-6) / 1000).toFixed(3), { size: 11, weight: 600, fill: INK });
  });
  return frame({
    headline: "Distilled: EN→JA nDCG 0.04 → 0.48",
    sub: "Student reaches 71% of the teacher's score",
    footer: ["Student 36.7M params (teacher 568M); index 4.9 vs 19.5 MB.", "Synthetic opus-100 EN-JA eval: relative comparisons only."],
    body,
    alt: "tiny-bilingual-retriever: distilling bge-m3 into a 36.7M-parameter encoder lifts English to Japanese nDCG@10 from 0.037 to 0.481, 71 percent of the teacher",
    desc: "EN-JA nDCG@10 on 500 queries and 5,000 passages: bge-m3 teacher 0.674, ruri-v3-30m 0.542, distilled student 0.481, multilingual-e5-small 0.480, untrained modernbert-ja-30m 0.037.",
  });
}

// ------------------------------------------------------------------ JaCite-Bench
// Source: jacite-bench/README.md results, corrected 2026-10-06 (invented = cited article not in the e-Gov registry; per mention).
function jacite() {
  const groups = [
    { name: "llm-jp-3-1.8b", ja: 4.57, en: 1.09 },
    { name: "Qwen2.5-7B", ja: 1.17, en: 0 },
    { name: "Swallow-8B", ja: 0, en: 0 },
  ];
  const base = 172;
  const k = 18; // px per percentage point
  const w = 28;
  const centers = [76, 200, 324];
  let body = line(16, base, 384, base, RULE2);
  groups.forEach((g, i) => {
    const c = centers[i];
    [
      { v: g.ja, x: c - 31, col: S1 },
      { v: g.en, x: c + 3, col: S2 },
    ].forEach(({ v, x, col }) => {
      body += vbar(x, base, w, v * k, col);
      body += text(x + w / 2, base - v * k - 5, v === 0 ? "0%" : `${v.toFixed(2)}%`, { size: 11, weight: 600, fill: INK, anchor: "middle" });
    });
    body += text(c, base + 15, g.name, { size: 11, fill: INK, anchor: "middle" });
  });
  body += legend(206, [
    { color: S1, label: "Japanese prompts" },
    { color: S2, label: "English prompts" },
  ]);
  return frame({
    headline: "A 1.8B model invents 4.2× more in Japanese",
    sub: "Share of cited statute articles absent from the e-Gov registry",
    footer: ["600 questions (300 JA, 300 EN), 11 laws, 6,913 articles.", "llm-jp: 63/1,379 JA vs 7/642 EN. Local models only."],
    body,
    alt: "JaCite-Bench: llm-jp-3-1.8b invents 4.57 percent of cited Japanese law articles in Japanese versus 1.09 percent in English; Swallow-8B invents none",
    desc: "Invented citation rate, Japanese vs English prompts. llm-jp-3-1.8b 4.57% (63/1,379) vs 1.09% (7/642). Qwen2.5-7B 1.17% (7/597) vs 0.00% (0/567). Swallow-8B 0.00% (0/753) vs 0.00% (0/670). Corrected 2026-10-06 after fixing a phantom-citation bug in the extractor.",
  });
}

// -------------------------------------------------------------------- Vocab Tax
// Source: vocab-tax/devto_article.md results table (held-out bits-per-byte, 1,000 steps; 10M = mean of 2 seeds).
function vocab() {
  const cats = ["2k", "8k", "16k", "32k"];
  const series = [
    { name: "10M", c: S1, v: [1.391, 1.168, 1.219, 1.321] },
    { name: "25M", c: S2, v: [1.378, 1.258, 1.218, 1.28] },
    { name: "50M", c: S3, v: [1.436, 1.204, 1.147, 1.458] },
  ];
  const xs = [52, 152, 252, 352];
  const y = (v) => 176 - ((v - 1.1) / 0.4) * 108;
  let body = rect(128, 62, 148, 114, S1, ";opacity:.08");
  body += text(202, 76, "best: 8k-16k", { size: 10, anchor: "middle" });
  [1.1, 1.2, 1.3, 1.4, 1.5].forEach((t) => {
    body += line(52, y(t), 352, y(t), RULE) + text(44, y(t) + 3.5, t.toFixed(1), { size: 10, anchor: "end" });
  });
  cats.forEach((c, i) => (body += text(xs[i], 191, c, { size: 10.5, fill: INK, anchor: "middle" })));
  // draw 50M, 25M, then 10M on top so the near-tie at 16k stays visible
  [...series].reverse().forEach((s) => {
    const pts = s.v.map((v, i) => `${f(xs[i])},${f(y(v))}`).join(" ");
    body += `<polyline points="${pts}" style="fill:none;stroke:${s.c};stroke-width:2;stroke-linejoin:round;stroke-linecap:round"/>`;
    s.v.forEach((v, i) => {
      body += `<circle cx="${f(xs[i])}" cy="${f(y(v))}" r="4" style="fill:${s.c};stroke:${SURF};stroke-width:2"/>`;
    });
  });
  series.forEach((s) => {
    body += text(358, y(s.v[3]) + 3.5, s.name, { size: 10.5, weight: 600, fill: INK });
  });
  body += legend(207, [
    { color: S1, label: "10M" },
    { color: S2, label: "25M" },
    { color: S3, label: "50M (nominal size tags)" },
  ]);
  return frame({
    headline: "8k-16k vocabularies win at every size",
    sub: "Held-out bits per byte by vocabulary size (lower is better)",
    footer: ["16 runs, 1,000 steps each. 10M = mean of 2 seeds; seed noise", "reaches 0.13, so 8k vs 16k is a tie."].slice(0, 2),
    body,
    alt: "Vocab Tax: across three model sizes, 8k to 16k vocabularies give the lowest held-out bits per byte; 2k is worst and 32k collapses at 50M",
    desc: "Bits per byte by vocabulary size (2k, 8k, 16k, 32k); 10M, 25M and 50M are nominal size tags. 10M: 1.391, 1.168, 1.219, 1.321. 25M: 1.378, 1.258, 1.218, 1.280. 50M: 1.436, 1.204, 1.147, 1.458.",
  });
}

// ----------------------------------------------------------------------- Roofline
// Source: roofline-decoding/devto_article.md (RTX 3060, Qwen2.5-1.5B, batch-1 greedy).
function roofline() {
  const rows = [
    { name: "bf16 (HF)", v: 31.3, ceil: 102.9, pct: "29.8", c: CTX },
    { name: "bitsandbytes NF4", v: 25.7, ceil: 411.8, pct: "6.1", c: CTX },
    { name: "Own W4 kernel", v: 25.5, ceil: 411.8, pct: "6.1", c: S1, hi: true },
  ];
  const x0 = 146;
  const k = 220 / 420;
  let body = "";
  rows.forEach((r, i) => {
    const y = 62 + i * 44;
    body += text(16, y + 11, r.name, { size: 11, fill: INK, weight: r.hi ? 600 : 400 });
    body += rect(x0, y, r.ceil * k, 14, CTX, ";opacity:.28");
    body += hbar(x0, y, r.v * k, 14, r.c);
    body += line(x0 + r.ceil * k, y - 3, x0 + r.ceil * k, y + 17, INK2, 1.5);
    body += text(x0, y + 30, `${r.v} tok/s = ${r.pct}% of the ${r.ceil} ceiling`, { size: 10.5, fill: INK2 });
  });
  return frame({
    headline: "Ties bitsandbytes, 16× under the ceiling",
    sub: "Batch-1 decode tokens/s against the bandwidth roofline",
    footer: ["RTX 3060 12GB, Qwen2.5-1.5B, greedy. Measured copy bandwidth", "323.9 GB/s. Ceiling = bandwidth / (weights + KV read)."],
    body,
    alt: "Roofline-First Decoding: a custom 4-bit Triton kernel runs 25.5 tokens per second, tying bitsandbytes NF4 at 25.7, both at 6.1 percent of the int4 roofline",
    desc: "Tokens per second and percent of roofline on RTX 3060. bf16 31.3 (29.8% of 102.9). bitsandbytes NF4 25.7 (6.1% of 411.8). Own W4 kernel 25.5 (6.1% of 411.8).",
  });
}

// ---------------------------------------------------------------- DemoDoctor
// Source: demodoctor/README.md policy tables (ACT on PushT, 60k steps, 3 seeds x 50 rollouts per condition).
function demodoctor() {
  const rows = [
    { name: "Clean", mean: 0.425, lo: 0.369, hi: 0.488, dots: [0.395, 0.403, 0.477] },
    { name: "Corrupted", mean: 0.397, lo: 0.344, hi: 0.454, dots: [0.375, 0.379, 0.437] },
    { name: "Auto-cleaned", mean: 0.359, lo: 0.302, hi: 0.423, dots: [0.331, 0.333, 0.414] },
    { name: "Random 175", mean: 0.432, lo: 0.386, hi: 0.476, dots: [0.407, 0.442, 0.446] },
  ];
  const x0 = 112;
  const x1 = 380;
  const lo = 0.28;
  const hi = 0.52;
  const sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  let body = "";
  [0.3, 0.4, 0.5].forEach((v) => {
    body += line(sx(v), 58, sx(v), 176, RULE) + text(sx(v), 188, v.toFixed(2), { size: 10, anchor: "middle", fill: INK2 });
  });
  rows.forEach((r, i) => {
    const yc = 70 + i * 30;
    body += text(16, yc + 4, r.name, { size: 10.5, fill: INK });
    body += rect(sx(r.lo), yc - 3, sx(r.hi) - sx(r.lo), 6, S1, ";opacity:0.28");
    r.dots.forEach((d) => {
      body += `<circle cx="${f(sx(d))}" cy="${f(yc + 11)}" r="3.5" style="fill:${CTX}"/>`;
    });
    body += rect(sx(r.mean) - 1.5, yc - 7, 3, 14, S1);
  });
  body += legend(205, [
    { color: CTX, label: "One policy" },
    { color: S1, label: "Condition mean, 95% CI" },
  ]);
  return frame({
    headline: "Data quality did not separate the policies",
    sub: "Mean max reward per policy (higher is better)",
    footer: ["ACT on PushT, 60k steps, 3 seeds x 50 rollouts per condition.", "Random 175 = size-matched control. No pairwise CI excludes 0."],
    body,
    alt: "DemoDoctor: mean max reward of ACT policies trained on clean, corrupted, auto-cleaned and random-175 PushT demonstrations; the intervals overlap and no pairwise difference excludes zero",
    desc: "Mean max reward, 3 policies per condition, 95% bootstrap interval. Clean 0.425 [0.369, 0.488]; corrupted 0.397 [0.344, 0.454]; auto-cleaned 0.359 [0.302, 0.423]; random 175 0.432 [0.386, 0.476]. Success rate is 0 to 4 percent in every condition.",
  });
}

// ------------------------------------------------------------ Invoice-Check JP
// Source: invoice-check-jp/results/REPORT.md (600 synthetic test invoices; full check rule).
function invoicecheck() {
  const rows = [
    { name: "OCR + rules", exact: 37.8, auto: 55.0, wrong: "0 of 292" },
    { name: "VLM zero-shot", exact: 5.3, auto: 8.1, wrong: "3 of 43" },
    { name: "VLM fine-tuned", exact: 83.0, auto: 86.8, wrong: "0 of 461" },
  ];
  const x0 = 100;
  const k = 1.8;
  let body = "";
  rows.forEach((r, i) => {
    const y = 74 + i * 42;
    body += text(16, y + 14, r.name, { size: 10.5, fill: INK });
    body += hbar(x0, y, r.exact * k, 9, CTX, 3) + text(x0 + r.exact * k + 4, y + 8, r.exact.toFixed(1) + "%", { size: 10, fill: INK2 });
    body += hbar(x0, y + 12, r.auto * k, 9, S1, 3) + text(x0 + r.auto * k + 4, y + 20, r.auto.toFixed(1) + "%", { size: 10, weight: 600, fill: INK });
    body += text(384, y + 14, r.wrong, { size: 10, fill: r.wrong.startsWith("3") ? S2 : INK2, anchor: "end" });
  });
  body += text(384, 66, "wrong, among approved", { size: 9.5, fill: INK2, anchor: "end" });
  body += legend(205, [
    { color: CTX, label: "All fields right, no checks" },
    { color: S1, label: "Auto-approved by the checks" },
  ]);
  return frame({
    headline: "86.8% automated, 0 wrong covered fields",
    sub: "Fine-tuned VLM + checks, 600 synthetic invoices",
    footer: ["Covered = registration no., issuer, tax basis, totals, item numbers.", "Synthetic data; vertical layouts are the weak spot (40%)."],
    body,
    alt: "Invoice-Check JP: exact match and auto-approval rate of three extractors on 600 synthetic Japanese invoices; the fine-tuned model is auto-approved on 86.8% with none of 461 approved invoices wrong in a field a check can catch",
    desc: "Exact match without checks / auto-approved by the full check rule: OCR plus rules 37.8 / 55.0 percent (0 of 292 approved had a wrong checkable field); VLM zero-shot 5.3 / 8.1 (3 of 43); VLM fine-tuned with QLoRA 83.0 / 86.8 (0 of 461).",
  });
}

// ------------------------------------------------------------------ Keiri-Agent
// Source: keiri-agent/results/REPORT.md (300 synthetic test invoices; pre-registered run, 2026-10-06).
function keiriagent() {
  const rows = [
    { name: "No checks", unsafe: 17.0, auto: 100.0 },
    { name: "+ verification", unsafe: 4.0, auto: 77.3 },
    { name: "+ PO matching", unsafe: 2.0, auto: 50.3 },
  ];
  const x1 = 108;
  const x2 = 262;
  const ku = 5.2;
  const ka = 0.78;
  let body = text(x1, 64, "Approved with a wrong field", { size: 10, weight: 600, fill: INK });
  body += text(x2, 64, "Automation", { size: 10, weight: 600, fill: INK });
  body += line(x1, 69, x1, 69 + rows.length * 40, RULE2) + line(x2, 69, x2, 69 + rows.length * 40, RULE2);
  rows.forEach((r, i) => {
    const y = 78 + i * 40;
    body += text(16, y + 11, r.name, { size: 10.5, fill: INK });
    body += hbar(x1 + 1, y, r.unsafe * ku, 14, S2, 3) + text(x1 + 1 + r.unsafe * ku + 4, y + 11, r.unsafe.toFixed(1) + "%", { size: 10, weight: 600, fill: INK });
    body += hbar(x2 + 1, y, r.auto * ka, 14, S1, 3) + text(x2 + 1 + r.auto * ka + 4, y + 11, r.auto.toFixed(1) + "%", { size: 10, fill: INK2 });
  });
  return frame({
    headline: "Checks cut unsafe approvals 17% to 4%",
    sub: "LangGraph invoice agent, 300 synthetic invoices",
    footer: ["PO matching: 2.0%, but most of it is routing (automation 77% to", "50%), not detection. Synthetic POs; no reviewer simulated."],
    body,
    alt: "Keiri-Agent: share of 300 synthetic invoices auto-approved with a wrong field and automation rate for three graph versions; verification cuts unsafe approvals from 17.0 to 4.0 percent, PO matching to 2.0 percent while automation falls from 77.3 to 50.3 percent",
    desc: "Unsafe auto-approval rate / automation rate: no checks 17.0 / 100.0 percent; plus verification 4.0 / 77.3; plus duplicate check and purchase-order matching 2.0 / 50.3. Exact 95 percent intervals: 12.9 to 21.7, 2.1 to 6.9, 0.7 to 4.3. Most of the PO-matching gain on this sample comes from invoices routed away because the synthetic PO world disagreed, not from catching extraction errors.",
  });
}

// ------------------------------------------------------------ Agent Shootout
// Source: agent-shootout/results/analysis_test.md (240 synthetic test questions per design; pre-registered run, 2026-10-06).
function agentshootout() {
  const rows = [
    { name: "ReAct", mean: 59.6, lo: 53.1, hi: 65.8, tok: 4663 },
    { name: "Draft + verify", mean: 63.7, lo: 57.3, hi: 69.8, tok: 4905 },
    { name: "Supervisor", mean: 65.0, lo: 58.6, hi: 71.0, tok: 7494 },
    { name: "Plan + execute", mean: 61.7, lo: 55.2, hi: 67.8, tok: 10535 },
  ];
  const x0 = 106;
  const x1 = 250;
  const lo = 50;
  const hi = 72;
  const sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  const t0 = 286;
  const kt = 0.0062;
  let body = text(x0, 64, "Correct, 95% CI", { size: 10, weight: 600, fill: INK }) + text(t0, 64, "Mean tokens", { size: 10, weight: 600, fill: INK });
  [50, 60, 70].forEach((v) => {
    body += line(sx(v), 72, sx(v), 186, RULE) + text(sx(v), 198, v + "%", { size: 10, anchor: "middle", fill: INK2 });
  });
  body += line(t0, 72, t0, 186, RULE2);
  rows.forEach((r, i) => {
    const yc = 84 + i * 28;
    body += text(16, yc + 4, r.name, { size: 10.5, fill: INK });
    body += rect(sx(r.lo), yc - 3, sx(r.hi) - sx(r.lo), 6, S1, ";opacity:0.28");
    body += rect(sx(r.mean) - 1.5, yc - 7, 3, 14, S1);
    body += text(sx(r.mean), yc + 18, r.mean.toFixed(1), { size: 9.5, anchor: "middle", fill: INK2 });
    body += hbar(t0 + 1, yc - 6, r.tok * kt, 12, CTX, 3) + text(t0 + 1 + r.tok * kt + 4, yc + 4, (r.tok / 1000).toFixed(1) + "k", { size: 10, weight: 600, fill: INK });
  });
  return frame({
    headline: "2.3x the tokens, no detectable gain",
    sub: "Four LangGraph agents, 240 questions each",
    footer: ["qwen3.5 9B (Q4), one run. No pair differs at p < 0.0083;", "it would have taken a 6 to 9 point gap. Synthetic questions."],
    body,
    alt: "Agent Shootout: correct-answer rate and mean tokens per question for four LangGraph designs on 240 synthetic Japanese-law questions; plan-and-execute uses 2.3 times the tokens of ReAct with an indistinguishable correct rate",
    desc: "Correct rate with exact 95 percent interval / mean tokens per question: ReAct 59.6 percent [53.1, 65.8] / 4,663; draft-verify 63.7 [57.3, 69.8] / 4,905; supervisor 65.0 [58.6, 71.0] / 7,494; plan-and-execute 61.7 [55.2, 67.8] / 10,535. No pairwise McNemar test clears the pre-registered threshold of 0.0083 (smallest p 0.0525, ReAct vs draft-verify). A pair would have needed a gap of about 6 to 9 points to clear it.",
  });
}

// ------------------------------------------------------------ FedProc-Ledger
// Source: fedproc-ledger/results/round{4,5,6,7}_report.json (majority gold of agent + 2 judges;
// R5 primary is the stacker, equal to max-q within +0.004). Binding-set F1, cluster bootstrap over documents.
function fedprocledger() {
  const rows = [
    { name: "R4 · v1.2", model: 0.921, b0: 0.78, diff: "+0.142" },
    { name: "R5 · v1.2", model: 0.926, b0: 0.829, diff: "+0.097" },
    { name: "R6 · v1.3", model: 0.914, b0: 0.807, diff: "+0.107" },
    { name: "R7 · v1.4", model: 0.89, b0: 0.806, diff: "+0.084" },
  ];
  const x0 = 150;
  const x1 = 360;
  const lo = 0.7;
  const hi = 1.0;
  const sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  let body = text(16, 60, "Binding-set F1 — model (blue) vs status-quo regexes (grey)", { size: 10, weight: 600, fill: INK });
  [0.7, 0.8, 0.9, 1.0].forEach((v) => {
    body += line(sx(v), 66, sx(v), 192, RULE) + text(sx(v), 204, v.toFixed(1), { size: 10, anchor: "middle", fill: INK2 });
  });
  rows.forEach((r, i) => {
    const y = 70 + i * 32;
    body += text(16, y + 11, r.name, { size: 10.5, fill: INK });
    body += hbar(sx(lo) + 1, y, sx(r.b0) - sx(lo) - 1, 11, CTX, 3);
    body += hbar(sx(lo) + 1, y + 13, sx(r.model) - sx(lo) - 1, 11, S1, 3);
    body += text(sx(r.model) + 5, y + 22, r.model.toFixed(3) + " (" + r.diff + ")", { size: 9.5, weight: 600, fill: INK });
  });
  return frame({
    headline: "Four fresh rounds above the status quo",
    sub: "Pre-registered binding-set F1, 24-27 new docs each",
    footer: ["Diffs with 95% CIs above zero: +0.142, +0.097, +0.107,", "+0.084. Specificity 70-79% vs 8-19% at equal recall."],
    body,
    alt: "FedProc-Ledger: binding-set F1 of the model versus status-quo regexes across four pre-registered fresh rounds; the model leads by 0.08 to 0.14 with intervals above zero",
    desc: "Binding-set F1, model vs status-quo regexes (majority gold): round 4 (26 docs) 0.921 vs 0.780, difference +0.142 [0.085, 0.210]; round 5 (24 docs) 0.926 vs 0.829, +0.097 [0.040, 0.158]; round 6 (24 docs) 0.914 vs 0.807, +0.107 [0.057, 0.161]; round 7 temporal hold-out (27 docs) 0.890 vs 0.806, +0.084 [0.028, 0.143]. Specificity 70 to 79 percent vs 8 to 19 percent.",
  });
}

function editbench() {
  const rows = [
    { name: "B-oracle", gen: 0.527, loc: 0.287 },
    { name: "B-real", gen: 0.455, loc: 0.285 },
    { name: "C-covered", gen: 0.627, loc: 0.369 },
    { name: "ROME", gen: 0.707, loc: 0.144 },
    { name: "MEMIT", gen: 0.553, loc: 0.124 },
  ];
  const x0 = 150;
  const x1 = 360;
  const lo = 0.0;
  const hi = 0.8;
  const sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  let body = text(16, 60, "Generalization (blue) vs locality intact (grey)", { size: 10, weight: 600, fill: INK });
  [0.0, 0.2, 0.4, 0.6, 0.8].forEach((v) => {
    body += line(sx(v), 66, sx(v), 200, RULE) + text(sx(v), 212, v.toFixed(1), { size: 10, anchor: "middle", fill: INK2 });
  });
  rows.forEach((r, i) => {
    const y = 70 + i * 26;
    body += text(16, y + 11, r.name, { size: 10.5, fill: INK });
    body += hbar(sx(lo) + 1, y, sx(r.loc) - sx(lo) - 1, 11, CTX, 3);
    body += hbar(sx(lo) + 1, y + 13, sx(r.gen) - sx(lo) - 1, 11, S1, 3);
    body += text(sx(r.gen) + 5, y + 22, r.gen.toFixed(2) + " · " + r.loc.toFixed(2), { size: 9, weight: 600, fill: INK });
  });
  return frame({
    headline: "Edits generalize, neighbors pay",
    sub: "Same 1,500 facts, Qwen2.5-1.5B, alias-match rates",
    footer: ["Weight edits: gen 0.55-0.71 but locality 0.12-0.14.", "No-touch methods keep 0.29-0.37."],
    body,
    alt: "EditBench-3Way: generalization versus locality for five update methods; weight editing generalizes but locality collapses to 12-14 percent",
    desc: "Generalization / locality intact: B-oracle 0.527 / 0.287; B-real 0.455 / 0.285; graph-covered 0.627 / 0.369; ROME 0.707 / 0.144; MEMIT 0.553 / 0.124. Same 1,500 facts and model throughout.",
  });
}

// ------------------------------------------------------------ FewHumans
// Source: fewhumans/results/study_summary.json (pooled DL random-effects savings ratios, 7 tasks, pre-registered, 2026-10-10).
function fewhumans() {
  const rows = [
    { name: "PPI++", ratio: 0.908, lo: 0.865, hi: 0.952 },
    { name: "Stratified", ratio: 0.907, lo: 0.843, hi: 0.977 },
    { name: "Active, uniform", ratio: 1.239, lo: 1.087, hi: 1.412 },
    { name: "Fixed PPI", ratio: 2.269, lo: 1.558, hi: 3.302 },
    { name: "Disagreement", ratio: 2.636, lo: 2.505, hi: 2.773 },
  ];
  const x0 = 150;
  const x1 = 330;
  const lo = 0.5;
  const hi = 3.0;
  const sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  let body = text(16, 60, "Human labels vs human-only (ratio, <1 saves)", { size: 10, weight: 600, fill: INK });
  [0.5, 1.0, 2.0, 3.0].forEach((v) => {
    body += line(sx(v), 66, sx(v), 196, RULE) + text(sx(v), 208, v.toFixed(1) + "x", { size: 10, anchor: "middle", fill: INK2 });
  });
  body += line(sx(1.0), 66, sx(1.0), 196, RULE2, 1.5);
  rows.forEach((r, i) => {
    const y = 74 + i * 26;
    body += text(16, y + 4, r.name, { size: 10.5, fill: INK });
    body += rect(sx(r.lo), y - 3, sx(r.hi) - sx(r.lo), 6, r.ratio < 1 ? S3 : S2, ";opacity:0.3");
    body += rect(sx(r.ratio) - 1.5, y - 7, 3, 14, r.ratio < 1 ? S3 : S2);
    body += text(sx(r.ratio), y + 18, r.ratio.toFixed(2) + "x", { size: 9, anchor: "middle", fill: INK2 });
  });
  return frame({
    headline: "PPI++ saves 9% of labels; routing costs 2.6x",
    sub: "7 tasks, 3-judge panel, pre-registered savings ratios",
    footer: ["Fixed PPI and disagreement routing never reach target on most tasks", "(ratios are censored lower bounds). Judge-only misses 18/21."],
    body,
    alt: "FewHumans: pooled human-label savings ratios versus human-only labeling; PPI++ 0.91 and stratified 0.91 save labels, active-uniform 1.24, fixed PPI 2.27 and disagreement routing 2.64 cost labels",
    desc: "Pooled DerSimonian-Laird savings ratio with 95 percent interval: PPI++ 0.908 [0.865, 0.952]; stratified 0.907 [0.843, 0.977]; active-uniform 1.239 [1.087, 1.412]; fixed PPI 2.269 [1.558, 3.302]; disagreement routing 2.636 [2.505, 2.773]. Fixed-PPI and disagreement ratios are censored lower bounds (target never reached on most tasks).",
  });
}

// ------------------------------------------------------------ Akusento
// Source: akusento/results/scorer.json (2,020 held-out morae, JSUT read speech) + xswap.json.
function akusento() {
  const rows = [
    { name: "Majority", v: 0.504 },
    { name: "Scorer", v: 0.789 },
  ];
  const x0 = 150;
  const x1 = 330;
  const lo = 0.4;
  const hi = 0.8;
  const sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  let body = text(16, 60, "Mora high/low accuracy, held-out utterances", { size: 10, weight: 600, fill: INK });
  [0.4, 0.5, 0.6, 0.7, 0.8].forEach((v) => {
    body += line(sx(v), 66, sx(v), 150, RULE) + text(sx(v), 162, v.toFixed(1), { size: 10, anchor: "middle", fill: INK2 });
  });
  rows.forEach((r, i) => {
    const y = 74 + i * 34;
    body += text(16, y + 11, r.name, { size: 10.5, fill: INK });
    body += hbar(x0 + 1, y, sx(r.v) - x0 - 1, 14, i ? S3 : CTX, 3) + text(sx(r.v) + 5, y + 11, r.v.toFixed(3), { size: 10, weight: 600, fill: INK });
  });
  body += text(16, 178, "Tone control: cross-synthesis follows tones (0.82-0.92)", { size: 10, fill: INK2 });
  body += text(16, 194, "Word exact-match 0.237; no human checked any label", { size: 10, fill: INK2 });
  return frame({
    headline: "Hearing pitch accent: 0.789 vs 0.504",
    sub: "Logistic scorer on F0 features, 2,020 held-out morae",
    footer: ["Directional transitions: 743 agree / 363 contradict dictionary;", "peak delay is real. Kana CER 0.105."],
    body,
    alt: "Akusento: mora high/low accuracy 0.736 versus majority baseline 0.504 on held-out Japanese read speech, with tone-control cross-synthesis correlations 0.82 to 0.92",
    desc: "Mora high/low accuracy with 12 F0 features: scorer 0.789 vs majority 0.504 on 2,020 held-out morae (100 JSUT utterances, one speaker). Word accent-type exact match 0.460 over 398 phrases. Cross-synthesis (same phones, swapped tones) follows tones at contour correlations 0.82 to 0.92 on rain/candy, inconclusive on chopsticks/bridge.",
  });
}

export const CHARTS = { flipgate,"graphproof-qa": graphproof, "fedproc-constrained": fedproc, oraclebench, shiftwatch, "tiny-bilingual-retriever": tiny, "jacite-bench": jacite, "vocab-tax": vocab, "roofline-decoding": roofline, demodoctor, "invoice-check-jp": invoicecheck, "keiri-agent": keiriagent, "agent-shootout": agentshootout, "fedproc-ledger": fedprocledger, "edit-rag-graph": editbench, fewhumans, akusento };

export function chartSvg(id) {
  const fn = CHARTS[id];
  return fn ? fn() : "";
}

export function chartAlt(id) {
  const svg = chartSvg(id);
  const m = svg.match(/aria-label="([^"]*)"/);
  return m ? m[1] : "";
}
