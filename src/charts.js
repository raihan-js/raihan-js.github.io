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
// Source: flipgate/README.md, GSM8K n=1000, bf16 vs AWQ / GPTQ-Int4 (HF generate).
function flipgate() {
  const rows = [
    { name: "AWQ", delta: "+10.1", broke: 77, fixed: 178 },
    { name: "GPTQ-Int4", delta: "+4.3", broke: 89, fixed: 132 },
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
    headline: "Accuracy rose. Correct answers still broke.",
    sub: "GSM8K, 1,000 items, quantised vs bf16 baseline",
    footer: ["Qwen2.5-3B-Instruct, HF generate, temp 0. McNemar p < 0.0001", "(AWQ) and 0.0047 (GPTQ). Measured noise floor: 0 flips."],
    body,
    alt: "FlipGate: quantised models gained accuracy on GSM8K but 77 to 89 previously correct answers broke",
    desc: "GSM8K n=1000 versus bf16. AWQ: 77 right-to-wrong, 178 wrong-to-right, net +10.1 points. GPTQ-Int4: 89 right-to-wrong, 132 wrong-to-right, net +4.3 points.",
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
    footer: ["Renamed-entity test: names never seen in training,", "B vs A McNemar p = 1.2e-84."],
    body,
    alt: "GraphProof-QA: compile-to-query system B scores 93.3 percent versus 34.2 percent for direct answering, and 81.4 versus 5.8 on renamed entities",
    desc: "Hits@1 on 6,000 MetaQA questions: A direct 34.2%, B DSL 93.3%, C constrained 96.8%. On 531 renamed-entity questions: A 5.8%, B 81.4%.",
  });
}

// -------------------------------------------------------- FedProc-Constrained
// Source: fedproc-constrained/README.md (60 prompts, Qwen2.5-1.5B-Instruct).
function fedproc() {
  const rows = [
    { name: "Unconstrained", fab: 82, sub: 8, ok: 8 },
    { name: "Enum grammar", fab: 0, sub: 75, ok: 8 },
    { name: "Span grammar", fab: 0, sub: 25, ok: 0 },
    { name: "Post-hoc filter", fab: 77, sub: 10, ok: 8 },
  ];
  const x0 = 116;
  const k = 2.68;
  let body = "";
  rows.forEach((r, i) => {
    const y = 62 + i * 28;
    body += text(16, y + 12, r.name, { size: 11, fill: INK, weight: i === 1 ? 600 : 400 });
    const other = Math.max(0, 100 - r.fab - r.sub - r.ok);
    const segs = [
      { v: r.fab, c: S2, label: true },
      { v: r.sub, c: S1, label: true },
      { v: r.ok, c: S3, label: false },
      { v: other, c: CTX, label: false },
    ].filter((s) => s.v > 0);
    let x = x0;
    segs.forEach((s, j) => {
      const w = s.v * k - (j < segs.length - 1 ? 2 : 0);
      body += j === segs.length - 1 ? hbar(x, y, w, 16, s.c) : rect(x, y, w, 16, s.c);
      if (s.label && s.v >= 14) body += text(x + 6, y + 12, `${s.v}%`, { size: 11, weight: 600, fill: "#fff" });
      x += s.v * k;
    });
  });
  body += legend(186, [
    { color: S2, label: "Fabricated" },
    { color: S1, label: "Real but wrong" },
    { color: S3, label: "Correct" },
    { color: CTX, label: "Other" },
  ]);
  return frame({
    headline: "Block the fake clause, get a real wrong one",
    sub: "% of 60 prompts, Qwen2.5-1.5B-Instruct, FAR/DFARS",
    footer: ["Enum grammar: 0% fabricated, 75% substituted (95% CI", "64-86%). 1,032-clause registry. Other = remainder."],
    body,
    alt: "FedProc-Constrained: a registry grammar removes fabricated clauses but 75 percent of outputs become real but wrong clauses",
    desc: "Unconstrained: 82% fabricated, 8% substituted, 8% correct. Enum grammar: 0% fabricated, 75% substituted, 8% correct. Span grammar: 0% fabricated, 25% substituted. Post-hoc filter: 77% fabricated, 10% substituted, 8% correct.",
  });
}

// ---------------------------------------------------------------- OracleBench
// Source: oraclebench/README.md false-accept table (1,655 oracle-checked items).
function oraclebench() {
  const rows = [
    { name: "Overall", a: 13.2, b: 36.1, ciA: [11.4, 15.1], ciB: [33.4, 38.7], bold: true },
    { name: "GSM8K", a: 15.8, b: 94.0 },
    { name: "IFEval", a: 22.1, b: 13.9 },
    { name: "FedProc", a: 0.5, b: 2.0 },
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
    footer: ["1,655 oracle-checked items, 95% CI on overall. Pairwise", "mode: both judges pick answer B 85-92% (chance: 50%)."],
    body,
    alt: "OracleBench: a 3B judge falsely accepts 13.2 percent of wrong answers and a 0.5B judge 36.1 percent; the 0.5B judge accepts 94 percent of wrong arithmetic",
    desc: "False-accept rate. Overall: Qwen-3B 13.2% [11.4, 15.1], Qwen-0.5B 36.1% [33.4, 38.7]. GSM8K 15.8 and 94.0. IFEval 22.1 and 13.9. FedProc 0.5 and 2.0 (blanket rejection, 0% true-accept).",
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
    { name: "Untrained 30M encoder", v: 0.0373 },
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
    footer: ["Student 30M params (teacher 568M); index 4.9 vs 19.5 MB.", "Synthetic opus-100 EN-JA eval: relative comparisons only."],
    body,
    alt: "tiny-bilingual-retriever: distilling bge-m3 into a 30M encoder lifts English to Japanese nDCG@10 from 0.037 to 0.481, 71 percent of the teacher",
    desc: "EN-JA nDCG@10 on 500 queries and 5,000 passages: bge-m3 teacher 0.674, ruri-v3-30m 0.542, distilled student 0.481, multilingual-e5-small 0.480, untrained modernbert-ja-30m 0.037.",
  });
}

// ------------------------------------------------------------------ JaCite-Bench
// Source: jacite-bench/README.md results (invented = cited article not in the e-Gov registry).
function jacite() {
  const groups = [
    { name: "llm-jp-3-1.8b", ja: 4.05, en: 1.09 },
    { name: "Qwen2.5-7B", ja: 1.4, en: 0 },
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
    headline: "A 1.8B model invents 3.7× more in Japanese",
    sub: "Share of cited statute articles absent from the e-Gov registry",
    footer: ["600 questions (300 JA, 300 EN), 11 laws, 6,913 articles.", "llm-jp: 63/1,554 JA vs 7/642 EN. Local models only."],
    body,
    alt: "JaCite-Bench: llm-jp-3-1.8b invents 4.05 percent of cited Japanese law articles in Japanese versus 1.09 percent in English; Swallow-8B invents none",
    desc: "Invented citation rate, Japanese vs English prompts. llm-jp-3-1.8b 4.05% (63/1554) vs 1.09% (7/642). Qwen2.5-7B 1.40% (9/643) vs 0.00% (0/567). Swallow-8B 0.00% (0/793) vs 0.00% (0/670).",
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
    { color: S3, label: "50M non-embedding params" },
  ]);
  return frame({
    headline: "8k-16k vocabularies win at every size",
    sub: "Held-out bits per byte by vocabulary size (lower is better)",
    footer: ["16 runs, 1,000 steps each. 10M = mean of 2 seeds; seed noise", "reaches 0.13, so 8k vs 16k is a tie."].slice(0, 2),
    body,
    alt: "Vocab Tax: across three model sizes, 8k to 16k vocabularies give the lowest held-out bits per byte; 2k is worst and 32k collapses at 50M",
    desc: "Bits per byte (2k, 8k, 16k, 32k vocab). 10M: 1.391, 1.168, 1.219, 1.321. 25M: 1.378, 1.258, 1.218, 1.280. 50M: 1.436, 1.204, 1.147, 1.458.",
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

export const CHARTS = { flipgate, "graphproof-qa": graphproof, "fedproc-constrained": fedproc, oraclebench, shiftwatch, "tiny-bilingual-retriever": tiny, "jacite-bench": jacite, "vocab-tax": vocab, "roofline-decoding": roofline };

export function chartSvg(id) {
  const fn = CHARTS[id];
  return fn ? fn() : "";
}

export function chartAlt(id) {
  const svg = chartSvg(id);
  const m = svg.match(/aria-label="([^"]*)"/);
  return m ? m[1] : "";
}
