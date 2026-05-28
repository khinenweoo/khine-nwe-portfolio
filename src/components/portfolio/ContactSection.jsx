import { motion } from 'framer-motion';
import { Share2, Code2, Send, MessageCircle, Mail, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';

const socials = [
    { name: 'LinkedIn', description: 'Connect professionally', icon: Share2, color: 'bg-blue-600', url: 'https://www.linkedin.com/in/khinenweoo' },
    { name: 'GitHub', description: 'View repositories', icon: Code2, color: 'bg-gray-700', url: 'https://github.com/khinenweoo' },
    { name: 'Twitter / X', description: 'Follow updates', icon: Send, color: 'bg-sky-500', url: '#' },
    { name: 'WhatsApp', description: 'Message directly', icon: MessageCircle, color: 'bg-green-600', url: 'https://api.whatsapp.com/send/?phone=66827322930&text&type=phone_number&app_absent=0' },
    { name: 'Portfolio', description: 'View website', icon: Globe, color: 'bg-teal-600', url: 'https://khine-nwe-portfolio.vercel.app/' },
    { name: 'Email', description: 'collabwithkhine@gmail.com', icon: Mail, color: 'bg-red-500', url: 'mailto:collabwithkhine@gmail.com' },
];

const tags = ['Open to collaborations', 'Freelance & partnerships', 'Product building'];

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="CONTACT"
                    title="Let's build something"
                    highlight="meaningful"
                    titleAfter=" together."
                    description="Whether it's software, product ideas, immersive experiences, or collaboration opportunities — I'm always open to connecting with people who want to create impactful digital experiences."
                />

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-2 text-xs font-mono text-steel border border-white/10 px-3 py-1.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-circuit" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Social grid - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
                    {socials.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="group flex items-center gap-4 bg-slate_surface border border-white/10 rounded-lg p-4 md:p-5 hover:border-circuit/30 transition-all duration-300"
                            >
                                <div className={`${social.color} p-2.5 rounded-lg flex-shrink-0`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="gradient-heading font-heading font-medium text-sm md:text-base">{social.name}</h3>
                                    <p className="text-white/50 text-xs md:text-sm truncate">{social.description}</p>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Footer note */}
                <p className="text-center text-steel/50 text-xs font-mono mt-12">
                    Based remotely · Open to remote opportunities
                </p>
            </div>
        </section>
    );
}