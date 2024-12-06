import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 px-8 flex items-center justify-between shadow-md">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-2xl font-bold text-blue-900 font-serif">
        Destro
      </Link>
      
      {/* Center Links */}
      <nav className="flex space-x-8">
        <Link to="/" className="text-blue-900 hover:text-blue-500 transition duration-200">
          Home
        </Link>
        <Link to="/plan" className="text-blue-900 hover:text-blue-500 transition duration-200">
          Plan Trip
        </Link>
      </nav>
      
      {/* Right-side Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Log In
        </button>
        <button className="bg-coral-600 text-blue-900 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-200">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;