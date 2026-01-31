import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Copyright, Briefcase, ShieldAlert, Link2, Gavel, RefreshCw } from 'lucide-react';

const TermsConditions = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const terms = [
    {
      title: "Website Use",
      icon: <AlertCircle className="w-5 h-5 text-blue-600" />,
      content: "Content is provided for informational purposes only. We do not guarantee accuracy or completeness."
    },
    {
      title: "Intellectual Property",
      icon: <Copyright className="w-5 h-5 text-purple-600" />,
      content: "All website content is the property of CPVM Management Software Solutions Private Limited and may not be used without permission."
    },
    {
      title: "Products & Services",
      icon: <Briefcase className="w-5 h-5 text-teal-600" />,
      content: "All products and services are subject to separate agreements. Website content does not constitute a binding offer."
    },
    {
      title: "Limitation of Liability",
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      content: "We are not liable for damages arising from use of this website or reliance on its content."
    },
    {
      title: "External Links",
      icon: <Link2 className="w-5 h-5 text-indigo-600" />,
      content: "We are not responsible for third-party websites linked from this site."
    },
    {
      title: "Governing Law",
      icon: <Gavel className="w-5 h-5 text-amber-600" />,
      content: "These terms are governed by the laws of India."
    },
    {
      title: "Modifications",
      icon: <RefreshCw className="w-5 h-5 text-slate-600" />,
      content: "Terms may be updated without notice. Continued use indicates acceptance."
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
            <div className="p-3 bg-blue-50 rounded-xl">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms & Conditions</h1>
              <p className="text-sm text-slate-400 font-medium mt-1">Last Updated: {lastUpdated}</p>
            </div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            By using this website, you agree to the following terms. Please read them carefully before using our services.
          </p>
        </motion.div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terms.map((term, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
            >
              <div className="p-2 bg-slate-50 rounded-lg mb-4">
                {term.icon}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">{term.title}</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-12 p-6 bg-slate-100 rounded-2xl text-center">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
            © {new Date().getFullYear()} CPVM Management Software Solutions Private Limited
          </p>
        </div>

      </div>
    </main>
  );
};

export default TermsConditions;