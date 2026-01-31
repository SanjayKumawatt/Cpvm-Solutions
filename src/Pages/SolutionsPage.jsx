import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Database, Mic2, ArrowRight, CheckCircle2 } from 'lucide-react';

import img from "../assets/h.avif"
import { Link } from 'react-router-dom';
import Projects from '../Components/Projects';

const SolutionsPage = () => {
  const services = [
    {
      brand: "ProcessWeave",
      title: "Business Process Automation Services",
      desc: "ProcessWeave focuses on analyzing existing workflows and transforming them into automated, system-driven processes.",
      scope: ["Workflow assessment and optimization", "Automation design and implementation", "AI-assisted operational logic", "Cost and efficiency improvement initiatives"],
      icon: <Layers className="w-8 h-8 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      color: "border-teal-100 bg-teal-50/30"
    },
    {
      brand: "NeuralStack",
      title: "AI System Integration & Performance Services",
      desc: "NeuralStack supports the integration and optimization of AI systems within scalable software environments.",
      scope: ["AI system deployment support", "Performance tuning and reliability improvements", "Architecture planning for scale", "Monitoring and optimization strategies"],
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      color: "border-blue-100 bg-blue-50/30"
    },
    {
      brand: "DataFoundry",
      title: "Data Engineering & Analytics Enablement",
      desc: "DataFoundry builds reliable data foundations required for analytics and intelligent systems.",
      scope: ["Data pipeline development", "Data modeling and transformation", "Analytics-ready data preparation", "Data quality and consistency improvement"],
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      image: img,
      color: "border-indigo-100 bg-indigo-50/30"
    },
    {
      brand: "VoiceLogic Labs",
      title: "Voice Automation & Conversational AI Solutions",
      desc: "VoiceLogic Labs develops voice-based automation solutions for communication-intensive workflows.",
      scope: ["Voice bot development", "IVR automation systems", "Speech recognition workflows", "Conversational interaction design"],
      icon: <Mic2 className="w-8 h-8 text-rose-500" />,
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
      color: "border-rose-100 bg-rose-50/30"
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            Our <span className="text-teal-600">Solutions</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Software & AI Engineering Services
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Alongside product development, we provide services to help organizations design, implement, and improve intelligent systems.
          </p>
        </motion.div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Content Side */}
              <div className="lg:w-1/2">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl border ${service.color} mb-6`}>
                  {service.icon}
                  <span className="font-black uppercase tracking-widest text-slate-900 text-sm">{service.brand}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h3>
                <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
                  {service.desc}
                </p>

                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full" />
                    Service Scope
                  </h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {service.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] group">
                  <img 
                    src={service.image} 
                    alt={service.brand} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <Projects/>
        
      </section>

      {/* Bottom CTA Hook */}
      <section className="py-24 bg-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need a custom solution tailored to your workflow?
          </h2>
          <Link to={"/contact"} 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-teal-500 text-slate-950 px-10 py-4 rounded-full font-bold text-lg"
          >
            Start a Conversation <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;