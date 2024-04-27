import React, { forwardRef } from 'react';

const Experiences = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-neutral-200 text-center mb-10">Experiences</h2>
      
      <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:pe-6 xl:pe-12">
            <p className="text-6xl font-bold leading-10 text-slate-700 dark:text-button-yellow">
              92%
              <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2 dark:bg-neutral-800 dark:text-neutral-300">
                +7% this month
              </span>
            </p>
            <p className="mt-2 sm:mt-3 text-gray-500 dark:text-neutral-500">
              of clients recommend my services
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-neutral-700">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-3xl font-semibold text-slate-700 dark:text-button-yellow">99.95%</p>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">project completion rate</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-slate-700 dark:text-button-yellow">250+</p>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">successful projects</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-slate-700 dark:text-button-yellow">87%</p>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">increase in client satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="text-base text-gray-800 md:text-xl dark:text-white"><em>
              "I'm thoroughly impressed with the level of detail and professionalism he provided on our project. His insights were invaluable for our success."
            </em></p>
          </div>
          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
              Emma Johnson
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              CEO | InnovateX
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="text-base text-gray-800 md:text-xl dark:text-white"><em>
              "Working with Raihan was a game-changer for our marketing strategy. His creative solutions helped us reach new heights in audience engagement."
            </em></p>
          </div>
          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
              Michael Lee
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              Marketing Director | QuickAds
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="text-base text-gray-800 md:text-xl dark:text-white"><em>
              "His technical expertise and personalized approach made him an excellent partner for our IT needs. Highly recommend for any tech solutions!"
            </em></p>
          </div>
          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
              Anita Singh
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              CTO | DataTech Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experiences;
