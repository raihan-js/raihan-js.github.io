import React, { forwardRef } from 'react';
import Slider from 'react-slick';
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
    autoplaySpeed: 3000,
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

  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-neutral-200 text-center mb-10">Experiences & Testimonials</h2>
      
      <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12 mb-12">
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

      <Slider {...settings} className="!mx-2">
        {/* Add additional testimonials here as needed */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 p-4 md:p-6">
          <p className="text-base md:text-xl text-gray-800 dark:text-white"><em>
            "Raihan's innovative approach and meticulous attention to detail have significantly enhanced our operational efficiency. His expertise was pivotal in the success of our digital transformation project."
          </em></p>
          <div className="mt-4 text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">Ava Smith</div>
          <div className="text-sm text-gray-500 dark:text-neutral-500">Chief Operating Officer | TechSolutions</div>
        </div>
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 p-4 md:p-6">
          <p className="text-base md:text-xl text-gray-800 dark:text-white"><em>
            "Working with Raihan was transformative. His strategic vision and deep technical skills helped us scale our cloud infrastructure while maintaining robust security protocols."
          </em></p>
          <div className="mt-4 text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">James Doe</div>
          <div className="text-sm text-gray-500 dark:text-neutral-500">Director of IT | CloudNet</div>
        </div>
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 p-4 md:p-6">
          <p className="text-base md:text-xl text-gray-800 dark:text-white"><em>
            "His technical expertise and personalized approach made him an excellent partner for our IT needs. Highly recommend for any tech solutions!"
          </em></p>
          <div className="mt-4 text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">Anita Singh</div>
          <div className="text-sm text-gray-500 dark:text-neutral-500">CTO | DataTech Solutions</div>
        </div>
      </Slider>
    </div>
  );
});

export default Experiences;
