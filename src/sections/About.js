import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faBullseye, faRocket, faBrain, faCode } from '@fortawesome/free-solid-svg-icons';

const About = forwardRef((props, ref) => {
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

  const aboutItems = [
    {
      icon: faUser,
      title: "My Story",
      description: "Based in Bangladesh, working at the intersection of full-stack engineering and applied ML. Spent years shipping production web apps, then went deep on training small language models from the ground up on consumer hardware."
    },
    {
      icon: faBriefcase,
      title: "CTO at ClarioScope AI",
      description: "Leading engineering for ClarioScope AI — a HIPAA-compliant healthcare practice growth platform. Responsible for technical strategy, AI architecture, and the infrastructure that keeps protected health information secure."
    },
    {
      icon: faBrain,
      title: "Training SLMs From Scratch",
      description: "I build small language models from scratch — not fine-tunes. The ORCH series (350M–3B params) targets Next.js code generation; MedLLM-10M targets medical text. All trained on consumer GPUs (RTX 3060) and larger rented hardware where the scale demands it."
    },
    {
      icon: faRocket,
      title: "Fine-Tuning at Scale",
      description: "When a domain task calls for a stronger base, I apply parameter-efficient fine-tuning. ORCH-7B is a QLoRA fine-tune of DeepSeek Coder 6.7B (43 hours on an A100, 5,238 steps) — same project family, different approach."
    },
    {
      icon: faCode,
      title: "Full-Stack Background",
      description: "Years of production work in React, Next.js, Laravel, and Node.js inform every model I train. I optimize for what actually ships — small models that run on real hardware, not lab demos that need 80GB of VRAM."
    },
    {
      icon: faBullseye,
      title: "Open Source on Hugging Face",
      description: "Every model I train is published openly on Hugging Face under raihan-js. The ORCH organization (orch-ai) collects the code generation family; everything is reproducible from the published configs."
    }
  ];

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
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI/ML Engineer training small language models from scratch &middot; CTO at ClarioScope AI
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 border border-gray-200 dark:border-neutral-700 p-6 hover:border-[#F4DB01] dark:hover:border-[#F4DB01] transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(244, 219, 1, 0.1)" 
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 p-3 rounded-lg bg-[#F4DB01]/10 text-[#F4DB01] group-hover:bg-[#F4DB01] group-hover:text-gray-900 transition-colors duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-2 group-hover:text-[#F4DB01] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F4DB01]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

export default About;