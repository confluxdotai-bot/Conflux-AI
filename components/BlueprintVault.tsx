
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Copy, 
  Check, 
  Lock, 
  ArrowUpRight, 
  Zap, 
  Code, 
  Globe, 
  MessageSquare,
  X,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Blueprint {
  id: string;
  title: string;
  category: string;
  content: string;
  is_premium: boolean;
  slug: string;
  created_at: string;
}

const CATEGORIES = ['All', 'AI Prompt', 'Automation', 'SEO', 'Voice AI'];

const BlueprintVault: React.FC = () => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlueprint, setSelectedBlueprint] = useState<Blueprint | null>(null);
  const [copying, setCopying] = useState(false);
  const [email, setEmail] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    fetchBlueprints();
  }, []);

  const fetchBlueprints = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blueprints')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlueprints(data || []);
    } catch (err) {
      console.error('Error fetching blueprints:', err);
      // Fallback data for demo
      setBlueprints([
        {
          id: '1',
          title: "Cold Outreach Script for Singapore Real Estate",
          category: "AI Prompt",
          content: "System: You are an expert real estate copywriter...\nPrompt: Act as a specialist in the Singapore high-end condo market. Write a 3-part Instagram sequence for a new launch in District 9...",
          is_premium: false,
          slug: "real-estate-script",
          created_at: new Date().toISOString()
        },
        {
          id: '2',
          title: "Order Tracking Workflow for Apparel Shops",
          category: "Automation",
          content: "1. Shopify Webhook Trigger (Order Updated)\n2. Filter: Status changed to 'Shipped'\n3. WhatsApp API: Send tracking link to +{{customer.phone}}\n4. Update Google Sheet 'Shipping Master'",
          is_premium: false,
          slug: "apparel-workflow",
          created_at: new Date().toISOString()
        },
        {
          id: '3',
          title: "Full Voice AI Agent Architecture",
          category: "Voice AI",
          content: "RESTRICTED CONTENT: Please enter your email to unlock the full architecture involving Vapi.ai + Make.com + Supabase Vector Search.",
          is_premium: true,
          slug: "voice-ai-architecture",
          created_at: new Date().toISOString()
        },
        {
          id: '4',
          title: "Programmatic SEO Meta-Tag Generator",
          category: "SEO",
          content: "Use this prompt to generate 100+ SEO-optimized meta tags based on a list of keywords and location variables...",
          is_premium: false,
          slug: "seo-meta-generator",
          created_at: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlueprints = blueprints.filter(bp => {
    const matchesSearch = bp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          bp.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || bp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const dailyBlueprint = blueprints[0];

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopying(true);
    setTimeout(() => setCopying(false), 2000);
  };

  return (
    <section id="vault" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Growth Engine</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            The Conflux AI <br />
            <span className="text-blue-600">Blueprint Vault.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">
            Stop guessing. Start deploying. Access our proprietary library of Copy-Paste AI Prompts and high-impact Automation Workflows.
          </p>
        </div>

        {/* Blueprint of the Day (Pinned) */}
        {dailyBlueprint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12 p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/20"
          >
            <div className="bg-white rounded-[2.3rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-[10px] font-black text-white uppercase tracking-widest rounded-full">
                    Blueprint of the Day
                  </span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Available for 24 hours
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  {dailyBlueprint.title}
                </h3>
                
                <p className="text-slate-500 font-medium mb-8 max-w-lg">
                  {dailyBlueprint.category} - One click to deploy this high-converting growth hack directly into your business.
                </p>
                
                <button 
                  onClick={() => setSelectedBlueprint(dailyBlueprint)}
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:translate-x-1 flex items-center gap-3 shadow-xl"
                >
                  Unveil Blueprint <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="relative z-10 w-full md:w-auto">
                <div className="w-full md:w-80 aspect-video rounded-3xl bg-slate-50 border border-slate-200 p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-0" />
                  <Zap size={48} className="text-blue-600 animate-pulse relative z-10" />
                  <div className="absolute bottom-4 right-4 animate-bounce">
                    <ChevronRight size={24} className="text-blue-500 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredBlueprints.map((bp, idx) => (
              <motion.div
                key={bp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedBlueprint(bp)}
                className={`group cursor-pointer p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col justify-between ${
                  idx % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      {bp.category === 'AI Prompt' && <MessageSquare size={20} />}
                      {bp.category === 'Automation' && <Zap size={20} />}
                      {bp.category === 'SEO' && <Globe size={20} />}
                      {bp.category === 'Voice AI' && <Sparkles size={20} />}
                    </div>
                    {bp.is_premium && (
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                        <Lock size={12} className="text-amber-600" />
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Premium</span>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {bp.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{bp.category}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">v1.2</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50 transition-all group-hover:border-blue-500/20">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Click to expand</span>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredBlueprints.length === 0 && !loading && (
          <div className="py-24 text-center">
            <p className="text-slate-400 font-medium">No blueprints found matching your search.</p>
          </div>
        )}
      </div>

      {/* Blueprint Detail Modal */}
      <AnimatePresence>
        {selectedBlueprint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
          >
            <div 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" 
              onClick={() => setSelectedBlueprint(null)}
            />
            
            <motion.div
              layoutId={selectedBlueprint.id}
              className="w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden relative z-10 flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[850px]"
            >
              <button 
                onClick={() => setSelectedBlueprint(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 z-20 transition-all"
              >
                <X size={20} />
              </button>

              {/* Left Side: Meta */}
              <div className="w-full md:w-80 bg-slate-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="p-4 bg-white rounded-3xl border border-slate-100 shadow-sm mb-8">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit mb-4">
                    {selectedBlueprint.category === 'AI Prompt' && <MessageSquare size={20} />}
                    {selectedBlueprint.category === 'Automation' && <Zap size={20} />}
                    {selectedBlueprint.category === 'SEO' && <Globe size={20} />}
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Source Code</h4>
                  <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Verified Deployment</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Target Industry</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600">Real Estate</span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600">SaaS</span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Complexity</h5>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-6 h-1 rounded-full ${i <= 3 ? 'bg-blue-500' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-blue-600 rounded-3xl text-white">
                  <h5 className="text-xs font-black uppercase tracking-widest mb-2">Need a Pro?</h5>
                  <p className="text-[10px] text-white/80 leading-relaxed mb-4">Let our team deploy this workflow customized for your tech stack in 24 hours.</p>
                  <button className="w-full py-3 bg-white text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                    Book Call
                  </button>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight">
                  {selectedBlueprint.title}
                </h3>

                {selectedBlueprint.is_premium && !isUnlocked ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-6 bg-amber-50 rounded-full mb-6 relative">
                      <Lock size={48} className="text-amber-600" />
                      <div className="absolute inset-0 bg-amber-200/20 rounded-full animate-ping" />
                    </div>
                    
                    <h4 className="text-xl font-black text-slate-900 mb-4">Premium High-Value Blueprint</h4>
                    <p className="text-slate-500 text-sm font-medium mb-8 max-w-sm">
                      Enter your work email to unlock this advanced blueprint and join our private list of 2,000+ AI-driven founders.
                    </p>
                    
                    <div className="w-full max-w-sm flex flex-col gap-3">
                      <input 
                        type="email" 
                        placeholder="your@work-email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 transition-all font-medium"
                      />
                      <button 
                        onClick={() => setIsUnlocked(true)}
                        className="w-full py-4 bg-slate-900 border border-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 transition-all"
                      >
                        Unlock Blueprint
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <div className="absolute top-4 right-4 z-10">
                      <button 
                        onClick={() => handleCopy(selectedBlueprint.content)}
                        className={`p-3 rounded-2xl flex items-center gap-2 transition-all ${
                          copying ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'
                        }`}
                      >
                        {copying ? <Check size={16} /> : <Copy size={16} />}
                        <span className="text-[10px] font-black uppercase tracking-widest px-1">
                          {copying ? 'Copied' : 'Copy'}
                        </span>
                      </button>
                    </div>
                    
                    <pre className="p-8 md:p-10 bg-slate-900 rounded-[2rem] text-blue-400 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap border border-slate-800 shadow-2xl">
                      <code>{selectedBlueprint.content}</code>
                    </pre>

                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-600 rounded-lg text-white">
                          <ExternalLink size={16} />
                        </div>
                        <p className="text-xs font-bold text-slate-700">Detailed Tutorial Available</p>
                      </div>
                      <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:translate-x-1 transition-transform">
                        Read Guide →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlueprintVault;
