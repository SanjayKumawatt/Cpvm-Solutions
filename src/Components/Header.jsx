import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ChevronRight, Menu, X } from 'lucide-react';

import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Platforms', path: '/platforms' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              className="h-13 w-auto"
              alt="logo"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-slate-900 tracking-wide group-hover:text-blue-600 transition-colors">
                CPVM
              </span>

              <span className="text-sm text-slate-600 font-medium">
                Management Software Solutions
              </span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 hover:text-teal-600 ${isActive ? 'text-red-500' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to={"/contact"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-teal-800 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30 transition-all"
            >
              Get Started
              <div className="bg-white/20 rounded-full p-1">
                <ChevronRight size={16} />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-teal-600 rounded-lg"
            >
              {link.name}
            </NavLink>
          ))}
          <Link to={"/contact"} className="w-full mt-4 bg-slate-900 text-white py-3 rounded-lg font-bold">
            Get Started
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;