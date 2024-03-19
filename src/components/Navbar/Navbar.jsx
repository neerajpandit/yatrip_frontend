import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import t from '../../assets/Travel/t.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Toggle button for mobile menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="/about" onClick={() => scrollToSection('about')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">About</a>
                <a href="/Travel" onClick={() => scrollToSection('travel')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Travel</a>
                <a href="" onClick={() => scrollToSection('destination')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Destinations</a>
                <a href="/Blog" onClick={() => scrollToSection('blog')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Blog</a>
                 </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex items-center">
            <div className="ml-3 relative cursor-pointer" onClick={toggleProfileMenu}>
              <img className="h-8 w-8 rounded-full" src={t} alt="Profile" />
              {isProfileMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="flex items-center">
                      <FaLinkedin className=" h-6 w-6 text-gray-700 hover:text-white" />
                      <a href="https://www.linkedin.com/feed/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">LinkedIn</a>
                    </div>
                    <div className="flex items-center">
                      <FaGithub className=" h-6 w-6 text-gray-700 hover:text-white" />
                      <a href="https://github.com/neerajpandit/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">GitHub</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#about" onClick={() => scrollToSection('about')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">About</a>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Portfolio</a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Experience</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Contact me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
