import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07l-1.42-1.42M6.34 6.34L4.92 4.92m12.02 0l-1.42 1.42M6.34 17.66l-1.42 1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 animate-fade">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="relative inline-block">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <g className="logo-rotate">
                <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#d-pixel-gradient)" filter="url(#shadow)" />
                <ellipse cx="24" cy="14" rx="14" ry="4" fill="#fff" opacity="0.25" />
                <rect x="34" y="8" width="4" height="4" fill="#fff" opacity="0.5" />
                <rect x="38" y="12" width="2" height="2" fill="#fff" opacity="0.5" />
                <rect x="8" y="34" width="3" height="3" fill="#fff" opacity="0.3" />
              </g>
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                fontFamily="Montserrat, Arial, sans-serif"
                fontWeight="bold"
                fontSize="28"
                fill="url(#d-text-gradient)"
                letterSpacing="1"
                dominantBaseline="middle"
                filter="url(#d-text-shadow)"
                className="logo-bounce"
              >
                D
              </text>
              <defs>
                <linearGradient id="d-pixel-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="0.5" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#F59E42" />
                </linearGradient>
                <linearGradient id="d-text-gradient" x1="16" y1="16" x2="32" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#F59E42" />
                </linearGradient>
                <filter id="shadow" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.18" />
                </filter>
                <filter id="d-text-shadow" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000" flood-opacity="0.25" />
                </filter>
              </defs>
            </svg>
            <style>{`
              .logo-rotate {
                transform-box: fill-box;
                transform-origin: 50% 50%;
                animation: logo-rotate-spin 6s linear infinite;
              }
              @keyframes logo-rotate-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .logo-bounce {
                animation: logo-bounce-scale 2s ease-in-out infinite;
                transform-origin: 50% 60%;
              }
              @keyframes logo-bounce-scale {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.13); }
              }
            `}</style>
          </span>
        </div>

        {/* Desktop Navigation and Theme Toggle - compact spacing */}
        <nav className="hidden md:flex items-center text-base lg:text-lg font-medium">
          {navItems.map(({ name, path }, idx) => (
            <Link
              key={name}
              to={path}
              className={`relative px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-yellow-400 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary dark:after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full${idx !== navItems.length - 1 ? ' mr-1' : ''}`}
              onClick={closeMenu}
            >
              {name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-1 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 transition-colors text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>

        {/* Mobile Menu Button and Theme Toggle - compact spacing */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 transition-colors text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={toggleMenu}
            className="ml-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 transition-colors text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-yellow-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="py-4 space-y-2 border-t border-gray-200/50 dark:border-gray-700/50">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 