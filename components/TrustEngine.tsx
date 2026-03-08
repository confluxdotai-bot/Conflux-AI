
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RollingCounter: React.FC<{ value: number; prefix?: string; suffix?: string; label: string; color?: string }> = ({
  value, prefix = "", suffix = "", label, color = "#0ea5e9"
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2200;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
        setCount(Math.floor(eased * value));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-black mb-2" style={{ color }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="font-orbitron text-[9px] md:text-[10px] tracking-[0.3em] text-slate-500 uppercase">{label}</div>
    </div>
  );
};

const TrustEngine: React.FC = () => {
  const partners = [
    "TECHNOVA", "QUANTUM", "VELOCITY", "NEXUS", "APEX SYSTEMS",
    "COBALT IO", "ZENITH AI", "AETHER", "NOVA LABS", "PRISMATIC"
  ];

  return (
    <div className="relative">
      {/* Partner Ticker */}
      <div className="mb-20 md:mb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-orbitron text-[9px] md:text-[10px] tracking-[0.4em] text-slate-600 uppercase mb-10"
        >
          Trusted by businesses across India & beyond
        </motion.p>
        <div className="relative flex overflow-x-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #020c1b, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #020c1b, transparent)' }} />

          <div className="animate-marquee whitespace-nowrap flex items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <React.Fragment key={i}>
                {partners.map((partner) => (
                  <div key={partner} className="mx-10 flex items-center gap-3 opacity-20 hover:opacity-60 transition-opacity cursor-default select-none">
                    <div className="w-1 h-1 rounded-full" style={{ background: '#0ea5e9' }} />
                    <span className="font-orbitron text-xl md:text-2xl font-bold text-white tracking-wider">{partner}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="section-tag justify-center mb-3">Impact Metrics</div>
          <h2 className="font-orbitron text-2xl md:text-4xl font-black text-white">
            NUMBERS THAT <span className="text-gradient">MATTER</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl py-12 md:py-16 px-6"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.06) 0%, rgba(5,15,31,0.85) 50%, rgba(6,182,212,0.04) 100%)',
            border: '1px solid rgba(14,165,233,0.12)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <RollingCounter value={60} suffix="+" label="Clients Served" color="#0ea5e9" />
            <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(14,165,233,0.1)' }} />
            <RollingCounter value={98} suffix="%" label="Satisfaction Rate" color="#06b6d4" />
            <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(14,165,233,0.1)' }} />
            <RollingCounter value={100} prefix="₹" suffix="K+" label="Revenue Generated" color="#818cf8" />
          </div>
        </motion.div>
      </div>

      {/* Live Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex items-center justify-center gap-3"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-orbitron text-[9px] tracking-[0.25em] text-slate-500 uppercase">
          Systems Active — Real-time monitoring
        </span>
      </motion.div>
    </div>
  );
};

export default TrustEngine;
