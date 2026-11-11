import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const experiences = [
    {
        type: 'WORK',
        typeColor: 'bg-circuit',
        title: 'Lead Software Engineer',
        company: 'SiamLynk',
        location: 'Bangkok, Thailand (On site)',
        period: 'Jun 2026 — Present',
        description: 'Lead end-to-end development and partner negotiations, turning business needs into shipped features. Engineered a server-authoritative emergency voice platform on Agora RTC with reliable, secure APIs and integrations, plus a real-time operations dashboard for monitoring, alerts, and incident response.',
        skills: ['React', 'TypeScript', 'PHP', 'Laravel', 'MongoDB', 'Agora RTC', 'API Development', 'Server Management', 'System Architecture', 'Team Leadership'],
        side: 'left',
    },
    {
        type: 'Freelance',
        typeColor: 'bg-circuit',
        title: 'Freelancer',
        company: 'Self-employed',
        location: 'Remote',
        period: 'August 2025 — May 2026',
        description: 'Working as a freelance web developer, collaborating with clients to build custom web solutions. Managing projects from concept to deployment, ensuring timely delivery and client satisfaction.',
        skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'API', 'Client Communication'],
        side: 'right',
    },
    {
        type: 'WORK',
        typeColor: 'bg-blue-500',
        title: 'Full Stack Developer',
        company: 'Mahar NET',
        location: 'Yangon, Myanmar (On site)',
        period: 'July 2022 — Dec 2024',
        description: 'Contributed to the in-house software development and maintenance of the web portals. Implemented complex various modules in ISP Systems, improving performance and scalability.',
        skills: ['Vue.js', 'PHP', 'Laravel', 'API Development', 'MySQL', 'Git', 'Nginx', 'Server Management', 'Performance Optimization'],
        side: 'left',
    },
    {
        type: 'WORK',
        typeColor: 'bg-circuit',
        title: 'Senior Web Developer & Instructor',
        company: 'Ayeyarwaddy Group (AEG)',
        location: 'Yangon, Myanmar (On site)',
        period: 'April 2021 — May 2022',
        description: 'Built full-stack applications, led system architecture decisions, and mentored junior developers. Taught programming fundamental concepts to students, focusing on practical application on real-world projects.',
        skills: ['Php', 'Laravel', 'Livewire', 'JavaScript', 'MySQL', 'Git', 'API Development', 'Mentorship'],
        side: 'right',
    },
    {
        type: 'WORK',
        typeColor: 'bg-blue-500',
        title: 'Web Developer',
        company: 'GiGA Link Technology',
        location: 'Yangon, Myanmar (On site)',
        period: 'Jan 2020 — Feb 2021',
        description: 'Worked as a web developer creating modern, responsive websites and web applications for various clients. Built interactive user interfaces and smooth user experiences for platforms with WordPress, Drupal and Magento along with UI/UX Design.',
        skills: ['WordPress', 'Drupal', 'UI/UX', 'Ecommerce', 'Web Development'],
        side: 'left',
    },
    {
        type: 'WORK',
        typeColor: 'bg-circuit',
        title: 'Computer Operator',
        company: 'Yangon City Development Committee(Water Management Department)',
        location: 'Yangon, Myanmar (On site)',
        period: 'March 2014 — 2019',
        description: 'Responsible for operating and maintaining computer systems and software. Drawing Water Pipelines and maps with AutoCAD software, and estimating engineering costs. Managed data entry, system monitoring, and provided technical support to ensure smooth operations.',
        skills: ['AutoCAD Design', 'Engineering Estimation', 'Technical Support'],
        side: 'right',
    },
];

function TimelineCard({ exp, index }) {
    const isLeft = exp.side === 'left';

    return (
        <div className={`relative flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 bg-slate_surface border border-white/10 rounded-lg p-5 md:p-6 hover:border-circuit/30 transition-colors duration-500"
            >
                <div className="flex items-center gap-3 mb-3">
                    <span className={`${exp.typeColor} text-black text-[10px] font-mono font-bold px-2 py-0.5 rounded`}>
                        {exp.type}
                    </span>
                    <span className="text-steel text-xs font-mono">{exp.period}</span>
                </div>
                <h3 className="gradient-heading font-heading font-semibold text-base md:text-lg mb-1">{exp.title}</h3>
                <p className={`text-red-200 text-sm ${exp.location ? 'mb-1' : 'mb-3'}`}>{exp.company}</p>
                {exp.location && (
                    <p className="text-steel text-xs font-mono mb-3">{exp.location}</p>
                )}
                {exp.description && (
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                )}
                {exp.bullets && (
                    <ul className="space-y-2 mb-4">
                        {exp.bullets.map((item) => (
                            <li key={item} className="flex gap-2 text-white/60 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-circuit flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                            <span key={skill} className="text-[11px] font-mono text-steel border border-white/10 px-2 py-1 rounded">
                                ◆ {skill}
                            </span>
                        ))}
                    </div>
                )}
            </motion.div>

            {/* Timeline dot - hidden on mobile */}
            <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-2">
                <div className={`w-3 h-3 rounded-full ${index === experiences.length - 1 ? 'bg-circuit' : 'bg-circuit/60'} border-2 border-obsidian ring-2 ring-circuit/20`} />
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block flex-1" />
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="ROADMAP CAREER"
                    title="The path I've built through education,"
                    highlight="leadership,"
                    titleAfter=" and product development."
                    description="A journey across teaching, web development, and freelancing — shaped by building real products, mentoring others, and continuously growing through technology."
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line - hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    <div className="space-y-6 md:space-y-0 md:space-y-8">
                        {experiences.map((exp, idx) => (
                            <TimelineCard key={idx} exp={exp} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}