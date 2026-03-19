
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';

interface AnswerBoxProps {
  question: string;
  answer: string;
  listItems: string[];
  delay?: number;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ question, answer, listItems, delay = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="w-full max-w-4xl mx-auto my-6 md:my-12 overflow-hidden rounded-3xl relative"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(2, 12, 27, 0.98))',
        border: '2px solid rgba(0, 0, 255, 0.3)',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(0, 0, 255, 0.1)',
        backdropFilter: 'blur(20px)'
      }}
    >
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(0, 0, 255, 1), transparent 70%)' }} />
      
      <article className="p-6 md:p-10 relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="mt-1 p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-500">
            <HelpCircle size={24} />
          </div>
          <h2 className="font-inter font-black text-xl md:text-3xl tracking-tight text-white mb-0 leading-tight">
            {question}
          </h2>
        </div>

        <div className="space-y-6 ml-0 md:ml-14">
          <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium">
            {answer}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.3 + (index * 0.1) }}
                className="flex items-center gap-4 text-sm text-blue-100 font-bold group"
              >
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center bg-blue-600 text-white group-hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <ChevronRight size={16} />
                </div>
                <span className="group-hover:text-white transition-colors leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </article>

      {/* Structured Data hint for Google (visual only, actual schema in index.html) */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
        <span className="font-inter text-[8px] tracking-[0.2em] uppercase text-slate-400 font-bold">Google Optimized</span>
      </div>
    </motion.div>
  );
};

export default AnswerBox;
