import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook } from "react-icons/fa";

function HeroPage() {

  const titleSubtitleAnimation = {
    hidden: { 
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1.3   
      }
    }
  }

  const iconVariants = {
    initial: { x: 0 }, 
    hover: { x: 38 },
  };

  const textVariants = {
    initial: { opacity: 1, x: 0 }, 
    hover: { opacity: 0, x: 100 }, 
  };

  const MotionLink = motion(Link)

  return (
    <div className="h-screen bg-cover bg-center relative" style={{backgroundImage: "url('/img/hero_img.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
        className="text-center text-white max-w-lg"
        variants={titleSubtitleAnimation}
        initial="hidden"
        animate="visible">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Boolean Book Library</h1>
          <p className="text-lg mb-6">Discover thousands of books to inspire, educate, and entertain.</p>
          <MotionLink
            initial="initial"
            whileHover="hover"
            animate="rest" to="/home" className=" cursor-pointer flex items-center justify-center gap-2 w-1/2 md:w-1/3 lg:w-1/3  py-2 text-sm md:text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300 mx-auto overflow-hidden">
          <motion.span 
            variants={iconVariants}
            transition={{ duration: 0.4 }}><FaBook /></motion.span>
          <motion.span 
            variants={textVariants}
            transition={{ duration: 0.4 }}>Catalog</motion.span>
          </MotionLink>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPage