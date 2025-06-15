import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop < lastScrollTop || currentScrollTop === 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { label: 'About', ref: refs.aboutRef },
    { label: 'Skills', ref: refs.skillsRef },
    { label: 'Projects', ref: refs.projectsRef },
    { label: 'Case Studies', ref: refs.caseStudiesRef },
    { label: 'Experience', ref: refs.experiencesRef },
    { label: 'Contact', ref: refs.contactRef }
  ];

  return (
    <motion.header 
      className={`fixed bg-white/90 dark:bg-[#101820]/90 backdrop-blur-md top-0 w-full z-50 p-4 transition-transform duration-300 border-b border-gray-200/20 dark:border-neutral-700/20 ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <motion.div 
          className="text-2xl flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.svg 
            version="1.2" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 400 402" 
            width="34" 
            height="34" 
            className="flex-shrink-0"
            whileHover={{ rotate: 5 }}
          >
            <style>
                {`.s0 { fill: #101820 } .s1 { fill: #FEE715 }`}
            </style>
            <g id="Layer_1">
                <g id="Group">
                <path id="&lt;Path&gt;" className="s0" d="m193.1 237.9h0.1z"/>
                <path id="Shape 1" className="s1" d="m18 57c0-22.1 17.9-40 40-40h290c22.1 0 40 17.9 40 40v290c0 22.1-17.9 40-40 40h-290c-22.1 0-40-17.9-40-40z"/>
                <path id="&lt;Path&gt;" className="s0" d="m258.3 166.1c0 7.6-2.4 14.7-6.4 20.5 4-5.8 6.4-12.9 6.4-20.5q0 0 0 0z"/>
                <path id="&lt;Path&gt;" className="s0" d="m294.2 166.1q0 5.3-0.8 10.4c-0.9 6.2-2.6 12.3-5 17.9-2.5 5.6-5.6 10.9-9.3 15.7-4.9 6.3-10.9 11.8-17.6 16.2-6.7 4.4-14.2 7.7-22.2 9.6l-27.8-33.8h10.8q1.6 0 3.2-0.2c10.9-0.9 20.4-6.8 26.4-15.3 2-2.9 3.6-6.1 4.7-9.6 1.1-3.4 1.7-7.1 1.7-10.9 0-19.9-16.1-36.1-36-36.1h-82.5l-28.8 35.1 29.8 37 29 35.8h-47.8l-58.9-73 58-70.7h101.2c39.6 0 71.9 32.2 71.9 71.9z"/>
                <path id="&lt;Path&gt;" className="s0" d="m293.5 176.5q0 0 0 0c-1.9 12.5-7 24-14.4 33.6q0 0 0 0c8 6.6 13.2 16.6 13.2 27.9 0 19.8-16.2 36-36.1 36h-42.9l28.6-34.9-2.6-3.2-27.8-33.8-29.5-36h-48.7l59.8 71.8h0.1l0.7 1-28.7 35.1-20.3 24.7-9.2 11.1h120.5c39.7 0 71.9-32.2 71.9-71.8 0-26.1-13.9-48.9-34.6-61.5z"/>
                </g>
            </g>
          </motion.svg>
          <span className="px-2 font-bold">Raihan</span>
        </motion.div>
        
        <div className="flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="mr-6 md:hidden dark:text-white"
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h16M4 15h16" />
              )}
            </motion.svg>
          </button>
          
          <nav className="hidden md:flex gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToRef(item.ref)}
                className="text-base text-gray-700 dark:text-white hover:text-[#F4DB01] dark:hover:text-[#F4DB01] hover:bg-gray-100 dark:hover:bg-slate-800 px-4 py-2 rounded-md transition-all duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <motion.a 
            href='https://us3.list-manage.com/contact-form?u=9e984b49266ab372d18d87283&form_id=36b5d8c85665ee08a9af7a3f7b8fbfd5' 
            className="px-6 py-2 text-base font-medium rounded-md text-gray-900 bg-[#FEE715] hover:bg-[#F4DB01] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a quote
          </motion.a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="flex flex-col items-center bg-gray-50 dark:bg-[#101820] p-4 mt-4 rounded-lg">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => {
                scrollToRef(item.ref);
                setIsMobileMenuOpen(false);
              }}
              className="text-base text-gray-700 dark:text-white hover:text-[#F4DB01] mb-3 w-full text-center py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.a 
            href='https://us3.list-manage.com/contact-form?u=9e984b49266ab372d18d87283&form_id=36b5d8c85665ee08a9af7a3f7b8fbfd5' 
            className="text-base text-gray-900 bg-[#FEE715] hover:bg-[#F4DB01] py-2 px-6 rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Get a quote
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;