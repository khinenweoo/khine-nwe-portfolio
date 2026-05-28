import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, Code2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const filters = ['All', 'Personal', 'Company'];

const projects = [
    {
        title: 'MPlus',
        type: 'COMPANY',
        typeColor: 'bg-red-500/80',
        category: 'Company',
        logo: '/logos/Maharnet.jpg',
        company: 'Mahar NET',
        description: 'Developed core modules and features for management Portal of MHN company which includes ISP modules such as OM, NOC Operation, Billing, Ticketing, Customer, Finance etc',
        techStack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'API', 'Redis'],
        github: 'https://github.com/thxawa/Mahar-Net-Server-Side-Project/',
        link: null,
    },
    {
        title: 'MHN User Dashboard',
        type: 'COMPANY',
        typeColor: 'bg-amber-500/80',
        category: 'Company',
        logo: '/logos/Mhn.jpg',
        company: 'Mahar NET',
        description: 'Developed backend features to manage customer data and leverage RESTful API as data source streamling data flow across the main system and mobile app.',
        techStack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Vuex', 'Tailwind CSS'],
        github: 'https://github.com/thxawa/Mahar-Net-User-Side-Project/',
        link: null,
    },
    {
        title: 'Mahar NET Mobile App',
        type: 'COMPANY',
        typeColor: 'bg-green-500/80',
        category: 'Company',
        logo: '/logos/Mhn.jpg',
        company: 'Mahar NET',
        description: 'I was responsible for implementing RESTful APIs of backend operation flows with Laravel and implemented push notifications of this mobile app. This user app aims for customers who are using Mahar NET internet services.',
        techStack: ['PHP', 'Restful API', 'Firebase', 'Push Notifications'],
        github: 'https://github.com/thxawa/Mahar-Net-Mobile-App/',
        link: 'https://play.google.com/store/apps/details?id=com.maharnet.app&hl=en',
    },
    {
        title: 'Proud of Myanmar MarketPlace',
        type: 'COMPANY',
        typeColor: 'bg-blue-500/80',
        category: 'Company',
        logo: '/logos/pom-logo.png',
        company: 'AEG',
        description: 'E-commerce platform for showcasing and selling products from local Myanmar businesses. Developed a robust checkout flow, integrated with Myoe Pya platform for 3D virtual world experience for users to buy and sell products.',
        techStack: ['Laravel', 'Livewire', 'Sass', 'MySQL', 'Myoe Pya API'],
        github: 'https://github.com/khinenweoo/multivendor-ecommerce',
        link: '#',
    },
    {
        title: 'Learning Management System (LMS)',
        type: 'COMPANY',
        typeColor: 'bg-purple-500/80',
        category: 'Company',
        logo: '/logos/AEG.png',
        company: 'AEG',
        description: 'Learning management system for students and educators, featuring course management, progress tracking, and interactive learning materials.',
        techStack: ['Laravel', 'Livewire', 'Firebase', 'MySQL', 'RESTful API'],
        github: 'https://github.com/khinenweoo/lms-app',
        link: '#',
    },
    {
        title: 'Centre For Behavioral Science',
        type: 'COMPANY',
        typeColor: 'bg-pink-500/80',
        category: 'Company',
        logo: '/logos/cbs.jpg',
        company: 'GiGA Link Technology',
        description: 'CBS is an educational platform built with WordPress. My role involves designing user interface and integrating plugins and customized features like Event reigsteration and booking.',
        techStack: ['WordPress', 'Custom PHP', 'JavaScript', 'CSS', 'UI/UX Design'],
        github: '#',
        link: 'https://www.cbs.com.sg/',
    },
    {
        title: 'Capelle Consulting',
        type: 'COMPANY',
        typeColor: 'bg-amber-500/80',
        category: 'Company',
        logo: '/logos/capelle.jpg',
        company: 'GiGA Link Technology',
        description: 'Developed this platform user interface and features including responsive design, SEO optimization, and content management system.',
        techStack: ['WordPress', 'Custom PHP', 'JavaScript', 'CSS', 'UI Design'],
        github: '#',
        link: 'https://www.capelleconsulting.com/',
    },
    {
        title: 'DMR',
        type: 'COMPANY',
        typeColor: 'bg-amber-500/80',
        category: 'Company',
        logo: '/logos/dmr.png',
        company: 'AEG',
        description: 'DMR is a government department of medical research web application to digitize and modernize public services. I supported the migration of this government site from a legacy VPS domain to a new hosting environment, ensuring seamless deployment and functionality across updated server configurations.',
        techStack: ['PHP', 'JavaScript', 'Server Migration', 'Data Migration', 'DNS Management'],
        github: '#',
        link: 'https://www.dmr.gov.mm/',
    },
    {
        title: 'MHSRJ',
        type: 'COMPANY',
        typeColor: 'bg-amber-500/80',
        category: 'Company',
        logo: '/logos/mhsrj.png',
        company: 'AEG',
        description: 'MHSRJ is a government Health Research web applications built with PHP. Supported the hosting change to a new VPS server, maintained and fixed the existing features of the application.',
        techStack: ['PHP', 'JavaScript', 'Server Migration', 'Data Migration', 'DNS Management'],
        github: '#',
        link: 'https://mhsrj-moh.dmr.gov.mm/',
    },
    {
        title: 'Linn IT Shopping',
        type: 'COMPANY',
        typeColor: 'bg-amber-500/80',
        category: 'Company',
        logo: '/logos/linn_logo.png',
        company: 'GiGA Link Technology',
        description: 'Linn is a shopping platform for computer, mobile devices and accessories products. I was responsible for designing and developing the user interface and features of this e-commerce platform built with WordPress.',
        techStack: ['WordPress', 'WooCommerce', 'JavaScript', 'CSS', 'UI Design'],
        github: '#',
        link: 'https://shop.linn.com.mm/',
    },
    {
        title: 'Flexible Pass',
        type: 'COMPANY',
        typeColor: 'bg-amber-500/80',
        category: 'Company',
        logo: '/logos/GiGALink.jpg',
        company: 'GiGA Link Technology',
        description: 'Flexible Pass is a fitness center platform. Designed this website user interface along with UI/UX design and integrated features including SEO optimization and content management system.',
        techStack: ['WordPress', 'JavaScript', 'CSS', 'UI Design'],
        github: '#',
        link: '#',
    },
    {
        title: 'Mern Chatty',
        type: 'PERSONAL',
        typeColor: 'bg-amber-500/80',
        category: 'Personal',
        logo: '/logos/PS.jpg',
        company: 'Personal project',
        description: 'Developed using MERN stack and Web Socket. This project is a real-time messaging platform along with a seamless user experience, secure login with JWT authentication. It enable users to chat online, filter online users, update profile and manage setting.',
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSocket', 'JWT'],
        github: 'https://github.com/khinenweoo/chat-app-socketio',
        link: 'https://mern-chatty.vercel.app/',
    },
    {
        title: 'Ktube Lite',
        type: 'PERSONAL',
        typeColor: 'bg-amber-500/80',
        category: 'Personal',
        logo: '/logos/PS.jpg',
        company: 'Personal project',
        description: 'An interactive YouTube UI clone built with Tailwind and React, featuring a clean responsive design.It integrates with Rapid API to fetch real- time video data, providing users with a seamless browsing experience similar to the original platform.',
        techStack: ['React', 'Rapid API', 'Tailwind CSS'],
        github: 'https://github.com/khinenweoo/youtube-lite',
        link: 'https://ktube-lite.vercel.app/',
    },
    {
        title: 'Smart Spender',
        type: 'PERSONAL',
        typeColor: 'bg-amber-500/80',
        category: 'Personal',
        logo: '/logos/PS.jpg',
        company: 'Personal project',
        description: 'A simple finance tracker website designed to help users to track their financial health. It provides tools for monitoring daily income and expenses, allowing users to maintain a clear overview of their financial. Developed as a practical project to facilitate learning in MERN full stack development.',
        techStack: ['React', 'Rapid API', 'Tailwind CSS'],
        github: 'https://github.com/khinenweoo/mern-personal-finance-tracker',
        link: 'https://smartspender-track.vercel.app/',
    },
    {
        title: 'Projix',
        type: 'PERSONAL',
        typeColor: 'bg-amber-500/80',
        category: 'Personal',
        logo: '/logos/PS.jpg',
        company: 'Personal project',
        description: 'Team project management platform named Projix built with Laravel and React, featuring role based user portals. The project is deployed using AWS cloud services. It supports admin management tasks like creating, editing, assigning projects, and also completing tasks by members.',
        techStack: ['React', 'Laravel', 'AWS', 'PHP', 'Tailwind CSS'],
        github: 'https://github.com/khinenweoo/Project-Creator-App',
        link: 'http://laravelapp.projextrack.site/',
    },
    {
        title: 'Znisa Portfolio',
        type: 'PERSONAL',
        typeColor: 'bg-amber-500/80',
        category: 'Personal',
        logo: '/logos/PS.jpg',
        company: 'Personal project',
        description: 'A portfolio website for Znisa featuring a modern UI and animations. Built with React, Framer Motion and Tailwind CSS, it showcases projects elements with a sleek, responsive design.',
        techStack: ['React', 'Framer Motion', 'Tailwind CSS'],
        github: 'https://github.com/khinenweoo/portfolio-site',
        link: 'https://znisaportfoliosite.vercel.app/',
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
                                    <div className="flex items-center gap-3 mb-3">
                                        {/* Company Logo in Modal */}
                                        <div className="w-12 h-12 bg-slate_surface border border-circuit/30 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                            <img
                                                src={project.logo}
                                                alt={project.company}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-circuit">${project.company.substring(0, 2).toUpperCase()}</span>`;
                                                }}
                                            />
                                        </div>
                                        <span className={`${project.typeColor} text-white text-[10px] md:text-xs font-mono font-bold px-2 py-1 rounded inline-block`}>
                                            {project.type}
                                        </span>
                                    </div>
                                    <h2 className="gradient-heading font-heading font-bold text-2xl md:text-3xl">
                                        {project.title}
                                    </h2>
                                    <p className="text-steel text-sm mt-2 font-mono">{project.company}</p>
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
                    title="Selected works across software, web,"
                    highlight=" AI,"
                    titleAfter="and immersive technology."
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
                                onClick={() => setSelectedProject(project)}
                                className="group bg-slate_surface border border-white/10 rounded-lg p-4 md:p-5 hover:border-circuit/30 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        {/* Company Logo */}
                                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate_surface border border-circuit/30 rounded-full flex items-center justify-center overflow-hidden">
                                            <img
                                                src={project.logo}
                                                alt={project.company}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-circuit">${project.company.substring(0, 2).toUpperCase()}</span>`;
                                                }}
                                            />
                                        </div>
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
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            className="group-hover:text-circuit transition-colors cursor-pointer"
                                        >
                                            <ArrowRight className="w-4 h-4 text-steel group-hover:text-circuit transition-all" />
                                        </motion.div>
                                    </div>
                                </div>
                                {/* Mobile tech stack */}
                                <div className="flex flex-wrap md:hidden gap-1.5 mt-3">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="text-[9px] font-mono text-steel border border-white/10 px-1.5 py-0.5 rounded flex items-center gap-1 whitespace-nowrap">
                                            <span className="w-0.5 h-0.5 rounded-full bg-circuit/60 flex-shrink-0" />
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
