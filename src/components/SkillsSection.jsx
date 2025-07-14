import React from 'react';

const skills = {
    languages: [
        { name: 'JavaScript', percent: 94 },
        { name: 'TypeScript', percent: 85 },
        { name: 'core Java', percent: 74 },
        { name: 'C', percent: 70 },
        { name: 'HTML5', percent: 80 },
        { name: 'CSS', percent: 70 }
    ],
    frameworks: [
        { name: 'React', percent: 90 },
        { name: 'Tailwind CSS', percent: 80 },
        { name: 'Node.js', percent: 90 },
        { name: 'Express', percent: 86 },
        { name: 'Fastify', percent: 80 },
        { name: 'Sequlize', percent: 80 },
        { name: 'Bootstrap', percent: 74 }
    ],
    tools: [
        { name: 'Git', percent: 90 },
        { name: 'Postman', percent: 95 },
        { name: 'VS Code', percent: 95 },
        { name: 'Bitbucket', percent: 70 },
        { name: 'MySQL Work-Bench', percent: 80 },
    ]
};

// Array of gradient classes to alternate for bars
const gradientBars = [
    'bg-gradient-to-r from-primary via-accent to-pink-500',
    'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
    'bg-gradient-to-r from-green-400 via-blue-400 to-purple-500',
    'bg-gradient-to-r from-pink-500 via-yellow-400 to-primary',
    'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500',
    'bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400',
];

const SkillBar = ({ name, percent, idx }) => (
    <div className="mb-5">
        <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-800 dark:text-gray-100">{name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">{percent}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
                className={`h-2 rounded-full transition-all duration-700 ${gradientBars[idx % gradientBars.length]}`}
                style={{ width: `${percent}%` }}
            ></div>
        </div>
    </div>
);

const SkillsSection = () => (
    <section className="skills-section w-full py-16 px-4 md:px-16 bg-glass dark:bg-gray-800/70 rounded-xl shadow-glass animate-fade">
        <h2 className="text-3xl font-bold text-primary dark:text-yellow-400 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Languages */}
            <div>
                <h3 className="text-xl font-semibold text-primary dark:text-yellow-300 mb-4 text-center md:text-left">Languages</h3>
                {skills.languages.map((skill, idx) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} idx={idx} />
                ))}
            </div>
            {/* Frameworks */}
            <div>
                <h3 className="text-xl font-semibold text-primary dark:text-yellow-300 mb-4 text-center md:text-left">Frameworks</h3>
                {skills.frameworks.map((skill, idx) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} idx={idx + skills.languages.length} />
                ))}
            </div>
            {/* Tools */}
            <div>
                <h3 className="text-xl font-semibold text-primary dark:text-yellow-300 mb-4 text-center md:text-left">Tools</h3>
                {skills.tools.map((skill, idx) => (
                    <SkillBar key={skill.name} name={skill.name} percent={skill.percent} idx={idx + skills.languages.length + skills.frameworks.length} />
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection; 