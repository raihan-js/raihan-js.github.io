import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
            © 2024 Raihan. All rights reserved.
          </p>
        </div>
        <div className="mt-3 space-x-2">
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
    </footer>
  );
};

export default Footer;
