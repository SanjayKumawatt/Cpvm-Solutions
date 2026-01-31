import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden">
      
      {/* ================= BACKGROUND ELEMENTS ================= */}
      
      {/* 1. RIGHT SIDE: Animated Tech Arcs */}
      <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none select-none opacity-60">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <defs>
              <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0d9488', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <circle cx="250" cy="250" r="240" stroke="#f1f5f9" strokeWidth="1" fill="none" />
            <circle cx="250" cy="250" r="200" stroke="#e2e8f0" strokeWidth="1" fill="none" strokeDasharray="12 8" />
            <path d="M 250, 50 A 200, 200 0 0, 1 450, 250" fill="none" stroke="url(#techGrad)" strokeWidth="30" strokeLinecap="round" />
            <circle cx="250" cy="250" r="140" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
      </div>

      {/* 2. Abstract Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-teal-50/50 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8"
          >
            <Sparkles size={16} className="text-teal-600" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Next-Gen AI Startup</span>
          </motion.div>

          {/* Updated Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-[4.5rem] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Building Intelligent Software for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-slate-900">
              Real-World Business Needs
            </span>
          </motion.h1>

          {/* Updated Sub-tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base font-bold text-teal-700 mb-10"
          >
            <span>AI Platforms</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Automation Systems</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Data Intelligence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Voice Solutions</span>
          </motion.div>

          {/* Updated Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 mb-12 font-medium leading-relaxed max-w-3xl"
          >
            <strong className="text-slate-900">CPVM Management Software Solutions Private Limited</strong> is an early-stage technology startup focused on building AI-powered software products and intelligent automation services that help businesses operate efficiently, make informed decisions, and scale with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-5"
          >
            <Link 
              to="/solutions"
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-slate-200"
            >
              Explore Solutions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-teal-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;