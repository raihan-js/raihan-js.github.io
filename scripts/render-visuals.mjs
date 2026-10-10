// Renders every chart in src/charts.js to PNG using the Chrome that is already installed.
// No npm install needed:  node scripts/render-visuals.mjs [outDir] [id ...]
//
// Outputs per chart id, into <outDir>/<id>/:
//   card-light.png / card-dark.png   1200x750  (the card visual, 3x)
//   cover.png                        1000x420  (dev.to cover, light)
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tmpdir } from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const outDir = resolve(process.argv[2] || join(root, "..", "..", "visuals"));
const only = process.argv.slice(3);

const { CHARTS, chartSvg, chartAlt } = await import(pathToFileURL(join(root, "src", "charts.js")).href);

// Reuse the site's own token blocks so exports match the page exactly.
const css = readFileSync(join(root, "src", "index.css"), "utf8");
const tokens = css.slice(0, css.indexOf("* { box-sizing"));

const FONTS =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">';

const page = (theme, body, w, h, extraCss = "") => `<!doctype html><html data-theme="${theme}"><head><meta charset="utf-8">${FONTS}
<style>${tokens}
html,body{margin:0;padding:0;background:var(--bg-elev);font-family:var(--sans);-webkit-font-smoothing:antialiased}
.wrap{width:${w}px;height:${h}px;overflow:hidden}
${extraCss}</style></head><body>${body}</body></html>`;

const tmp = join(tmpdir(), "render-visuals");
mkdirSync(tmp, { recursive: true });

function shot(html, w, h, scale, out) {
  const file = join(tmp, "page.html");
  writeFileSync(file, html);
  execFileSync(
    "google-chrome",
    [
      "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
      "--virtual-time-budget=6000", `--force-device-scale-factor=${scale}`,
      `--window-size=${w},${h}`, `--screenshot=${out}`, pathToFileURL(file).href,
    ],
    { stdio: "ignore", timeout: 60000 }
  );
}

const TITLES = {
  flipgate: ["FlipGate", "A release gate for quantised LLMs"],
  "graphproof-qa": ["GraphProof-QA", "Proof-carrying QA with a small model"],
  "fedproc-constrained": ["FedProc-Constrained", "What replaces a hallucination you block?"],
  oraclebench: ["OracleBench", "Grading small LLM judges against oracles"],
  shiftwatch: ["ShiftWatch", "Accuracy estimation without labels"],
  "tiny-bilingual-retriever": ["Tiny Bilingual Retriever", "30M EN-JA retrieval, distilled from bge-m3"],
  "jacite-bench": ["JaCite-Bench", "Do LLMs invent Japanese law articles?"],
  "vocab-tax": ["Vocab Tax", "A compute-matched vocabulary study"],
  "roofline-decoding": ["Roofline-First Decoding", "A W4A16 Triton kernel vs the memory roofline"],
  "agent-shootout": ["Agent Shootout", "Four agent architectures, one question set, one budget"],
  "fedproc-ledger": ["FedProc-Ledger", "Which solicitation clauses actually bind?"],
  "edit-rag-graph": ["EditBench-3Way", "Edit the weights, retrieve, or look it up?"],
};

for (const id of Object.keys(CHARTS)) {
  if (only.length && !only.includes(id)) continue;
  const dir = join(outDir, id);
  mkdirSync(dir, { recursive: true });
  const svg = chartSvg(id);
  for (const theme of ["light", "dark"]) {
    shot(page(theme, `<div class="wrap">${svg}</div>`, 400, 250), 400, 250, 3, join(dir, `card-${theme}.png`));
  }
  const [name, tag] = TITLES[id] || [id, ""];
  const cover = `<div class="wrap" style="display:flex;align-items:center;gap:36px;padding:0 48px;box-sizing:border-box;background:var(--bg)">
    <div style="flex:1;min-width:0">
      <div style="font:500 16px var(--sans);color:var(--fg-muted);letter-spacing:.02em;margin-bottom:14px">raihan-js / ${id}</div>
      <div style="font:600 52px/1.05 var(--sans);letter-spacing:-.02em;color:var(--fg)">${name}</div>
      <div style="font:400 22px/1.35 var(--sans);color:var(--fg-muted);margin-top:14px">${tag}</div>
    </div>
    <div style="width:430px;flex:none;border:1px solid var(--border);border-radius:14px;overflow:hidden;background:var(--bg-elev)">${svg}</div>
  </div>`;
  shot(page("light", cover, 1000, 420), 1000, 420, 2, join(dir, "cover.png"));
  console.log("rendered", id, "-", chartAlt(id).slice(0, 70));
}
// Social share card (1200x630, dark) -> <outDir>/og-image.png ; copy to public/og-image.png and public/twitter-image.png
if (!only.length || only.includes("og")) {
  const og = `<div class="wrap" style="display:flex;align-items:center;gap:52px;padding:0 72px;box-sizing:border-box;background:var(--bg)">
    <div style="flex:1;min-width:0">
      <div style="font:500 22px var(--sans);color:var(--fg-muted);margin-bottom:26px">raihan-js.github.io</div>
      <div style="font:500 36px var(--sans);color:var(--fg-muted)">Raihan Sikder</div>
      <div style="font:700 70px/1 var(--sans);letter-spacing:-.03em;color:var(--fg);margin:10px 0 26px;white-space:nowrap">AI/ML Engineer</div>
      <div style="font:400 28px/1.35 var(--sans);color:var(--fg-muted)">LLM evaluation, monitoring and release gating. Small models trained from scratch.</div>
      <div style="font:500 20px var(--sans);color:var(--fg);margin-top:26px;opacity:.85">11 research projects · open data on Hugging Face</div>
    </div>
    <div style="width:470px;flex:none;border:1px solid var(--border);border-radius:16px;overflow:hidden;background:var(--bg-elev)">${chartSvg("flipgate")}</div>
  </div>`;
  mkdirSync(outDir, { recursive: true });
  shot(page("dark", og, 1200, 630), 1200, 630, 1, join(outDir, "og-image.png"));
  console.log("rendered og-image");
}
rmSync(tmp, { recursive: true, force: true });
