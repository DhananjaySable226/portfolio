import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myImg from '../assets/my-img.png';

const HeroSection = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleViewWork = () => {
        if (location.pathname === '/') {
            // Scroll to the project section if on home
            const el = document.getElementById('projects');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to /work if not on home
            navigate('/work');
        }
    };

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-transparent animate-fade px-2 sm:px-4 md:px-16 pt-24 md:pt-32 lg:pt-36">
            {/* Animated SVG Blob Background */}
            <svg className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 w-full h-[60vh] opacity-60 blur-2xl" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_2)">
                    <ellipse cx="450" cy="300" rx="320" ry="180" fill="url(#paint0_radial_1_2)" />
                </g>
                <defs>
                    <filter id="filter0_f_1_2" x="0" y="0" width="900" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1_2" />
                    </filter>
                    <radialGradient id="paint0_radial_1_2" cx="0" cy="0" r="1" gradientTransform="translate(450 300) rotate(90) scale(180 320)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6c63ff" />
                        <stop offset="1" stopColor="#a6a8ff" stopOpacity="0.5" />
                    </radialGradient>
                </defs>
            </svg>
            {/* Photo (Left) */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
                <div className="relative group animate-float aspect-square w-40 sm:w-56 md:w-72 lg:w-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    {/* Dynamic gradient layers with color transitions */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/40 to-purple-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-1000 animate-gradient-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/30 via-accent/30 to-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-1000 animate-gradient-shift"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-accent/20 to-transparent rounded-full blur-lg group-hover:blur-xl transition-all duration-1000 animate-gradient-rotate"></div>

                    {/* Main image with enhanced animations */}
                    <img
                        src={myImg}
                        alt="Dhananjay Sable"
                        className="relative w-full h-full aspect-square rounded-full border-4 border-primary/60 dark:border-yellow-400/60 shadow-2xl object-cover bg-white dark:bg-gray-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 hover:shadow-primary/50 dark:hover:shadow-yellow-400/50 hover:border-primary/90 dark:hover:border-yellow-400/90 animate-glow"
                    />

                    {/* Animated overlay layers */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-overlay-fade"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-overlay-shine"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/10 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-overlay-sparkle"></div>

                    {/* Multiple animated border rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/40 dark:border-yellow-400/40 group-hover:border-primary/70 dark:group-hover:border-yellow-400/70 transition-all duration-1000 animate-spin-slow"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-accent/30 dark:border-yellow-300/30 group-hover:border-accent/60 dark:group-hover:border-yellow-300/60 transition-all duration-1000 animate-spin-reverse"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 dark:border-yellow-200/20 group-hover:border-purple-500/50 dark:group-hover:border-yellow-200/50 transition-all duration-1000 animate-spin-slower"></div>

                    {/* Colorful floating particles - Top Right */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary/60 dark:bg-yellow-400/60 rounded-full animate-float-particle-1"></div>
                    <div className="absolute -top-4 -right-6 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-500/70 dark:bg-pink-400/70 rounded-full animate-float-particle-2"></div>
                    <div className="absolute -top-6 -right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500/80 dark:bg-purple-400/80 rounded-full animate-float-particle-3"></div>
                    <div className="absolute -top-8 -right-8 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500/60 dark:bg-blue-400/60 rounded-full animate-float-particle-4"></div>

                    {/* Colorful floating particles - Top Left */}
                    <div className="absolute -top-3 -left-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500/70 dark:bg-green-400/70 rounded-full animate-float-particle-5"></div>
                    <div className="absolute -top-5 -left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500/80 dark:bg-orange-400/80 rounded-full animate-float-particle-6"></div>
                    <div className="absolute -top-7 -left-6 w-3 h-3 sm:w-4 sm:h-4 bg-red-500/60 dark:bg-red-400/60 rounded-full animate-float-particle-7"></div>
                    <div className="absolute -top-1 -left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500/70 dark:bg-teal-400/70 rounded-full animate-float-particle-8"></div>

                    {/* Colorful floating particles - Bottom Right */}
                    <div className="absolute -bottom-2 -right-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-indigo-500/70 dark:bg-indigo-400/70 rounded-full animate-float-particle-9"></div>
                    <div className="absolute -bottom-4 -right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500/80 dark:bg-cyan-400/80 rounded-full animate-float-particle-10"></div>
                    <div className="absolute -bottom-6 -right-6 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500/60 dark:bg-emerald-400/60 rounded-full animate-float-particle-11"></div>
                    <div className="absolute -bottom-8 -right-8 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-violet-500/70 dark:bg-violet-400/70 rounded-full animate-float-particle-12"></div>

                    {/* Colorful floating particles - Bottom Left */}
                    <div className="absolute -bottom-3 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-rose-500/60 dark:bg-rose-400/60 rounded-full animate-float-particle-13"></div>
                    <div className="absolute -bottom-5 -left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500/80 dark:bg-amber-400/80 rounded-full animate-float-particle-14"></div>
                    <div className="absolute -bottom-7 -left-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-lime-500/70 dark:bg-lime-400/70 rounded-full animate-float-particle-15"></div>
                    <div className="absolute -bottom-1 -left-8 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-sky-500/60 dark:bg-sky-400/60 rounded-full animate-float-particle-16"></div>

                    {/* Colorful floating particles - Middle Right */}
                    <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fuchsia-500/80 dark:bg-fuchsia-400/80 rounded-full animate-float-particle-17"></div>
                    <div className="absolute top-1/3 -right-8 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-slate-500/70 dark:bg-slate-400/70 rounded-full animate-float-particle-18"></div>
                    <div className="absolute top-2/3 -right-10 w-3 h-3 sm:w-4 sm:h-4 bg-zinc-500/60 dark:bg-zinc-400/60 rounded-full animate-float-particle-19"></div>

                    {/* Colorful floating particles - Middle Left */}
                    <div className="absolute top-1/2 -left-6 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-stone-500/70 dark:bg-stone-400/70 rounded-full animate-float-particle-20"></div>
                    <div className="absolute top-1/3 -left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-500/80 dark:bg-neutral-400/80 rounded-full animate-float-particle-21"></div>
                    <div className="absolute top-2/3 -left-10 w-3 h-3 sm:w-4 sm:h-4 bg-gray-500/60 dark:bg-gray-400/60 rounded-full animate-float-particle-22"></div>

                    {/* Extra colorful dots scattered around */}
                    <div className="absolute top-4 right-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500/90 dark:bg-yellow-300/90 rounded-full animate-float-particle-23"></div>
                    <div className="absolute top-8 left-12 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-400/80 dark:bg-pink-300/80 rounded-full animate-float-particle-24"></div>
                    <div className="absolute bottom-4 left-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/90 dark:bg-blue-300/90 rounded-full animate-float-particle-25"></div>
                    <div className="absolute bottom-8 right-12 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400/80 dark:bg-green-300/80 rounded-full animate-float-particle-26"></div>
                    <div className="absolute top-12 right-16 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400/90 dark:bg-purple-300/90 rounded-full animate-float-particle-27"></div>
                    <div className="absolute bottom-12 left-16 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400/80 dark:bg-orange-300/80 rounded-full animate-float-particle-28"></div>
                </div>
            </div>
            {/* Info (Right) */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-accent to-gray-800 dark:from-yellow-400 dark:via-yellow-600 dark:to-white bg-clip-text text-transparent mb-2 drop-shadow-lg">Dhananjay Sable</h1>
                <h2 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-yellow-200 mb-4 animate-fade" style={{ animationDelay: '1.2s' }}>Full Stack Developer</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200 max-w-xl mb-4 animate-fade" style={{ animationDelay: '1.5s' }}>
                    I am a dedicated developer with a strong passion for crafting modern, efficient, and scalable web applications. With hands-on experience in React, Node.js, JavaScript, TypeScript, MySQL, MongoDB and PostgreSQL, I focus on building responsive frontends and robust backends that deliver real-world impact. I thrive on solving complex challenges and bringing ideas to life through clean, maintainable code.            </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-200 mb-8">
                    <li>2+ years of experience in full stack web development</li>
                    <li>Proficient in React, Node.js, JavaScript, TypeScript, Fastify and Sequelize</li>
                    <li>Strong backend logic and API development skills</li>
                    <li>Open to freelance and full-time opportunities</li>
                </ul>
                <button
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent dark:from-yellow-500 dark:to-yellow-700 text-white font-bold shadow-lg hover:scale-105 hover:from-accent hover:to-primary dark:hover:from-yellow-700 dark:hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/40 dark:focus:ring-yellow-400/40"
                    onClick={handleViewWork}
                >
                    View My Work
                </button>
            </div>
        </section>
    );
};

export default HeroSection; 