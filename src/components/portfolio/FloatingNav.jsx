import { useState, useEffect } from 'react';
import { Home, Code2, Briefcase, FolderKanban, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function FloatingNav() {
    const [active, setActive] = useState('hero');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);

            const sections = navItems.map(item => {
                const el = document.getElementById(item.id);
                if (!el) return { id: item.id, top: 0 };
                const rect = el.getBoundingClientRect();
                return { id: item.id, top: Math.abs(rect.top) };
            });
            const closest = sections.reduce((prev, curr) => curr.top < prev.top ? curr : prev);
            setActive(closest.id);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-auto md:top-6"
                >
                    <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-slate_surface/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = active === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-circuit text-black'
                                        : 'text-steel hover:text-sulfur'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className={`text-xs font-mono font-medium hidden sm:inline transition-all duration-300 ${isActive ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0 sm:max-w-20 sm:opacity-100'
                                        }`}>
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}