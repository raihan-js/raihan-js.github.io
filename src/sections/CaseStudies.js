import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBrain, faCode, faStethoscope, faRocket, faMicrochip, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const CaseStudies = forwardRef((props, ref) => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "ORCH Next.js 3B",
      category: "From Scratch · 3B params",
      description: "Custom LLaMA-style transformer trained from scratch for full-stack Next.js code generation",
      fullDescription: "Decoder-only transformer with custom architecture (32 layers, 2,560 hidden, 32 attention heads, GQA with 8 KV heads, 32k custom vocab, 16K context with RoPE). Trained from scratch — no base model — on curated Next.js repositories from GitHub. Three epochs, ~29k steps, BFloat16 precision on a single NVIDIA A40 48GB rented from RunPod. Generates complete Next.js project structures: pages, API routes, Prisma schemas, Tailwind components, and config files.",
      technologies: ["PyTorch", "Custom LLaMA arch", "RoPE", "GQA", "SwiGLU", "RMSNorm", "NVIDIA A40"],
      metrics: "3B params · 32 layers · 16,384 token context · trained from scratch on a single A40 48GB",
      icon: faLayerGroup,
      size: "large",
      link: "https://huggingface.co/raihan-js/orch-nextjs-3b"
    },
    {
      id: 2,
      title: "ORCH-7B (QLoRA Fine-tune)",
      category: "Fine-tune · DeepSeek 6.7B",
      description: "QLoRA fine-tune of DeepSeek Coder 6.7B Instruct specialized for autonomous Next.js generation",
      fullDescription: "Parameter-efficient fine-tune of DeepSeek Coder 6.7B Instruct using QLoRA: 4-bit NF4 quantization + double quantization + LoRA adapters. Training ran 43 hours on a single A100, 5,238 steps, with linear RoPE scaling (4×) for extended context. Drives the ORCH Studio Gradio Space — describe an app, get a downloadable Next.js 14 project ZIP with TypeScript, Tailwind, Prisma, and best-practice structure.",
      technologies: ["PyTorch", "PEFT / QLoRA", "bitsandbytes (4-bit NF4)", "DeepSeek Coder 6.7B", "Hugging Face Transformers", "Gradio", "A100"],
      metrics: "6.7B base · QLoRA 4-bit · 43h on A100 · 5,238 steps · 16K context with linear RoPE scaling",
      icon: faMicrochip,
      size: "large",
      link: "https://huggingface.co/raihan-js/orch-7b"
    },
    {
      id: 3,
      title: "ORCH Fusion (350M)",
      category: "From Scratch · 272M params",
      description: "Compact code-generation model trained from scratch on consumer hardware",
      fullDescription: "272M parameter decoder-only transformer (24 layers, 1,024 hidden, 16 heads, GQA with 4 KV heads, tiny custom 2,103-token vocab, 4K context). Trained from scratch on synthetic code data — no fine-tuning, no base model. Designed to be cheap enough to train on a consumer RTX 3060 12GB and to produce multi-file project outputs from a single prompt. Reported scores on the ORCH-ProjectBench: 76.6 overall, 95.3 code parse rate, 93.3 format correctness.",
      technologies: ["PyTorch", "Custom LLaMA arch", "RoPE", "GQA", "Custom 2,103 vocab", "RTX 3060 12GB"],
      metrics: "272.7M params · 24 layers · ORCH-ProjectBench: 76.6 overall, 95.3 code parse, 93.3 format",
      icon: faRocket,
      size: "medium",
      link: "https://huggingface.co/raihan-js/orch-fusion"
    },
    {
      id: 4,
      title: "ORCH Next.js 350M v2",
      category: "From Scratch · 287M params",
      description: "Iteration on the ORCH small architecture with a larger, Next.js-focused tokenizer",
      fullDescription: "287M parameter decoder-only transformer with the same LLaMA-style architecture as ORCH Fusion (24 layers, 1,024 hidden, GQA, RoPE, SwiGLU, RMSNorm) but trained with a larger custom tokenizer (16k vocab) focused on Next.js / React / TypeScript code. Built from scratch on RTX 3060 12GB consumer hardware.",
      technologies: ["PyTorch", "Custom LLaMA arch", "RoPE", "GQA", "SwiGLU", "Custom 16k vocab", "RTX 3060"],
      metrics: "286.9M params · vocab 16,000 · 4K context · trained from scratch on consumer GPU",
      icon: faCode,
      size: "medium",
      link: "https://huggingface.co/raihan-js/orch-nextjs-350m-v2"
    },
    {
      id: 5,
      title: "MedLLM-10M",
      category: "From Scratch · Medical",
      description: "Lightweight GPT-2 architecture trained from scratch on medical literature",
      fullDescription: "GPT-2 style causal language model trained from scratch on a curated medical corpus — PubMed abstracts, clinical practice guidelines, medical journal articles, and medical Q&A datasets. Architecture: 8 layers, 512 hidden, 8 attention heads, FFN 2048, vocab 5,000, 512 token context. Trained 10 epochs on RTX 3060 12GB with FP16 mixed precision. For research and educational use only — not clinical decision-making.",
      technologies: ["PyTorch", "GPT-2 architecture", "Hugging Face Transformers", "Custom 5k vocab", "PubMed corpus", "RTX 3060"],
      metrics: "~27.7M params (10M body) · trained 10 epochs on RTX 3060 · vocab 5,000",
      icon: faStethoscope,
      size: "medium",
      link: "https://huggingface.co/raihan-js/medllm-10m"
    },
    {
      id: 6,
      title: "ORCH Studio",
      category: "Product · Gradio Space",
      description: "Autonomous Next.js application generator on Hugging Face Spaces",
      fullDescription: "End-user product wrapping ORCH-7B in a Gradio interface. Pick a template (SaaS, e-commerce, dashboard, portfolio, blog, API), describe the application in natural language, and download a complete Next.js 14 project as a ZIP — with TypeScript, Tailwind, Prisma patterns, NextAuth.js patterns, shadcn/ui compatibility, and ready-to-run `npm install && npm run dev`. Hosted on Hugging Face Spaces (A10G).",
      technologies: ["Gradio", "Python", "ORCH-7B", "Next.js 14 templates", "Hugging Face Spaces"],
      metrics: "7 pre-configured project templates · downloadable ZIPs · TypeScript + Tailwind + Prisma",
      icon: faBrain,
      size: "small",
      link: "https://huggingface.co/spaces/raihan-js/orch-studio"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getGridClass = (size) => {
    const classes = {
      large: "md:col-span-2 md:row-span-2",
      medium: "md:col-span-2 md:row-span-1",
      small: "md:col-span-1 md:row-span-1"
    };
    return classes[size] || classes.medium;
  };

  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-800 dark:text-neutral-200 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Model Case Studies
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every model is published openly on Hugging Face &mdash; configs, tokenizers, and weights
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className={`${getGridClass(study.size)} group relative overflow-hidden rounded-2xl
                bg-white dark:bg-neutral-900
                border border-gray-200 dark:border-neutral-700
                hover:border-[#F4DB01] dark:hover:border-[#F4DB01]
                hover:shadow-xl hover:shadow-[#F4DB01]/10
                transition-all duration-300 cursor-pointer min-h-[280px]`}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(244, 219, 1, 0.15)"
              }}
              onClick={() => setSelectedCase(study)}
            >
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="p-3 rounded-xl
                      bg-gradient-to-br from-[#F4DB01]/10 to-[#F4DB01]/5
                      text-[#F4DB01]
                      border border-[#F4DB01]/20
                      shadow-sm"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={study.icon} className="text-xl" />
                  </motion.div>
                  <span className="text-xs font-semibold
                    text-gray-600 dark:text-gray-400
                    bg-gray-50 dark:bg-neutral-700
                    border border-gray-200 dark:border-neutral-600
                    px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </div>

                {/* Title and Description */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3
                    group-hover:text-[#F4DB01] transition-colors duration-300">
                    {study.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                    {study.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1
                          bg-gray-50 dark:bg-neutral-700
                          text-gray-700 dark:text-gray-300
                          border border-gray-200 dark:border-neutral-600
                          rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1
                        bg-gradient-to-r from-[#F4DB01]/10 to-[#F4DB01]/5
                        text-[#F4DB01]
                        border border-[#F4DB01]/20
                        rounded-md font-medium">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center text-[#F4DB01] text-sm font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span>View details</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-xs" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20
                bg-gradient-to-bl from-[#F4DB01]/5 to-transparent
                dark:from-[#F4DB01]/10 dark:to-transparent
                rounded-bl-full opacity-0 group-hover:opacity-100
                transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto
                border border-gray-200 dark:border-neutral-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl
                      bg-gradient-to-br from-[#F4DB01]/10 to-[#F4DB01]/5
                      text-[#F4DB01] border border-[#F4DB01]/20">
                      <FontAwesomeIcon icon={selectedCase.icon} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {selectedCase.title}
                      </h3>
                      <span className="text-base text-gray-500 dark:text-gray-400 font-medium">
                        {selectedCase.category}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-3xl
                      w-10 h-10 flex items-center justify-center rounded-full
                      hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    What it is
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {selectedCase.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedCase.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2
                          bg-gradient-to-r from-[#F4DB01]/10 to-[#F4DB01]/5
                          text-[#F4DB01]
                          border border-[#F4DB01]/20
                          rounded-lg text-sm font-semibold
                          hover:from-[#F4DB01]/20 hover:to-[#F4DB01]/10
                          transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100/50
                  dark:from-neutral-800 dark:to-neutral-700/50
                  rounded-xl p-6 border border-gray-200 dark:border-neutral-600 mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#F4DB01] rounded-full mr-3"></span>
                    Specs
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedCase.metrics}
                  </p>
                </div>

                {/* External link */}
                {selectedCase.link && (
                  <a
                    href={selectedCase.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#F4DB01] text-gray-900 rounded-lg font-semibold hover:bg-[#FEE715] transition-colors"
                  >
                    Open on Hugging Face
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default CaseStudies;
