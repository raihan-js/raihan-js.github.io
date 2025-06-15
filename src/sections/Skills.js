import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faMobile, faCloud, faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, faVuejs, faJs, faPython, faPhp, faNodeJs, faLaravel, 
  faAws, faDocker, faGit, faWordpress
} from '@fortawesome/free-brands-svg-icons';

const Skills = forwardRef((props, ref) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: 'React.js', icon: faReact, level: 95, color: '#61DAFB' },
        { name: 'Vue.js', icon: faVuejs, level: 90, color: '#4FC08D' },
        { name: 'JavaScript', icon: faJs, level: 95, color: '#F7DF1E' },
        { name: 'TypeScript', icon: faCode, level: 85, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: faCode, level: 90, color: '#06B6D4' },
        { name: 'Next.js', icon: faReact, level: 88, color: '#000000' }
      ]
    },
    {
      title: "Backend Development",
      icon: faServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: 'Laravel', icon: faLaravel, level: 95, color: '#FF2D20' },
        { name: 'Node.js', icon: faNodeJs, level: 92, color: '#339933' },
        { name: 'PHP', icon: faPhp, level: 95, color: '#777BB4' },
        { name: 'Python', icon: faPython, level: 88, color: '#3776AB' },
        { name: 'Express.js', icon: faNodeJs, level: 90, color: '#000000' },
        { name: 'Django', icon: faPython, level: 80, color: '#092E20' }
      ]
    },
    {
      title: "Mobile Development",
      icon: faMobile,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: 'React Native', icon: faReact, level: 90, color: '#61DAFB' },
        { name: 'Expo', icon: faMobile, level: 85, color: '#000020' },
        { name: 'Flutter', icon: faMobile, level: 75, color: '#02569B' }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: faCloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: 'AWS', icon: faAws, level: 90, color: '#FF9900' },
        { name: 'Docker', icon: faDocker, level: 88, color: '#2496ED' },
        { name: 'Kubernetes', icon: faCloud, level: 82, color: '#326CE5' },
        { name: 'Digital Ocean', icon: faCloud, level: 85, color: '#0080FF' },
        { name: 'Git', icon: faGit, level: 95, color: '#F05032' }
      ]
    },
    {
      title: "Database & Storage",
      icon: faDatabase,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: 'PostgreSQL', icon: faDatabase, level: 90, color: '#336791' },
        { name: 'MongoDB', icon: faDatabase, level: 88, color: '#47A248' },
        { name: 'MySQL', icon: faDatabase, level: 92, color: '#4479A1' },
        { name: 'Redis', icon: faDatabase, level: 85, color: '#DC382D' },
        { name: 'Firebase', icon: faDatabase, level: 87, color: '#FFCA28' }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: faBrain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: 'TensorFlow', icon: faBrain, level: 85, color: '#FF6F00' },
        { name: 'PyTorch', icon: faBrain, level: 80, color: '#EE4C2C' },
        { name: 'OpenAI', icon: faBrain, level: 90, color: '#412991' },
        { name: 'Scikit-learn', icon: faBrain, level: 82, color: '#F7931E' }
      ]
    }
  ];

  const mainSkills = [
    "Architect and develop scalable full-stack applications with modern frameworks and cloud technologies",
    "Build AI-powered solutions integrating machine learning models with real-world business applications",
    "Lead technical teams and mentor developers while maintaining high code quality and best practices",
    "Design and implement microservices architectures with containerization and orchestration",
    "Integrate complex third-party APIs and services for seamless user experiences"
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

  const skillItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-stack development expertise spanning modern frameworks, AI/ML, and cloud technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Profile & Main Skills */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-8">
              <motion.div 
                className="relative group mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4DB01]/20 to-[#F4DB01]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  className="relative rounded-2xl w-full max-w-sm mx-auto border-4 border-white dark:border-neutral-800 shadow-2xl" 
                  src="headshot.png" 
                  alt="Profile"
                />
              </motion.div>
              
              <motion.div
                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-200 dark:border-neutral-700 shadow-lg"
                variants={itemVariants}
              >
                <h3 className="font-bold text-2xl text-gray-800 dark:text-neutral-200 mb-2">
                  What I Do
                </h3>
                <p className="text-sm text-[#F4DB01] font-semibold mb-4 uppercase tracking-wide">
                  Chief Technology Officer & Full Stack Engineer
                </p>
                <ul className="space-y-3">
                  {mainSkills.map((skill, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      variants={skillItemVariants}
                      custom={index}
                    >
                      <div className="w-2 h-2 bg-[#F4DB01] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="grid gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                      <FontAwesomeIcon icon={category.icon} className="text-white text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group relative p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 hover:bg-gradient-to-br hover:from-[#F4DB01]/10 hover:to-[#F4DB01]/5 border border-gray-200 dark:border-neutral-700 hover:border-[#F4DB01]/30 transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        variants={skillItemVariants}
                        custom={skillIndex}
                      >
                        <div className="flex flex-col items-center text-center">
                          <motion.div
                            className="mb-3 relative"
                            animate={{ 
                              rotate: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 5 : 0,
                              scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1.1 : 1
                            }}
                          >
                            <FontAwesomeIcon 
                              icon={skill.icon} 
                              className="text-2xl"
                              style={{ color: skill.color }}
                            />
                          </motion.div>
                          
                          <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                            {skill.name}
                          </h5>
                          
                          {/* Skill Level Bar */}
                          <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mb-1">
                            <motion.div 
                              className="bg-gradient-to-r from-[#F4DB01] to-[#F4DB01]/80 h-1.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                          
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F4DB01]/5 to-[#F4DB01]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          layoutId={`glow-${categoryIndex}-${skillIndex}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

export default Skills;