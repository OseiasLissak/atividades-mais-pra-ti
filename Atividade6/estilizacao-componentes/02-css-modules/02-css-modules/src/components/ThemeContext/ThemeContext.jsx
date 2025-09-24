import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Ler o tema do localStorage ou usar o padrão 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Adicionar a classe 'dark-theme' ao body quando o tema for escuro
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    // Salvar o tema no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};