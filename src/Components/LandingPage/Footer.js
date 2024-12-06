import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Company/Brand Info */}
        <div className="text-blue-900 text-lg font-semibold font-serif mr-20">
          
        </div>
        
        {/* Center Links */}
        <nav className="flex space-x-12 mt-4 md:mt-0">
          <a href="#about" className="text-blue-900 hover:text-blue-500 transition duration-200">
            About Us
          </a>
          <a href="#contact" className="text-blue-900 hover:text-blue-500 transition duration-200">
            Contact
          </a>
          <a href="#privacy" className="text-blue-900 hover:text-blue-500 transition duration-200">
            Privacy Policy
          </a>
        </nav>
        
        {/* Right Side - Copyright */}
        <div className="text-gray-600 mt-4 md:mt-0 text-sm text-right">
          &copy; {new Date().getFullYear()} Destro LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
