import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Wobble from 'react-reveal/Wobble';
import BubblyButton from '../components/BubblyButton';

function LandingPage() {
  return (
    <React.Fragment>
        <div className='text-6xl font-bold text-center px-5 mt-52 leading-relaxed mb-24'>
            <h1>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 3, type: 'spring', stiffness: 200 }}
            >W</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 0.5, duration: 10, type: 'spring', stiffness: 200 }}
            >e</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 0.9, duration: 5, type: 'spring', stiffness: 200 }}
            >l</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 1.2, duration: 10, type: 'spring', stiffness: 200 }}
            >c</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 1.5, duration: 10, type: 'spring', stiffness: 200 }}
            >o</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 1.7, duration: 10, type: 'spring', stiffness: 200 }}
            >m</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 2.2, duration: 10, type: 'spring', stiffness: 200 }}
            >e</motion.span> 
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 2.4, duration: 10, type: 'spring', stiffness: 200 }}  
            > t</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 2.6, duration: 10, type: 'spring', stiffness: 200 }}
            >o</motion.span> 
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 2.8, duration: 10, type: 'spring', stiffness: 200 }}
            > m</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 3.2, duration: 10, type: 'spring', stiffness: 200 }}
            >y</motion.span> <span className='text-blue-500 underline'>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 3.5, duration: 10, type: 'spring', stiffness: 200 }}
            > P</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 3.8, duration: 10, type: 'spring', stiffness: 200 }}
            >o</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 4.1, duration: 10, type: 'spring', stiffness: 200 }}
            >r</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 4.4, duration: 10, type: 'spring', stiffness: 200 }}
            >t</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 4.7, duration: 10, type: 'spring', stiffness: 200 }}
            >f</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 5, duration: 10, type: 'spring', stiffness: 200 }}
            >o</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 5.4, duration: 10, type: 'spring', stiffness: 200 }}  
            >l</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 5.8, duration: 10, type: 'spring', stiffness: 200 }}
            >i</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay: 6, duration: 10, type: 'spring', stiffness: 200 }}
            >o.</motion.span></span></h1>
        </div>
        <div className="flex justify-center items-center">
        <Link to="/home">
          <Wobble>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.8, duration: 2 }}
              className="text-white text-center font-semibold text-2xl bg-blue-600 px-6 py-2 rounded-xl hover:scale-125 transition-all hover:bg-blue-500">Proceed</motion.button>
            </Wobble>
            {/* <Wobble>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7.8, duration: 2 }}
                className="text-white text-center font-semibold text-xl rounded-xl hover:scale-110 transition-all">
                  <BubblyButton />
                </motion.button>
            </Wobble> */}
        </Link>
        </div>
    </React.Fragment>
  )
}

export default LandingPage;