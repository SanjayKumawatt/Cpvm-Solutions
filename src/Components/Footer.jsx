import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                className="h-13 w-auto"
                alt="logo"
              />

              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-slate-100 tracking-wide group-hover:text-blue-600 transition-colors">
                  CPVM
                </span>

                <span className="text-sm text-slate-200 font-medium">
                  Management Software Solutions
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              CPVM Management Software Solutions Private Limited is dedicated to building next-generation AI platforms and intelligent automation services that empower businesses to scale with confidence.
            </p>

          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Company</Link></li>
              <li><Link to="/solutions" className="hover:text-teal-400 transition-colors">Our Solutions</Link></li>
              <li><Link to="/platforms" className="hover:text-teal-400 transition-colors">Platforms</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed text-slate-400">
                  No.3 / 1 Nehru Colony,<br />
                  18th Street, Nanganallur,<br />
                  Nanganallur, Kanchipuram,<br />
                  Saidapet, Tamil Nadu,<br />
                  India – 600061
                </address>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:info@cpvmsoftware.in" className="text-sm hover:text-white transition-colors">
                  info@cpvmsoftware.in
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-slate-800 mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © {currentYear} <span className="text-slate-400 font-semibold">CPVM Management Software Solutions Private Limited</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;