import React from 'react';

const education = [
    {
        degree: 'Bachelor of Computer Applications',
        institution: 'University of Mysore',
        year: '2023 - 2026',
    },
    {
        degree: 'HSC (Science)',
        institution: 'Savitribai Phule Pune University',
        year: '2020 - 2022',
    },
    {
        degree: 'SSC',
        institution: 'Savitribai Phule Pune University',
        year: '2019',
    },
];

const aboutInfo = `Driven by curiosity and a love for problem-solving, I’ve grown into a full stack developer who thrives in building well-structured and meaningful web experiences. I enjoy working across the stack—from designing smooth, responsive user interfaces to engineering stable and scalable backend systems. My toolkit includes technologies like React, Node.js, JavaScript, TypeScript, MySQL, MongoDB and PostgreSQL, which I use to bring ideas to life in clean and efficient code. I value simplicity, performance, and collaboration, and I’m always exploring new ways to push my skills forward in real-world projects.`
const AboutSection = () => (
    <section className="about-section flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-16 md:py-24 mb-8 md:mb-12 bg-glass dark:bg-gray-800/70 shadow-glass rounded-xl animate-fade w-full">
        <div className="flex flex-col md:flex-row w-full gap-8">
            {/* Education Card */}
            <div className="flex-1 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow p-6">
                <h3 className="text-2xl font-bold text-primary dark:text-yellow-400 mb-4 text-center md:text-left">Education</h3>
                <ul className="space-y-4">
                    {education.map((edu, idx) => (
                        <li key={idx} className="border-l-4 border-primary dark:border-yellow-400 pl-4">
                            <div className="font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{edu.year}</div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* About Info Card */}
            <div className="flex-1 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-primary dark:text-yellow-400 mb-4 text-center md:text-left">About Me</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg mb-4">{aboutInfo}</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
                    <li>2+ years of experience in full stack web development</li>
                    <li>Proficient in React, Node.js, TypeScript, Fastify and Sequelize</li>
                    <li>Strong backend logic and API development skills</li>
                    <li>Open to freelance and full-time opportunities</li>
                </ul>
            </div>
        </div>
    </section>
);

export default AboutSection; 