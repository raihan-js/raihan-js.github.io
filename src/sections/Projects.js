import React, { useState, forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  const projectsPerPage = 6;
  const [activeTab, setActiveTab] = useState('Laravel');  // Default to 'Laravel'
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      name: "PregaCare",
      category: "React Native",
      description: "PregaCare is a mobile application designed to support and guide through pregnancy, in dev stage",
      liveLink: null,
      imageUrl: "",
      githubLink: "https://github.com/raihan-js/pregacare"
    },
    {
      name: "FlaskColorWorks",
      category: "Python",
      description: "Image object segmentation and colorization, MASK R-CNN and COCO dataset",
      liveLink: null,
      imageUrl: "",
      githubLink: "https://github.com/raihan-js/FlaskColorWorks"
    },
    {
      name: "BlackGPT.us",
      category: "Laravel",
      description: "A chat system specialized for the black community using RAG architecture and a generative AI app.",
      liveLink: "https://blkgpt.com/",
      imageUrl: "",
      githubLink: "https://github.com/raihan-js/blackgpt"
    },
    {
      name: "DreamStreams",
      category: "Laravel",
      description: "An image generation tool for schools inspired by Midjourney.",
      liveLink: "https://dreamstream.hephed.org/",
      imageUrl: "",
      githubLink: null
    },
    {
      name: "Klevere AI",
      category: "Laravel",
      description: "UI assistants tools for marketing, finance, and other sectors.",
      liveLink: "https://www.klevere.ai/",
      imageUrl: "",
      githubLink: null
    },
    { name: "StorySong", category: "WordPress", description: "Songwriters providing custom songs", liveLink: "https://storysong.nl", imageUrl: "", githubLink: null },
    { name: "GNatural", category: "WordPress", description: "A herbal products ecommerce website", liveLink: "https://gnatural.net", imageUrl: "", githubLink: null },
    { name: "Alex TV", category: "WordPress", description: "An Streaming Website", liveLink: "https://alextvstudio.com/", imageUrl: "", githubLink: null },
    { name: "God Said Stay", category: "WordPress", description: "A marriage counselling community website", liveLink: "https://godsaidstay.com/", imageUrl: "", githubLink: null },
    { name: "Proactive Payment Solution", category: "WordPress", description: "Business Portfolio", liveLink: "https://proactivepaymentsolution.com/", imageUrl: "", githubLink: null },
    { name: "Safety Edge", category: "WordPress", description: "Safety equipment event website", liveLink: "https://www.safetyedgetraining.com.au/", imageUrl: "", githubLink: null },
    { name: "Naivera", category: "WordPress", description: "Asset Listing and Management website", liveLink: "https://naiverah.com/", imageUrl: "", githubLink: null },
    { name: "CanWood", category: "WordPress", description: "Canada Migration consulting agency", liveLink: "https://canwoodcanada.com/", imageUrl: "", githubLink: null },
    { name: "The Sainted Trilogy", category: "WordPress", description: "Book Author - Michael Medico", liveLink: "https://thesaintedtrilogy.net/", imageUrl: "", githubLink: null },
    { name: "Brown Girl Health Care", category: "WordPress", description: "Blog and Podcast", liveLink: "https://browngirlhealthcare.com/", imageUrl: "", githubLink: null },
    { name: "Premier Business Partners", category: "WordPress", description: "Business Consultation Agency", liveLink: "https://pbpwin.com/", imageUrl: "", githubLink: null },
    { name: "Moodbooster", category: "WordPress", description: "Scented candle store from Germany", liveLink: "https://moodbooster.de/en/", imageUrl: "", githubLink: null },
    { name: "BioSoul Integration", category: "WordPress", description: "Chiropractor Consultancy", liveLink: "https://www.biosoulintegration.com/", imageUrl: "", githubLink: null },
    { name: "Unicorn Strength", category: "WordPress", description: "Agency for your branding strategy", liveLink: "https://unicorn-strength.com/", imageUrl: "", githubLink: null }
];

  // Function to update the active tab and reset the current page
  const filterProjects = (category) => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  const filteredProjects = projects.filter(project => project.category === activeTab);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div ref={ref} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-neutral-200 text-center mb-2">Projects</h2>
      <p className="text-center text-gray-600 dark:text-neutral-400 mb-10">
        Here are some of the projects I have worked on from a broad spectrum of my professional engagements.
      </p>
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {['Laravel', 'WordPress', 'Python', 'React Native'].map((category) => (
          <button
            key={category}
            className={`py-2 px-4 text-sm font-semibold rounded-md ${activeTab === category ? 'bg-button-yellow text-gray-900' : 'bg-gray-200 text-gray-800'} hover:bg-button-yellow hover:text-gray-900 transition-colors`}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <div key={index} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:shadow-lg">
            <div 
              className="h-52 flex flex-col justify-center items-center rounded-t-xl"
              style={{
                backgroundImage: project.imageUrl ? `url(${project.imageUrl})` : 'none',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {!project.imageUrl && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              )}
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                {project.description}
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            {project.liveLink && (
              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-bl-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
              )}
              {project.githubLink && (
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-br-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
      {pageNumbers.length > 1 && (
      <div className="flex justify-center mt-4">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className={`px-4 py-2 mx-2 border rounded ${number === currentPage ? 'bg-button-yellow text-gray-900' : 'bg-white text-gray-900'} hover:bg-button-yellow hover:text-gray-900`}>
            {number}
          </button>
        ))}
      </div>
    )}
      </div>
    </div>
  );
});

export default Projects;
