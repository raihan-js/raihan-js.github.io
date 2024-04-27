import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white dark:bg-[#101820] py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Contact Me
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <div className="mt-8 space-y-3">
          <div>
            <a href="mailto:ceo@bracketi.com" className="text-lg text-slate-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              ceo@bracketi.com
            </a>
          </div>
          <div className="mt-6">
            <a href='https://www.upwork.com/freelancers/~01d7b33a5624c281a6' className="bg-button-yellow hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg transition-colors">
              Hire me!
            </a>
            <a href="https://us3.list-manage.com/contact-form?u=9e984b49266ab372d18d87283&form_id=36b5d8c85665ee08a9af7a3f7b8fbfd5" className="ml-4 bg-transparent dark:text-white hover:bg-gray-800 text-gray-900 hover:text-white py-2 px-4 rounded-lg transition-colors">
            Send message
            </a >
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
