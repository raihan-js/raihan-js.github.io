import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faEye, faFilter } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = forwardRef((props, ref) => {
  const projectsPerPage = 6;
  const [activeTab, setActiveTab] = useState('AI / SaaS');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "BeautyCrew AI",
      category: "AI / SaaS",
      description: "Booking management platform for the beauty industry — built to eliminate missed appointments and keep beauty professionals' calendars and client relationships reliable.",
      liveLink: "https://beautycrew.ai",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
      githubLink: null,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI scheduling"],
      status: "Live"
    },
    {
      name: "VETR Proposal",
      category: "AI / SaaS",
      description: "AI-assisted proposal co-pilot that streamlines federal contracting for small business teams. Makes the federal contracting process accessible to teams without dedicated proposal departments.",
      liveLink: "https://vetrproposal.com",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      githubLink: null,
      technologies: ["Next.js", "TypeScript", "LLM integration", "PostgreSQL"],
      status: "Live"
    },
    {
      name: "CommonRoom AI",
      category: "AI / SaaS",
      description: "Collaborative digital workspace combining 15 purpose-built tools (tasks, voting, attendance, expenses) for groups — shareable via link or QR with no app install or account required for guests.",
      liveLink: "https://commonroomai.com",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      githubLink: null,
      technologies: ["Next.js", "Real-time sync", "Tailwind CSS", "TypeScript"],
      status: "Live"
    },
    {
      name: "BlackGPT.us",
      category: "AI / SaaS",
      description: "Specialized AI chat platform for the black community using RAG architecture with culturally-aware responses, community moderation, and real-time conversations.",
      liveLink: "https://blkgpt.com/",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubLink: "https://github.com/raihan-js/blackgpt",
      technologies: ["Laravel", "Vue.js", "OpenAI API", "PostgreSQL"],
      status: "Live"
    },
    {
      name: "Klevere AI",
      category: "AI / SaaS",
      description: "AI assistant suite providing intelligent tools for marketing automation, finance analysis, and business intelligence with advanced dashboard analytics.",
      liveLink: "https://www.klevere.ai/",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubLink: null,
      technologies: ["Laravel", "React", "Python", "AWS"],
      status: "Live"
    },
    {
      name: "DreamStreams",
      category: "AI / SaaS",
      description: "Educational AI image generation platform inspired by Midjourney, designed for schools and educational content creation with content filtering and teacher dashboard.",
      liveLink: "https://dreamstream.hephed.org/",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      githubLink: null,
      technologies: ["Laravel", "React", "Stable Diffusion", "Redis"],
      status: "Live"
    },
    {
      name: "PregaCare",
      category: "React Native",
      description: "Mobile application designed to support and guide expectant mothers through pregnancy with personalized recommendations and health tracking.",
      liveLink: null,
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
      githubLink: "https://github.com/raihan-js/pregacare",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      status: "In Development"
    },
    {
      name: "FlaskColorWorks",
      category: "Python",
      description: "AI-powered image processing tool featuring object segmentation and intelligent colorization using MASK R-CNN and COCO dataset for automated image enhancement.",
      liveLink: null,
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      githubLink: "https://github.com/raihan-js/FlaskColorWorks",
      technologies: ["Python", "Flask", "TensorFlow", "OpenCV"],
      status: "Completed"
    },
  ];

  const categories = [
    { name: 'AI / SaaS', count: projects.filter(p => p.category === 'AI / SaaS').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Python', count: projects.filter(p => p.category === 'Python').length, color: 'from-green-500 to-emerald-500' },
    { name: 'React Native', count: projects.filter(p => p.category === 'React Native').length, color: 'from-purple-500 to-pink-500' }
  ];

  const filterProjects = (category) => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  const filteredProjects = projects.filter(project => project.category === activeTab);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Live products and shipped builds &mdash; AI / SaaS first, then full-stack and mobile work
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              className={`relative py-3 px-6 text-sm font-semibold rounded-2xl border-2 transition-all duration-300 ${
                activeTab === category.name 
                  ? 'bg-[#F4DB01] text-gray-900 border-[#F4DB01] shadow-lg shadow-[#F4DB01]/25' 
                  : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-[#F4DB01]/50'
              }`}
              onClick={() => filterProjects(category.name)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFilter} />
                {category.name}
                <span className={`inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full ${
                  activeTab === category.name 
                    ? 'bg-gray-900 text-[#F4DB01]' 
                    : 'bg-[#F4DB01] text-gray-900'
                }`}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${index}`}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 hover:border-[#F4DB01]/50 shadow-sm hover:shadow-2xl hover:shadow-[#F4DB01]/10 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-neutral-800">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredProject === index ? 1.1 : 1 }}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop";
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md ${
                      project.status === 'Live' 
                        ? 'bg-green-500/90 text-white shadow-lg shadow-green-500/25' 
                        : project.status === 'In Development'
                        ? 'bg-blue-500/90 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-500/90 text-white shadow-lg shadow-gray-500/25'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  />
                  
                  {/* Action Buttons */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: hoveredProject === index ? 1 : 0.8,
                      opacity: hoveredProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#F4DB01] text-gray-900 rounded-lg font-semibold text-sm hover:bg-[#F4DB01]/90 transition-colors shadow-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/95 text-gray-900 rounded-lg font-semibold text-sm hover:bg-white transition-colors shadow-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-[#F4DB01] transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-[#F4DB01]/10 text-[#F4DB01] rounded-md text-xs font-medium border border-[#F4DB01]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Hover Effect Border - Removed white fill */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(244, 219, 1, 0.1) 50%, transparent 100%)',
                  }}
                  initial={false}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Pagination */}
        {pageNumbers.length > 1 && (
          <motion.div 
            className="flex justify-center mt-12"
            variants={itemVariants}
          >
            <div className="flex gap-2">
              {pageNumbers.map(number => (
                <motion.button 
                  key={number} 
                  onClick={() => paginate(number)} 
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    number === currentPage 
                      ? 'bg-[#F4DB01] text-gray-900 shadow-lg shadow-[#F4DB01]/25' 
                      : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-[#F4DB01]/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {number}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
});

export default Projects;