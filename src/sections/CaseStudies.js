import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faRocket, faBrain, faChartLine, faUsers, faShieldAlt, faMobile, faExclamationTriangle, faWallet } from '@fortawesome/free-solid-svg-icons';

const CaseStudies = forwardRef((props, ref) => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "ClarioScope AI Platform",
      category: "AI/ML",
      description: "Revolutionary AI platform transforming business intelligence with advanced analytics",
      fullDescription: "Led the development of ClarioScope AI's flagship platform, integrating multiple AI models for comprehensive business analytics. The platform processes over 10TB of data daily and serves 50+ enterprise clients with real-time insights and predictive analytics.",
      technologies: ["Python", "TensorFlow", "React", "AWS", "Docker", "Kubernetes"],
      metrics: "300% increase in data processing speed, 85% accuracy in predictions, 50+ enterprise clients",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      icon: faBrain,
      size: "large"
    },
    {
      id: 2,
      title: "AI Anomaly Detection System",
      category: "AI/ML",
      description: "Advanced ML-powered anomaly detection for enterprise infrastructure monitoring",
      fullDescription: "Developed a sophisticated anomaly detection system using ensemble machine learning models to identify unusual patterns in enterprise systems. The system combines statistical analysis, deep learning, and real-time monitoring to prevent potential failures and security breaches.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Apache Kafka", "Elasticsearch", "Grafana"],
      metrics: "99.2% anomaly detection accuracy, 40% reduction in system downtime, real-time processing of 1M+ events/hour",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: faExclamationTriangle,
      size: "large"
    },
    {
      id: 3,
      title: "FinanceTracker Pro",
      category: "Mobile",
      description: "Comprehensive React Native finance tracking app with AI-powered insights",
      fullDescription: "Built a full-featured personal finance management app using React Native and Expo. Features include expense tracking, budget planning, investment monitoring, and AI-powered spending insights with beautiful data visualizations.",
      technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Chart.js", "Plaid API"],
      metrics: "4.8/5 app store rating, 25k+ downloads, 90% user retention rate",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      icon: faWallet,
      size: "medium"
    },
    {
      id: 4,
      title: "BlackGPT Community Platform",
      category: "Full Stack",
      description: "AI-powered chat platform for the black community using RAG architecture",
      fullDescription: "Developed a specialized AI chat system with cultural context awareness. Implemented RAG architecture for accurate, culturally-sensitive responses with community-driven content moderation.",
      technologies: ["Laravel", "Vue.js", "OpenAI API", "PostgreSQL", "Redis"],
      metrics: "10k+ active users, 95% satisfaction rate, 99.5% uptime",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      icon: faUsers,
      size: "medium"
    },
    {
      id: 5,
      title: "DreamStreams EdTech",
      category: "AI/Education",
      description: "AI image generation tool for educational institutions",
      fullDescription: "Built an educational AI image generation platform inspired by Midjourney, specifically designed for schools and educational content creation with content filtering and educational templates.",
      technologies: ["Laravel", "Stable Diffusion", "React", "Redis", "AWS S3"],
      metrics: "500+ schools onboarded, 1M+ images generated, 95% teacher satisfaction",
      image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&h=400&fit=crop",
      icon: faRocket,
      size: "small"
    },
    {
      id: 6,
      title: "Klevere AI Suite",
      category: "SaaS",
      description: "Comprehensive AI tools for marketing and finance sectors",
      fullDescription: "Architected a multi-tenant SaaS platform offering AI-powered tools for marketing automation, financial analysis, and business intelligence with advanced dashboard analytics.",
      technologies: ["Laravel", "React", "Python", "Redis", "AWS", "Stripe"],
      metrics: "200+ enterprise clients, $2M+ ARR, 150% YoY growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      icon: faChartLine,
      size: "small"
    },
    {
      id: 7,
      title: "PregaCare Mobile App",
      category: "Mobile",
      description: "React Native pregnancy tracking and guidance app",
      fullDescription: "Developed a comprehensive pregnancy tracking app with personalized recommendations, health monitoring, community features, and integration with healthcare providers.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "WebRTC"],
      metrics: "Beta testing with 1k+ users, 4.7/5 rating, featured in app stores",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
      icon: faMobile,
      size: "small"
    },
    {
      id: 8,
      title: "Enterprise Security Suite",
      category: "Security",
      description: "Advanced cybersecurity solutions for enterprise clients",
      fullDescription: "Developed comprehensive security monitoring and threat detection system for enterprise environments with real-time alerts, automated responses, and compliance reporting.",
      technologies: ["Python", "Django", "Elasticsearch", "Docker", "Kibana"],
      metrics: "99.9% threat detection accuracy, 60% faster incident response",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      icon: faShieldAlt,
      size: "small"
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

  const getGridClass = (size, index) => {
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
            Case Studies
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deep dives into innovative solutions and their impact at ClarioScope AI and beyond
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className={`${getGridClass(study.size, index)} group relative overflow-hidden rounded-2xl 
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
              {/* Background Image with better overlay for light mode */}
              <div 
                className="absolute inset-0 bg-cover bg-center 
                  opacity-5 group-hover:opacity-10 
                  dark:opacity-10 dark:group-hover:opacity-20 
                  transition-opacity duration-300"
                style={{ backgroundImage: `url(${study.image})` }}
              />
              
              {/* Enhanced Gradient Overlay for light mode */}
              <div className="absolute inset-0 
                bg-gradient-to-t from-gray-900/5 to-transparent 
                dark:from-black/20 dark:to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
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

                {/* Technologies - Fixed positioning for large cards */}
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
                    <span>View Case Study</span>
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

      {/* Enhanced Modal for detailed case study */}
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

                {/* Project Image */}
                <div className="mb-8 overflow-hidden rounded-xl">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {selectedCase.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Technologies & Tools
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
                        transition={{ delay: idx * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 
                  dark:from-neutral-800 dark:to-neutral-700/50 
                  rounded-xl p-6 border border-gray-200 dark:border-neutral-600">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#F4DB01] rounded-full mr-3"></span>
                    Key Achievements
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedCase.metrics}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default CaseStudies;