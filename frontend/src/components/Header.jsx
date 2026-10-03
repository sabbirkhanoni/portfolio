'use client';

import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import { MdDownloadForOffline, MdOutlineDownloading } from "react-icons/md";
import { toast } from 'react-hot-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    toast.error('Sign In functionality coming soon using Scalekit');
  };

  const handleDownloadPdfResume = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const link = document.createElement('a');
      link.href = '/MD_SABBIR_KHAN_ONI_RESUME.pdf';
      link.download = 'MD_SABBIR_KHAN_ONI_RESUME.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const handleNavScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] md:w-[88%] lg:w-[84%] max-w-6xl z-40">
        <div className="backdrop-blur-xl bg-[#080d14]/85 border border-white/10 shadow-2xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavScroll(e, '#home')} 
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <img 
                src="/onilogo.png" 
                alt="Logo" 
                className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105" 
              />
              <span className="hidden sm:inline-block text-xs font-mono font-semibold tracking-wider text-gray-300 group-hover:text-cyan-300 transition-colors uppercase">
                Sabbir.dev
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 text-xs lg:text-sm font-medium">
              <a 
                href="#home" 
                onClick={(e) => handleNavScroll(e, '#home')} 
                className="text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavScroll(e, '#about')} 
                className="text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={(e) => handleNavScroll(e, '#experience')} 
                className="text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleNavScroll(e, '#projects')} 
                className="text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                Projects
              </a>
              <a 
                href="#research" 
                onClick={(e) => handleNavScroll(e, '#research')} 
                className="text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                Research
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavScroll(e, '#contact')} 
                className="text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer py-1"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Resume Download */}
              <button
                onClick={handleDownloadPdfResume}
                disabled={loading}
                className="flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:scale-105 active:scale-95 transition-transform duration-150 shadow-md shadow-red-600/35 hover:shadow-red-600/60 border border-white/20 cursor-pointer"
              >
                {loading ? (
                  <MdOutlineDownloading className="animate-spin text-base" />
                ) : (
                  <MdDownloadForOffline className="text-base" />
                )}
                <span>Resume</span>
              </button>

              {/* Sign In */}
              <button 
                onClick={handleSignIn} 
                className="py-1.5 px-3.5 rounded-full text-xs font-semibold text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all cursor-pointer active:scale-95"
              >
                Sign In
              </button>
            </div>

            {/* Mobile & Small Screen Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-cyan-300 hover:border-cyan-400/30 active:scale-95 transition-all cursor-pointer"
              aria-label="Open navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* Ultra-Premium Mobile & Tablet Slide-Over Drawer */}
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        handleNavScroll={handleNavScroll}
        handleDownloadPdfResume={handleDownloadPdfResume}
        handleSignIn={handleSignIn}
        loading={loading}
      />
    </>
  );
};

export default Header;
