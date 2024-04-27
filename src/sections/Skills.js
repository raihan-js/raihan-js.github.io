import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare, faPhp, faReact, 
  faNodeJs, faNpm, faLaravel, faGitAlt, faDigitalOcean, faWordpress, faElementor
} from '@fortawesome/free-brands-svg-icons';

const Skills = forwardRef((props, ref) => {
  const techItems = [
    { label: 'Laravel', icon: faLaravel },
    { label: 'React.js', icon: faReact },
    { label: 'Node.js', icon: faNodeJs },
    { label: 'JavaScript', icon: faJsSquare },
    { label: 'PHP', icon: faPhp },
    { label: 'NPM', icon: faNpm },
    { label: 'Git', icon: faGitAlt },
    { label: 'Digital Ocean', icon: faDigitalOcean },
    { label: 'WordPress', icon: faWordpress },
    { label: 'Elementor', icon: faElementor },
  ];

  const skills = [
    "Develop highly functional websites & Web Applications",
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Integration of third party services such as Firebase / Digital Ocean"
  ];

  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 md:items-center md:gap-12 xl:gap-32">
        <div className="md:col-span-1">
          <img className="rounded-xl w-full max-w-md mx-auto" src="headshot.png" alt="Profile"/>
        </div>
        
        <div className="md:col-span-2 mt-5 sm:mt-10 lg:mt-0">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 text-center md:text-left">
            What I Do
          </h2>
          <h3 className="py-2 text-center md:text-left">ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h3>
          <ul className="list-disc pl-5 mt-4 text-gray-500 dark:text-neutral-500 pb-4">
            {skills.map((skill, index) => (
              <li key={index} className='dark:text-gray-200'>{skill}</li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center md:justify-start mt-4">
            {techItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center mr-4 mb-4">
                <FontAwesomeIcon icon={item.icon} className="text-5xl text-[#1F2937] dark:text-button-yellow"/>
                <span className="mt-2 md:text-xs sm:text-base text-gray-500 dark:text-neutral-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
