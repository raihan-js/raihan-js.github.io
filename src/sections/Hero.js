
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faMediumM
} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <div className="pt-20 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:size-full">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Column for Text Content */}
        <div className="md:flex-1 md:pr-8">
          <div className="mt-5 max-w-xl text-center md:text-left">
            <h1 className="font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Hi! I'm
              <span className="dark:text-button-yellow text-[#F4DB01] !font-dark"> Raihan</span>
            </h1>
          </div>

          <div className="mt-5 max-w-xl text-center md:text-left">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              A passionate Web Developer from Dhaka, Bangladesh having an experience of designing and building functional websites with WordPress and Web applications with React, Laravel and some other cool libraries and frameworks.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center md:justify-start">
            <a href="https://us3.list-manage.com/contact-form?u=9e984b49266ab372d18d87283&form_id=36b5d8c85665ee08a9af7a3f7b8fbfd5" className="inline-flex justify-center items-center gap-x-3 bg-button-gradient hover:bg-button-gradient border border-transparent text-gray-900 text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800">
              Get a quote
              <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            <a href='https://drive.google.com/file/d/1c0a-EMC0SEA3S32THguoy-nf5NxIUaE0/view?usp=drive_link' target='_blank' rel='noreferrer' type="button" className="relative group p-2 px-5 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 size-4 group-hover:rotate-6 transition">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </a>
          </div>
                  {/* Left Column for Text Content */}
        <div className="md:flex-1 md:pr-8">
          {/* Text and buttons */}
          <div className="mt-8 gap-3 flex justify-center md:justify-start">
            {/* Social Media Icons */}
            <a href="https://github.com/raihan-js" className="text-gray-800 dark:text-button-yellow hover:text-gray-600 mr-4" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-3xl text-[#1F2937] dark:text-gray-100" />
            </a>
            <a href="https://www.linkedin.com/in/raihan-js/" className="text-blue-600 hover:text-blue-800 mr-4" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-3xl text-[#1F2937] dark:text-gray-100" />
            </a>
            <a href="https://medium.com/@yourUsername" className="text-black hover:text-gray-800 hidden" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faMediumM} size="2x" className="text-3xl text-[#1F2937] dark:text-gray-100" />
            </a>
          </div>
        </div>
        </div>

        {/* Right Column for Image */}
        <div className="md:flex-1 flex justify-center items-center mt-8 md:mt-0">
        <img src="hero-bg.svg" alt="Raihan" className="rounded-lg md:max-w-xl sm:max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

