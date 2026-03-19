
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Bot, Code, Zap, BarChart, Database, Network, ArrowRight } from 'lucide-react';
import AnswerBox from './AnswerBox';

const AnimatedGraph = () => (
  <svg className="w-full h-24 mb-6 relative overflow-visible" viewBox="0 0 200 80">
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0,0,255,0.1)" />
        <stop offset="50%" stopColor="rgba(0,0,255,1)" />
        <stop offset="100%" stopColor="rgba(0,0,255,0.1)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Grid Lines */}
    <path d="M0 20 H200 M0 40 H200 M0 60 H200" stroke="rgba(15,23,42,0.05)" strokeWidth="1" strokeDasharray="4 4" />
    {/* Animated Line Path */}
    <motion.path
      d="M 0 70 Q 20 60, 40 60 T 80 40 T 120 45 T 160 20 T 200 10"
      fill="none"
      stroke="url(#lineGrad)"
      strokeWidth="3"
      filter="url(#glow)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }}
    />
    {/* Data Nodes */}
    {[
      { cx: 40, cy: 60, delay: 0.8 },
      { cx: 80, cy: 40, delay: 1.1 },
      { cx: 120, cy: 45, delay: 1.4 },
      { cx: 160, cy: 20, delay: 1.7 },
      { cx: 200, cy: 10, delay: 2.0 }
    ].map((node, i) => (
      <motion.circle
        key={i}
        cx={node.cx}
        cy={node.cy}
        r="4"
        fill="#ffffff"
        stroke="#0000ff"
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: node.delay }}
        viewport={{ once: true }}
      />
    ))}
  </svg>
);

const AnimatedNetwork = () => (
    <svg className="w-full h-24 mb-6 relative overflow-visible" viewBox="0 0 200 80">
      <defs>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="rgba(0,0,255,0.6)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      
      {/* Connections connecting to center node */}
      {[
        { x: 30, y: 20 }, { x: 40, y: 60 }, { x: 170, y: 15 }, { x: 160, y: 65 }, { x: 100, y: 10 }
      ].map((pos, i) => (
          <motion.line 
            key={i}
            x1="100" y1="40" x2={pos.x} y2={pos.y} 
            stroke="rgba(0,0,255,0.3)" strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 + (i * 0.2) }}
            viewport={{ once: true }}
          />
      ))}
      
      {/* Animated Pulses along lines */}
      {[
        { x: 30, y: 20 }, { x: 40, y: 60 }, { x: 170, y: 15 }, { x: 160, y: 65 }, { x: 100, y: 10 }
      ].map((pos, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2"
            fill="#3333ff"
            initial={{ cx: pos.x, cy: pos.y, opacity: 0 }}
            animate={{ cx: 100, cy: 40, opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
          />
      ))}
      
      {/* Center Node */}
      <motion.circle cx="100" cy="40" r="14" fill="url(#nodeGlow)" />
      <motion.circle cx="100" cy="40" r="8" fill="#0000ff" 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 2, repeat: Infinity }} 
      />
      <Bot x="93" y="33" size={14} color="#ffffff" className="z-10 relative" />

      {/* Outer Nodes */}
      {[
        { x: 30, y: 20 }, { x: 40, y: 60 }, { x: 170, y: 15 }, { x: 160, y: 65 }, { x: 100, y: 10 }
      ].map((pos, i) => (
        <motion.circle 
          key={`node-${i}`}
          cx={pos.x} cy={pos.y} r="5" fill="#f8fafc" stroke="#0000ff" strokeWidth="1.5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
);

const AnimatedCode = () => {
    return (
        <div className="w-full h-24 mb-6 rounded-lg relative overflow-hidden flex items-center p-4 bg-slate-900 shadow-inner">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgwLCAwLCAyNTUsIDAuMDUpIiBmaWxsPSJub25lIiAvPgo8L3N2Zz4=')] opacity-50"></div>
            <div className="font-mono text-[10px] leading-tight text-blue-400 drop-shadow-[0_0_5px_rgba(0,0,255,0.5)] z-10">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                   <span className="text-blue-400">const</span> <span className="text-yellow-300">buildSystem</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="pl-4">
                   <span className="text-blue-400">await</span> initInfrastructure();
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} viewport={{ once: true }} className="pl-4">
                   <span className="text-blue-400">const</span> app = <span className="text-blue-400">new</span> ConfluxApp();
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} viewport={{ once: true }} className="pl-4">
                   return app.<span className="text-yellow-300">deploy</span>();
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} viewport={{ once: true }}>
                   {'}'};
                </motion.div>
                <motion.div
                   animate={{ opacity: [1, 0, 1] }}
                   transition={{ duration: 1, repeat: Infinity }}
                   className="inline-block w-2 h-3 bg-blue-500 align-middle ml-1"
                />
            </div>
        </div>
    );
};

const InfrastructureSuite: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const manualVsAuto = [
    { label: "Lead Response", manual: "2-4 Hours", auto: "Instant (< 1s)" },
    { label: "Availability", manual: "9 AM - 6 PM", auto: "24/7/365" },
    { label: "Data Accuracy", manual: "85% (Human Error)", auto: "99.9% (Verified)" },
    { label: "Follow-up", manual: "Forgotten 40%", auto: "100% Automated" }
  ];

  const cards = [
    {
      title: "24/7 Smart Assistants",
      tag: "AUTOMATION",
      visual: <AnimatedNetwork />,
      description: "Get a virtual assistant that works day and night. It answers customers on WhatsApp and your website, saves their info, and helps you close more sales automatically.",
      features: ["Understand What People Want", "Saves Customer Info", "Talks Many Languages"],
      delay: 0.1
    },
    {
      title: "Beautiful & Fast Websites",
      tag: "WEBSITE",
      visual: <AnimatedCode />,
      description: "We build super-fast, stunning websites that look great on any phone or computer. Everything is designed to make customers trust you and buy from you.",
      features: ["Super Fast Loading", "Beautiful on Phones", "Easy to Update"],
      delay: 0.2
    },
    {
      title: "Smart Ads to Get Sales",
      tag: "GROWTH",
      visual: <AnimatedGraph />,
      description: "Grow your sales with ads on Facebook, Instagram, and Google. Our smart systems keep working to get you the most customers for every rupee you spend.",
      features: ["Test Different Ideas", "Lower Your Costs", "Follow Up with Customers"],
      delay: 0.3
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-5"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter font-black text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ color: '#0f172a' }}
          >
            HOW WE <span className="text-gradient">HELP YOU GROW</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg font-light leading-relaxed"
            style={{ color: '#475569' }}
          >
            We provide the tools you need to stop wasting time on manual work and start growing your business with the latest technology.
          </motion.p>
        </div>
      </div>

      <section id="smart-automation-benefits" className="mb-16 md:mb-20">
        <AnswerBox 
          question="How does Smart Automation make my work easier?"
          answer="Smart automation handles all the boring, repetitive tasks for your business without needing constant supervision. Instead of typing data manually or moving files between apps every day, everything happens automatically and perfectly every time using advanced logic. This saves you approximately 20 hours of work every week and stops simple human mistakes before they ever happen, allowing you to focus on high-level growth."
          listItems={[
            "No More Boring Work: Computers handle the repetitive stuff.",
            "Zero Mistakes: Everything is done perfectly every time.",
            "Grow Faster: Do 10 times more work without more stress."
          ]}
          delay={0.2}
        />
      </section>

      {/* Comparison Table for AI Extraction */}
      <section id="manual-vs-automated-performance" className="mb-16 md:mb-24 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50">
        <div className="p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 tracking-tight uppercase">Efficiency Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-slate-400">Parameter</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-slate-400">Manual Process</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-blue-600">Conflux Automation</th>
                </tr>
              </thead>
              <tbody>
                {manualVsAuto.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-white/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900">{row.label}</td>
                    <td className="py-5 px-6 text-slate-500">{row.manual}</td>
                    <td className="py-5 px-6 font-black text-blue-600">{row.auto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {/* Card 1: Main AI - Large (Col 1-8) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:col-span-8 md:row-span-2 glass-tile p-8 md:p-12 group flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-8">
            <div className="max-w-md">
              <div className="font-inter text-[10px] tracking-[0.4em] text-blue-500 font-black uppercase mb-4">Core Intelligence</div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
                {cards[0].title}
              </h3>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                {cards[0].description}
              </p>
            </div>
            <div className="hidden md:block">
               <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                 <Bot className="text-blue-600" size={32} />
               </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center py-8">
            <div className="w-full max-w-2xl transform group-hover:scale-105 transition-transform duration-700">
               {cards[0].visual}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-slate-100">
             {cards[0].features.map((f, i) => (
               <span key={i} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                 {f}
               </span>
             ))}
          </div>
        </motion.div>

        {/* Card 2: Website - Tall (Col 9-12) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          onClick={scrollToContact}
          className="md:col-span-4 md:row-span-2 glass-tile p-8 group flex flex-col cursor-pointer"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
        >
          <div className="mb-8">
            <div className="font-inter text-[10px] tracking-[0.4em] text-blue-500 font-black uppercase mb-4">Surface Optimization</div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
              {cards[1].title}
            </h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              {cards[1].description}
            </p>
          </div>

          <div className="flex-1 mb-8 overflow-hidden rounded-2xl border border-slate-100 shadow-inner p-2 bg-slate-50">
             <div className="h-full transform group-hover:-translate-y-2 transition-transform duration-500">
               {cards[1].visual}
               <div className="space-y-2 mt-4 opacity-40">
                  <div className="h-2 w-full bg-slate-200 rounded" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded" />
                  <div className="h-2 w-5/6 bg-slate-200 rounded" />
               </div>
             </div>
          </div>

          <div className="hover-reveal">
             <div 
               onClick={scrollToContact}
               className="p-4 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-between cursor-pointer"
             >
                <span>View Performance Score</span>
                <ArrowRight size={16} />
             </div>
          </div>
        </motion.div>

        {/* Card 3: Growth - Wide (Col 1-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:col-span-12 md:row-span-1 glass-tile p-8 md:px-12 group flex flex-col md:flex-row items-center gap-10"
        >
          <div className="flex-1">
            <div className="font-inter text-[10px] tracking-[0.4em] text-blue-500 font-black uppercase mb-4">Acquisition Engine</div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
              {cards[2].title}
            </h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
              {cards[2].description}
            </p>
          </div>
          
          <div className="w-full md:w-1/3">
             {cards[2].visual}
          </div>

          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-blue-600 transition-all flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            Scaling Strategy <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InfrastructureSuite;