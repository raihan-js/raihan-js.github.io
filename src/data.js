// Data layer — single source for content across sections.

export const PROFILE = {
  name: "Raihan",
  role: "AI/ML Engineer · Full-Stack",
  location: "Dhaka, Bangladesh",
  status: "CTO at ClarioScope AI — building a HIPAA-compliant practice growth platform.",
  available: "Open to senior ML / staff engineering roles.",
  email: "raihan@clarioscope.ai",
  socials: [
    { label: "GitHub", href: "https://github.com/raihan-js", handle: "@raihan-js" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raihan-js/", handle: "in/raihan-js" },
    { label: "Hugging Face", href: "https://huggingface.co/raihan-js", handle: "@raihan-js" },
  ],
};

export const STATS = [
  { value: 5, suffix: "", label: "small LMs trained\nfrom scratch" },
  { value: 28, suffix: "M", label: "smallest model\nparameters (MedLLM)" },
  { value: 6.7, suffix: "B", label: "largest model\nQLoRA fine-tuned" },
  { value: 1, suffix: "", label: "programming language\nshipped (ILMA)" },
];

export const PROJECTS = [
  {
    id: "clarioscope",
    name: "ClarioScope AI",
    kind: "Healthcare AI · CTO",
    year: "2024–Present",
    status: "Live",
    summary:
      "HIPAA-compliant practice growth platform for healthcare clinics. AI architecture and infrastructure that keeps protected health information isolated end-to-end. Leading engineering as CTO.",
    role: "CTO · Architecture · AI infra",
    stack: ["Python", "PyTorch", "Next.js", "PostgreSQL", "AWS"],
    image: "/projects/clarioscope.webp",
    link: "https://clarioscope.ai/",
  },
  {
    id: "clarioscope-slm-suite",
    name: "ClarioScope SLM Suite",
    kind: "Healthcare AI · Models",
    year: "2026",
    status: "Live",
    summary:
      "Three small language models composed into a real intake pipeline — PHI is redacted, intent is classified for routing, insurance info is extracted for billing. Each model matches frontier-API accuracy on its narrow task at ~50× the speed and ~1000× lower cost, all on synthetic data.",
    role: "Data, fine-tuning, evaluation, deployment",
    stack: ["PyTorch", "DeBERTa-v3", "RoBERTa", "Hugging Face"],
    image: "/projects/clarioscope-slm.png",
    link: "https://huggingface.co/raihan-js",
    writeup: {
      href: "https://dev.to/raihan-js/three-small-models-for-healthcare-intake-and-what-shipping-all-three-taught-me-71l",
      label: "writeup",
    },
  },
  {
    id: "ilma-lang",
    name: "ILMA Lang",
    kind: "Programming Language",
    year: "2025",
    status: "Live",
    summary:
      "A C-backed, Python-inspired programming language for children and beginners — English keywords transpile to C, then compile to native binaries. Islamic-aware modules, browser playground, and a structured learning path.",
    role: "Language design, compiler, runtime, web",
    stack: ["C", "Python", "Monaco", "Next.js"],
    image: "/projects/ilma-lang.webp",
    link: "https://www.ilma-lang.dev/",
  },
  {
    id: "beautycrew",
    name: "BeautyCrew AI",
    kind: "AI / SaaS",
    year: "2025",
    status: "Live",
    summary:
      "Booking management for the beauty industry — built to eliminate missed appointments and keep beauty professionals' calendars and client relationships reliable.",
    role: "Full-stack, AI scheduling",
    stack: ["Next.js", "TypeScript", "Tailwind", "AI"],
    image: "/projects/beautycrew.webp",
    link: "https://beautycrew.ai",
  },
  {
    id: "vetr",
    name: "VETR Proposal",
    kind: "AI / B2B",
    year: "2025",
    status: "Live",
    summary:
      "AI-assisted proposal co-pilot that streamlines federal contracting for small business teams — makes the complex contracting process accessible without a dedicated proposal team.",
    role: "Retrieval, LLM integration, infra",
    stack: ["Next.js", "TypeScript", "LLM", "PostgreSQL"],
    image: "/projects/vetr.webp",
    link: "https://vetrproposal.com",
  },
  {
    id: "commonroom",
    name: "CommonRoom AI",
    kind: "AI / Community",
    year: "2024",
    status: "Live",
    summary:
      "Collaborative digital workspace — 15 purpose-built group-coordination tools (tasks, voting, attendance, expenses), shareable via link or QR with no install or account for guests.",
    role: "Full-stack, real-time sync",
    stack: ["Next.js", "TypeScript", "Tailwind", "Real-time"],
    image: "/projects/commonroom.webp",
    link: "https://commonroomai.com",
  },
  {
    id: "reelfuse",
    name: "ReelFuse",
    kind: "Internal · Video AI Studio",
    year: "2026",
    status: "Internal",
    summary:
      "Internal video production studio for short-form vertical content (YouTube Shorts, Reels, TikTok). Scene planner, AI-assisted title generation, brand kits, render queue with scheduled outputs, multi-format export (1080×1920, 30fps). Currently driving ClarioScope AI's growth content engine.",
    role: "Architecture, AI, full-stack",
    stack: ["Next.js", "TypeScript", "Python", "FFmpeg", "Render queue"],
    image: "/projects/reelfuse.webp",
    link: "https://reelfuse.io",
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
    items: ["PyTorch", "Hugging Face", "Transformers", "QLoRA / PEFT", "bitsandbytes", "Gradio"],
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
    role: "Chief Technology Officer",
    org: "ClarioScope AI",
    period: "2024 — Present",
    tags: ["Full-time", "Remote"],
    blurb:
      "Leading technical strategy and engineering for a HIPAA-compliant healthcare practice growth platform. Owning the AI architecture and the infrastructure that keeps protected health information isolated end-to-end.",
    bullets: [
      "Architect HIPAA-compliant data flows for healthcare AI use cases.",
      "Trained the ClarioScope SLM suite — 184M intent classifier, PHI detector covering all 18 HIPAA Safe Harbor categories, and a 12-field insurance extractor — replacing frontier-LLM calls in the intake pipeline at roughly 50× the speed and 1000× lower cost.",
      "Lead ML model selection, evaluation, and deployment strategy.",
      "Drive the engineering roadmap for product features touching PHI.",
      "Operate the org's Hugging Face presence (clarioscope-ai) for in-house models.",
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
      "Shipped 200+ production web applications across React, Next.js, Laravel, and Node.js for clients in healthcare, e-commerce, AI, and education — including BlackGPT.us (Consumer AI), Klevere AI, DreamStreams, and many more. The projects above are the featured highlights.",
    bullets: [
      "Built AI-integrated apps (BeautyCrew, VETR, CommonRoom, BlackGPT.us) using LLM, RAG, and agent infra.",
      "Delivered Laravel + React SaaS platforms with Stripe / WooCommerce billing for clients across the US, EU, and SE Asia.",
      "Architected the React Native mobile app PregaCare for pregnancy tracking and guidance.",
      "Production handover + maintenance for retained clients across multiple time zones.",
    ],
  },
];
