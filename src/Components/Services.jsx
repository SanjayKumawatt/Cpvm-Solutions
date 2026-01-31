import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Database, Mic2, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      brand: "ProcessWeave",
      title: "Business Process Automation Services",
      desc: "Analyzing existing workflows and transforming them into automated, system-driven processes.",
      items: ["Workflow assessment", "Automation design", "AI operational logic", "Efficiency initiatives"],
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      // Automation/Workflow image
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      overlay: "from-slate-950/90 via-slate-900/70 to-transparent"
    },
    {
      brand: "NeuralStack",
      title: "AI System Integration & Performance",
      desc: "Integration and optimization of AI systems within scalable software environments.",
      items: ["Deployment support", "Performance tuning", "Architecture planning", "Monitoring strategies"],
      icon: <Activity className="w-6 h-6 text-blue-400" />,
      // AI/Neural/Tech image
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      overlay: "from-blue-950/90 via-slate-900/70 to-transparent"
    },
    {
      brand: "DataFoundry",
      title: "Data Engineering & Analytics Enablement",
      desc: "Building reliable data foundations required for analytics and intelligent systems.",
      items: ["Pipeline development", "Data modeling", "Analytics preparation", "Quality improvement"],
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      // Data/Server image
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      overlay: "from-indigo-950/90 via-slate-900/70 to-transparent"
    },
    {
      brand: "VoiceLogic Labs",
      title: "Voice Automation & Conversational AI",
      desc: "Developing voice-based automation solutions for communication-intensive workflows.",
      items: ["Voice bot development", "IVR automation", "Speech recognition", "Interaction design"],
      icon: <Mic2 className="w-6 h-6 text-rose-400" />,
      // Sound waves/Voice image
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
      overlay: "from-rose-950/90 via-slate-900/70 to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Services
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Software & AI Engineering Services
          </h3>
          <p className="text-lg text-slate-600 font-medium">
            Alongside product development, we provide services to help organizations design, implement, and improve intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative min-h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl"
            >
              {/* Background Image with Fallback */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.brand}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                  loading="lazy"
                />
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.overlay}`} />
              </div>

              {/* Content */}
              <div className="relative h-full p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-inner">
                    {service.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-white tracking-tight">{service.brand}</h4>
                </div>
                
                <h5 className="text-teal-400 font-bold text-sm uppercase mb-4 tracking-widest">
                  {service.title}
                </h5>
                <p className="text-slate-300 text-base mb-8 leading-relaxed max-w-md">
                  {service.desc}
                </p>

                {/* Scope Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 border-t border-white/10 pt-8">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                      {item}
                    </div>
                  ))}
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;