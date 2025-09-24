// src/components/ThemeContext/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

// Defina as cores para cada tema
const themes = {
  light: {
    background: '#f3f4f6', // gray-100
    foreground: '#1f2937', // gray-800
    text: '#18181b', // zinc-900
    textSecondary: '#6b7280', // gray-500
    cardBackground: '#ffffff', // white
    // outras cores...
  },
  dark: {
    background: '#18181b', // zinc-900
    foreground: '#f3f4f6', // gray-100
    text: '#e4e4e7', // gray-200
    textSecondary: '#a1a1aa', // gray-400
    cardBackground: '#27272a', // zinc-800
    // outras cores...
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};