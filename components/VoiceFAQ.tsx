
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Search, Bot, MessageCircle, ChevronDown, Play, Pause } from 'lucide-react';

const faqs = [
  {
    question: "How do your AI agents integrate with existing workflows?",
    answer: "Our agents use standard API hooks and Zapier pipelines to connect to your CRM, WhatsApp Business, and Email systems in under 48 hours.",
  },
  {
    question: "What makes your web design 'Conversion-Optimized'?",
    answer: "We focus on semantic load speeds and interaction depth. By using Bento grids and AI-driven layout adjustments, we reduce friction and increase user trust signals.",
  },
  {
    question: "Do you offer post-deployment support for AI systems?",
    answer: "Yes, we provide 24/7 monitoring and monthly 'State of AI' efficiency audits to ensure your agents are learning from new customer interactions.",
  }
];

const VoiceFAQ: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const simulateVoice = () => {
    setIsListening(true);
    setSearchQuery("");
    
    const text = "How do AI agents work?";
    let i = 0;
    
    const interval = setInterval(() => {
      setSearchQuery(prev => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => setIsListening(false), 500);
      }
    }, 100);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-6"
          >
            <Bot size={14} />
            AI Solution Engine
          </motion.div>
          <h2 className="font-inter text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Everything you need <br /><span className="text-blue-600">to know.</span>
          </h2>
        </div>

        {/* Voice Search Simulation */}
        <div className="mb-12">
          <div className="relative group">
            <div className={`absolute inset-0 bg-blue-600/5 blur-2xl rounded-3xl transition-opacity duration-500 ${isListening ? 'opacity-100' : 'opacity-0'}`} />
            <div className="relative glass-tile p-2 md:p-4 rounded-3xl border-slate-200 bg-slate-50 flex items-center gap-4 transition-all duration-300">
              <div className="flex-1 flex items-center px-4 gap-4">
                <Search className="text-slate-400" size={20} />
                <input 
                  type="text"
                  placeholder="Ask a voice question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:outline-none text-slate-900 font-medium placeholder:text-slate-400"
                />
              </div>
              <button 
                onClick={simulateVoice}
                className={`p-4 rounded-2xl transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-900 text-white hover:bg-blue-600'}`}
              >
                {isListening ? <Pause size={20} /> : <Mic size={20} />}
              </button>
            </div>
            {isListening && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-4 text-center text-[10px] font-black text-blue-500 uppercase tracking-widest"
              >
                Processing Voice Intent...
              </motion.div>
            )}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                activeFaq === index ? 'bg-slate-50 border-blue-500/20' : 'bg-white border-slate-100 hover:border-blue-500/10'
              }`}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-inter text-lg md:text-xl font-black text-slate-900 tracking-tight leading-tight">
                  {faq.question}
                </h3>
                <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="text-slate-400" size={20} />
                </div>
              </div>

              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="mt-8 flex items-center gap-6">
                         <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Information Gain High
                         </div>
                         <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-500 transition-colors">
                            Deep Dive
                         </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceFAQ;
