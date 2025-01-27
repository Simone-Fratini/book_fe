import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

function HeaderComponent() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-gradient-to-r dark:from-gray-800 dark:to-gray-600 from-blue-800 to-blue-600 text-white p-6 shadow-lg rounded-b-2xl">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to={"/"} className="font-extrabold text-xl sm:text-xl md:text-2xl lg:text-3xl">Book-Shop</Link>

            {/* Nav */}
            <nav className="flex space-x-6 text-lg">
                <Link to="/home" className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300">
                    <FaHome className="text-xl" />
                    <span>Home</span>
                </Link>
                <Link to="/home/about" className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300">
                    <IoInformationCircleOutline className="text-xl" />
                    <span>About</span>
                </Link>

                {/* Dark Mode Button */}
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 border rounded-full  hover:bg-gray-200 hover:text-gray-500 transition duration-300">
                    {darkMode ? <FiSun className="text-md" /> : <FaMoon className="text-md" />}
                </button>
            </nav>
        </div>
    </header>

  )
}

export default HeaderComponent