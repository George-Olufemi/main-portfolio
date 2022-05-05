import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <React.Fragment>
        <div className='text-6xl font-bold text-center px-5 mt-52 leading-relaxed mb-24'>
            <h1>Welcome to my <span className='text-blue-500'>Portfolio.</span></h1>
        </div>
        <div className="flex justify-center items-center">
        <Link to="/home">
            <button className="text-white text-center font-semibold text-2xl bg-blue-600 px-6 py-2 rounded-xl hover:scale-125 transition-all hover:bg-blue-500">Proceed</button>
        </Link>
        </div>
    </React.Fragment>
  )
}

export default LandingPage;