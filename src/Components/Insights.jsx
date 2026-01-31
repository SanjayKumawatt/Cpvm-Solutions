import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Cpu, Lightbulb, ArrowRight } from 'lucide-react';

const Insights = () => {
  const notes = [
    {
      title: "Building AI products as a startup",
      category: "Strategy",
      icon: <Cpu className="w-5 h-5 text-teal-600" />,
      desc: "Navigating the challenges of integrating LLMs and custom models into early-stage products."
    },
    {
      title: "Software architecture & design decisions",
      category: "Engineering",
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      desc: "Why modularity and scalability are our top priorities from day zero of development."
    },
    {
      title: "Automation & data engineering practices",
      category: "Data Science",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      desc: "Best practices for building reliable data pipelines that power intelligent automation."
    },
    {
      title: "Lessons from early-stage development",
      category: "Founders Note",
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      desc: "Key takeaways from our journey of transforming ideas into functional software prototypes."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[2px] w-8 bg-teal-600" />
            <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs">Insights</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Learnings & <span className="text-slate-400">Engineering Notes</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
            We believe in transparency and continuous learning. Here we share our technical journey and architectural insights.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-teal-50 transition-colors">
                  {note.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">
                  {note.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors leading-tight">
                {note.title}
              </h3>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                {note.desc}
              </p>

              
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default Insights;