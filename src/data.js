// Data layer — single source for content across sections.

export const PROFILE = {
  name: "Raihan",
  role: "AI/ML Engineer · LLMOps · Evaluation · Retrieval",
  location: "Dhaka, Bangladesh",
  status: "Founding Engineer & AI/ML Lead at VETR Proposal (Acu-Elligent LLC) — AI-assisted federal contracting platform.",
  email: "raihan@vetrproposal.com",
  available: "Open to senior ML / LLMOps roles · relocating to Tokyo",
  languages: ["English (professional)", "Bangla (native)", "Japanese (learning, JLPT N5 target Dec 2026)", "Russian (basic)"],
  socials: [
    { label: "GitHub", href: "https://github.com/raihan-js", handle: "@raihan-js" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raihan-js/", handle: "in/raihan-js" },
    { label: "Hugging Face", href: "https://huggingface.co/raihan-js", handle: "@raihan-js" },
    { label: "Scholar", href: "https://scholar.google.com/citations?hl=en&user=nNv6V0gAAAAJ", handle: "scholar" },
    { label: "Dev.to", href: "https://dev.to/raihan-js", handle: "@raihan-js" },
  ],
};

export const SCHOLAR = "https://scholar.google.com/citations?hl=en&user=nNv6V0gAAAAJ";

export const PUBLICATIONS = [
  {
    id: "rsna-validation",
    title:
      "When the Validation Set Cannot See: Measurement-Disciplined Development of a Knee-MRI Classifier Supervised by Machine-Read Radiology Reports",
    venue: "Zenodo preprint, 2026",
    summary:
      "Full record of an RSNA knee-MRI Kaggle entry (4,407 report-labelled exams, ~290 experiments): CV against training labels is blind to label-target changes; ensemble gains transfer ~0%, input gains at/above prediction; 0.950 public board with a shared-error floor. 30 pages.",
    links: [
      { label: "Zenodo record", href: "https://zenodo.org/records/23334291" },
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.23334290" },
    ],
  },
  {
    id: "fedproc-ledger-paper",
    title:
      "Mentioned Is Not Binding: A Rules-plus-Small-Model Clause Ledger and a Pre-registered Audit of Regex Extraction on US Federal Solicitations",
    venue: "Zenodo preprint, 2026",
    summary:
      "Rules plus a 0.46 MB mention-role classifier for which FAR/DFARS clauses bind a solicitation; seven pre-registered rounds incl. a temporal hold-out (round 7: F1 0.890 vs 0.806, specificity 70% vs 14%). 13.8% of regex entries sit in empty checklist boxes. arXiv on hold.",
    links: [
      { label: "Zenodo record", href: "https://zenodo.org/records/23334661" },
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.23334660" },
    ],
  },
  {
    id: "fedproc-bench-paper",
    title:
      "FedProc-Bench: A Multi-Task Benchmark for Federal Procurement NLP, and a Compact 180M-Parameter Model for Low-Hallucination Clause Extraction",
    venue: "Zenodo preprint, 2026",
    summary:
      "Four-task federal-procurement benchmark with FedProc-180M (ModernBERT-base, 4 heads): clause F1 0.800 vs 0.804 for Claude Haiku 4.5 with 13.8% vs 32.1% hallucinated clauses. arXiv submit/7913776 on hold.",
    links: [
      { label: "Zenodo record", href: "https://zenodo.org/records/23334788" },
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.23334787" },
    ],
  },
];

export const DATASETS = [
  {
    id: "agent-shootout-data",
    name: "Agent Shootout runs",
    stat: "960 test runs",
    summary: "Every model reply and tool call from 960 agent runs on Japanese law questions — the evidence behind the 2.3×-tokens finding.",
    href: "https://huggingface.co/datasets/raihan-js/agent-shootout",
  },
  {
    id: "editbench-3way-data",
    name: "EditBench-3Way",
    stat: "1,500 facts",
    summary: "Frozen benchmark plus every arm's results: weight edits vs retrieval vs graph lookup on identical facts.",
    href: "https://huggingface.co/datasets/raihan-js/editbench-3way",
  },
  {
    id: "flipgate-results-data",
    name: "FlipGate results",
    stat: "49 runs · 14,368 items",
    summary: "Per-item right/wrong flips for quantised and re-served models, with the measured noise floor.",
    href: "https://huggingface.co/datasets/raihan-js/flipgate-results",
  },
  {
    id: "jacite-bench-data",
    name: "JaCite-Bench",
    stat: "1,800 rows",
    summary: "Every cited article checked against the official registry — the 4.2× Japanese-vs-English invention gap, row by row.",
    href: "https://huggingface.co/datasets/raihan-js/jacite-bench",
  },
  {
    id: "fedproc-ledger-bench-data",
    name: "FedProc-Ledger Bench",
    stat: "7 rounds of golds",
    summary: "Per-mention tables, all gold labels and round reports behind the which-clauses-bind paper.",
    href: "https://huggingface.co/datasets/raihan-js/fedproc-ledger-bench",
  },
  {
    id: "fewhumans-judgebank-data",
    name: "FewHumans JudgeBank",
    stat: "8 tasks",
    summary: "Human plus AI labels across 8 annotation tasks for testing estimators that mix both.",
    href: "https://huggingface.co/datasets/raihan-js/fewhumans-judgebank",
  },
  {
    id: "koe-bridge-eval-data",
    name: "Koe-Bridge eval",
    stat: "quality · lag · wait-cost",
    summary: "Translation quality, streaming lag, and verb-wait measurements for local JA-EN speech translation.",
    href: "https://huggingface.co/datasets/raihan-js/koe-bridge-eval",
  },
  {
    id: "kotoba-tutor-eval-data",
    name: "Kotoba-Tutor eval",
    stat: "300 + 1,288 rows",
    summary: "Tutor corrections scored against script labels and human gold — the type-collapse failure, item by item.",
    href: "https://huggingface.co/datasets/raihan-js/kotoba-tutor-eval",
  },
];

// Hugging Face download totals. The site refreshes these live from the public HF API (it allows this origin);
// the snapshot below is what shows if that request fails. Counts are all-time, models + datasets.
export const HF = {
  author: "raihan-js",
  snapshot: { downloads: 2416, models: 1349, datasets: 1067, asOf: "2026-10-04" },
};

export const STATS = [
  { value: 17, suffix: "", label: "research projects\nwith statistical rigor" },
  { value: 1316, suffix: "", label: "tests passing\nacross all projects" },
  { value: 19, suffix: "", label: "research artifacts on\nHugging Face (data + models)" },
  { id: "hf-downloads", live: true, value: 2416, suffix: "", label: "Hugging Face downloads,\nmodels + datasets (all-time)" },
];

export const PROJECTS = [
  {
    id: "flipgate",
    group: "research",
    chart: "flipgate",
    name: "FlipGate",
    kind: "ML Evaluation · Release Gate",
    year: "2026",
    status: "Published",
    summary:
      "Stops bad model updates from shipping. Catches when a smaller or faster model silently breaks answers that used to work — found 91 broken answers hiding behind a higher accuracy score.",
    role: "Design, implementation, statistics",
    stack: ["Python", "PyTorch", "vLLM", "llama.cpp", "scipy", "GitHub Actions"],
    link: "https://github.com/raihan-js/flipgate",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/awq-looked-10-points-better-on-gsm8k-until-i-stopped-truncating-the-answers-18a7" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/flipgate-results" },
    ],
  },
  {
    id: "shiftwatch",
    group: "research",
    chart: "shiftwatch",
    name: "ShiftWatch",
    kind: "ML Monitoring · Label-Free",
    year: "2026",
    status: "Published",
    summary:
      "Tells you if your live model is getting worse before any labels come back. Tests six no-label methods side by side — none wins everywhere, and two never raise the alarm at all.",
    role: "Design, implementation, statistics",
    stack: ["Python", "PyTorch", "ModernBERT", "scikit-learn", "FastAPI", "Prometheus"],
    link: "https://github.com/raihan-js/shiftwatch",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/how-accurate-is-your-model-right-now-estimating-accuracy-without-labels-59kp" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/shiftwatch-ladder" },
    ],
  },
  {
    id: "oraclebench",
    group: "research",
    chart: "oraclebench",
    name: "OracleBench",
    kind: "ML Evaluation · LLM-as-Judge",
    year: "2026",
    status: "Published",
    summary:
      "Checks whether small AI judges can be trusted to grade answers. A 3B judge wrongly approves 11% of wrong answers, a 0.5B judge 41% — so check with rules first and call a judge only where no rule exists.",
    role: "Design, implementation, statistics",
    stack: ["Python", "Transformers", "scipy", "FastAPI", "Prometheus"],
    link: "https://github.com/raihan-js/oraclebench",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/small-llm-judges-approved-11-and-41-of-wrong-answers-then-i-fixed-my-own-pairwise-test-3lpm" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/oraclebench-items" },
    ],
  },
  {
    id: "jacite-bench",
    group: "research",
    chart: "jacite-bench",
    name: "JaCite-Bench",
    kind: "ML Evaluation · Japanese Law",
    year: "2026",
    status: "Published",
    summary:
      "Catches AI models inventing Japanese law citations. One model makes up 4.6% of the articles it cites in Japanese but only 1% in English; another invents none.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "e-Gov Law API", "Transformers", "4-bit quantization"],
    link: "https://github.com/raihan-js/jacite-bench",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/do-llms-invent-japanese-law-articles-a-bilingual-benchmark-42l7" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/jacite-bench" },
    ],
  },
  {
    id: "graphproof-qa",
    group: "research",
    chart: "graphproof-qa",
    name: "GraphProof-QA",
    kind: "QA · Constrained Decoding",
    year: "2026",
    status: "Published",
    summary:
      "Makes a small model prove its answers with database queries instead of guessing from memory. Accuracy jumps 34% to 93% — and still holds on names it has never seen.",
    role: "Design, training, evaluation",
    stack: ["Python", "PyTorch", "Transformers", "xgrammar"],
    link: "https://github.com/raihan-js/graphproof-qa",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/graphproof-qa-teaching-a-small-model-to-prove-its-answers-3b2k" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/MetaQA-CF" },
    ],
  },
  {
    id: "fedproc-constrained",
    group: "research",
    chart: "fedproc-constrained",
    name: "FedProc-Constrained",
    kind: "ML Evaluation · Hallucination",
    year: "2026",
    status: "Published",
    summary:
      "Locks a model so it can only cite real regulation numbers. Invented citations fall from 57 to zero — but with an opt-out allowed, the model also refuses real ones.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "Transformers", "xgrammar", "FAR/DFARS registry"],
    link: "https://github.com/raihan-js/fedproc-constrained",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/a-grammar-stopped-my-model-inventing-far-clauses-it-also-made-it-refuse-the-real-ones-59ap" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/fedproc-constrained-results" },
    ],
  },
  {
    id: "tiny-bilingual-retriever",
    group: "research",
    chart: "tiny-bilingual-retriever",
    name: "Tiny Bilingual Retriever",
    kind: "Retrieval · Distillation",
    year: "2026",
    status: "Published",
    summary:
      "Shrinks a 568M-parameter search model into a 37M one for English-to-Japanese search on an ordinary CPU — keeping 71% of the quality at a quarter of the size.",
    role: "Design, training, evaluation",
    stack: ["Python", "PyTorch", "sentence-transformers", "ONNX Runtime", "MeCab"],
    link: "https://github.com/raihan-js/tiny-bilingual-retriever",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/i-distilled-a-568m-multilingual-model-into-a-37m-japanese-english-encoder-heres-what-survived-27c4" },
      { label: "HF model (71%)", href: "https://huggingface.co/raihan-js/tiny-rerank-ja-en-30m-distilled" },
      { label: "HF model (Matryoshka)", href: "https://huggingface.co/raihan-js/tiny-rerank-ja-en-30m" },
    ],
  },
  {
    id: "roofline-decoding",
    group: "research",
    chart: "roofline-decoding",
    name: "Roofline-First Decoding",
    kind: "Systems · Triton Kernels",
    year: "2026",
    status: "Published",
    summary:
      "Writes a faster AI chip routine by doing the hardware math first. Ties the standard fast loader at 25.5 tokens/sec — with honest notes on the bugs and dead ends.",
    role: "Kernel design, profiling, benchmarking",
    stack: ["Python", "Triton", "PyTorch", "CUDA"],
    link: "https://github.com/raihan-js/roofline-decoding",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/my-triton-kernel-ties-bitsandbytes-and-both-lose-to-math-2bie" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/roofline-decoding-results" },
    ],
  },
  {
    id: "vocab-tax",
    group: "research",
    chart: "vocab-tax",
    name: "Vocab Tax",
    kind: "Pre-training · Scaling",
    year: "2026",
    status: "Published",
    summary:
      "Asks whether a bigger dictionary or a bigger brain matters more for code AI. A small model with a good dictionary beats a far bigger one with a bad dictionary.",
    role: "Design, training, scaling analysis",
    stack: ["Python", "PyTorch", "tokenizers", "Hugging Face"],
    link: "https://github.com/raihan-js/vocab-tax",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/was-my-2103-token-tokenizer-a-mistake-pf9" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/vocab-tax-grid" },
    ],
  },
  {
    id: "demodoctor",
    group: "research",
    chart: "demodoctor",
    name: "DemoDoctor",
    kind: "Robot Learning · Data Quality",
    year: "2026",
    status: "Published",
    summary:
      "Asks whether messy robot demo videos hurt learning. Two fault types get caught automatically; the final answer is an honest null — no measurable difference on a small test.",
    role: "Design, implementation, statistics",
    stack: ["Python", "PyTorch", "LeRobot", "ACT", "gym-pusht"],
    link: "https://github.com/raihan-js/demodoctor",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/demodoctor-bad-robot-demonstrations-are-detectable-do-they-matter-548p" },
    ],
  },
  {
    id: "invoice-check-jp",
    group: "research",
    chart: "invoice-check-jp",
    name: "Invoice-Check JP",
    kind: "Document AI · Verification",
    year: "2026",
    status: "Published",
    summary:
      "Reads Japanese invoices with a tuned vision model and auto-approves 87% — with zero wrong approvals in the fields it checks. Vertical layouts are the weak spot.",
    role: "Design, training, evaluation",
    stack: ["Python", "PyTorch", "Qwen2.5-VL", "PEFT / QLoRA", "PaddleOCR", "FastAPI"],
    link: "https://github.com/raihan-js/invoice-check-jp",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/invoice-check-jp-a-3b-model-reads-the-invoice-checks-decide-whether-to-trust-it-39mf" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/invoice-check-jp" },
      { label: "HF adapter", href: "https://huggingface.co/raihan-js/invoice-check-jp-qwen2.5-vl-3b-lora" },
    ],
  },
  {
    id: "keiri-agent",
    group: "research",
    chart: "keiri-agent",
    name: "Keiri-Agent",
    kind: "LLM agents · Back-office automation",
    year: "2026",
    status: "Published",
    summary:
      "A back-office agent that checks invoices against registries and purchase orders, asking a human when unsure — and survives a server kill mid-task. Cut unsafe approvals from 17% to 4%.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "LangGraph", "LangSmith", "PostgreSQL", "FastAPI", "GitHub Actions"],
    link: "https://github.com/raihan-js/keiri-agent",
    links: [
    ],
  },
  {
    id: "agent-shootout",
    group: "research",
    chart: "agent-shootout",
    name: "Agent Shootout",
    kind: "LLM agents · Evaluation",
    year: "2026",
    status: "Published",
    summary:
      "Races four AI agent designs on Japanese law questions. The fancy planner burns 2.3× the tokens with no accuracy gain over the simple one.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "LangGraph", "LangSmith", "llama.cpp", "Qwen3.5", "GitHub Actions"],
    link: "https://github.com/raihan-js/agent-shootout",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/agent-shootout" },
    ],
  },
  {
    id: "fedproc-ledger",
    group: "research",
    chart: "fedproc-ledger",
    name: "FedProc-Ledger",
    kind: "Document AI · Federal Contracting",
    year: "2026",
    status: "Published",
    summary:
      "Works out which regulation clauses in a bid actually apply, instead of just finding numbers. Beats plain text search (F1 0.89 vs 0.81) — and found 14% of its hits are clauses sitting in unchecked boxes.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "scikit-learn", "PyMuPDF", "FastAPI", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/fedproc-ledger",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/mentioned-is-not-binding-which-solicitation-clauses-actually-bind-the-contract-1cio" },
      { label: "paper (Zenodo)", href: "https://doi.org/10.5281/zenodo.23334660" },
      { label: "HF model", href: "https://huggingface.co/raihan-js/fedproc-ledger-v1" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/fedproc-ledger-bench" },
    ],
  },
  {
    id: "edit-rag-graph",
    group: "research",
    chart: "edit-rag-graph",
    name: "EditBench-3Way",
    kind: "LLM Evaluation · Knowledge Editing",
    year: "2026",
    status: "Published",
    summary:
      "Compares three ways to fix a fact a model knows: brain surgery on weights vs looking it up. Surgery works but damages neighboring facts; lookup wins wherever it covers.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "PyTorch", "EasyEdit", "FAISS", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/edit-rag-graph",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/editbench-3way" },
    ],
  },
  {
    id: "fewhumans",
    group: "research",
    chart: "fewhumans",
    name: "FewHumans",
    kind: "LLM Evaluation · Statistics",
    year: "2026",
    status: "Published",
    summary:
      "Gets trustworthy accuracy numbers from a few human labels plus many AI labels. Saves about 9% of human work — with statistics that stay honest.",
    role: "Design, implementation, statistics",
    stack: ["Python", "scipy", "PyPI", "Ollama", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/fewhumans",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/fewhumans-judgebank" },
      { label: "PyPI", href: "https://pypi.org/project/fewhumans/" },
    ],
  },
  {
    id: "akusento",
    group: "research",
    chart: "akusento",
    name: "Akusento",
    kind: "Speech · Japanese Pitch Accent",
    year: "2026",
    status: "Published",
    summary:
      "Open tools that hear Japanese pitch accent from speech. Right 79% of the time per sound, tested on speakers it never heard — built without a native listener to check against.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "PyTorch", "pyopenjtalk", "pyworld", "scikit-learn", "Gradio", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/akusento",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/teaching-a-computer-to-hear-japanese-pitch-accent-42b1" },
      { label: "HF model", href: "https://huggingface.co/raihan-js/akusento-scorer" },
    ],
  },
  {
    id: "koe-bridge",
    group: "research",
    chart: "koebridge",
    name: "Koe-Bridge",
    kind: "Speech · Streaming JA-EN Translation",
    year: "2026",
    status: "Published",
    summary:
      "A live Japanese-English speech translator running fully on local models. Measured the real cost of waiting for the verb: one direction flickers about 13× more than the other.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "PyTorch", "Whisper", "MarianMT", "Qwen", "Kokoro", "FLEURS", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/koe-bridge",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/koe-bridge-eval" },
    ],
  },
  {
    id: "kotoba-tutor",
    group: "research",
    chart: "kotoba-tutor",
    name: "Kotoba-Tutor",
    kind: "Voice Agent · Japanese Tutor",
    year: "2026",
    status: "Published",
    summary:
      "A voice tutor for Japanese learners that listens, corrects speech, and tracks mistakes. Its brain over-predicts one error type and ignores the rest — a measured failure with a fix queued.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "LangGraph", "vLLM", "Qwen Swallow", "faster-whisper", "LangSmith", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/kotoba-tutor",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/kotoba-tutor-eval" },
    ],
  },
  {
    id: "sae-bilingual",
    group: "research",
    chart: "sae-bilingual",
    name: "SAE-Bilingual",
    kind: "Interpretability · JA-EN Features",
    year: "2026",
    status: "Published",
    summary:
      "Peeks inside a Japanese AI to find features shared across languages. Sharing peaks in the middle layers and fades at the ends; cause-and-effect tests come back weak.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "PyTorch", "SAELens", "llm-jp", "Tatoeba", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/sae-bilingual",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/sae-bilingual" },
    ],
  },
  {
    id: "serve-bench",
    group: "research",
    chart: "serve-bench",
    name: "Serve-Bench",
    kind: "LLMOps · vLLM Serving",
    year: "2026",
    status: "Published",
    summary:
      "Single-GPU vLLM serving benchmark with per-config quality probes (client-only harness, Poisson + fixed loads, TTFT/TPOT, output-hash drift). max-num-seqs 32 vs 128: identical when gentle, 19x TTFT gap under stress (8.3s vs 0.4s) — config comparisons require a stress arm. llm-jp-1.8B serves 3.6x faster than Swallow-8B. temp-0 determinism fails on the reasoning model (10/50 back-to-back diffs, verified same-server) while llm-jp is deterministic.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "vLLM", "asyncio", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/serve-bench",
    links: [
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/serve-bench-eval" },
    ],
  },
  {
    id: "vetr",
    group: "product",
    name: "VETR Proposal",
    kind: "AI / B2B · Federal Contracting",
    year: "2024–Present",
    status: "Live",
    summary:
      "AI co-pilot for federal contractors: parses bids, builds compliance checklists, drafts proposals. I'm the founding engineer — search, AI, and full stack.",
    role: "Founding Engineer · AI/ML Lead · Full-Stack",
    stack: ["Next.js", "TypeScript", "FastAPI", "LLM", "PostgreSQL", "AWS GovCloud"],
    image: "/projects/vetr.webp",
    link: "https://vetrproposal.com",
  },
  {
    id: "commonroom",
    group: "product",
    name: "CommonRoom AI",
    kind: "AI / Community · Mobile",
    year: "2024",
    status: "Live",
    summary:
      "Shared workspace for groups — tasks, voting, expenses and more, joinable by link with no install. Live on iOS and Android.",
    role: "Full-stack, real-time sync, mobile",
    stack: ["React Native", "Next.js", "TypeScript", "Tailwind", "Real-time"],
    image: "/projects/commonroom.webp",
    link: "https://apps.apple.com/us/app/commonroom-ai/id6759333414",
  },
];

export const MODELS = [
  {
    id: "clarioscope-intent-deberta-v1",
    name: "ClarioScope Intent (184M)",
    kind: "Fine-tune",
    base: "DeBERTa-v3 base",
    summary:
      "7-class sequence classifier that routes inbound patient text at the front of the ClarioScope intake pipeline. 91.16% accuracy on the test set, 48 ms per example on CPU — roughly 22× faster than Claude Haiku 4.5 and 95% accuracy of Haiku on the same task.",
    metrics: [
      { k: "params", v: "184M" },
      { k: "acc", v: "91.16%" },
      { k: "vs Haiku", v: "22× faster" },
    ],
    href: "https://huggingface.co/raihan-js/clarioscope-intent-deberta-v1",
    writeup: {
      href: "https://dev.to/raihan-js/matching-frontier-llms-at-22x-lower-latency-a-184m-parameter-intent-classifier-for-healthcare-text-5ec2",
      label: "writeup",
    },
  },
  {
    id: "clarioscope-phi-deberta-v1",
    name: "ClarioScope PHI Detector",
    kind: "Fine-tune",
    base: "DeBERTa-v3 base",
    summary:
      "Token-classification model targeting all 18 HIPAA Safe Harbor identifier categories — names, addresses, MRNs, phones, account numbers, biometrics references, ages over 89, etc. Identifies PHI spans for downstream redaction, not a regulatory determination.",
    metrics: [
      { k: "task", v: "BIO NER" },
      { k: "entities", v: "18" },
      { k: "scheme", v: "Safe Harbor" },
    ],
    href: "https://huggingface.co/raihan-js/clarioscope-phi-deberta-v1",
    writeup: {
      href: "https://dev.to/raihan-js/where-small-models-beat-frontier-llms-and-where-they-dont-a-125m-phi-detector-4edb",
      label: "writeup",
    },
  },
  {
    id: "clarioscope-insurance-v1",
    name: "ClarioScope Insurance Extractor",
    kind: "Fine-tune",
    base: "RoBERTa base",
    summary:
      "Token-classification model that pulls 12 structured fields — carrier, plan type, member / group / policy ID, copay, deductible, billed amount, auth number — out of free-text intake messages. BIO spans are reassembled into a JSON dict billing systems can ingest directly.",
    metrics: [
      { k: "task", v: "extraction" },
      { k: "entities", v: "12" },
      { k: "output", v: "JSON" },
    ],
    href: "https://huggingface.co/raihan-js/clarioscope-insurance-v1",
  },
  {
    id: "fedproc-180m-v0",
    name: "FedProc-180M",
    kind: "Fine-tune",
    base: "ModernBERT base",
    summary:
      "Compact multi-task model for federal procurement NLP — notice type, NAICS sector, set-aside, and FAR / DFARS clause extraction trained jointly. Within 0.004 F1 of Claude Haiku 4.5 on FAR-clause extraction (0.800 vs 0.804) with less than half its hallucination rate (13.8% vs 32.1%). Paired with the open FedProc-Bench dataset.",
    metrics: [
      { k: "params", v: "149M" },
      { k: "tasks", v: "4 heads" },
      { k: "FAR F1", v: "0.800" },
    ],
    href: "https://huggingface.co/raihan-js/fedproc-180m-v0",
    writeup: {
      href: "https://dev.to/raihan-js/i-built-the-first-open-benchmark-for-federal-contracting-ai-heres-what-it-shows-about-frontier-5a03",
      label: "writeup",
    },
  },
  {
    id: "fedproc-ledger-v1",
    name: "FedProc-Ledger v1",
    kind: "Classifier",
    base: "Logistic regression + rules",
    summary:
      "Mention-role classifier that decides which FAR/DFARS clause numbers in a solicitation actually bind the contract. 0.46 MB numpy weights (no pickle), CPU-only. Round 7 on a temporal hold-out: binding-set F1 0.890 vs 0.806 for regexes, specificity 70% vs 14%.",
    metrics: [
      { k: "size", v: "0.46 MB" },
      { k: "F1", v: "0.890" },
      { k: "spec", v: "70%" },
    ],
    href: "https://huggingface.co/raihan-js/fedproc-ledger-v1",
  },
  {
    id: "orch-nextjs-3b",
    name: "ORCH Next.js 3B",
    kind: "From scratch",
    base: "Custom LLaMA arch",
    summary:
      "Custom 3B-parameter decoder-only transformer trained from scratch on curated Next.js repositories. 32 layers, 2,560 hidden, GQA, 16K context. NVIDIA A40 48GB on RunPod.",
    metrics: [
      { k: "params", v: "3B" },
      { k: "ctx", v: "16k" },
      { k: "vocab", v: "32k" },
    ],
    href: "https://huggingface.co/raihan-js/orch-nextjs-3b",
  },
  {
    id: "orch-7b",
    name: "ORCH-7B (QLoRA Fine-tune)",
    kind: "Fine-tune",
    base: "DeepSeek Coder 6.7B",
    summary:
      "QLoRA fine-tune of DeepSeek Coder 6.7B Instruct on Next.js code. 4-bit NF4 quantization + double quant + LoRA adapters. 43h on a single A100, 5,238 steps.",
    metrics: [
      { k: "base", v: "6.7B" },
      { k: "method", v: "QLoRA" },
      { k: "ctx", v: "16k" },
    ],
    href: "https://huggingface.co/raihan-js/orch-7b",
  },
  {
    id: "orch-fusion",
    name: "ORCH Fusion (272M)",
    kind: "From scratch",
    base: "Custom LLaMA arch",
    summary:
      "Compact code-gen model trained from scratch on synthetic code data, custom 2,103-token vocabulary. Designed to fit on a single RTX 3060 12GB consumer GPU.",
    metrics: [
      { k: "params", v: "272M" },
      { k: "ctx", v: "4k" },
      { k: "vocab", v: "2,103" },
    ],
    href: "https://huggingface.co/raihan-js/orch-fusion",
  },
  {
    id: "orch-nextjs-350m-v2",
    name: "ORCH Next.js 350M v2",
    kind: "From scratch",
    base: "Custom LLaMA arch",
    summary:
      "Iteration on the small ORCH architecture with a larger 16k-vocab custom tokenizer focused on Next.js / React / TypeScript code. From scratch on RTX 3060.",
    metrics: [
      { k: "params", v: "287M" },
      { k: "ctx", v: "4k" },
      { k: "vocab", v: "16k" },
    ],
    href: "https://huggingface.co/raihan-js/orch-nextjs-350m-v2",
  },
];

export const STACK = [
  {
    group: "AI / ML",
    items: ["PyTorch", "Hugging Face", "Transformers", "QLoRA / PEFT", "bitsandbytes", "Triton", "xgrammar", "vLLM", "ONNX Runtime", "sentence-transformers"],
  },
  {
    group: "MLOps · LLMOps",
    items: ["MLflow", "GitHub Actions", "Prometheus", "FastAPI", "Docker", "AWS GovCloud", "Amazon Bedrock"],
  },
  {
    group: "Evaluation · Statistics",
    items: ["McNemar test", "Paired bootstrap CIs", "scipy", "pytest", "Rule-based oracles", "Per-item JSONL run logs"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Vue / Nuxt"],
  },
  {
    group: "Backend · Data",
    items: ["Python", "Laravel", "Node.js", "FastAPI", "PHP", "C", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    group: "Cloud · GPU · DevOps",
    items: ["AWS", "Docker", "CUDA / GPU", "RunPod", "Digital Ocean", "Git"],
  },
];

export const EXPERIENCE = [
  {
    role: "Founding Engineer · AI/ML Lead",
    org: "VETR Proposal (Acu-Elligent LLC)",
    period: "2024 — Present",
    tags: ["Contract", "Remote", "Federal"],
    blurb:
      "Founding engineer and AI/ML lead for an AI proposal-management platform serving federal contractors (SDVOSB, WOSB, 8(a)). I built the retrieval pipeline, the LLM integration, and the full stack — and I train the models that power it.",
    bullets: [
      "Built the RFP parser, compliance matrix generator, and AI proposal writer applying the proprietary VETR Framework (Value, Experience, Teaming, Responsiveness).",
      "Trained FedProc-180M (ModernBERT-base, 4 task heads) — matches Claude Haiku 4.5 on clause-extraction F1 (0.800 vs 0.804) with less than half the hallucinated clauses (13.8% vs 32.1%).",
      "Built FedProc-Bench (1,615 records, multi-task federal-procurement NLP benchmark) with per-source breakdowns and disclosed synthetic-data bias.",
      "All AI calls in-boundary on AWS GovCloud via Amazon Bedrock — customer proposal content never reaches a third-party model provider.",
      "Stack: Next.js, FastAPI, PostgreSQL, AWS GovCloud, Amazon Bedrock, Hugging Face.",
    ],
  },
  {
    role: "Lead Engineer → CTO",
    org: "ClarioScope AI (EvolvateX LLC)",
    period: "2024 — 2026",
    tags: ["Past", "Healthcare", "HIPAA"],
    blurb:
      "Joined as lead engineer and was promoted to CTO of a HIPAA-compliant healthcare-practice platform. Led a small cross-functional team (a junior engineer, QA testers and marketing). Built and published the ClarioScope SLM Suite (3 models): the intent classifier scored 91.2% vs 95.2% for GPT-4o on a held-out set and ran about 22× faster than Claude Haiku 4.5.",
    bullets: [
      "Designed HIPAA-aware architecture on AWS: React frontend, Laravel backend, Python OCR/scraping, Redis queues, GitHub Actions CI/CD, Amazon Bedrock.",
      "Built ClarioScope SLM Suite: 184M intent classifier (91.2% accuracy, 22× faster than Haiku), 125M PHI detector (18 HIPAA categories), 125M insurance extractor (12 fields).",
      "Designed cross-model train/test split to prevent benchmark leakage; published all models with full cards and limitations.",
      "ClarioScope reached 3-4 practices across two pivots and was sunset in 2026; models are now open-source.",
    ],
  },
  {
    role: "Founder · ILMA Lang",
    org: "ilma-lang.dev",
    period: "2025 — Present",
    tags: ["Open source", "Programming language"],
    blurb:
      "Designed and shipped a C-backed, Python-inspired programming language for children and beginners. English keywords transpile to C and compile to native binaries; Islamic-aware standard library; browser playground built on Monaco.",
    bullets: [
      "Designed the language semantics: `remember`, `say`, `recipe`, `give back`, `bag`, `notebook`, `blueprint` / `comes from`.",
      "Built the transpiler-to-C pipeline that produces native executables via GCC.",
      "Shipped a full toolchain: formatter, type checker, test runner, doc generator, package manager.",
      "Wrote Islamic-aware standard library modules (finance.zakat, Hijri calendar, Qur'an utilities).",
    ],
  },
  {
    role: "Independent AI/ML Engineer",
    org: "ORCH AI (orch-ai)",
    period: "2025 — Present",
    tags: ["Open source", "Hugging Face"],
    blurb:
      "Founded the ORCH family of code generation small language models — four trained from scratch on custom LLaMA-style architectures, one (ORCH-7B) QLoRA fine-tuned on DeepSeek Coder 6.7B. All published openly on Hugging Face.",
    bullets: [
      "Trained ORCH-Fusion (272M), ORCH-Next.js-350M-v2 (287M), and ORCH-Next.js-3B from scratch.",
      "Built custom tokenizers (2k–32k vocab) tailored to the code generation domain.",
      "QLoRA fine-tuned DeepSeek Coder 6.7B → ORCH-7B in 43h on a single A100 (5,238 steps).",
      "Shipped ORCH Studio Gradio Space — autonomous Next.js application generator.",
    ],
  },
  {
    role: "Full-Stack Engineer (Freelance & Contract)",
    org: "Independent",
    period: "Multi-year",
    tags: ["Remote", "Production work"],
    blurb:
      "Shipped 200+ production web applications across React, Next.js, Laravel, and Node.js for clients in healthcare, e-commerce, AI, and education — including BlackGPT.us (Consumer AI), Klevere AI, DreamStreams, and many more.",
    bullets: [
      "Built AI-integrated apps (VETR, CommonRoom, BlackGPT.us) using LLM, RAG, and agent infra.",
      "Delivered Laravel + React SaaS platforms with Stripe / WooCommerce billing for clients across the US, EU, and SE Asia.",
      "Architected the React Native mobile app PregaCare for pregnancy tracking and guidance.",
      "Production handover + maintenance for retained clients across multiple time zones.",
    ],
  },
];
