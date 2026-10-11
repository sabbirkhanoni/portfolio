'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Avoid layout shift before mount
  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full border border-white/10 bg-white/5 opacity-0 ${className}`} />
    );
  }

  // Configuration for 3 modes
  const themeConfig = {
    night: {
      label: "Night Mode (Click for Morning)",
      btnClasses: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(8,165,202,0.3)]",
    },
    morning: {
      label: "Morning Mode (Click for Evening)",
      btnClasses: "bg-amber-500/15 hover:bg-amber-500/25 text-amber-500 border border-amber-500/35 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
    },
    evening: {
      label: "Evening Mode (Click for Night)",
      btnClasses: "bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 border border-orange-500/35 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.35)]",
    },
  };

  const current = themeConfig[theme] || themeConfig.night;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={current.label}
      title={current.label}
      className={`relative flex items-center justify-center w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full cursor-pointer transition-all duration-300 active:scale-90 ${current.btnClasses} ${className}`}
    >
      <div className="relative w-4.5 h-4.5 flex items-center justify-center transition-transform duration-300">
        
        {/* 1. NIGHT MODE (Moon) */}
        {theme === 'night' && (
          <svg
            className="w-4 h-4 text-cyan-300 transition-all duration-300 animate-in fade-in zoom-in-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}

        {/* 2. MORNING MODE (Morning Sun) */}
        {theme === 'morning' && (
          <svg
            className="w-4.5 h-4.5 text-amber-500 transition-all duration-300 animate-in fade-in zoom-in-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}

        {/* 3. EVENING MODE (Sunset over Horizon) */}
        {theme === 'evening' && (
          <svg
            className="w-4.5 h-4.5 text-orange-400 transition-all duration-300 animate-in fade-in zoom-in-75"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Horizon line */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18" />
            {/* Setting half sun */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17a5 5 0 0110 0" />
            {/* Sunset rays */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4M4.93 9.93l2.12 2.12M19.07 9.93l-2.12 2.12" />
          </svg>
        )}

      </div>
    </button>
  );
};

export default ThemeToggle;
