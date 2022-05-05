import React from 'react';
import Fade from 'react-reveal/Fade';
import vector1 from '../vector1/Vector (1).png';
import vector2 from '../vector2/Vector (2).png';
import vector3 from '../vector3/Vector (3).png';
import vector4 from '../vector4/Vector (4).png';
import vector5 from '../vector5/Vector (5).png';
import vector6 from '../vector6/Vector (6).png';

function Skills() {
  return (
    <div>
        <div className="ml-12 mt-20 md:ml-28">
            <Fade left>
                <h1 className="font-bold text-3xl">Services I Render<span className="text-blue-500">.</span></h1>
            </Fade>
            <Fade left>
                <p className="mt-2 mb-20">Here are a few services i render</p>
            </Fade>
        </div>
        <div className="md:grid gap-7 grid-cols-3 grid-rows-3 px-4 md:px-28">
            <div>
                <Fade left>
                    <img src={vector1} alt="" />
                    <h1 className="font-semibold mt-3 text-lg">Training</h1>
                    <p className="mb-4">I offer instuctor-led training in a way that fits the way you work.</p>
                </Fade>
            </div>
            <div>
                <Fade left>
                    <img src={vector2} alt="" />
                    <h1 className="font-semibold mt-3 text-lg">IT Consulting</h1>
                    <p className="mb-4">I offer information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.</p>
                </Fade>
            </div>
            <div>
                <Fade left>
                    <img src={vector3} alt="" />
                    <h1 className="font-semibold mt-3 text-lg">Responsive Web Development</h1>
                    <p className="mb-4">I Help develop Mobile-friendly, world class websites that helps scale your businesses and helps user experience get better.</p>
                </Fade>
            </div>
            <div>
                <Fade left>
                    <img src={vector4} alt="" />
                    <h1 className="font-semibold mt-3 text-lg">Customer software Development</h1>
                    <p className="mb-4">I help develop technical solutions in form of softwares that answer to the needs of customer's problems.</p>
                </Fade>
            </div>
            <div>
                <Fade left>
                    <img src={vector5} alt="" />
                    <h1 className="font-semibold mt-3 text-lg">Software Testing</h1>
                    <p className="mb-4">I help test softwares to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.</p>
                </Fade>
            </div>
            <div>
                <Fade left>
                    <img src={vector6} alt="" />
                    <h1 className="font-semibold mt-3 text-lg">Web development</h1>
                    <p className="mb-4">I build modern and scalable websites using latest libraries, frameworks and technologies.</p>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Skills;