
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck, MapPin } from 'lucide-react';

interface Review {
  name: string;
  initials: string;
  location: string;
  country: string;
  flag: string;
  business: string;
  role: string;
  rating: number;
  content: string;
  highlight: string;
  avatarColor: string;
  isFeatured?: boolean;
  date: string;
}

const ReviewCard: React.FC<{ review: Review; index: number }> = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
    className="relative flex flex-col h-full rounded-2xl overflow-hidden"
    style={{
      background: review.isFeatured
        ? 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(5,15,31,0.85) 50%, rgba(6,182,212,0.06) 100%)'
        : 'rgba(5,15,31,0.7)',
      border: review.isFeatured
        ? '1px solid rgba(14,165,233,0.35)'
        : '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(20px)',
      boxShadow: review.isFeatured
        ? '0 20px 60px rgba(14,165,233,0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
        : '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
    }}
  >
    {/* Featured badge */}
    {review.isFeatured && (
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)' }}>
        <BadgeCheck size={10} style={{ color: '#0ea5e9' }} />
        <span className="font-orbitron text-[8px] tracking-widest uppercase" style={{ color: '#0ea5e9' }}>Verified</span>
      </div>
    )}

    <div className="p-6 md:p-8 flex flex-col h-full">
      {/* Stars + Quote */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className={i < review.rating
                ? (review.isFeatured ? 'fill-amber-400 text-amber-400' : 'fill-sky-400 text-sky-400')
                : 'text-slate-700'}
            />
          ))}
        </div>
        <Quote size={20} style={{ color: 'rgba(14,165,233,0.15)', flexShrink: 0 }} />
      </div>

      {/* Highlight stat */}
      <div className="mb-4 px-3 py-2 rounded-lg inline-block"
        style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.12)' }}>
        <span className="font-orbitron text-[10px] tracking-wider" style={{ color: '#06b6d4' }}>{review.highlight}</span>
      </div>

      {/* Review content */}
      <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-6" style={{ fontStyle: 'normal' }}>
        "{review.content}"
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-orbitron text-[11px] font-bold text-white"
          style={{
            background: review.avatarColor,
            boxShadow: `0 0 16px ${review.isFeatured ? 'rgba(14,165,233,0.4)' : 'rgba(0,0,0,0.3)'}`
          }}
        >
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="text-white font-semibold text-sm truncate">{review.name}</h4>
            <BadgeCheck size={13} style={{ color: '#0ea5e9', flexShrink: 0 }} />
            {!review.isFeatured && (
              <span className="hidden sm:inline font-orbitron text-[8px] tracking-widest" style={{ color: 'rgba(14,165,233,0.5)' }}>VERIFIED</span>
            )}
          </div>
          <p className="text-sky-400 text-xs font-medium truncate">{review.business}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin size={9} className="text-slate-600 flex-shrink-0" />
            <span className="text-[10px] text-slate-500 truncate">{review.location}</span>
            <span className="text-sm">{review.flag}</span>
          </div>
        </div>
        <div className="hidden sm:block text-right flex-shrink-0">
          <span className="text-[9px] text-slate-600">{review.date}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Reviews: React.FC = () => {
  const testimonials: Review[] = [
    {
      name: "Rajesh Varma",
      initials: "RV",
      location: "Surat, Gujarat, India",
      country: "India",
      flag: "🇮🇳",
      business: "Varma Silk Mills",
      role: "Managing Director",
      rating: 5,
      content: "As a textile manufacturer, managing customer queries on WhatsApp was overwhelming our team. Conflux AI's automation bot handles our entire order tracking pipeline. My sales team now focuses only on high-value clients. ROI was visible within the first month.",
      highlight: "📈 3x Sales Efficiency",
      avatarColor: "linear-gradient(135deg, #0369a1, #0ea5e9)",
      isFeatured: false,
      date: "Feb 2025"
    },
    {
      name: "Anjali Gupta",
      initials: "AG",
      location: "Jaipur, Rajasthan, India",
      country: "India",
      flag: "🇮🇳",
      business: "The Craft Soul — D2C Brand",
      role: "Founder & CEO",
      rating: 5,
      content: "We were struggling to scale our D2C brand across India. Conflux built a website that loads instantly even on 4G mobile networks. Our conversion rates jumped by 150% in the first month. They truly understand what Indian consumers need and how to reach them.",
      highlight: "🚀 +150% Conversions",
      avatarColor: "linear-gradient(135deg, #7c3aed, #6366f1)",
      isFeatured: true,
      date: "Jan 2025"
    },
    {
      name: "Sandeep Deshmukh",
      initials: "SD",
      location: "Pune, Maharashtra, India",
      country: "India",
      flag: "🇮🇳",
      business: "Deshmukh Agro-Tech",
      role: "Co-Founder",
      rating: 5,
      content: "Their Precision Ad System saved our business. We were wasting lakhs on ineffective campaigns. Conflux optimised our ad spend using AI, and we reached farmers across 4 states with 40% lower cost per lead. Clinical efficiency — that's the only way to describe it.",
      highlight: "💰 40% Lower Ad Cost",
      avatarColor: "linear-gradient(135deg, #0e7490, #06b6d4)",
      isFeatured: false,
      date: "Mar 2025"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag justify-center mb-4"
        >
          Client Results
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-3xl md:text-5xl font-black text-white mb-4"
        >
          PROVEN <span className="text-gradient">RESULTS</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm max-w-xl mx-auto px-4 leading-relaxed"
        >
          Real impact from real businesses — Indian MSMEs and startups powered by Conflux AI infrastructure.
        </motion.p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((t, i) => (
          <ReviewCard key={i} review={t} index={i} />
        ))}
      </div>

      {/* Trust Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-14 md:mt-20 py-8 md:py-10 rounded-2xl"
        style={{
          background: 'rgba(14,165,233,0.04)',
          border: '1px solid rgba(14,165,233,0.1)'
        }}
      >
        <div className="flex flex-wrap justify-around gap-8 px-6">
          {[
            { value: '4.7 / 5', label: 'Average Client Score', icon: '⭐' },
            { value: '60+', label: 'Businesses Powered', icon: '🏢' },
            { value: '₹100k+', label: 'Revenue Managed', icon: '📊' },
            { value: '< 24h', label: 'Onboarding Time', icon: '⚡' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl md:text-2xl mb-1">{stat.icon}</div>
              <div className="font-orbitron font-bold text-white text-base md:text-xl mb-1">{stat.value}</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 tracking-[0.25em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Reviews;