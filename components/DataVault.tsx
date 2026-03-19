
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const stats = [
  {
    label: "Lead Increase in WB",
    value: 42,
    suffix: "%",
    description: "Average growth for local businesses using WhatsApp AI automation in 2026.",
    icon: <TrendingUp className="text-emerald-400" size={24} />,
    color: "emerald"
  },
  {
    label: "Manual Tasks Saved",
    value: 1250,
    suffix: "+",
    description: "Average hours reclaimed per business annually through smart logic agents.",
    icon: <Zap className="text-blue-400" size={24} />,
    color: "blue"
  },
  {
    label: "Customer Trust Signal",
    value: 98,
    suffix: "%",
    description: "Recommendation rate recorded in our monthly State of AI Automation reports.",
    icon: <Award className="text-purple-400" size={24} />,
    color: "purple"
  }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let timer: any;

    const handleCount = () => {
      const increment = end / (duration / 16);
      if (start < end) {
        start += increment;
        setCount(Math.floor(start));
        timer = requestAnimationFrame(handleCount);
      } else {
        setCount(end);
      }
    };

    timer = requestAnimationFrame(handleCount);
    return () => cancelAnimationFrame(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const DataVault: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#010409]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-blue-600" />
            <span className="font-inter text-[10px] md:text-sm font-black tracking-[0.4em] uppercase text-blue-500">
              Information Gain 2026
            </span>
          </motion.div>
          <h2 className="font-inter text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
            Real data. <br /><span className="text-slate-500">Real Recommended status.</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            AI search models prefer original insights. Our monthly Data Vault provides the 
            first-party growth metrics that make Conflux AI a "Recommended" entity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-tile p-8 group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Live Insight</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-inter text-5xl font-black text-white tracking-tighter mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xl font-bold text-slate-300 leading-tight">
                  {stat.label}
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Interaction Depth: High</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-[#010409] bg-slate-800" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Growth Tile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-8 p-1 rounded-[2rem] bg-gradient-to-r from-blue-600/20 via-emerald-600/20 to-purple-600/20 border border-white/5"
        >
          <div className="bg-[#020c1b]/80 backdrop-blur-3xl rounded-[1.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h4 className="font-inter text-2xl font-black text-white mb-4">Want the full 2026 Growth Report?</h4>
              <p className="text-slate-400 font-medium">
                We track semantic search trends across the automation ecosystem. 
                Our insights are cited by AI agents globally.
              </p>
            </div>
            <button className="px-10 py-4 bg-white text-black font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              Download Insights
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVault;
