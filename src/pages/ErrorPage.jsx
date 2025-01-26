import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ErrorPage() {
    const digitAnimationLeft = {
        y: [0, -110, -110, 0, 110, 110, 0],   // Su, destra, giù, giu, sinistra, su e ritorno al centro
        x: [0, 0, 200, 200, 200, 0, 0], 
        transition: {
            duration: 6, 
            repeat: Infinity, 
            ease: [0.42, 0, 0.58, 1],
        },
    };
    
    const digitAnimationRight = {
        y: [0, 110, 110, 0, -110, -110, 0],
        x: [0, 0, -200, -200, -200, 0, 0],
        transition: {
            duration: 6, 
            repeat: Infinity, 
            ease: [0.42, 0, 0.58, 1],
        },
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-blue-800 to-blue-950">
            <div className="text-center">
                {/* 404 */}
                <div className="text-white text-9xl font-bold italic">
                    <motion.span className="inline-block" animate={digitAnimationLeft}>4</motion.span>
                    <span>0</span>
                    <motion.span className="inline-block" animate={digitAnimationRight}>4</motion.span>
                </div>

                {/* messaggio */}
                <div className="text-gray-400 font-bold mt-28 mb-8">
                    <div className='text-3xl text-gray-300'>Oh no! It looks like you’re lost.</div>
                    <div className='pt-3'>The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.</div>
                </div>

                {/* bottone */}
                <Link to="/home">
                    <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110">
                        Return to homepage
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
