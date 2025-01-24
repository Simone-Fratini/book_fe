import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header class="bg-blue-800 text-white p-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-2xl font-bold">Boolean Book-Shop</div>
        <nav class="flex space-x-4">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About</Link>
        </nav>
      </div>        
    </header>
  )
}

export default HeaderComponent