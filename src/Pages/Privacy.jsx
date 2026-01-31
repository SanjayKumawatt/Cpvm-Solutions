import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Share2, Cookie, RefreshCw, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const sections = [
    {
      title: "Information We Collect",
      icon: <Eye className="w-5 h-5 text-teal-600" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Personal details such as name, email, phone number.</li>
          <li>Business or project-related information shared voluntarily.</li>
          <li>Technical data including device and usage information.</li>
        </ul>
      )
    },
    {
      title: "How We Use Information",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Responding to inquiries and communication.</li>
          <li>Providing service-related information.</li>
          <li>Improving website and offerings.</li>
          <li>Internal analysis and research.</li>
        </ul>
      )
    },
    {
      title: "Data Protection",
      icon: <Lock className="w-5 h-5 text-indigo-600" />,
      content: "We apply reasonable security measures to protect information and restrict access to authorized personnel only."
    },
    {
      title: "Information Sharing",
      icon: <Share2 className="w-5 h-5 text-purple-600" />,
      content: "We do not sell or trade personal information. Data may be shared only when legally required or necessary for service delivery."
    },
    {
      title: "Cookies",
      icon: <Cookie className="w-5 h-5 text-amber-600" />,
      content: "Cookies may be used to improve user experience. Users can manage cookies through browser settings."
    },
    {
      title: "Policy Updates",
      icon: <RefreshCw className="w-5 h-5 text-rose-600" />,
      content: "This policy may be updated periodically. Continued use of the website implies acceptance."
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-teal-50 rounded-xl">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-sm text-slate-400 font-medium mt-1">Last Updated: {lastUpdated}</p>
            </div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900">CPVM Management Software Solutions Private Limited</strong> respects the privacy of visitors, users, and clients. This policy explains how information is collected, used, and protected.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              </div>
              <div className="text-slate-600 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Have questions about our privacy practices?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-800 transition-colors">
            <Mail size={18} /> Contact Support
          </Link>
        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;