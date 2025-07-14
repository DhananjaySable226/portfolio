import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer w-full px-4 md:px-12 py-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 flex items-center justify-between mt-auto">
            <p className="text-gray-900 dark:text-white text-base md:text-lg font-medium">
                &copy; {new Date().getFullYear()} Dhananjay Sable. All rights reserved.
            </p>
            <button
                onClick={scrollToTop}
                className="scroll-to-top-btn p-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse"
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer; 