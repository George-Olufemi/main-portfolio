import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';

function Projects() {
  return (
    <div>
        <div className="ml-7 mt-20 md:ml-28">
            <Fade left>
                <h1 className="font-bold text-3xl">Milestones of projects<span className="text-blue-500">.</span></h1>
            </Fade>
            <Fade left>
                <p className="mt-2 mb-20">Here are a few projects i've worked on.</p>
            </Fade>
        </div>
        <div className="md:grid gap-7 grid-cols-3 grid-rows-3 px-4 md:px-18">
            <Fade left>
                <Project 
                    name="Domain Checker"
                    desc="Built a Front-end for a Machine Learning project (integration of Python Back-end) , that will test for working domains and also test for potential treats."
                    href="https://domainchecker.netlify.app/"
                />
            </Fade>
            <Fade left>
                <Project 
                    name="A Cryptocurrency Web App"
                    desc="This is a Crypto currency site that displays all the coins that exists in the world and you can search for a particular coin using the search bar. Also integraed a Whatsapp live chat button on the site."
                    href="https://cryptodetapp.netlify.app/"
                />
            </Fade>
            <Fade left>
                <Project 
                    name="Google Clone"
                    desc="Built a Google clone, yes, a Google clone. Check it out using the link below"
                    href="https://googgleclone.netlify.app/"
                />
            </Fade>
            <Fade left>
                <Project 
                    name="Bestbite Restaurant Website"
                    desc="Built a Restarant Website with a given Figma UI design"
                    href="https://bestbitee.netlify.app/"
                />
            </Fade>
            <Fade left>
                <Project 
                    name="Artic Travel Agency Website"
                    desc="Built a Website(Front-end) for Artic Travel Agency with a given UI Link"
                    href="https://artic-travel-agency.netlify.app/"
                />
            </Fade>
        </div>
    </div>
  )
}

export default Projects;