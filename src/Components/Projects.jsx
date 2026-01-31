import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Mic, BarChart, Settings, Clock, Info } from 'lucide-react';

const Projects = () => {
  const currentWorks = [
    {
      title: "Hiring Automation Workflows",
      desc: "Streamlining candidate screening and evaluation pipelines.",
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      tag: "Pilot Phase"
    },
    {
      title: "Business Analytics Dashboards",
      desc: "Real-time KPI tracking and data visualization platforms.",
      icon: <BarChart className="w-6 h-6 text-teal-500" />,
      tag: "Development"
    },
    {
      title: "Process Automation Tools",
      desc: "Custom systems designed to eliminate manual data entry.",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      tag: "Internal Prototype"
    },
    {
      title: "Voice-based Interaction Systems",
      desc: "Developing conversational AI for automated client support.",
      icon: <Mic className="w-6 h-6 text-rose-500" />,
      tag: "R&D Phase"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Current Work & Explorations</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Projects Under the Hood
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              As an early-stage startup, we are actively working on internal prototypes, pilot projects, and early client implementations.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 max-w-xs"
          >
            <Info className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
            <p className="text-xs text-slate-500 italic">
              More detailed case studies will be shared as projects mature and reach full-scale deployment.
            </p>
          </motion.div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentWorks.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {project.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Status bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-slate-900 rounded-full text-white overflow-hidden relative group cursor-default">
            <span className="text-sm font-semibold relative z-10">Actively Scaling Our Engineering Capabilities</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;