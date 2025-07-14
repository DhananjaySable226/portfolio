import React, { useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'AI Chatbot',
        duration: 'Jan 2023 - Mar 2023',
        description: 'A conversational AI chatbot for customer support, built with React and TensorFlow.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/ai-chatbot',
    },
    {
        title: 'Portfolio Website',
        duration: 'Apr 2023 - May 2023',
        description: 'A modern, responsive portfolio website using React and Tailwind CSS.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/portfolio-website',
    },
    {
        title: 'E-commerce Platform',
        duration: 'Jun 2023 - Aug 2023',
        description: 'A scalable e-commerce platform with payment integration and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/ecommerce-platform',
    },
    {
        title: 'Weather App',
        duration: 'Sep 2023 - Oct 2023',
        description: 'A weather forecasting app using OpenWeatherMap API and React.',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/weather-app',
    },
    {
        title: 'Task Manager',
        duration: 'Nov 2023 - Dec 2023',
        description: 'A productivity tool for managing daily tasks and deadlines.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        github: 'https://github.com/example/task-manager',
    },
];

const ProjectCarousel = () => {
    const scrollRef = useRef(null);
    const allProjects = [...projects, ...projects]; // duplicate for seamless loop
    const autoScrollRef = useRef();
    const pauseTimeoutRef = useRef();
    const isPausedRef = useRef(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const speed = 1; // pixels per frame

        function smoothScroll() {
            if (!isPausedRef.current) {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
                container.scrollLeft += speed;
            }
            autoScrollRef.current = requestAnimationFrame(smoothScroll);
        }

        autoScrollRef.current = requestAnimationFrame(smoothScroll);
        return () => cancelAnimationFrame(autoScrollRef.current);
    }, []);

    // Pause/resume logic
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const pause = () => {
            isPausedRef.current = true;
            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        };
        const resume = () => {
            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
            pauseTimeoutRef.current = setTimeout(() => {
                isPausedRef.current = false;
            }, 2000); // resume after 2s
        };

        container.addEventListener('mouseenter', pause);
        container.addEventListener('mousedown', pause);
        container.addEventListener('touchstart', pause);
        container.addEventListener('wheel', pause);

        container.addEventListener('mouseleave', resume);
        container.addEventListener('mouseup', resume);
        container.addEventListener('touchend', resume);
        container.addEventListener('wheel', resume);

        return () => {
            container.removeEventListener('mouseenter', pause);
            container.removeEventListener('mousedown', pause);
            container.removeEventListener('touchstart', pause);
            container.removeEventListener('wheel', pause);

            container.removeEventListener('mouseleave', resume);
            container.removeEventListener('mouseup', resume);
            container.removeEventListener('touchend', resume);
            container.removeEventListener('wheel', resume);
            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        };
    }, []);

    return (
        <section className="project-carousel w-full py-16 px-4 md:px-16 bg-glass dark:bg-gray-800/70 rounded-xl shadow-glass animate-fade">
            <h2 className="text-3xl font-bold text-primary dark:text-yellow-400 mb-8">Projects</h2>
            <div className="flex items-center">
                <div
                    ref={scrollRef}
                    className="overflow-x-auto no-scrollbar flex-1 cursor-grab"
                    style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
                >
                    <div className="flex gap-6 md:gap-10 px-1 md:px-4" style={{ minWidth: '100%' }}>
                        {allProjects.map((project, idx) => (
                            <div
                                key={idx}
                                className="w-64 sm:w-72 bg-white dark:bg-gray-900 rounded-3xl shadow-xl flex flex-col items-center p-6 mx-2 border border-primary/10 dark:border-yellow-400/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative"
                                style={{ minWidth: '16rem', maxWidth: '18rem' }}
                            >
                                <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 shadow-lg border-2 border-primary/10 dark:border-yellow-400/20">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-primary dark:text-yellow-400 mb-1 text-center w-full truncate" title={project.title}>{project.title}</h4>
                                <div className="text-xs font-semibold text-gray-500 dark:text-gray-300 mb-2 text-center w-full">{project.duration}</div>
                                <p className="text-gray-700 dark:text-gray-200 text-sm text-center w-full break-words leading-relaxed mb-2 line-clamp-3" style={{ minHeight: '3.5em' }}>{project.description}</p>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-yellow-400/10 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-yellow-400 font-semibold shadow transition-all duration-200"
                                        title="View on GitHub"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                        <span className="text-xs font-medium">GitHub</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Hide scrollbar utility
// Add this to your global CSS if not already present:
// .no-scrollbar::-webkit-scrollbar { display: none; }
// .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

export default ProjectCarousel; 