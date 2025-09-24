// src/components/Navbar/Navbar.jsx
import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';

const Navbar = ({ cartCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 right-0 py-5 px-8 shadow-md z-50 transition-colors duration-250 bg-white dark:bg-zinc-800">
      <div className="flex">
        <span className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-gray-100 transition-colors duration-250">
          CDRockMania
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
          className="flex items-center justify-center text-3xl cursor-pointer bg-transparent border-none text-zinc-900 dark:text-gray-100 transition-transform duration-250 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <div className="relative flex items-center justify-center text-3xl">
          <span className="text-zinc-900 dark:text-gray-100">🛒</span>
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;