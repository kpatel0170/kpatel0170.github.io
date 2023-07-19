import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex items-center bg-gray-800 p-2 flex-wrap">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <span className="text-xl text-white font-bold tracking-wide">
         @kpatel0170
        </span>
      </a>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none transition-colors duration-300 ease-in-out"
        onClick={toggleNav}
      >
        {isNavOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <div
        className={`${
          isNavOpen ? 'block' : 'hidden'
        } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto transition-all duration-300 ease-in-out`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <a
            href="/"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            <span>Home</span>
          </a>
          <a
            href="/education"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            <span>Education</span>
          </a>
          <a
            href="/experience"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            <span>Experience</span>
          </a>
          <a
            href="/projects"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            <span>Project</span>
          </a>
          <a
            href="/resume.pdf"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
