import React from 'react';
import assets from '../assets/linkedin.png';
import image from '../image/twitter.png';
import man from '../man/me.jpeg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <React.Fragment>
        <div className="md:h-screen md:flex justify-between">
            <div className="h-screen">
                <div className="font-bold text-2xl mt-2 ml-10 md:ml-28">
                    <Slide top>
                        <h1>George Olufemi<span className="text-blue-500">.</span></h1>
                    </Slide>
                </div>
                <div className="ml-10 md:ml-28 mt-28">
                    <div className="text-blue-500 mb-6 text-xl">
                    <Fade left>
                        <h1>HI THERE</h1>
                    </Fade>
                    </div>
                    <div className="text-blue-500 font-semibold mb-6 text-2xl">
                    <Fade left>
                        <h1>I AM GEORGE OLUFEMI</h1>
                    </Fade>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold leading-relaxed md:leading-relaxed">
                    <Fade left>
                    <Typewriter 
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 150,
                            strings: ["I am a Front End Web Developer,", "Blockchain Enthusiast,", "and Mentor."]
                        }}
                    />
                    </Fade>
                    </div>
                </div>
                <div className="flex mt-16 md:mt-16 ml-10 md:ml-28">
                    <Fade left>
                        <a href="https://www.linkedin.com/in/george-olufemi-325655226"><img  className="mr-8 px-3 py-3 rounded-2xl hover:bg-blue-100 hover:transition-all hover:scale-125 transition-all border-2 border-blue-200"src={assets} alt="linkedin" /></a>
                    </Fade>
                    <Fade left>
                    <a href="https://twitter.com/georgeolufemii?t=PM735HTdixwKGAzJU0-r9w&s=09"><img className="mr-4 px-3 py-3 rounded-2xl hover:bg-blue-100 hover:transition-all hover:scale-125 transition-all border-2 border-blue-200"src={image} alt="twitter" /></a>
                    </Fade>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Fade right>
                    <img className="h-screen object-cover rounded-xl md:rounded-none" src={man} alt="my picture" />
                </Fade>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Hero;