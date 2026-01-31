import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl shadow-teal-900/20"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[80px] -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] -ml-20 -mb-20" />

          <div className="relative z-10 px-8 py-16 md:py-24 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
            >
              <Sparkles size={16} className="text-teal-400" />
              <span className="text-xs font-bold text-teal-100 uppercase tracking-[0.2em]">Ready to Innovate?</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Let’s Build the Future of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Intelligent Management
              </span> Together.
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you're looking for custom AI platforms, automation services, or data intelligence, CPVM is here to engineer the right solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact"
                  className="flex items-center gap-3 px-10 py-4 bg-teal-500 text-slate-950 rounded-full font-bold text-lg hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25"
                >
                  Get in Touch
                  <MessageSquare size={20} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/solutions"
                  className="flex items-center gap-3 px-10 py-4 bg-white/5 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Explore Solutions
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;