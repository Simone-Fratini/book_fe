import React from 'react';
import { motion } from 'framer-motion';

function ErrorPage() {
    // Animation for digits
    const digitAnimationLeft = {
        y: [0, -110, -110, 0, 110, 110, 0],   // Su, destra, giù, giu, sinistra, su e ritorno al centro
        x: [0, 0, 200, 200, 200, 0, 0], 
        transition: {
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
        },
    };
    
    const digitAnimationRight = {
        y: [0, 110, 110, 0, -110, -110, 0],
        x: [0, 0, -200, -200, -200, 0, 0],
        transition: {
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
        },
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-blue-800 to-blue-950">
            <div className="text-center">
                {/* Animated digits */}
                <div className="text-white text-9xl font-bold italic">
                    {/* Each digit animated independently */}
                    <motion.span className="inline-block" animate={digitAnimationLeft}>4</motion.span>
                    <span>0</span>
                    <motion.span className="inline-block" animate={digitAnimationRight}>4</motion.span>
                </div>

                {/* Error message */}
                <div className="text-gray-400 font-bold mt-28 mb-8">
                    Oh no! It looks like you’re lost.
                    <br />
                    The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
                </div>

                {/* Return button */}
                <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110">
                    Return to homepage
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;
