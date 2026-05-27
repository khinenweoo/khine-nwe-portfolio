import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, highlight, titleAfter, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
            <p className="text-circuit font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6">
                {label}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight mb-4 md:mb-6 gradient-heading">
                {title}{highlight}{titleAfter}
            </h2>
            {description && (
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </motion.div>
    );
}