
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Video, 
  Palette, 
  TrendingUp, 
  Layout, 
  Image as ImageIcon, 
  Play, 
  Sparkles,
  Search,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'smm',
    title: "Social Media Management",
    tag: "AESTHETICS",
    icon: <Instagram size={24} />,
    color: "#e1306c",
    description: "We don't just post; we build tribes. Strategic content calendars that stop the scroll and turn followers into loyal customers.",
    features: ["Content Strategy", "Community Growth", "Platform Optimization"],
    gridSpan: "md:col-span-8 md:row-span-1"
  },
  {
    id: 'video',
    title: "Video Editing",
    tag: "ATTENTION",
    icon: <Video size={24} />,
    color: "#ef4444",
    description: "High-paced Reels, YouTube long-forms, and ads. We edit for retention, ensuring your message sticks in the first 3 seconds.",
    features: ["Retention Editing", "Sound Design", "Color Grading"],
    gridSpan: "md:col-span-4 md:row-span-2"
  },
  {
    id: 'design',
    title: "Graphic Designing",
    tag: "IDENTITY",
    icon: <Palette size={24} />,
    color: "#8b5cf6",
    description: "Visual identity that speaks volumes. From Logos to UI/UX, we create designs that feel premium and trustworthy.",
    features: ["Logo & Branding", "Social Assets", "Modern UI/UX"],
    gridSpan: "md:col-span-4 md:row-span-1"
  },
  {
    id: 'optimization',
    title: "SEO / GEO / AEO",
    tag: "AUTHORITY",
    icon: <Search size={24} />,
    color: "#3b82f6",
    description: "Positioning you at the top of AI Overviews and Search results. Our 2026-ready strategy focuses on Answer Engine Optimization.",
    features: ["Knowledge Graph Signals", "Semantic SEO", "GEO Readiness"],
    gridSpan: "md:col-span-4 md:row-span-1"
  }
];

const CreativeSuite: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="digital-creative-services" className="max-w-7xl mx-auto px-4 md:px-12">
      {/* Header */}
      <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6"
        >
          <Sparkles size={14} /> Digital Creative Suite
        </motion.div>
        <h2 className="font-inter text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
          CRAFTING <span className="text-gradient">DIGITAL DOMINANCE</span>
        </h2>
        <p className="max-w-2xl text-slate-500 font-medium text-lg md:text-xl">
          Beyond <dfn className="not-italic font-bold text-blue-600">AI Automation</dfn> and neural processing, we handle the creative muscle that fuels your entire digital growth engine. 
          Our premium aesthetics meet high-velocity, data-driven results for brands that want to dominate their industry in 2026 and beyond. We build unique, high-performance assets that turn your vision into a measurable, scalable competitive advantage.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={scrollToContact}
            className={`${service.gridSpan} glass-tile p-8 relative overflow-hidden group cursor-pointer border-slate-200/50 hover:border-blue-500/30 transition-all duration-500`}
          >
            {/* Background Accent */}
            <div 
               className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 transition-opacity duration-500 group-hover:opacity-30"
               style={{ backgroundColor: service.color }}
            />

            <div className="relative z-10 h-full flex flex-col">
               <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                    style={{ 
                        backgroundColor: `${service.color}10`, 
                        borderColor: `${service.color}30`,
                        color: service.color
                    }}
                  >
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    {service.tag}
                  </span>
               </div>

               <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                 {service.title}
               </h3>
               
               <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 flex-1">
                 {service.description}
               </p>

               <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map(f => (
                    <span key={f} className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 rounded-md bg-slate-100/50 border border-slate-200/50">
                      {f}
                    </span>
                  ))}
               </div>
            </div>

            {/* Hover Micro-interaction Reveal */}
            <AnimatePresence>
               {hovered === service.id && service.id === 'video' && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   className="absolute inset-4 rounded-xl bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20 border border-white/10"
                 >
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-lg shadow-red-600/30">
                       <Play fill="white" size={32} />
                    </div>
                    <span className="text-white font-black text-xs uppercase tracking-[0.2em] mb-2">Retention Demo</span>
                    <p className="text-slate-400 text-[10px] font-medium leading-tight">Average Retention: 88% <br/> High-Frequency Edits</p>
                 </motion.div>
               )}

               {hovered === service.id && service.id === 'design' && (
                 <motion.div 
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 50 }}
                   className="absolute bottom-4 right-4 w-32 p-3 glass-tile border-purple-500/30 z-20"
                 >
                    <div className="flex gap-1 mb-2">
                       <div className="w-4 h-4 rounded-full bg-[#8b5cf6]" />
                       <div className="w-4 h-4 rounded-full bg-[#0000ff]" />
                       <div className="w-4 h-4 rounded-full bg-[#f8fafc]" />
                    </div>
                    <span className="text-[8px] font-black text-slate-400 uppercase">Premium Palette</span>
                 </motion.div>
               )}
            </AnimatePresence>

            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
               <ArrowRight className="text-blue-500" size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Signal / Digital Services */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 p-8 rounded-2xl bg-slate-950 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
      >
         <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
               <TrendingUp size={32} />
            </div>
            <div>
               <h4 className="text-white font-black text-xl mb-1 uppercase tracking-tighter">Unified Brand Engine</h4>
               <p className="text-slate-400 text-sm font-medium">All services connected via a single data-driven strategy.</p>
            </div>
         </div>
         <button 
           onClick={scrollToContact}
           className="px-10 py-5 bg-white text-black font-black rounded-xl text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
         >
            Claim Your Digital Audit
         </button>
      </motion.div>
    </section>
  );
};

export default CreativeSuite;
