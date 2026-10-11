'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Three modes: 'morning' (daylight), 'evening' (sunset golden hour), 'night' (cosmic obsidian)
const THEMES = ['night', 'morning', 'evening'];

const ThemeContext = createContext({
  theme: 'night',
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('night');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read stored theme preference
    let saved = localStorage.getItem('portfolio_theme');
    
    // Legacy support
    if (saved === 'dark') saved = 'night';
    if (saved === 'light') saved = 'morning';

    if (!THEMES.includes(saved)) {
      saved = 'night';
    }

    setThemeState(saved);
    document.documentElement.setAttribute('data-theme', saved);
    setMounted(true);
  }, []);

  const setTheme = (newTheme) => {
    if (!THEMES.includes(newTheme)) return;
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
  };

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
