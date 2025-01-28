import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

function HeaderComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses =
    "flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300 pb-1 px-2";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Hamburger Menu Button only visible on small screens */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white md:hidden"
      >
        <FaBars />
      </button>

      {/* Desktop Navigation Menu (hidden on small screens) */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <NavLink
          end
          to="/home"
          className={({ isActive }) =>
            navLinkClasses + (isActive ? " border-b border-white" : "")
          }
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </NavLink>
        <NavLink
          end
          to="/home/about"
          className={({ isActive }) =>
            navLinkClasses + (isActive ? " border-b border-white" : "")
          }
        >
          <IoInformationCircleOutline className="text-xl" />
          <span>About</span>
        </NavLink>
        {/* daromode for desktop */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center p-2 border rounded-full hover:bg-gray-200 hover:text-gray-500 transition duration-300"
        >
          {darkMode ? (
            <FiSun className="text-lg" />
          ) : (
            <FaMoon className="text-lg" />
          )}
        </button>
      </nav>

      {/* Mobile Menu (shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-16 right-6 bg-blue-600 text-white rounded-lg shadow-lg py-4 px-6 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                end
                to="/home"
                className={({ isActive }) =>
                  navLinkClasses + (isActive ? " border-b border-white" : "")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/home/about"
                className={({ isActive }) =>
                  navLinkClasses + (isActive ? " border-b border-white" : "")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <IoInformationCircleOutline className="text-xl" />
                <span>About</span>
              </NavLink>
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
