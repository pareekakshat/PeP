import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Courses</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Features</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Student Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Home</a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Courses</a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Features</a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">About</a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</a>
              <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Student Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;