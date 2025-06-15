import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faHeart, faGlobeAmericas, faBullseye, faRocket } from '@fortawesome/free-solid-svg-icons';

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
      description: "From Dhaka to leading ClarioScope AI, my journey spans from curious developer to CTO, driven by the transformative power of AI and technology."
    },
    {
      icon: faBriefcase,
      title: "My Role at ClarioScope AI",
      description: "As CTO, I lead our technical vision, architecting AI solutions that serve 50+ enterprise clients and process terabytes of data daily."
    },
    {
      icon: faRocket,
      title: "Innovation Focus",
      description: "Specializing in AI/ML, full-stack development, and cloud architecture, I bridge the gap between cutting-edge research and practical applications."
    },
    {
      icon: faHeart,
      title: "My Passion",
      description: "I dedicate time to mentoring emerging developers, contributing to open source, and sharing knowledge through technical writing and community engagement."
    },
    {
      icon: faGlobeAmericas,
      title: "Personal Interests",
      description: "Beyond code, I explore the latest AI research, enjoy outdoor adventures, and cherish meaningful moments with family and friends."
    },
    {
      icon: faBullseye,
      title: "Goals & Vision",
      description: "Aiming to democratize AI technology, I strive to build solutions that empower businesses while mentoring the next generation of tech leaders."
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
            Full Stack Engineer, AI Innovator, and Technology Leader
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