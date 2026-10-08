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
    { label: "Dev.to", href: "https://dev.to/raihan-js", handle: "@raihan-js" },
  ],
};

// Hugging Face download totals. The site refreshes these live from the public HF API (it allows this origin);
// the snapshot below is what shows if that request fails. Counts are all-time, models + datasets.
export const HF = {
  author: "raihan-js",
  snapshot: { downloads: 2416, models: 1349, datasets: 1067, asOf: "2026-10-04" },
};

export const STATS = [
  { value: 14, suffix: "", label: "research projects\nwith statistical rigor" },
  { value: 1253, suffix: "", label: "tests passing\nacross all projects" },
  { value: 16, suffix: "", label: "research artifacts on\nHugging Face (data + models)" },
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
      "A CLI and GitHub Action release gate for quantised or re-served LLMs. It counts per-item right-to-wrong flips against a measured noise floor and tests them with McNemar and a paired bootstrap, instead of trusting aggregate accuracy. On Qwen2.5-3B, AWQ and GPTQ each broke 91 correct GSM8K answers; the gate also refuses comparisons truncated by the generation cap.",
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
      "Estimates a deployed classifier's accuracy after a data shift, before labels arrive. Benchmarks six label-free estimators on a controlled shift ladder, and ships as a FastAPI and Prometheus sidecar with a rolling window and an alert flag.",
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
      "Grades small open LLM judges against deterministic oracles instead of against other judges: a 3B judge falsely accepts 11% of wrong answers, a 0.5B judge 41% (1,760 items). Includes a checker-first harness that calls a judge only where no oracle exists, with 17.6× fewer judge calls.",
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
      "Checks every statute article an LLM cites against the official e-Gov law registry, in Japanese and in English. Local models only; it tests that an article exists, not that the legal reasoning is right.",
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
      "A 1.5B model fine-tuned to write an executable graph query instead of answering from memory, with grammar-constrained decoding and a proof trace for every answer. Tested on entities it has never seen.",
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
      "What does a clause hallucination turn into when decoding makes it impossible? The FAR/DFARS registry (1,056 canonical clause IDs) compiled into a decoding grammar: fabricated clause numbers fall from 57/60 to 0, but with an abstain option the 1.5B model refuses every prompt that names a clause number, real or not (75 prompts, Qwen2.5-1.5B).",
    role: "Design, implementation, evaluation",
    stack: ["Python", "Transformers", "xgrammar", "FAR/DFARS registry"],
    link: "https://github.com/raihan-js/fedproc-constrained",
    links: [
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
      "Distils bge-m3 (568M) into a 36.7M-parameter Japanese encoder for English-to-Japanese retrieval on CPU, then compresses it with Matryoshka and int8. Fusion with BM25 hurt, and the public ruri-v3-30m scores higher.",
    role: "Design, training, evaluation",
    stack: ["Python", "PyTorch", "sentence-transformers", "ONNX Runtime", "MeCab"],
    link: "https://github.com/raihan-js/tiny-bilingual-retriever",
    links: [
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
      "A fused 4-bit dequantise-plus-GEMV Triton kernel for batch-1 decoding, written after computing the bandwidth ceiling. Ties bitsandbytes NF4 on speed; documents two load-bearing bugs and a failed tl.dot rewrite.",
    role: "Kernel design, profiling, benchmarking",
    stack: ["Python", "Triton", "PyTorch", "CUDA"],
    link: "https://github.com/raihan-js/roofline-decoding",
    links: [
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
      "Compute-matched study of vocabulary size: 16 LLaMA-style decoders trained from scratch on TypeScript/JavaScript. Seed noise is large, so a tie is reported as a tie. Asks whether the 2,103-token ORCH tokenizer was a mistake.",
    role: "Design, training, scaling analysis",
    stack: ["Python", "PyTorch", "tokenizers", "Hugging Face"],
    link: "https://github.com/raihan-js/vocab-tax",
    links: [
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
      "Injects known faults into robot demonstrations (PushT), detects stalls and jitter without labels (F1 0.87 and 0.69 on injected faults), then trains ACT policies on clean, corrupted, auto-cleaned and size-matched random data. A null result, reported as one: across 12 policies no interval excludes zero, success is 0–4%, and the grid is too small to rule an effect out.",
    role: "Design, implementation, statistics",
    stack: ["Python", "PyTorch", "LeRobot", "ACT", "gym-pusht"],
    link: "https://github.com/raihan-js/demodoctor",
    links: [
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
      "A QLoRA-tuned Qwen2.5-VL-3B reads Japanese qualified invoices (適格請求書); a corporate-number check digit, an NTA-style registry lookup, issuer-name matching and per-rate tax arithmetic decide what is auto-approved. On 600 synthetic test invoices: 86.8% automated with none of the 461 approved invoices wrong in a field a check can catch; vertical layouts are the weak spot, and recipient and invoice number have no check. Fictitious companies only; the adapter is non-commercial.",
    role: "Design, training, evaluation",
    stack: ["Python", "PyTorch", "Qwen2.5-VL", "PEFT / QLoRA", "PaddleOCR", "FastAPI"],
    link: "https://github.com/raihan-js/invoice-check-jp",
    links: [
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
      "A LangGraph agent for Japanese qualified invoices: extract, verify against a registry and tax rules, check duplicates, match a purchase order, then post, pause for a human reviewer with interrupt(), or reject. State lives in PostgreSQL and survives a SIGKILL (durability=sync kept the previous step in 10 of 10 kills, the default in 0 of 10). Pre-registered on 300 synthetic invoices: checks cut unsafe auto-approvals from 17.0% to 4.0%; PO matching adds little where the PO cannot see the error. A CI gate fails a pull request on any invoice that newly slips through. Synthetic data and POs; no reviewer simulated.",
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
      "Four LangGraph designs (ReAct, plan-and-execute, supervisor, draft-and-verify) answer the same 240 synthetic questions about Japanese statutes with the same tools, prompt, local 9B model and token budget, compared on correctness and cost with paired tests fixed in a pre-registration. Plan-and-execute used 2.3x the tokens of plain ReAct with no detectable accuracy gain (59.6% to 65.0% correct, no pair clears the threshold). A post-hoc replay of the tool calls shows that \"correct\" is a citation check: about 8% to 9% of correct answers cite an article the model never saw. One model, one run; not legal advice.",
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
      "Which FAR/DFARS clauses in a solicitation actually bind the contract — mentioned is not binding. Rules (checkbox states, 52.212-5(a), SF 1449 block 27, exclusion vetoes) plus a 0.46 MB mention-role classifier, evaluated in seven pre-registered rounds on fresh documents including a temporal hold-out: round 7 gives binding-set F1 0.890 vs 0.806 for the status-quo regexes (+0.084, interval above zero), specificity 70% vs 14% at equal recall. Annotator-free audit: 13.8% of regex entries (58,294 of 423,328) are clauses whose own checklist box is empty. No human-expert labels; public model, data, code and paper draft (submitted to arXiv).",
    role: "Design, implementation, evaluation",
    stack: ["Python", "scikit-learn", "PyMuPDF", "FastAPI", "Hugging Face", "GitHub Actions"],
    link: "https://github.com/raihan-js/fedproc-ledger",
    links: [
      { label: "writeup", href: "https://dev.to/raihan-js/mentioned-is-not-binding-which-solicitation-clauses-actually-bind-the-contract-1cio" },
      { label: "HF model", href: "https://huggingface.co/raihan-js/fedproc-ledger-v1" },
      { label: "HF dataset", href: "https://huggingface.co/datasets/raihan-js/fedproc-ledger-bench" },
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
      "AI-assisted proposal co-pilot for federal contractors (SDVOSB, WOSB, 8(a)). RFP parsing, auto-generated compliance matrices, teaming, and AI-assisted drafting. I am the founding engineer and AI/ML lead — I built the retrieval pipeline, the LLM integration, and the full stack.",
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
      "Collaborative digital workspace — 15 purpose-built group-coordination tools (tasks, voting, attendance, expenses), shareable via link or QR with no install or account for guests. Live on iOS and Google Play.",
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
