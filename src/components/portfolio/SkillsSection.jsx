import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const categories = [
    {
        name: 'Backend',
        description: 'Server-side architecture & APIs',
        skills: ['Node.js', 'PHP', 'Laravel', 'Express.js', 'Redis']
    },
    {
        name: 'Frontend',
        description: 'Client-side interfaces & frameworks',
        skills: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Radix UI', 'Framer Motion']
    },
    {
        name: 'Cloud / DevOps',
        description: 'Infrastructure & deployment',
        skills: ['AWS', 'Docker', 'CI/CD', 'Nginx']
    },
    {
        name: 'DB / Tools',
        description: 'Databases & developer tools',
        skills: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Git', 'GitHub', 'Postman']
    },
];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section id="skills" className="py-20 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="CORE SKILLS"
                    title="Technologies I use to build"
                    highlight=" systems,"
                    titleAfter={<><br />products, and experiences.</>}
                    description="A curated stack across engineering, cloud, AI, and interactive development."
                />

                {/* Category pills */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-4 py-2 rounded-full text-xs md:text-sm font-mono transition-all duration-300 border ${activeCategory === idx
                                ? 'bg-circuit text-black border-circuit'
                                : 'bg-transparent text-steel border-white/10 hover:border-white/20 hover:text-sulfur'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Active category card */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-slate_surface border border-white/10 rounded-lg p-6 md:p-8"
                >
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-sulfur font-heading font-semibold text-lg mb-1">
                                {categories[activeCategory].name}
                            </h3>
                            <p className="text-steel text-sm font-mono">
                                {categories[activeCategory].description}
                            </p>
                        </div>
                        <span className="text-circuit font-mono text-sm bg-circuit/10 px-3 py-1 rounded-full">
                            {categories[activeCategory].skills.length}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {categories[activeCategory].skills.map((skill) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-obsidian text-sulfur text-xs md:text-sm font-mono hover:border-circuit/40 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-circuit" />
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}