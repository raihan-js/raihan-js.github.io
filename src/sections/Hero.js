import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faReact, faLaravel, faPython, faNodeJs, faAws, faDocker
} from '@fortawesome/free-brands-svg-icons';
import { faBrain, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

const Hero = forwardRef((props, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Tech stack icons for orbiting circles
  const techIcons = [
    { icon: faReact, color: '#61DAFB' },
    { icon: faLaravel, color: '#FF2D20' },
    { icon: faPython, color: '#3776AB' },
    { icon: faNodeJs, color: '#339933' },
    { icon: faAws, color: '#FF9900' },
    { icon: faDocker, color: '#2496ED' },
    { icon: faBrain, color: '#F4DB01' },
    { icon: faDatabase, color: '#336791' }
  ];

  // Geometric shapes animation variants
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const smallCircleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const iconOrbitVariants = {
    animate: {
      rotate: [0, -360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div ref={ref} className="pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 opacity-50" />
      
      <motion.div 
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 flex flex-col md:flex-row justify-between items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column for Text Content */}
        <div className="md:flex-1 md:pr-8">
          <motion.div variants={itemVariants} className="mt-5 max-w-xl text-center md:text-left">
            <motion.h1 
              className="font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hi! I'm
              <motion.span 
                className="dark:text-[#F4DB01] text-[#F4DB01] !font-dark block md:inline"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(244, 219, 1, 0.3)",
                    "0 0 30px rgba(244, 219, 1, 0.6)",
                    "0 0 20px rgba(244, 219, 1, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              > Raihan</motion.span>
            </motion.h1>
            <motion.div
              className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-4 font-medium"
              variants={itemVariants}
            >
              Full Stack Engineer • AI Engineer • CTO at ClarioScope AI
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 max-w-xl text-center md:text-left">
            <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
              Leading innovative AI solutions at ClarioScope AI while crafting exceptional digital experiences. 
              Passionate about merging cutting-edge technology with user-centric design to build the future.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 gap-4 flex flex-col sm:flex-row justify-center md:justify-start">
            <motion.a 
              href="https://us3.list-manage.com/contact-form?u=9e984b49266ab372d18d87283&form_id=36b5d8c85665ee08a9af7a3f7b8fbfd5" 
              className="inline-flex justify-center items-center gap-x-3 bg-gradient-to-r from-[#F4DB01] to-[#FEE715] hover:from-[#FEE715] hover:to-[#F4DB01] border border-transparent text-gray-900 text-base font-semibold rounded-xl py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get a quote</span>
              <motion.svg 
                className="flex-shrink-0 relative z-10" 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="m9 18 6-6-6-6"/>
              </motion.svg>
            </motion.a>
            
            <motion.a 
              href='https://drive.google.com/file/d/1c0a-EMC0SEA3S32THguoy-nf5NxIUaE0/view?usp=drive_link' 
              target='_blank' 
              rel='noreferrer' 
              className="relative group px-8 py-3 inline-flex items-center justify-center gap-x-2 text-base font-semibold rounded-xl border-2 border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-gray-800 dark:text-white hover:border-[#F4DB01] hover:bg-white dark:hover:bg-neutral-800 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                className="flex-shrink-0 size-4"
                whileHover={{ rotate: 6 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={itemVariants} className="mt-8 gap-6 flex justify-center md:justify-start">
            {[
              { href: "https://github.com/raihan-js", icon: faGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/raihan-js/", icon: faLinkedin, label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[#F4DB01] dark:hover:text-[#F4DB01] transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Column for Geometric Animation */}
        <motion.div 
          className="md:flex-1 flex justify-center items-center mt-12 md:mt-0"
          variants={itemVariants}
        >
          <div className="relative w-96 h-96 flex items-center justify-center">
            
            {/* Main Central Circle with AI Icon */}
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#F4DB01]/30 to-[#FEE715]/50 dark:from-[#F4DB01]/20 dark:to-[#FEE715]/30 backdrop-blur-sm border border-[#F4DB01]/20 flex items-center justify-center"
              variants={circleVariants}
              animate="animate"
              style={{
                boxShadow: '0 0 60px rgba(244, 219, 1, 0.3), inset 0 0 30px rgba(244, 219, 1, 0.1)'
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FontAwesomeIcon 
                  icon={faBrain} 
                  className="text-3xl text-[#F4DB01] dark:text-[#F4DB01]" 
                />
              </motion.div>
            </motion.div>

            {/* Tech Icons Orbiting Container */}
            <motion.div
              className="absolute w-80 h-80"
              variants={iconOrbitVariants}
              animate="animate"
            >
              {techIcons.slice(0, 4).map((tech, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const x = Math.cos(angle) * 160;
                const y = Math.sin(angle) * 160;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-lg border-2 border-gray-200 dark:border-neutral-700 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                    animate={{
                      rotate: [0, -360],
                      boxShadow: [
                        `0 0 20px ${tech.color}30`,
                        `0 0 30px ${tech.color}60`,
                        `0 0 20px ${tech.color}30`
                      ]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      boxShadow: { duration: 2 + index * 0.5, repeat: Infinity }
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Inner Tech Icons Orbit */}
            <motion.div
              className="absolute w-60 h-60"
              variants={orbitVariants}
              animate="animate"
            >
              {techIcons.slice(4, 8).map((tech, index) => {
                const angle = (index * 90 + 45) * (Math.PI / 180);
                const x = Math.cos(angle) * 120;
                const y = Math.sin(angle) * 120;
                
                return (
                  <motion.div
                    key={index + 4}
                    className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-700 shadow-md border border-gray-200 dark:border-neutral-600 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`,
                    }}
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        `0 0 15px ${tech.color}20`,
                        `0 0 25px ${tech.color}40`,
                        `0 0 15px ${tech.color}20`
                      ]
                    }}
                    transition={{
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3 + index * 0.3, repeat: Infinity },
                      boxShadow: { duration: 2.5 + index * 0.3, repeat: Infinity }
                    }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className="text-sm"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Floating Code Elements */}
            <motion.div
              className="absolute top-8 right-8 w-8 h-8 rounded-lg bg-gradient-to-br from-[#F4DB01] to-[#FEE715] shadow-lg flex items-center justify-center"
              variants={smallCircleVariants}
              animate="animate"
              style={{
                boxShadow: '0 0 15px rgba(244, 219, 1, 0.6)'
              }}
            >
              <FontAwesomeIcon icon={faCode} className="text-gray-900 text-xs" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-12 left-8 w-6 h-6 rounded-full bg-gradient-to-br from-[#FEE715] to-[#F4DB01] shadow-lg flex items-center justify-center"
              animate={{
                y: [-15, 15, -15],
                x: [15, -15, 15],
                scale: [0.7, 1.3, 0.7],
                rotate: [0, 360],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                boxShadow: '0 0 18px rgba(254, 231, 21, 0.6)'
              }}
            >
              <span className="text-xs text-gray-900 font-bold">{}</span>
            </motion.div>

            {/* Ring Elements */}
            <motion.div
              className="absolute w-72 h-72 border border-[#F4DB01]/20 rounded-full"
              animate={{
                rotate: [0, -360],
                scale: [1, 1.05, 1],
                transition: {
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              }}
            />

            <motion.div
              className="absolute w-52 h-52 border-2 border-[#FEE715]/10 rounded-full border-dashed"
              animate={{
                rotate: [0, 360],
                scale: [1, 0.95, 1],
                transition: {
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }
              }}
            />

            {/* Pulsing Background Glow */}
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-gradient-radial from-[#F4DB01]/8 via-[#F4DB01]/3 to-transparent dark:from-[#F4DB01]/4 dark:via-[#F4DB01]/1 dark:to-transparent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Hero;