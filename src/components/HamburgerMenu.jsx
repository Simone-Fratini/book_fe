import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

function HeaderComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white md:hidden"
      >
        <FaBars />
      </button>

      {/* Desktop Navigation Menu schermo grande */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <Link
          to="/home"
          className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300"
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </Link>
        <Link
          to="/home/about"
          className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300"
        >
          <IoInformationCircleOutline className="text-xl" />
          <span>About</span>
        </Link>

        {/* Dark Mode Button for Desktop */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 border rounded-full hover:bg-gray-200 hover:text-gray-500 transition duration-300"
        >
          {darkMode ? (
            <FiSun className="text-md" />
          ) : (
            <FaMoon className="text-md" />
          )}
        </button>
      </nav>

      {/* Mobile Menu schermi piccoli */}
      {isMenuOpen && (
        <div className="absolute top-16 right-6 bg-blue-600 text-white rounded-lg shadow-lg py-4 px-6 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/home"
                className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/home/about"
                className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoInformationCircleOutline className="text-xl" />
                <span>About</span>
              </Link>
            </li>
            {/* Dark Mode Button for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 border rounded-full hover:bg-gray-200 hover:text-gray-500 transition duration-300"
            >
              {darkMode ? (
                <FiSun className="text-md" />
              ) : (
                <FaMoon className="text-md" />
              )}
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
