import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faMapMarkerAlt, faBrain, faCode, faServer } from '@fortawesome/free-solid-svg-icons';

const Experiences = forwardRef((props, ref) => {
  const workExperiences = [
    {
      title: "Chief Technology Officer",
      company: "ClarioScope AI",
      location: "Remote",
      period: "Present",
      type: "Full-time",
      description: "Lead technical strategy and engineering for a HIPAA-compliant healthcare practice growth platform. Own the AI architecture and the infrastructure that keeps protected health information (PHI) secure end-to-end.",
      achievements: [
        "Architect HIPAA-compliant data flows for healthcare AI use cases",
        "Lead ML model selection, evaluation, and deployment strategy",
        "Drive the engineering roadmap for product features touching PHI",
        "Operate the org's Hugging Face presence (clarioscope-ai) for in-house models"
      ],
      technologies: ["Python", "PyTorch", "Hugging Face", "Next.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Independent AI/ML Engineer",
      company: "ORCH AI (orch-ai)",
      location: "Open source / Hugging Face",
      period: "2025 – Present",
      type: "Open Source",
      description: "Founded the ORCH (Orchestrated Recursive Code Hierarchy) family of code generation small language models. Five models published openly on Hugging Face — four trained from scratch on custom architectures, one (ORCH-7B) QLoRA fine-tuned on DeepSeek Coder 6.7B.",
      achievements: [
        "Trained ORCH-Fusion (272M), ORCH-Next.js-350M-v2 (287M), and ORCH-Next.js-3B from scratch with custom LLaMA-style architectures",
        "Built custom tokenizers (2k–32k vocab) tailored to the code generation domain",
        "QLoRA fine-tuned DeepSeek Coder 6.7B → ORCH-7B in 43 hours on a single A100 (5,238 training steps)",
        "Shipped ORCH Studio (Gradio Space) — autonomous Next.js application generator from natural language prompts"
      ],
      technologies: ["PyTorch", "Hugging Face Transformers", "PEFT / QLoRA", "bitsandbytes", "CUDA", "Gradio"]
    },
    {
      title: "Full-Stack Engineer (Freelance & Contract)",
      company: "Independent",
      location: "Remote",
      period: "Multi-year",
      type: "Freelance",
      description: "Shipped production web applications across React, Next.js, Laravel, and WordPress for clients in healthcare, e-commerce, AI, and education — see the Projects section for live URLs.",
      achievements: [
        "Built AI-integrated apps (BlackGPT.us, DreamStreams, Klevere AI) using OpenAI, Stable Diffusion, and RAG architectures",
        "Delivered Laravel SaaS platforms with React frontends and Stripe / WooCommerce billing",
        "Architected the React Native mobile app PregaCare for pregnancy tracking and guidance",
        "Production WordPress + WooCommerce work for international clients across DE / NL / AU / US"
      ],
      technologies: ["React", "Next.js", "Laravel", "Node.js", "React Native", "WordPress"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-800 dark:text-neutral-200 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Current and recent work &mdash; AI/ML engineering, open-source models, and shipped web apps
          </motion.p>
        </motion.div>

        {/* Quick Stats - real, verifiable numbers only */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {[
            { number: "5", label: "small language models published openly on Hugging Face", icon: faBrain },
            { number: "3B", label: "max parameters in the ORCH series, trained from scratch", icon: faCode },
            { number: "6.7B", label: "params QLoRA fine-tuned (ORCH-7B / DeepSeek Coder)", icon: faServer }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <FontAwesomeIcon icon={stat.icon} className="text-2xl text-[#F4DB01] mb-3" />
              <p className="text-3xl font-bold text-slate-700 dark:text-button-yellow">{stat.number}</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Work Experience Timeline */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-neutral-200 text-center mb-12">
            Roles
          </h3>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-[#F4DB01]/30 last:border-l-0 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#F4DB01] rounded-full border-4 border-white dark:border-neutral-900"></div>

                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-6 border border-gray-200 dark:border-neutral-700 hover:border-[#F4DB01]/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-[#F4DB01] font-semibold mb-2">
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                          {exp.period}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#F4DB01]/10 text-[#F4DB01] rounded-md text-xs font-medium">
                          +{exp.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Highlights:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-[#F4DB01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Experiences;
