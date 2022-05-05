import React from 'react';
import Zoom from 'react-reveal/Zoom';

function About() {
  return (
    <div className="text-center px-5 bg-blue-100">
        <Zoom>
            <h1 className="pt-20 font-bold text-3xl tracking-wider mb-3">About Me<span className="text-blue-500">.</span></h1>
        </Zoom>
        <Zoom>
            <p className="pb-20 text-lg">I'm an innovative Front-end Developer<br /> with less than two years of experience building and maintaining<br /> responsive websites in the recruiting industry.<br /> Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks.<br /> I am a passionate and goal driven<br /> Techpreneur whose interest is in using technology to<br /> build solutions to solve real world problems.</p>
        </Zoom>
    </div>
  )
}

export default About;