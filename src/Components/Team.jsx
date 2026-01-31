import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, BrainCircuit, LayoutPanelLeft } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Arun Prakash",
      role: "Founder & Director",
      desc: "Leads product vision, technology strategy, and overall company direction.",
      icon: <User className="w-6 h-6 text-slate-700" />,
      color: "border-slate-200 bg-slate-50"
    },
    {
      name: "Meena R",
      role: "Lead Software Engineer",
      desc: "Responsible for system architecture, backend development, and performance.",
      icon: <Code2 className="w-6 h-6 text-teal-600" />,
      color: "border-teal-100 bg-teal-50/30"
    },
    {
      name: "Karthik S",
      role: "AI & Data Engineering Specialist",
      desc: "Works on AI models, data pipelines, and analytics systems.",
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
      color: "border-blue-100 bg-blue-50/30"
    },
    {
      name: "Ananya V",
      role: "Product & UX Coordinator",
      desc: "Handles product planning, user experience, and feature prioritization.",
      icon: <LayoutPanelLeft className="w-6 h-6 text-rose-600" />,
      color: "border-rose-100 bg-rose-50/30"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4"
          >
            People Behind CPVM
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Team
          </h3>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            CPVM is built by a focused team of engineers and product thinkers dedicated to creating practical, scalable software.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[2rem] border-2 ${member.color} flex flex-col items-start hover:shadow-lg transition-all duration-300`}
            >
              {/* Abstract Icon Placeholder (Since no images) */}
              <div className="p-4 bg-white rounded-2xl shadow-sm mb-6">
                {member.icon}
              </div>

              <div className="mb-4">
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-teal-700 font-bold text-xs uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              <div className="w-8 h-[2px] bg-slate-200 mb-4" />

              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm font-medium">
            Building the future of management software, one engineer at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;