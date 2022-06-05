import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MouseParticles from 'react-mouse-particles';


function Home() {
  return (
    <React.Fragment>
    <MouseParticles g={3} color="random" num={18} radius={7} cull="container,image-wrapper"/>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </React.Fragment>
  )
}

export default Home;