import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Vintage Phi",
            category: "Salon Interface",
            url: "https://vintage-phi.vercel.app/",
            description: "A premium, high-conversion reservation and branding platform engineered for elite salons.",
            delay: 0.1
        },
        {
            title: "Alert Ahead",
            category: "Enterprise Ecommerce",
            url: "https://alert-ahead.vercel.app/",
            description: "A high-velocity headless commerce system built for rapid scaling and complex inventory matrices.",
            delay: 0.2
        },
        {
            title: "Aura Fashion",
            category: "Fashion Retail",
            url: "https://aura-fasion.vercel.app/",
            description: "Visually stunning storefront optimized for high-resolution product displays and fluid user checkout.",
            delay: 0.3
        },
        {
            title: "Aurum Wine",
            category: "Restaurant & Hospitality",
            url: "https://aurum-wine.vercel.app/",
            description: "Dynamic menu architecture and immersive brand storytelling for premium culinary experiences.",
            delay: 0.4
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-blue-600/10 text-blue-400 mb-6 glow-blue"
                >
                    <Layers size={32} />
                </motion.div>

                <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Deployment <span className="text-gradient">Matrix</span></h2>
                <p className="text-slate-400 font-orbitron text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">Latest Active Client Architectures</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: project.delay }}
                        className="group relative h-full flex flex-col"
                    >
                        {/* Hover Glow Background */}
                        <div className="absolute inset-0 bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex flex-col h-full glass p-6 md:p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 glow-blue hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-[10px] font-orbitron tracking-widest text-blue-400 font-bold uppercase py-1 px-3 bg-blue-900/30 rounded-full border border-blue-500/20">
                                    {project.category}
                                </div>
                                <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-300 text-sm font-inter leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="mt-auto flex items-center gap-2 text-[10px] font-orbitron tracking-[0.2em] text-slate-400 group-hover:text-blue-400 transition-colors">
                                <span className="w-4 h-[1px] bg-current"></span>
                                ACCESS TERMINAL
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
