import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  CheckCircle, 
  Target, 
  Zap, 
  ChevronRight, 
  ShieldCheck, 
  Database 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformsPage = () => {
  const platforms = [
    {
      id: "talentflux",
      name: "TalentFlux AI",
      tagline: "Intelligent Hiring & Candidate Evaluation Platform",
      description: "TalentFlux AI is an AI-assisted recruitment platform designed to reduce manual resume screening and support consistent hiring decisions.",
      longDesc: "The platform analyzes resumes, identifies relevant skills, and compares candidate profiles against job requirements. It helps hiring teams prioritize candidates more efficiently and reduce time-to-hire.",
      capabilities: [
        "Automated resume parsing and data extraction",
        "Skill-based candidate matching",
        "Candidate scoring and ranking",
        "Intelligent shortlisting workflows",
        "Recruiter and hiring dashboards"
      ],
      useCases: [
        "HR teams managing high-volume applications",
        "Recruitment agencies",
        "Growing startups and enterprise hiring teams"
      ],
      icon: <Users className="w-8 h-8 text-purple-600" />,
      color: "purple",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "decisiona",
      name: "Decisiona IQ",
      tagline: "Business Analytics & Decision Intelligence Platform",
      description: "Decisiona IQ is a business analytics platform designed to help organizations monitor performance, track KPIs, and uncover insights from operational data.",
      longDesc: "The platform consolidates data from multiple sources and presents it through dashboards, trends, and predictive indicators that support informed decision-making.",
      capabilities: [
        "Interactive business dashboards",
        "KPI definition and monitoring",
        "Trend analysis and forecasting",
        "AI-assisted insight generation",
        "Role-based reporting access"
      ],
      useCases: [
        "Business leadership teams",
        "Operations and strategy planning",
        "Performance and growth monitoring"
      ],
      icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
      color: "teal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="bg-white">
      {/* --- Page Header --- */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-teal-600">Platforms</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We are developing modular and configurable software platforms designed to adapt to diverse industry needs and complex business workflows.
          </p>
        </motion.div>
      </section>

      {/* --- Platforms Detail Section --- */}
      {platforms.map((platform, idx) => (
        <section key={platform.id} className={`py-24 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              
              {/* Content Side */}
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-xl bg-white border border-slate-100`}>
                    {platform.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">{platform.name}</h2>
                  <p className={`text-lg font-bold mb-6 ${platform.color === 'purple' ? 'text-purple-600' : 'text-teal-600'}`}>
                    {platform.tagline}
                  </p>
                  <p className="text-slate-600 text-lg mb-4 font-medium leading-relaxed">
                    {platform.description}
                  </p>
                  <p className="text-slate-500 text-sm italic mb-10 border-l-4 border-slate-200 pl-4">
                    {platform.longDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Key Capabilities */}
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-5 uppercase tracking-wider text-xs">
                        <Zap size={16} className="text-amber-500" /> Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {platform.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-tight">
                            <CheckCircle size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Intended Use Cases */}
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-5 uppercase tracking-wider text-xs">
                        <Target size={16} className="text-rose-500" /> Intended Use Cases
                      </h3>
                      <ul className="space-y-3">
                        {platform.useCases.map((use, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image side */}
              <div className="lg:w-1/2 w-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-[3rem] overflow-hidden shadow-2xl group"
                >
                  <img 
                    src={platform.image} 
                    alt={platform.name} 
                    className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                    <p className="text-white font-bold text-sm">
                      Actively under development for early-stage pilot testing.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* --- Development Status Bar --- */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ShieldCheck className="w-12 h-12 text-teal-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Scalable Architecture. Reliable Engineering.</h2>
          <p className="text-slate-400 font-medium mb-10">
            Our platforms are built with a focus on clear use cases and systems that evolve as your business grows.
          </p>
          <Link to={"/contact"} className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-teal-500 transition-colors flex items-center gap-2 mx-auto">
            Contact for Early Access <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlatformsPage;