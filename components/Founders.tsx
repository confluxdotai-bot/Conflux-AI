import React from 'react';
import { motion } from 'framer-motion';

const Founders: React.FC = () => {
    const founders = [
        {
            name: "Tarunjit Biswas",
            role: "Founder, CEO & CTO",
            image: "/founder_tarunjit.jpg",
            quote: "Driven by code. Guided by vision. We are architecting a unified digital hegemony where AI infrastructure empowers rapid growth.",
            delay: 0.2
        },
        {
            name: "Shouvik Majumdar",
            role: "Co-founder, CFO & CMO",
            image: "/founder_shouvik.jpg",
            quote: "Bridging the gap between technological innovation and market execution. We build systems that don't just work—they dominate.",
            delay: 0.4
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 rounded-full bg-blue-600/10 text-blue-400 mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </motion.div>
                <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">The <span className="text-gradient">Architects</span></h2>
                <p className="text-slate-500 font-orbitron text-[10px] tracking-[0.4em] uppercase">Phase 00: Who We Are</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {founders.map((founder, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: founder.delay }}
                        className="group relative"
                    >
                        {/* Ambient Background Glow */}
                        <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        <div className="relative h-full glass p-8 rounded-3xl border border-white/5 overflow-hidden glow-blue self-stretch flex flex-col">
                            {/* Corner decor */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-blue-500/30 rounded-tr-3xl opacity-50" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-blue-500/30 rounded-bl-3xl opacity-50" />

                            {/* Profile Image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-8 border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Info */}
                            <div className="text-center flex-grow flex flex-col">
                                <h3 className="font-orbitron text-xl md:text-2xl text-white font-bold tracking-wider mb-2">{founder.name}</h3>
                                <p className="font-orbitron text-[10px] text-blue-400 tracking-[0.2em] uppercase mb-6">{founder.role}</p>

                                <div className="mt-auto">
                                    <span className="text-blue-500/40 text-4xl font-serif absolute leading-none -ml-4 -mt-2">"</span>
                                    <p className="text-slate-400 text-sm italic leading-relaxed px-4">
                                        {founder.quote}
                                    </p>
                                    <span className="text-blue-500/40 text-4xl font-serif absolute leading-none ml-1">"</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Founders;
