'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdDownloadForOffline, MdOutlineDownloading } from "react-icons/md";

const navLinks = [
  { name: 'Home', href: '#home', desc: 'Back to top' },
  { name: 'About', href: '#about', desc: 'Background & skills' },
  { name: 'Experience', href: '#experience', desc: 'Career journey' },
  { name: 'Projects', href: '#projects', desc: 'Featured builds' },
  { name: 'Research', href: '#research', desc: 'AI & publications' },
  { name: 'Contact', href: '#contact', desc: "Let's connect" },
];

const NavigationMenu = ({ 
  isOpen, 
  onClose, 
  handleNavScroll, 
  handleDownloadPdfResume, 
  handleSignIn, 
  loading 
}) => {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const onLinkClick = (e, href) => {
    onClose();
    if (handleNavScroll) {
      handleNavScroll(e, href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Sidebar */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#070b12] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)]/80 to-transparent" />

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header section inside drawer */}
            <div className="p-6 pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center justify-between">
                <a 
                  href="#home" 
                  onClick={(e) => onLinkClick(e, '#home')}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img src="/onilogo.png" alt="Logo" className="h-8 w-auto" />
                  <div>
                    <p className="text-sm font-bold text-white tracking-tight">Sabbir Khan Oni</p>
                    <p className="text-[10px] text-cyan-400 font-mono">Software Engineer & AI</p>
                  </div>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/40 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="p-6 py-4 flex-1 space-y-1.5 relative z-10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold px-3 mb-2">
                Navigation
              </p>
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => onLinkClick(e, item.href)}
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-200 hover:text-cyan-300 hover:bg-white/5 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[11px] text-gray-400 group-hover:text-cyan-400/70 transition-colors font-mono">{item.desc}</span>
                  </div>
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Actions & Social Footer */}
            <div className="p-6 pt-4 border-t border-white/10 bg-[#06090e]/80 space-y-4 relative z-10">
              {/* Resume Download Button */}
              <button
                onClick={() => {
                  if (handleDownloadPdfResume) handleDownloadPdfResume();
                }}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[rgb(8,165,202)] to-teal-500 hover:from-cyan-500 hover:to-teal-400 shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                {loading ? (
                  <>
                    <MdOutlineDownloading className="animate-spin text-lg" />
                    <span>Preparing Resume...</span>
                  </>
                ) : (
                  <>
                    <MdDownloadForOffline className="text-lg" />
                    <span>Download Resume</span>
                  </>
                )}
              </button>

              {/* Sign In Button */}
              <button
                onClick={() => {
                  onClose();
                  if (handleSignIn) handleSignIn();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                Sign In
              </button>

              {/* Social Links & Status */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono text-gray-400">Available to hire</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sabbirkhanoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white border border-white/10 hover:scale-105 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/mdsabbirkhanoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
