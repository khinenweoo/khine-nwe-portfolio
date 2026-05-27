import FloatingNav from '../components/portfolio/FloatingNav';
import HeroSection from '../components/portfolio/HeroSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ContactSection from '../components/portfolio/ContactSection';

export default function Home() {
    return (
        <div className="bg-obsidian min-h-screen grain-overlay relative">
            <FloatingNav />
            <HeroSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <SkillsSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <ExperienceSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <ProjectsSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <ContactSection />

            {/* Footer */}
            <footer className="text-center py-8 border-t border-white/5">
                <p className="text-steel/40 text-xs font-mono">
                    © {new Date().getFullYear()} · Built with precision
                </p>
            </footer>
        </div>
    );
}