import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const Founders: React.FC = () => {
    const founders = [
        {
            name: "Tarunjit Biswas",
            role: "Founder, CEO & CTO",
            image: "/founder_tarunjit.jpg",
            initials: "TB",
            quote: "Driven by code. Guided by vision. We are building AI infrastructure that gives every Indian business an unfair advantage in the digital economy.",
            specialties: ["AI Systems Architecture", "Product Strategy", "Full-Stack Engineering"],
            accentColor: "#0ea5e9",
            delay: 0.15
        },
        {
            name: "Shouvik Majumdar",
            role: "Co-Founder, CFO & CMO",
            image: "/founder_shouvik.jpg",
            initials: "SM",
            quote: "Bridging the gap between technological innovation and market execution. We build systems that don't just work — they dominate.",
            specialties: ["Growth Strategy", "Financial Planning", "Brand Operations"],
            accentColor: "#06b6d4",
            delay: 0.3
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-0">
            {/* Header */}
            <div className="text-center mb-14 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="section-tag justify-center mb-4"
                >
                    Leadership
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-orbitron text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight"
                >
                    The <span className="text-gradient">Architects</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 text-sm max-w-md mx-auto"
                >
                    Two builders with one mission — to make AI automation accessible to every business.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {founders.map((founder, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: founder.delay }}
                        className="group relative"
                    >
                        <div
                            className="relative h-full p-7 md:p-9 rounded-2xl overflow-hidden flex flex-col transition-all duration-500"
                            style={{
                                background: 'linear-gradient(135deg, rgba(5,15,31,0.9) 0%, rgba(2,12,27,0.95) 100%)',
                                border: `1px solid rgba(14,165,233,0.12)`,
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                            }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                style={{ background: `linear-gradient(135deg, ${founder.accentColor}08 0%, transparent 60%)`, border: `1px solid ${founder.accentColor}25` }}
                            />

                            {/* Corner accents */}
                            <div className="absolute top-0 right-0 w-14 h-14 rounded-tr-2xl opacity-30" style={{ borderTop: `1px solid ${founder.accentColor}`, borderRight: `1px solid ${founder.accentColor}` }} />
                            <div className="absolute bottom-0 left-0 w-14 h-14 rounded-bl-2xl opacity-30" style={{ borderBottom: `1px solid ${founder.accentColor}`, borderLeft: `1px solid ${founder.accentColor}` }} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Profile Image */}
                                <div
                                    className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 flex-shrink-0 transition-all duration-500 group-hover:scale-105"
                                    style={{
                                        border: `2px solid ${founder.accentColor}30`,
                                        boxShadow: `0 0 24px ${founder.accentColor}20`,
                                    }}
                                >
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback initials avatar
                                            const div = e.currentTarget.parentElement;
                                            if (div) {
                                                e.currentTarget.style.display = 'none';
                                                div.style.background = `linear-gradient(135deg, ${founder.accentColor}30, ${founder.accentColor}60)`;
                                                div.style.display = 'flex';
                                                div.style.alignItems = 'center';
                                                div.style.justifyContent = 'center';
                                                div.innerHTML = `<span style="font-family:Orbitron,sans-serif;font-size:2rem;font-weight:bold;color:${founder.accentColor}">${founder.initials}</span>`;
                                            }
                                        }}
                                    />
                                </div>

                                {/* Name & Role */}
                                <h3 className="font-orbitron text-xl md:text-2xl text-white font-bold tracking-wide mb-1">
                                    {founder.name}
                                </h3>
                                <p className="font-orbitron text-[10px] tracking-[0.25em] uppercase mb-6" style={{ color: founder.accentColor }}>
                                    {founder.role}
                                </p>

                                {/* Quote */}
                                <div className="mb-7 px-2">
                                    <p className="text-slate-400 text-sm leading-relaxed italic">
                                        "{founder.quote}"
                                    </p>
                                </div>

                                {/* Specialties */}
                                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                    {founder.specialties.map((s, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-[10px] font-medium"
                                            style={{
                                                background: `${founder.accentColor}10`,
                                                border: `1px solid ${founder.accentColor}20`,
                                                color: founder.accentColor
                                            }}>
                                            {s}
                                        </span>
                                    ))}
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
