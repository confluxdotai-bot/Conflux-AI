
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Zap, Target, Layout, ArrowRight, Share2, Search, Palette } from 'lucide-react';

const clusters = [
  {
    id: 'agents',
    title: "AI Agents",
    icon: <Zap size={24} />,
    color: "#3b82f6",
    links: ['web', 'ads', 'optimization'],
    description: "The brain of your business. Automating WhatsApp and customer support."
  },
  {
    id: 'web',
    title: "Web Solutions",
    icon: <Layout size={24} />,
    color: "#10b981",
    links: ['agents', 'creative'],
    description: "Conversion-optimized surfaces that house your AI capabilities."
  },
  {
    id: 'ads',
    title: "Ad Scaling",
    icon: <Target size={24} />,
    color: "#8b5cf6",
    links: ['agents', 'creative'],
    description: "Precision systems that feed your AI agents with qualified leads."
  },
  {
    id: 'creative',
    title: "Creative Hub",
    icon: <Palette size={24} />,
    color: "#e1306c",
    links: ['web', 'ads'],
    description: "High-retention video editing and social media assets that fuel the growth engine."
  },
  {
    id: 'optimization',
    title: "SEO/GEO/AEO",
    icon: <Search size={24} />,
    color: "#3b82f6",
    links: ['agents', 'web'],
    description: "Advanced optimization ensuring your brand dominates generative search and AI overviews."
  }
];

const SemanticMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0a0f18]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden" 
        style={{ backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Compact Graphical Tree */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[450px] h-full">
              {/* Connecting Lines (Svg) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Connection lines between nodes in a more complex web */}
                <line x1="50%" y1="20%" x2="20%" y2="45%" stroke="url(#linkGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="50%" y1="20%" x2="80%" y2="45%" stroke="url(#linkGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="20%" y1="45%" x2="80%" y2="45%" stroke="url(#linkGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="20%" y1="45%" x2="20%" y2="75%" stroke="url(#linkGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="80%" y1="45%" x2="80%" y2="75%" stroke="url(#linkGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="20%" y1="75%" x2="80%" y2="75%" stroke="url(#linkGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="50%" y1="20%" x2="50%" y2="75%" stroke="url(#linkGrad)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              </svg>

              {/* Nodes */}
              {/* Top Node */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
                <Node 
                    data={clusters[0]} 
                    isActive={activeNode === clusters[0].id} 
                    onHover={() => setActiveNode(clusters[0].id)}
                    onLeave={() => setActiveNode(null)}
                />
              </div>
              {/* Middle Nodes */}
              <div className="absolute top-[40%] left-[5%]">
                <Node 
                    data={clusters[1]} 
                    isActive={activeNode === clusters[1].id}
                    onHover={() => setActiveNode(clusters[1].id)}
                    onLeave={() => setActiveNode(null)}
                />
              </div>
              <div className="absolute top-[40%] right-[5%]">
                <Node 
                    data={clusters[2]} 
                    isActive={activeNode === clusters[2].id}
                    onHover={() => setActiveNode(clusters[2].id)}
                    onLeave={() => setActiveNode(null)}
                />
              </div>
              {/* Bottom Nodes */}
              <div className="absolute bottom-[15%] left-[5%]">
                <Node 
                    data={clusters[3]} 
                    isActive={activeNode === clusters[3].id}
                    onHover={() => setActiveNode(clusters[3].id)}
                    onLeave={() => setActiveNode(null)}
                />
              </div>
              <div className="absolute bottom-[15%] right-[5%]">
                <Node 
                    data={clusters[4]} 
                    isActive={activeNode === clusters[4].id}
                    onHover={() => setActiveNode(clusters[4].id)}
                    onLeave={() => setActiveNode(null)}
                />
              </div>

              {/* Cluster Detail Tooltip (Overlay/Center of Tree) */}
              <AnimatePresence mode="wait">
                {activeNode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] p-6 glass-tile border-blue-500/30 text-center z-50 shadow-[0_0_80px_rgba(0,0,0,0.8)] pointer-events-auto"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase tracking-[0.2em] text-blue-500 mb-4">
                       Knowledge Hub
                    </div>
                    <h4 className="text-white font-black text-xl mb-3 tracking-tighter">
                      {clusters.find(c => c.id === activeNode)?.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
                      {clusters.find(c => c.id === activeNode)?.description}
                    </p>
                    <button className="w-full py-3 bg-white text-black font-black rounded-lg text-[8px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                      Explore Semantic Link <ArrowRight size={12} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Texts */}
          <div className="text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Share2 className="text-blue-500" size={24} />
              <span className="font-inter text-xs md:text-sm font-black tracking-[0.3em] uppercase text-blue-500">
                Semantic Ecosystem
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-inter text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]"
            >
              Everything is <br />
              <span className="text-blue-500 text-gradient">connected.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-slate-400 font-medium text-lg md:text-xl leading-relaxed mb-10"
            >
              Google 2026 rewards specialization. Our Semantic Map shows how our tools 
              work together to create a unified growth engine for your brand.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                   <Network size={20} />
                </div>
                <div>
                   <h5 className="text-white font-black text-sm uppercase tracking-widest mb-1">Knowledge Cluster</h5>
                   <p className="text-slate-400 text-xs">Proprietary topical grouping that AI engines prioritize for recommendation.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Node = ({ data, isActive, onHover, onLeave }: any) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.1 }}
      className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 border-2 ${
        isActive ? 'bg-blue-600 border-white shadow-[0_0_40px_rgba(37,99,235,0.6)]' : 'bg-[#020c1b] border-blue-500/30 text-blue-500'
      }`}
    >
      <div className={isActive ? 'text-white' : 'text-blue-500'}>
        {data.icon}
      </div>
      
      {/* Interaction Pulse */}
      {!isActive && (
        <div className="absolute -inset-2 rounded-full border border-blue-500/10 animate-ping opacity-50" />
      )}
    </motion.div>
  );
};

export default SemanticMap;
