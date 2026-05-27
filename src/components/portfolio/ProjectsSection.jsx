import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, Code2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const filters = ['All', 'Competition', 'Academic', 'Freelance', 'Mobile', 'Web', 'AI / ML', 'Game', 'Tools / Extensions'];

const projects = [
    {
        title: 'Bluetooth Offline Emergency Network',
        type: 'COMPETITION',
        typeColor: 'bg-red-500/80',
        category: 'Competition',
        description: 'A resilient emergency communication network that operates without internet connectivity using Bluetooth mesh technology for disaster response scenarios.',
        techStack: ['Java', 'Android'],
        github: '#',
        link: null,
    },
    {
        title: 'Power House',
        type: 'FREELANCE',
        typeColor: 'bg-amber-500/80',
        category: 'Freelance',
        description: 'Mobile application for energy management and smart grid monitoring with real-time analytics and consumption tracking.',
        techStack: ['Java', 'Android'],
        github: '#',
        link: null,
    },
    {
        title: 'Life Link VS Code Extension',
        type: 'ACADEMIC',
        typeColor: 'bg-green-500/80',
        category: 'Academic',
        description: 'Visual programming extension leveraging Gemini API for AI-assisted code generation and creative p5.js sketch development.',
        techStack: ['Gemini API', 'p5.js', 'JavaScript'],
        github: '#',
        link: null,
    },
    {
        title: 'AI Chat Dashboard',
        type: 'WEB',
        typeColor: 'bg-blue-500/80',
        category: 'Web',
        description: 'Interactive web dashboard for AI-powered conversations with real-time analytics, conversation history, and advanced filtering capabilities.',
        techStack: ['React', 'OpenAI', 'Tailwind CSS'],
        github: '#',
        link: '#',
    },
    {
        title: 'Mobile Fitness Tracker',
        type: 'MOBILE',
        typeColor: 'bg-purple-500/80',
        category: 'Mobile',
        description: 'Cross-platform fitness tracking application with workout logging, progress analytics, and cloud synchronization.',
        techStack: ['Flutter', 'Firebase', 'Dart'],
        github: '#',
        link: '#',
    },
    {
        title: 'Terrain Generator',
        type: 'GAME',
        typeColor: 'bg-pink-500/80',
        category: 'Game',
        description: 'Procedural terrain generation engine using Perlin noise for realistic landscape creation and real-time modification.',
        techStack: ['Unity', 'C#', 'Perlin Noise'],
        github: '#',
        link: null,
    },
    {
        title: 'Smart Home IoT Controller',
        type: 'FREELANCE',
        typeColor: 'bg-amber-500/80',
        category: 'Freelance',
        description: 'Mobile app for controlling IoT devices with real-time synchronization and automated scheduling capabilities.',
        techStack: ['React Native', 'MQTT', 'Node.js'],
        github: '#',
        link: '#',
    },
];

function ProjectDetailModal({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-slate_surface border border-circuit/30 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="sticky top-0 bg-slate_surface border-b border-circuit/20 px-6 md:px-8 py-6 flex items-start justify-between">
                                <div className="flex-1">
                                    <span className={`${project.typeColor} text-white text-[10px] md:text-xs font-mono font-bold px-2 py-1 rounded inline-block mb-3`}>
                                        {project.type}
                                    </span>
                                    <h2 className="gradient-heading font-heading font-bold text-2xl md:text-3xl">
                                        {project.title}
                                    </h2>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="text-steel hover:text-circuit transition-colors ml-4 flex-shrink-0"
                                >
                                    <X className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Content */}
                            <div className="px-6 md:px-8 py-6 space-y-6">
                                {/* Description */}
                                <div>
                                    <h3 className="text-steel font-mono text-xs uppercase tracking-widest mb-2">Description</h3>
                                    <p className="text-sulfur/80 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-steel font-mono text-xs uppercase tracking-widest mb-3">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-[12px] md:text-sm font-mono text-circuit border border-circuit/40 bg-circuit/5 px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:border-circuit/60 hover:bg-circuit/10 transition-all"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-circuit" />
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="pt-4 border-t border-white/10">
                                    <h3 className="text-steel font-mono text-xs uppercase tracking-widest mb-3">Links</h3>
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 bg-circuit/20 hover:bg-circuit/30 border border-circuit/40 text-circuit px-4 py-2 rounded-lg font-mono text-sm transition-all"
                                        >
                                            <Code2 className="w-4 h-4" />
                                            GitHub
                                        </motion.a>
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 bg-circuit/20 hover:bg-circuit/30 border border-circuit/40 text-circuit px-4 py-2 rounded-lg font-mono text-sm transition-all"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                View Project
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const counts = {};
    projects.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1;
    });

    return (
        <section id="projects" className="py-20 md:py-32 px-4">
            <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="PROJECTS"
                    title="Selected works across software, mobile,"
                    highlight="AI,"
                    titleAfter=" game, and immersive technology."
                    description="A curated collection of academic, freelance, and competition projects spanning engineering, interaction design, cloud systems, mobile development, and game experiences."
                />

                {/* Filter bar */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 justify-center md:justify-start">
                    {filters.map((f) => {
                        const isActive = activeFilter === f;
                        const count = f === 'All' ? projects.length : (counts[f] || 0);
                        return (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`flex items-center gap-1.5 text-xs md:text-sm font-mono px-3 py-1.5 transition-all duration-300 border-b-2 ${isActive
                                    ? 'text-circuit border-circuit'
                                    : 'text-steel border-transparent hover:text-sulfur'
                                    }`}
                            >
                                {f}
                                <span className={`text-[10px] ${isActive ? 'text-circuit' : 'text-steel/50'}`}>{count}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Project cards */}
                <div className="space-y-3">
                    <AnimatePresence mode="wait">
                        {filtered.map((project, idx) => (
                            <motion.div
                                key={project.title + idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                onClick={() => !project.link && setSelectedProject(project)}
                                className="group bg-slate_surface border border-white/10 rounded-lg p-4 md:p-5 hover:border-circuit/30 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <span className={`${project.typeColor} text-white text-[9px] md:text-[10px] font-mono font-bold px-2 py-0.5 rounded flex-shrink-0`}>
                                            {project.type}
                                        </span>
                                        <h3 className="gradient-heading font-heading font-medium text-sm md:text-base truncate">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                                        <div className="hidden md:flex items-center gap-2">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="text-[11px] font-mono text-steel border border-white/10 px-2 py-0.5 rounded flex items-center gap-1">
                                                    <span className="w-1 h-1 rounded-full bg-circuit/60" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        {project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="hover:text-circuit transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 text-steel hover:text-circuit transition-colors" />
                                            </a>
                                        ) : (
                                            <motion.div
                                                whileHover={{ x: 4 }}
                                                className="group-hover:text-circuit transition-colors cursor-pointer"
                                            >
                                                <ArrowRight className="w-4 h-4 text-steel group-hover:text-circuit transition-all" />
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                                {/* Mobile tech stack */}
                                <div className="flex md:hidden items-center gap-2 mt-3">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="text-[10px] font-mono text-steel border border-white/10 px-2 py-0.5 rounded flex items-center gap-1">
                                            <span className="w-1 h-1 rounded-full bg-circuit/60" />
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
