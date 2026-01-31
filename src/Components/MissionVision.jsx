import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, ShieldCheck } from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      title: "Our Mission",
      description: "To build intelligent software products and automation systems that improve efficiency, accuracy, and business clarity.",
      icon: <Target className="w-8 h-8 text-teal-600" />,
      bg: "bg-teal-50"
    },
    {
      title: "Our Vision",
      description: "To grow into a trusted software and AI solutions provider known for reliable engineering and practical innovation.",
      icon: <Eye className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Why We Exist",
      description: "Technology should simplify work, not complicate it. We exist to design AI-driven systems that are understandable, usable, and aligned with real business workflows.",
      icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-teal-700 uppercase bg-teal-50 rounded-full"
          >
            Core Philosophy
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Driving the Next Wave of Digital Intelligence
          </h2>
          <p className="text-slate-600">
            At CPVM, our focus is on building systems that don't just work, but excel in real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Subtle Decorative Number */}
              <span className="absolute top-8 right-8 text-5xl font-black text-slate-50 select-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-200"
        >
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-teal-600 w-6 h-6" />
            <span className="text-xl font-bold text-slate-900">Trusted Engineering</span>
          </div>
          <p className="text-slate-500 text-sm text-center max-w-md">
            Dedicated to building reliable, scalable, and understandable AI solutions for businesses of all sizes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;