import React, { useRef, useEffect } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
    {
        title: 'HireHQ',
        duration: 'December 2024 - Mar 2025',
        description: 'Smart Hiring & Job Management Platform for Employers and Job Seekers.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/ai-chatbot',
        tech: ['TypeScript', 'Node.js', 'Fastify', 'MySQL'],
    },
    {
        title: 'Farm Hub',
        duration: 'September 2024 - November 2024',
        description: 'Farm Hub 🚜 Tractor & Transport Business Solutions',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/portfolio-website',
        tech: ['React', 'CSS', 'Node.js', 'JavaScript', 'Express', 'MongoDB'],
    },
    {
        title: 'CRM + Commerce',
        duration: 'Jun 2023 - Aug 2023',
        description: 'A scalable e-commerce platform with payment integration and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/ecommerce-platform',
        tech: ['TypeScript', 'Node.js', 'postgreSQL', 'Fastify'],
    },
    {
        title: 'Accounting',
        duration: 'Sep 2023 - Oct 2023',
        description: 'A weather forecasting app using OpenWeatherMap API and React.',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/weather-app',
        tech: [ 'JavaScript','Node.js','Express.js','MongoDB'],
    },
    {
        title: 'Chat Application',
        duration: 'Nov 2023 - Dec 2023',
        description: 'A productivity tool for managing daily tasks and deadlines.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/task-manager',
        tech: ['React', 'JavaScript', 'Node.js', 'Express','MongoDB'],
    },
];

const ProjectCarousel = () => {
    const scrollRef = useRef(null);
    // Remove allProjects, autoScrollRef, pauseTimeoutRef, isPausedRef, and useEffect for auto-scroll

    const scrollBy = (offset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    // Responsive card width: 100%/3 on desktop, 100% on mobile
    return (
        <section className="project-carousel w-full py-16 px-4 md:px-16 bg-glass dark:bg-gray-800/70 rounded-xl shadow-glass animate-fade">
            <h2 className="text-3xl font-bold text-primary dark:text-yellow-400 mb-8">Projects</h2>
            <div className="flex items-center justify-center gap-2">
                <button
                    onClick={() => scrollBy(-320)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 text-primary dark:text-yellow-400 shadow transition-colors duration-200"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft className="w-6 h-6" />
                </button>
                <div
                    ref={scrollRef}
                    className="overflow-x-auto no-scrollbar flex-1 cursor-grab"
                    style={{ scrollBehavior: 'smooth', whiteSpace: 'normal' }}
                >
                    <div className="flex gap-6 md:gap-10 px-1 md:px-4" style={{ minWidth: '100%' }}>
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="w-80 max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-xl flex flex-col p-6 flex-shrink-0 border border-primary/10 dark:border-yellow-400/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative"
                            >
                                {/* Image */}
                                <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 shadow-lg border-2 border-primary/10 dark:border-yellow-400/20">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                {/* Title & Duration */}
                                <h4 className="text-xl font-bold text-primary dark:text-yellow-400 mb-1 text-center w-full truncate" title={project.title}>
                                    {project.title}
                                </h4>
                                <div className="text-xs font-semibold text-gray-500 dark:text-gray-300 mb-2 text-center w-full">
                                    {project.duration}
                                </div>

                                {/* ✅ Description with wrapping */}
                                <p className="text-gray-700 dark:text-gray-200 text-sm text-center w-full leading-relaxed mb-4 break-words overflow-hidden">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-primary/10 dark:bg-yellow-400/10 text-primary dark:text-yellow-400 rounded text-xs font-semibold">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub Button */}
                                {project.github && (
                                    <div className="mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-yellow-400/10 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-yellow-400 font-semibold shadow transition-all duration-200"
                                            title="View on GitHub"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                            <span className="text-xs font-medium">GitHub</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => scrollBy(320)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 text-primary dark:text-yellow-400 shadow transition-colors duration-200"
                    aria-label="Scroll right"
                >
                    <FaChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
};

// Hide scrollbar utility
// Add this to your global CSS if not already present:
// .no-scrollbar::-webkit-scrollbar { display: none; }
// .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

export default ProjectCarousel; 