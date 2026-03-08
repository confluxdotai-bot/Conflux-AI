import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bot, Globe, BarChart3, ChevronRight, Cpu, Shield, Zap } from 'lucide-react';

const SuiteCard: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
  accentColor: string;
}> = ({ title, subtitle, description, icon, features, index, accentColor }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col h-full rounded-2xl cursor-default overflow-hidden"
      role="article"
    >
      {/* Background */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(5,15,31,0.9) 0%, rgba(2,12,27,0.95) 100%)',
          border: '1px solid rgba(14,165,233,0.1)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${accentColor}08 0%, transparent 50%)`,
          border: `1px solid ${accentColor}30`
        }}
      />

      {/* Number watermark */}
      <div className="absolute top-4 right-5 font-orbitron font-black select-none pointer-events-none"
        style={{ fontSize: '5rem', color: 'rgba(14,165,233,0.04)', lineHeight: 1 }}>
        0{index + 1}
      </div>

      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
          style={{
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}25`,
            color: accentColor,
            boxShadow: `0 8px 24px ${accentColor}20`
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <div className="mb-4">
          <p className="font-orbitron text-[9px] tracking-[0.3em] mb-1.5" style={{ color: accentColor }}>
            {subtitle}
          </p>
          <h3 className="font-orbitron text-lg md:text-xl font-bold text-white tracking-tight">{title}</h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 font-orbitron text-[10px] tracking-[0.25em] uppercase transition-all duration-300 bg-transparent border-none"
          style={{ color: accentColor }}
        >
          Start Today <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const InfrastructureSuite: React.FC = () => {
  const services = [
    {
      title: "AI Automation & Chatbots",
      subtitle: "Intelligent Automation",
      description: "End-to-end AI systems that handle customer queries, lead qualification, and order processing automatically — 24/7, without human intervention.",
      icon: <Bot className="w-7 h-7" />,
      features: ["WhatsApp & multi-channel bots", "CRM integration", "Sub-200ms response time"],
      accentColor: "#0ea5e9"
    },
    {
      title: "High-Conversion Websites",
      subtitle: "Digital Infrastructure",
      description: "Sub-second-loading digital storefronts engineered for zero-friction user journeys. Every UI decision backed by conversion data and performance benchmarks.",
      icon: <Globe className="w-7 h-7" />,
      features: ["Mobile-first design", "SEO optimised", "E-commerce ready"],
      accentColor: "#06b6d4"
    },
    {
      title: "Precision Ad Systems",
      subtitle: "Growth Engines",
      description: "AI-driven ad campaign management that eliminates wasted spend. We deploy your ad budget across channels with surgical accuracy to maximise ROI.",
      icon: <BarChart3 className="w-7 h-7" />,
      features: ["Real-time bidding AI", "Multi-platform coverage", "Transparent reporting"],
      accentColor: "#818cf8"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="section-tag mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"
          >
            WHAT WE <br className="hidden md:block" />
            <span className="text-gradient">BUILD</span> FOR YOU
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm max-w-xs leading-relaxed"
        >
          Three core service pillars, one unified growth strategy for your business.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" style={{ perspective: '1200px' }}>
        {services.map((s, i) => (
          <SuiteCard key={i} index={i} {...s} />
        ))}
      </div>

      {/* Bottom trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16 py-8 px-6 rounded-2xl"
        style={{ background: 'rgba(14,165,233,0.03)', border: '1px solid rgba(14,165,233,0.08)' }}
      >
        {[
          { icon: <Shield size={14} />, text: "Enterprise-grade Security" },
          { icon: <Zap size={14} />, text: "Rapid Deployment" },
          { icon: <Cpu size={14} />, text: "AI-Native Architecture" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-slate-500 text-xs">
            <span style={{ color: '#0ea5e9' }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfrastructureSuite;