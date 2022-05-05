import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


function Home() {
  return (
    <React.Fragment>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </React.Fragment>
  )
}

export default Home;