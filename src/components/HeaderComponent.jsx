import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

function HeaderComponent() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 shadow-lg rounded-b-2xl">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl font-extrabold">Boolean Book-Shop</div>

            {/* Nav */}
            <nav className="flex space-x-6 text-lg">
                <Link to="/" className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300">
                    <FaHome className="text-xl" />
                    <span>Home</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-300">
                    <IoInformationCircleOutline className="text-xl" />
                    <span>About</span>
                </Link>
            </nav>
        </div>
    </header>

  )
}

export default HeaderComponent