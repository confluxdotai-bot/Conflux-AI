
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Youtube, ShieldCheck, Zap, Sparkles, TrendingUp } from 'lucide-react';

const videos = [
  {
    id: "Pu4pk5cUJQY",
    title: "Meet the Founder",
    description: "The visionary behind Conflux AI sharing our core mission and ethics.",
    category: "Story"
  },
  {
    id: "QGO29IiEo6M",
    title: "Automation Overload",
    description: "Stop manual work and start automating your business with our smart agents.",
    category: "Value"
  },
  {
    id: "nUfeRKBxVf0",
    title: "Scalable Growth",
    description: "How we help brands grow through technical innovation and AI strategy.",
    category: "Growth"
  },
  {
    id: "UlwmMq_68fs",
    title: "1 Rupee Campaign",
    description: "Our bold initiative to make high-end web tech accessible to everyone.",
    category: "Campaign"
  },
  {
    id: "BQ5oeEbuu60",
    title: "Project Success",
    description: "Real-world impact: A deep dive into a recently completed AI deployment.",
    category: "Work"
  },
  {
    id: "JFnpngS7PEE",
    title: "The Harsh Truth",
    description: "What it really takes to run and scale an AI-first business in 2026.",
    category: "Insight"
  }
];

const VideoTrust: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="trust-videos" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <ShieldCheck className="text-blue-600" size={16} />
            <span className="font-inter text-xs font-black tracking-widest uppercase text-blue-600">
              Personalized Verification
            </span>
          </motion.div>
          
          <h2 className="font-inter text-4xl md:text-5xl font-black text-slate-940 tracking-tight leading-tight mb-4">
            Watch us in <span className="text-blue-600">Action.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-lg mx-auto text-sm">
            We don't hide behind code. See the faces and the drive behind every project we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-blue-500/10 cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {video.description}
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest">
                  <Play size={14} className="fill-blue-400" />
                  <span>Play Short</span>
                </div>
              </div>

              {/* Play Button Center (Hover Only) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl shadow-blue-500/50">
                  <Play size={24} className="fill-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-200">
          {[
            { label: "Direct Insight", icon: <Zap size={20} className="text-blue-500" /> },
            { label: "Founder Access", icon: <TrendingUp size={20} className="text-blue-500" /> },
            { label: "Verified Results", icon: <ShieldCheck size={20} className="text-blue-500" /> },
            { label: "Real Innovation", icon: <Sparkles size={20} className="text-blue-500" /> }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                {item.icon}
              </div>
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 bg-slate-950/90 backdrop-blur-xl"
          >
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-20 transition-all"
              >
                <X size={20} />
              </button>
              
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoTrust;
