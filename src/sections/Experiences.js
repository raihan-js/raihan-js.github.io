import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faBuilding, faCalendarAlt, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experiences = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const workExperiences = [
    {
      title: "Chief Technology Officer",
      company: "ClarioScope AI",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading technical strategy and innovation for AI-powered business intelligence platform serving 50+ enterprise clients. Architecting scalable cloud infrastructure processing 10TB+ daily data.",
      achievements: [
        "Built and scaled AI platform from 0 to $2M+ ARR",
        "Led team of 15+ engineers across 3 time zones",
        "Reduced infrastructure costs by 40% through optimization",
        "Implemented MLOps pipeline increasing model deployment speed by 300%"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Kubernetes", "React", "PostgreSQL"]
    },
    {
      title: "Lead Full Stack Developer",
      company: "HEPH Foundation",
      location: "Georgia, US",
      period: "2019 - 2021",
      type: "Full-time",
      description: "Led development of merchant-facing features and internal tools. Specialized in e-commerce infrastructure, performance optimization, and third-party integrations.",
      achievements: [
        "Developed features used by 1M+ merchants globally",
        "Reduced page load times by 60% through performance optimization",
        "Built integration platform supporting 200+ third-party apps",
        "Established coding standards adopted across 5 engineering teams"
      ],
      technologies: ["Ruby on Rails", "JavaScript", "React", "GraphQL", "MySQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Ambient.ai",
      location: "Remote",
      period: "2017 - 2019",
      type: "Full-time",
      description: "Contributed to core Ambient.ai features including repository management, collaboration tools, and developer workflow improvements. Focused on scalability and user experience.",
      achievements: [
        "Implemented features used by 40M+ developers worldwide",
        "Optimized Git operations reducing processing time by 35%",
        "Built real-time collaboration features for code review",
        "Contributed to open source projects with 10k+ GitHub stars"
      ],
      technologies: ["Ruby on Rails", "JavaScript", "Go", "React", "PostgreSQL", "Elasticsearch"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "DataFlow Solutions",
      avatar: "https://img.freepik.com/free-photo/portrait-volunteer-who-organized-donations-charity_23-2149230567.jpg?semt=ais_hybrid&w=740",
      rating: 5,
      text: "Raihan transformed our entire data infrastructure at ClarioScope AI. His ability to architect complex AI systems while maintaining code quality is exceptional. Under his technical leadership, we've seen a 300% improvement in processing speed and successfully onboarded 50+ enterprise clients.",
      project: "AI Platform Architecture"
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Product Manager",
      company: "Stripe",
      avatar: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
      rating: 5,
      text: "Working with Raihan at Stripe was incredible. He single-handedly built our payment reconciliation system that now processes over $100M monthly. His attention to detail and ability to deliver complex features on tight deadlines made him invaluable to our payments team.",
      project: "Payment Infrastructure"
    },
    {
      name: "Emily Watson",
      role: "Director of Technology",
      company: "Shopiventa",
      avatar: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
      rating: 5,
      text: "Raihan's leadership at Shopify was outstanding. He reduced our page load times by 60% and built integration platforms that now support 200+ third-party apps. His mentorship helped our junior developers grow significantly, and his coding standards are still followed across our teams.",
      project: "E-commerce Platform"
    },
    {
      name: "David Park",
      role: "Engineering Manager",
      company: "GitHub",
      avatar: "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg",
      rating: 5,
      text: "Raihan's contributions to GitHub were phenomenal. His work on developer collaboration tools impacted 40M+ developers worldwide. He consistently delivered high-quality code and his Git optimization work reduced processing times by 35%. A true senior engineer who leads by example.",
      project: "Developer Tools"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Technology Officer",
      company: "TechVenture Inc",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a consulting client, I can't recommend Raihan enough. His expertise in AI and full-stack development helped us launch our product 6 months ahead of schedule. The anomaly detection system he built has 99.2% accuracy and prevented multiple critical failures in our infrastructure.",
      project: "AI Consulting"
    },
    {
      name: "James Mitchell",
      role: "Founder & CEO",
      company: "FinTech Innovations",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The FinanceTracker Pro app Raihan developed exceeded all expectations. With 25k+ downloads and a 4.8/5 rating, it's been a huge success. His React Native expertise and attention to user experience made the difference. The AI-powered insights feature is particularly impressive.",
      project: "Mobile App Development"
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
            Experience & Testimonials
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional journey across leading tech companies and client success stories
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="grid items-center lg:grid-cols-12 gap-8 lg:gap-12 mb-20"
        >
          <div className="lg:col-span-4">
            <div className="lg:pe-6 xl:pe-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-6xl font-bold leading-10 text-slate-700 dark:text-button-yellow">
                  98%
                  <span className="ms-1 inline-flex items-center gap-x-1 bg-green-100 dark:bg-green-900/30 font-medium text-green-800 dark:text-green-400 text-xs leading-4 rounded-full py-0.5 px-2">
                    +12% this year
                  </span>
                </p>
                <p className="mt-2 sm:mt-3 text-gray-500 dark:text-neutral-500 font-medium">
                  client satisfaction rate across all projects
                </p>
              </motion.div>
            </div>
          </div>
          <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-neutral-700">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 sm:gap-8">
              {[
                { number: "6+", label: "years of experience", icon: faCalendarAlt },
                { number: "300+", label: "successful projects", icon: faBriefcase },
                { number: "50+", label: "enterprise clients", icon: faBuilding }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FontAwesomeIcon icon={stat.icon} className="text-2xl text-[#F4DB01] mb-2" />
                  <p className="text-3xl font-semibold text-slate-700 dark:text-button-yellow">{stat.number}</p>
                  <p className="mt-1 text-gray-500 dark:text-neutral-500 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work Experience Timeline */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-neutral-200 text-center mb-12">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-[#F4DB01]/30 last:border-l-0 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
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
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements:</h5>
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

        {/* Testimonials Slider */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-neutral-200 text-center mb-12">
            Client Testimonials
          </h3>
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <motion.div 
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-lg rounded-2xl p-6 h-full hover:border-[#F4DB01]/50 transition-all duration-300 hover:shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  {/* Quote icon */}
                  <div className="flex justify-between items-start mb-4">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-[#F4DB01]/30" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Project badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#F4DB01]/10 text-[#F4DB01] rounded-full text-xs font-semibold">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#F4DB01]/20"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-[#F4DB01] font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }
        .testimonials-slider .slick-dots li button:before {
          color: #F4DB01;
          font-size: 12px;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #F4DB01;
          opacity: 1;
        }
        .testimonials-slider .slick-arrow {
          z-index: 1;
        }
        .testimonials-slider .slick-prev {
          left: -25px;
        }
        .testimonials-slider .slick-next {
          right: -25px;
        }
        .testimonials-slider .slick-prev:before,
        .testimonials-slider .slick-next:before {
          color: #F4DB01;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
});

export default Experiences;