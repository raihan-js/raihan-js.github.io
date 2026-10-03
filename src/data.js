// Data layer — single source for content across sections.

export const PROFILE = {
  name: "Raihan",
  role: "AI/ML Engineer · LLMOps · Evaluation · Retrieval",
  location: "Dhaka, Bangladesh",
  status: "Founding Engineer & AI/ML Lead at VETR Proposal (Acu-Elligent LLC) — AI-assisted federal contracting platform.",
  email: "raihan@vetrproposal.com",
  languages: ["English (professional)", "Bangla (native)", "Japanese (reading)", "Russian (basic)"],
  socials: [
    { label: "GitHub", href: "https://github.com/raihan-js", handle: "@raihan-js" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raihan-js/", handle: "in/raihan-js" },
    { label: "Hugging Face", href: "https://huggingface.co/raihan-js", handle: "@raihan-js" },
    { label: "Dev.to", href: "https://dev.to/raihan-js", handle: "@raihan-js" },
  ],
};

export const STATS = [
  { value: 8, suffix: "", label: "research projects\nwith statistical rigor" },
  { value: 325, suffix: "", label: "tests passing\nacross all projects" },
  { value: 10, suffix: "", label: "HF artifacts\npublished" },
  { value: 71, suffix: "%", label: "of teacher quality\nat 1/19th the size" },
];

export const PROJECTS = [
  {
    id: "vetr",
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
    id: "vocab-tax",
    name: "Vocab Tax",
    kind: "Pre-training · Scaling",
    year: "2026",
    status: "Published",
    summary:
      "Compute-matched vocabulary-size study: 12 LLaMA-style decoders trained from scratch (3 sizes x 4 BPE vocabs) on TypeScript/JavaScript. 8k-16k wins everywhere; 10M+8k beats 50M+2k. Answers whether the 2,103-token ORCH tokenizer was a mistake.",
    role: "Design, training, scaling analysis",
    stack: ["Python", "PyTorch", "tokenizers", "Hugging Face"],
    image: "/projects/vocab-tax.webp",
    link: "https://github.com/raihan-js/vocab-tax",
    writeup: {
      href: "https://dev.to/raihan-js/vocab-tax-was-my-2103-token-tokenizer-a-mistake-9f1",
      label: "writeup",
    },
  },
  {
    id: "jacite-bench",    name: "JaCite-Bench",
    kind: "ML Evaluation · Japanese Law",
    year: "2026",
    status: "Published",
    summary:
      "Bilingual benchmark checking every statute article an LLM cites against the official e-Gov law registry. LLMs invent Japanese law articles more often when asked in Japanese: llm-jp-3-1.8b JA 4.05% vs EN 1.09%. 11 laws, 6,913 articles, 600 questions.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "e-Gov Law API", "Transformers", "4-bit quantization"],
    image: "/projects/jacite.webp",
    link: "https://github.com/raihan-js/jacite-bench",
    writeup: {
      href: "https://dev.to/raihan-js/jacite-bench-do-llms-invent-japanese-law-articles-3k2",
      label: "writeup",
    },
  },
  {
    id: "commonroom",
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
  {
    id: "flipgate",
    name: "FlipGate",
    kind: "ML Evaluation · Release Gate",
    year: "2026",
    status: "Published",
    summary:
      "A CLI + GitHub Action release gate for quantised/re-served LLMs. Counts per-item right-to-wrong answer flips vs. a measured bf16 noise floor, uses paired statistics (McNemar, paired bootstrap) instead of aggregate accuracy. Found 77-89 correct answers broke silently behind accuracy gains under AWQ/GPTQ quantization.",
    role: "Design, implementation, statistics",
    stack: ["Python", "PyTorch", "vLLM", "llama.cpp", "scipy", "GitHub Actions"],
    image: "/projects/flipgate_arch.png",
    link: "https://github.com/raihan-js/flipgate",
    writeup: {
      href: "https://dev.to/raihan-js/flipgate-counting-answer-flips-not-just-accuracy-7k2",
      label: "writeup",
    },
  },
  {
    id: "graphproof-qa",
    name: "GraphProof-QA",
    kind: "ML Evaluation · Constrained Decoding",
    year: "2026",
    status: "Published",
    summary:
      "Small-model question answering that compiles to an executable graph query, with a proof-of-work constraint that forces the model to reason over the graph. 34% → 97% accuracy on 6,000 MetaQA questions (p≈0). Renamed entities: 81% vs 6% (p=1.2e-84).",
    role: "Design, training, evaluation",
    stack: ["Python", "PyTorch", "Transformers", "xgrammar"],
    image: "/projects/graphproof_arch.png",
    link: "https://github.com/raihan-js/graphproof-qa",
    writeup: {
      href: "https://dev.to/raihan-js/graphproof-qa-constrained-decoding-for-reliable-multi-hop-qa-4c1",
      label: "writeup",
    },
  },
  {
    id: "fedproc-constrained",
    name: "FedProc-Constrained",
    kind: "ML Evaluation · Hallucination",
    year: "2026",
    status: "Published",
    summary:
      "What does a clause hallucination turn into when decoding makes it impossible? Compiled the 1,032-clause FAR/DFARS registry into a decoding grammar. Unconstrained fabrication: 82%. With grammar: 0% fabrication but 75% substitution — the model picks a real but wrong clause.",
    role: "Design, implementation, evaluation",
    stack: ["Python", "Transformers", "xgrammar", "FAR/DFARS registry"],
    image: "/projects/fedproc_arch.png",
    link: "https://github.com/raihan-js/fedproc-constrained",
    writeup: {
      href: "https://dev.to/raihan-js/fedproc-constrained-what-happens-when-hallucination-is-impossible-5d3",
      label: "writeup",
    },
  },
  {
    id: "oraclebench",
    name: "OracleBench",
    kind: "ML Evaluation · LLM-as-Judge",
    year: "2026",
    status: "Published",
    summary:
      "Grades small open LLM-as-judge setups against deterministic oracles. False-accept: Qwen-3B 13.2%, Qwen-0.5B 36.1%. Pairwise judging collapses to position bias (both judges pick B 85-92% regardless of correctness). Checker-first harness: 0 errors, 18× fewer judge calls.",
    role: "Design, implementation, statistics",
    stack: ["Python", "Transformers", "scipy", "FastAPI", "Prometheus"],
    image: "/projects/oraclebench_arch.png",
    link: "https://github.com/raihan-js/oraclebench",
    writeup: {
      href: "https://dev.to/raihan-js/oraclebench-when-small-llm-judges-approve-wrong-answers-6e4",
      label: "writeup",
    },
  },
  {
    id: "shiftwatch",
    name: "ShiftWatch",
    kind: "ML Monitoring · Label-Free",
    year: "2026",
    status: "Published",
    summary:
      "Estimates a deployed classifier's accuracy after a data shift, before any labels arrive. Benchmarks 6 label-free accuracy estimators on a controlled shift ladder. No single estimator dominates — mean confidence wins on well-calibrated models; learned error predictor wins under OOS contamination.",
    role: "Design, implementation, statistics",
    stack: ["Python", "PyTorch", "ModernBERT", "scikit-learn", "FastAPI", "Prometheus"],
    image: "/projects/shiftwatch_arch.png",
    link: "https://github.com/raihan-js/shiftwatch",
    writeup: {
      href: "https://dev.to/raihan-js/shiftwatch-estimating-accuracy-without-labels-3f2",
      label: "writeup",
    },
  },
  {
    id: "tiny-bilingual-retriever",
    name: "Tiny Bilingual Retriever",
    kind: "Retrieval · Distillation",
    year: "2026",
    status: "Published",
    summary:
      "Distilled bge-m3 (568M) into modernbert-ja-30m (30M) for English-Japanese cross-lingual retrieval on CPU. Captures 71% of teacher's EN-JA quality at 1/19th the index size. Matryoshka dim=64 retains 87% quality at 1/4 size. int8: 99.6% quality at 1/4 size.",
    role: "Design, training, compression, evaluation",
    stack: ["Python", "sentence-transformers", "ONNX Runtime", "MeCab", "bm25s"],
    image: "/projects/tiny-bilingual_arch.png",
    link: "https://github.com/raihan-js/tiny-bilingual-retriever",
    writeup: {
      href: "https://dev.to/raihan-js/tiny-bilingual-retriever-71-of-teacher-at-1-19th-the-size-8a1",
      label: "writeup",
    },
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
      "Compact multi-task model for federal procurement NLP — notice type, NAICS sector, set-aside, and FAR / DFARS clause extraction trained jointly. Matches Claude Haiku 4.5's F1 on FAR-clause extraction with less than half its hallucination rate, at ~50× lower latency. Paired with the open FedProc-Bench dataset.",
    metrics: [
      { k: "params", v: "180M" },
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
  {
    id: "medllm-10m",
    name: "MedLLM-10M",
    kind: "From scratch",
    base: "GPT-2 arch",
    summary:
      "Lightweight GPT-2-style language model trained from scratch on medical literature (PubMed abstracts, clinical guidelines, medical Q&A). Research / educational use only.",
    metrics: [
      { k: "params", v: "28M" },
      { k: "ctx", v: "512" },
      { k: "vocab", v: "5k" },
    ],
    href: "https://huggingface.co/raihan-js/medllm-10m",
  },
  {
    id: "orch-studio",
    name: "ORCH Studio",
    kind: "Product",
    base: "Gradio Space",
    summary:
      "End-user product wrapping ORCH-7B in a Gradio interface. Pick a template (SaaS, e-commerce, dashboard), describe the app, download a complete Next.js 14 project ZIP.",
    metrics: [
      { k: "model", v: "ORCH-7B" },
      { k: "infer", v: "cloud" },
      { k: "templates", v: "7" },
    ],
    href: "https://huggingface.co/spaces/raihan-js/orch-studio",
  },
];

export const STACK = [
  {
    group: "AI / ML",
    items: ["PyTorch", "Hugging Face", "Transformers", "QLoRA / PEFT", "bitsandbytes", "Gradio", "vLLM", "ONNX Runtime", "sentence-transformers"],
  },
  {
    group: "MLOps · LLMOps",
    items: ["MLflow", "GitHub Actions", "Prometheus", "FastAPI", "Docker", "AWS GovCloud", "Amazon Bedrock"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Vue / Nuxt"],
  },
  {
    group: "Backend",
    items: ["Python", "Laravel", "Node.js", "FastAPI", "PHP", "C"],
  },
  {
    group: "Cloud · GPU · DevOps",
    items: ["AWS", "Docker", "CUDA / GPU", "RunPod", "Digital Ocean", "Git"],
  },
  {
    group: "Languages & Tooling",
    items: ["ILMA Lang", "Monaco Editor", "GCC", "Custom CUDA", "Hugging Face Spaces"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
];

export const EXPERIENCE = [
  {
    role: "Founding Engineer · AI/ML Lead",
    org: "VETR Proposal (Acu-Elligent LLC)",
    period: "2024 — Present",
    tags: ["Full-time", "Remote", "Federal"],
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
      "Joined as lead engineer and was promoted to CTO of a HIPAA-compliant healthcare-practice platform. Led a team of up to 10 engineers. Built the ClarioScope SLM Suite (3 models) matching frontier-API accuracy at ~50× lower latency.",
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
