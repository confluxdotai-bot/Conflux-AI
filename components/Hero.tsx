
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KineticSculpture from './KineticSculpture.tsx';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20 overflow-hidden px-4">

      {/* 3D Kinetic Sculpture */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none scale-[0.45] sm:scale-[0.65] md:scale-90 opacity-40">
        <KineticSculpture />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center max-w-6xl mx-auto">

        {/* Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full"
          style={{
            background: 'rgba(14,165,233,0.08)',
            border: '1px solid rgba(14,165,233,0.25)',
            backdropFilter: 'blur(12px)'
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[9px] md:text-[11px] font-orbitron tracking-[0.3em] text-sky-400 uppercase">
            AI-Powered IT Consultancy & Automation
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-orbitron font-black text-white leading-[1.0] mb-6 md:mb-8 tracking-tighter"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)' }}
        >
          TRANSFORM YOUR<br />
          <span className="text-gradient">BUSINESS</span> WITH AI
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4 md:px-0"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
        >
          We design AI automation systems, high-conversion websites, and precision ad stacks
          that give India's fastest-growing businesses an unfair advantage.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 px-4 md:px-0"
        >
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 group"
          >
            APPLY FOR GROWTH
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <Play size={12} fill="currentColor" />
            CLIENT ACCESS
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            { value: '60+', label: 'Clients Served' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '₹100K+', label: 'Revenue Generated' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="font-orbitron font-bold text-sky-400 text-lg md:text-2xl">{stat.value}</div>
              <div className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-30"
      >
        <div className="w-[1px] h-10" style={{ background: 'linear-gradient(to bottom, #0ea5e9, transparent)' }} />
        <span className="font-orbitron text-[8px] tracking-[0.4em] uppercase text-slate-500">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Hero;
