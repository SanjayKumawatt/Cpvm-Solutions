import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const buildingPoints = [
    "AI-enabled business software platforms",
    "Intelligent workflow and process automation",
    "Business analytics and decision intelligence systems",
    "Voice-based automation and interaction solutions"
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">
              Our Vision
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Engineering Smart Software. <br />
              <span className="text-slate-500">Solving Practical Problems.</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At <span className="font-bold text-slate-900">CPVM Management Software Solutions Private Limited</span>, we are a growing IT startup working at the intersection of artificial intelligence, software engineering, and data systems.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              We are actively building software platforms and service offerings designed to simplify complex workflows, reduce manual effort, and enable data-driven decision-making. Our approach emphasizes strong engineering, clear use cases, and systems that can evolve as businesses grow.
            </p>

            {/* List Section */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-slate-900 mb-5">What We Are Building</h4>
              <div className="grid grid-cols-1 gap-4">
                {buildingPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-teal-100 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    </div>
                    <span className="text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/platforms" className="flex items-center gap-2 text-teal-700 font-bold hover:gap-4 transition-all group">
                Explore Our Platforms <ArrowRight className="w-5 h-5" />
              </Link>

            </div>
          </motion.div>

          {/* Right Side: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
            
            {/* The Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Software Engineering and AI"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white text-sm font-medium">
                    "Building systems that scale with your business."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;