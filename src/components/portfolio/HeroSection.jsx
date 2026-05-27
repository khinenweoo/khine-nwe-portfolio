import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Circle } from 'lucide-react';

const PROFILE_IMAGE = '/myprofile.png';

export default function HeroSection() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
            {/* Subtle grid bg */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="max-w-5xl mx-auto w-full relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 text-center md:text-left">

                        <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                            <Circle className="w-2 h-2 fill-purple-500 text-green-500" />
                            <span className="text-steel font-mono text-xs tracking-wider">ABOUT ME</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-4 gradient-heading">
                            Software<br />Developer
                        </h1>

                        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mb-6">
                            A highly resourceful, innovative Software developer dedicated to designing scalable infrastructure, interactive experiences, and high-performance digital products.
                            I have been a developer since 2019, with a strong focus on web development and full-stack engineering.
                            I help startups and businesses scale their backend systems and automate workflows using APIs and integrations like Stripe and CRMs.
                            With 5+ years delivering web apps, I take ownership of your system to ensure it is fast, reliable, and maintainable.
                            I am always eager to explore emerging technologies, embrace new challenges, and collaborate on impactful projects. Let's connect to discuss exciting opportunities or share ideas!
                        </p>

                        <div className="flex items-center gap-2 justify-center md:justify-start text-steel text-xs font-mono">
                            <MapPin className="w-3 h-3" />
                            <span>Based remotely · Open to opportunities</span>
                        </div>
                    </motion.div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex-shrink-0">

                        <div className="relative w-48 h-64 md:w-64 md:h-80 lg:w-92 lg:h-96">
                            {/* Subtle border glow */}
                            <div className="absolute inset-0 rounded-2xl border border-circuit/20" />

                            {/* Shadow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-circuit/5 blur-2xl -z-10 scale-105" />

                            <img
                                src={PROFILE_IMAGE}
                                alt="Profile"
                                className="w-full h-full rounded-2xl object-cover border border-white/10 shadow-2xl hover:shadow-circuit/20 transition-all duration-700" />

                            {/* Subtle overlay glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-circuit/5 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">

                    <span className="text-steel font-mono text-[10px] tracking-widest">SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}>

                        <ArrowDown className="w-4 h-4 text-steel" />
                    </motion.div>
                </motion.div>
            </div>
        </section>);

}