import React, { useRef, useEffect } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import accounting from '../assets/accounting.png';
import chat from '../assets/chat.png';
import hottractor from '../assets/hottractor.jpg';
import hirehq from '../assets/hirehq3.png';
import erpCRM from '../assets/erp-crm.png'

const projects = [
    {
        title: 'HireHQ',
        duration: 'December 2024 - Mar 2025',
        description: 'I worked on HireHQ, a live recruitment platform similar to LinkedIn, designed with three core services: Candidate, ATS (Applicant Tracking System), and Enterprise. The system allowed candidates to build profiles and apply for jobs, recruiters to manage hiring pipelines, and enterprises to post jobs and track hiring insights — all in one centralized application.',
        image: hirehq,
        github: 'https://github.com/example/ai-chatbot',
        tech: ['TypeScript', 'Node.js', 'Fastify', 'MySQL'],
    },
    {
        title: 'Farm Hub',
        duration: 'September 2024 - November 2024',
        description: 'I developed a Farm Hub project focused on simplifying the rental system for farm-related vehicles and equipment. The system allowed users to manage rentals, track expenses, calculate profits, and maintain outstanding balances efficiently.',
        image: hottractor,
        github: 'https://github.com/example/portfolio-website',
        tech: ['React', 'CSS', 'Node.js', 'JavaScript', 'Express', 'MongoDB'],
    },
    {
        title: 'CRM + Commerce',
        duration: 'Jun 2023 - Aug 2023',
        description: 'I worked on a CRM-ERP live project that streamlined business operations by integrating customer relationship management with enterprise resource planning. I contributed to modules like lead tracking, inventory management, and sales reporting, enhancing workflow automation and data consistency across departments.',
        image: erpCRM,
        github: 'https://github.com/example/ecommerce-platform',
        tech: ['TypeScript', 'Node.js', 'postgreSQL', 'Fastify'],
    },
    {
        title: 'Accounting',
        duration: 'Sep 2023 - Oct 2023',
        description: 'I worked on a live accounting project where I was responsible for managing financial data, implementing transaction modules, and generating dynamic reports. This experience helped me strengthen my skills in backend development, data validation, and real-time calculations.',
        image: accounting,
        github: 'https://github.com/example/weather-app',
        tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
        title: 'Chat Application',
        duration: 'Nov 2023 - Dec 2023',
        description: 'I created a simple chat application with features like user authentication and one-to-one messaging using REST APIs. The app allowed users to send and receive messages in real-time-like experience by periodically fetching new messages.',
        image: chat,
        github: 'https://github.com/example/task-manager',
        tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
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
        <section id="projects" className="project-carousel w-full py-16 px-4 md:px-16 bg-glass dark:bg-gray-800/70 rounded-xl shadow-glass animate-fade">
            <h2 className="text-3xl font-bold text-primary dark:text-yellow-400 mb-8">Projects</h2>
            <div className="relative w-full">
                <button
                    onClick={() => scrollBy(-320)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 text-primary dark:text-yellow-400 shadow transition-colors duration-200"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft className="w-4 h-4" />
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
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-yellow-400/20 text-primary dark:text-yellow-400 shadow transition-colors duration-200"
                    aria-label="Scroll right"
                >
                    <FaChevronRight className="w-4 h-4" />
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