import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import MissionVision from '../Components/MissionVision';
import AboutSection from '../Components/About';
import Projects from '../Components/Projects';
import Team from '../Components/Team';

const AboutPage = () => {
  const coreValues = [
    {
      title: "Our Mission",
      desc: "To build intelligent software products and automation systems that improve efficiency, accuracy, and business clarity.",
      icon: <Target className="w-6 h-6 text-teal-600" />,
      color: "bg-teal-50"
    },
    {
      title: "Our Vision",
      desc: "To grow into a trusted software and AI solutions provider known for reliable engineering and practical innovation.",
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Why We Exist",
      desc: "Technology should simplify work, not complicate it. We exist to design AI-driven systems that are understandable, usable, and aligned with real business workflows.",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-50"
    }
  ];

  return (
    <main className="pt-20 pb-24 bg-white">
      {/* Hero Section of About Page */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-[2px] bg-teal-600" />
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">About Us</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight"
            >
              From Concepts to <br />
              <span className="text-slate-400">Working Software</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium"
            >
              <p>
                <strong className="text-slate-900 font-bold">CPVM Management Software Solutions Private Limited</strong> was founded to help organizations move from ideas to usable, scalable software.
              </p>
              <p>
                Many businesses recognize the potential of AI and automation but struggle to implement it effectively. As a startup, we focus on building practical systems with clear functionality, strong foundations, and real operational value.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-teal-500 rounded-r-xl">
                <p className="text-sm italic text-slate-700">
                  "We are currently in an active build phase, developing core products while working on early implementations and continuous improvements."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Abstract Visual for About Page */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team Thinking" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" /> */}
            </div>
            {/* Status Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2 text-teal-600">
                <Activity size={20} className="animate-pulse" />
                <span className="font-bold text-xs uppercase">Build Phase</span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold">Actively developing core AI products and services.</p>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Values Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<section>
        {/* <MissionVision/> */}
        <AboutSection/>
        <Projects/>
        <Team/>
      </section>
      

      {/* Trust Quote / Footer Hint */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-12 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
          <ShieldCheck className="w-12 h-12 text-teal-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">A Foundation Built on Reliability</h2>
          <p className="text-lg text-slate-500 font-medium">
            We don't just build software; we build foundations that businesses can trust as they navigate the future of digital intelligence.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;