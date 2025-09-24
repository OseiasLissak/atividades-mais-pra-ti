import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';
import styles from './Navbar.module.css'; // Importando o módulo CSS

const Navbar = ({ cartCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <span className={styles.logo}>CDRockMania</span>
      </div>

      <div className={styles.actions}>
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
          className={styles.themeToggle}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <div className={styles.cartBadge}>
          <span>🛒</span>
          <span className={styles.cartCount}>{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;