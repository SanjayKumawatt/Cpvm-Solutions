import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart3, Users, Zap, LayoutDashboard, BrainCircuit } from 'lucide-react';

const ProductSection = () => {
  const products = [
    {
      name: "TalentFlux AI",
      tagline: "Intelligent Hiring & Candidate Evaluation Platform",
      description: "TalentFlux AI is an AI-assisted recruitment platform designed to reduce manual resume screening and support consistent hiring decisions.",
      longDesc: "The platform analyzes resumes, identifies relevant skills, and compares candidate profiles against job requirements. It helps hiring teams prioritize candidates more efficiently and reduce time-to-hire.",
      capabilities: ["Automated resume parsing", "Skill-based matching", "Candidate scoring", "Intelligent shortlisting", "Recruiter dashboards"],
      useCases: ["HR teams", "Recruitment agencies", "Growing startups"],
      icon: <Users className="w-6 h-6 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      theme: "from-purple-600 to-indigo-700"
    },
    {
      name: "Decisiona IQ",
      tagline: "Business Analytics & Decision Intelligence Platform",
      description: "Decisiona IQ is a business analytics platform designed to help organizations monitor performance, track KPIs, and uncover insights from operational data.",
      longDesc: "The platform consolidates data from multiple sources and presents it through dashboards, trends, and predictive indicators that support informed decision-making.",
      capabilities: ["Interactive dashboards", "KPI monitoring", "Trend analysis", "AI-assisted insights", "Role-based reporting"],
      useCases: ["Leadership teams", "Operations & Strategy", "Growth monitoring"],
      icon: <BarChart3 className="w-6 h-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
      theme: "from-teal-600 to-slate-900"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Software Platforms Under Development
          </motion.h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Our products are being developed as modular and configurable platforms that can adapt to different industries and business needs.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-16">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col lg:flex-row gap-8 bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100"
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.theme} opacity-20`} />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  {product.icon}
                  <span className="font-bold text-slate-900">{product.name}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-teal-600 font-bold mb-6">{product.tagline}</p>
                
                <p className="text-slate-600 mb-4 font-medium">{product.description}</p>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed italic">{product.longDesc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Capabilities */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                      <BrainCircuit size={18} className="text-teal-600" /> Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {product.capabilities.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} className="text-teal-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                      <Zap size={18} className="text-amber-500" /> Intended Use Cases
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {product.useCases.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;