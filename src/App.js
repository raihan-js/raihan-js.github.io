import React, { useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import CaseStudies from './sections/CaseStudies';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div>
        <Header refs={{ heroRef, aboutRef, skillsRef, projectsRef, caseStudiesRef, experiencesRef, contactRef }} />
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <CaseStudies ref={caseStudiesRef} />
        <Experiences ref={experiencesRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;