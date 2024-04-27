import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faHeart, faGlobeAmericas, faBullseye } from '@fortawesome/free-solid-svg-icons';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl md:leading-tight text-gray-800 dark:text-neutral-200">
          About Me
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          {/* Each section now includes an icon */}
          <div className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-gray-100 dark:bg-gray-900 p-5 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> My Story
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              From Dhaka, I began my tech journey young, driven by the vast potential of digital solutions.
            </p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-gray-100 dark:bg-gray-900 p-5 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> My Career
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              I've tackled projects from web designs to complex cloud solutions, with a focus on robust, scalable architectures.
            </p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-gray-100 dark:bg-gray-900 p-5 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 flex items-center">
              <FontAwesomeIcon icon={faHeart} className="mr-2" /> My Passion
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              I dedicate time to mentoring, community contributions, and technical blogging to inspire and educate.
            </p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-gray-100 dark:bg-gray-900 p-5 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 flex items-center">
              <FontAwesomeIcon icon={faGlobeAmericas} className="mr-2" /> Personal Interests
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Beyond coding, I'm drawn to the latest tech trends, outdoor adventures, and meaningful time with loved ones.
            </p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg bg-gray-100 dark:bg-gray-900 p-5 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 flex items-center">
              <FontAwesomeIcon icon={faBullseye} className="mr-2" /> Goals & Aspirations
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Aiming to lead and innovate within the tech industry, I strive to be a pioneer and a mentor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
