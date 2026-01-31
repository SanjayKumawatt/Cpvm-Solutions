import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Send, MessageSquare, Clock, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Set status to submitting (show loader)
    setFormStatus('submitting');

    // 2. Simulate network request (2 seconds delay)
    setTimeout(() => {
      setFormStatus('success');
      // Yahan aap baad mein actual API call daal sakte ho
    }, 2000);
  };

  const resetForm = () => {
    setFormStatus('idle');
  };

  return (
    <main className="bg-slate-50 pt-24 pb-24">
      
      {/* --- Page Header --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-teal-600" />
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Let's Start a <br /><span className="text-teal-600">Conversation.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Whether you are interested in our AI platforms, looking for automation services, or just want to discuss a potential partnership, we are here to listen.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT COLUMN: Contact Info --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/3 space-y-8"
          >
            {/* Address Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <MapPin className="w-10 h-10 text-teal-600 mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visit Our Office</h3>
              <address className="not-italic text-slate-600 leading-loose font-medium">
                No.3 / 1 Nehru Colony,<br />
                18th Street, Nanganallur,<br />
                Nanganallur, Kanchipuram,<br />
                Saidapet, Tamil Nadu,<br />
                India – 600061
              </address>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-900/20 rounded-tl-full -mr-10 -mb-10 transition-transform group-hover:scale-110" />
              <Mail className="w-10 h-10 text-teal-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-slate-400 text-sm mb-6">For general inquiries and support</p>
              <a 
                href="mailto:info@cpvmsoftware.in" 
                className="text-lg font-bold text-white hover:text-teal-400 transition-colors border-b-2 border-teal-500/30 pb-1"
              >
                info@cpvmsoftware.in
              </a>
            </div>

            {/* Response Time Note */}
            <div className="flex items-center gap-4 p-6 bg-teal-50 rounded-2xl border border-teal-100">
              <Clock className="w-6 h-6 text-teal-600" />
              <p className="text-sm text-teal-800 font-bold">
                We typically respond to inquiries within 24 business hours.
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Interactive Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 min-h-[600px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  /* --- SUCCESS STATE --- */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-10"
                  >
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
                    <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for reaching out to CPVM. Our team will review your inquiry and get back to you shortly at your provided email.
                    </p>

                    <button 
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-800 transition-colors"
                    >
                      <ArrowLeft size={20} /> Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* --- FORM STATE --- */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                      <MessageSquare className="text-teal-500" /> Send us a message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@company.com" 
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">I'm interested in</label>
                        <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-900 font-medium cursor-pointer appearance-none">
                          <option>General Inquiry</option>
                          <option>TalentFlux AI Platform</option>
                          <option>Decisiona IQ Platform</option>
                          <option>Automation Services</option>
                          <option>Data Engineering</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                        <textarea 
                          required
                          rows="5"
                          placeholder="Tell us a bit about your project or requirement..."
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400 resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all
                          ${formStatus === 'submitting' 
                            ? 'bg-slate-700 text-slate-300 cursor-not-allowed' 
                            : 'bg-slate-900 text-white hover:bg-teal-700 shadow-slate-200'
                          }`}
                      >
                        {formStatus === 'submitting' ? (
                          <>Processing <Loader2 className="animate-spin" /></>
                        ) : (
                          <>Send Message <Send size={20} /></>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
};

export default ContactPage;