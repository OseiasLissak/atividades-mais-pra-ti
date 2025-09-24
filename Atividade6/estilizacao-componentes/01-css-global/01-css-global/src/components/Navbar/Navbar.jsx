
import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';

const Navbar = ({ cartCount }) => { // Recebendo a nova prop
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="logo">CDRockMania</span>
      </div>

      <div className="navbar__actions">
        {/* Toggle de Tema */}
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
          className="theme-toggle"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Badge do Carrinho */}
        <div className="cart-badge">
          <span>🛒</span>
          <span className="cart-count">{cartCount}</span> {/* Exibindo o contador dinâmico */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;