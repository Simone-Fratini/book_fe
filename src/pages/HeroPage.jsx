import React from 'react'
import { Link } from 'react-router-dom';

function HeroPage() {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{backgroundImage: "url('/img/hero_img.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Boolean Book Library</h1>
          <p className="text-lg mb-6">Discover thousands of books to inspire, educate, and entertain.</p>
          <Link to="/home" className="px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300">Browse the Catalog</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroPage