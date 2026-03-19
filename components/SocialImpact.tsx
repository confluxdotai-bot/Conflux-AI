
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, TrendingUp, Users, BarChart3, ArrowUpRight } from 'lucide-react';

const clientResults = [
  {
    name: "AR Fitness & Yoga",
    category: "Health & Wellness",
    reach: "2.2K+",
    period: "Last 30 Days",
    description: "Strength & Mindfulness content strategy targeting local fitness enthusiasts.",
    image: "/social_fitness.jpg",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Rhythm & Routes",
    category: "Entertainment",
    reach: "404.6K+",
    period: "Last 30 Days",
    description: "Viral storytelling and cultural dance showcases driving massive engagement.",
    image: "/social_dance.jpg",
    color: "from-orange-500/20 to-rose-500/20"
  },
  {
    name: "Get In Tech",
    category: "Tech & Deals",
    reach: "491.1K+",
    period: "Last 30 Days",
    description: "High-octane unboxing and daily deal alerts for the tech community.",
    image: "/social_tech.jpg",
    color: "from-blue-500/20 to-indigo-500/20"
  }
];

const SocialImpact: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="p-1.5 rounded-full bg-blue-600">
                <Instagram size={14} className="text-white" />
              </div>
              <span className="font-inter text-xs font-black tracking-widest uppercase text-blue-600">
                Social Media Management
              </span>
            </motion.div>
            
            <h2 className="font-inter text-4xl md:text-5xl font-black text-slate-940 tracking-tight leading-tight">
              Real Reach. <br />
              <span className="text-blue-600">Exponential Growth.</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex items-center gap-8 py-4 px-8 bg-slate-50 border border-slate-100 rounded-2xl"
          >
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900 line-clamp-1">900K+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Monthly Reach</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900">300%</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Engagement Lift</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientResults.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                
                {/* Dashboard Metric Overlay */}
                <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-blue-600" />
                    <span className="font-inter font-black text-[10px] uppercase tracking-wider text-slate-900">Live Metric</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1">{client.category}</p>
                  <h3 className="text-xl font-black text-white">{client.name}</h3>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${client.color} border border-white/40 mb-6 transition-transform duration-500 group-hover:scale-[1.02]`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Professional Dashboard</span>
                    <BarChart3 size={14} className="text-slate-600" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-3xl font-black text-slate-900">{client.reach}</h4>
                    <span className="text-xs font-bold text-emerald-600 flex items-center">
                       Reach <ArrowUpRight size={12} />
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{client.period}</p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {client.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white" />
                    ))}
                  </div>
                  <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:translate-x-1 transition-transform flex items-center gap-1">
                    Manage Account <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[2rem] bg-slate-900 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-2">Ready to scale your <span className="text-blue-500">social footprint?</span></h3>
            <p className="text-slate-400 font-medium text-sm">We don't just post content; we engineer viral performance and brand authority.</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialImpact;
