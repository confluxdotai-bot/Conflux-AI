
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

      <div className="mb-16 md:mb-20">
        <AnswerBox 
          question="How does Smart Automation make my work easier?"
          answer="Smart automation handles all the boring, repetitive tasks for you. Instead of typing data manually or moving files between apps, everything happens automatically and perfectly every time. This saves you hours of work every week and stops simple mistakes before they happen."
          listItems={[
            "No More Boring Work: Computers handle the repetitive stuff.",
            "Zero Mistakes: Everything is done perfectly every time.",
            "Grow Faster: Do 10 times more work without more stress."
          ]}
          delay={0.2}
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: card.delay }}
            className="relative group h-full"
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              style={{ background: 'rgba(0,0,255,0.15)' }} />

            <div className="glass-card relative h-full rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                
              {/* Spark Animation Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-100 overflow-hidden">
                  <div className="w-[100px] h-full bg-blue-600 animate-spark" />
              </div>

              {/* Tag & Visual */}
              <div className="flex justify-between items-center mb-6">
                <div className="font-orbitron text-[10px] tracking-[0.2em] px-3 py-1.5 rounded-sm uppercase font-bold"
                  style={{ background: 'rgba(0,0,255,0.1)', color: '#0000cc', border: '1px solid rgba(0,0,255,0.2)' }}>
                  {card.tag}
                </div>
              </div>

              {/* The SVG Animation Block */}
              {card.visual}

              {/* Content */}
              <h3 className="font-inter text-xl md:text-2xl font-bold mb-4 transition-colors"
                style={{ color: '#0f172a' }}
              >
                {card.title}
              </h3>

              <p className="text-sm font-inter leading-relaxed mb-8 flex-grow" style={{ color: '#475569' }}>
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium" style={{ color: '#334155' }}>
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#0000ff' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Link */}
              <div className="mt-auto">
                <button className="flex items-center gap-2 font-inter text-[12px] uppercase tracking-wide font-bold group-hover:gap-3 transition-all"
                  style={{ color: '#0000ff' }}>
                  Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureSuite;