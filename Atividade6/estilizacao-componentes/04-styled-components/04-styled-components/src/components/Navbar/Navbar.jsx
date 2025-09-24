// src/components/Navbar/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext/ThemeContext';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
  transition: background-color 0.25s;
  background-color: #fff;

  ${({ theme }) => theme === 'dark' && `
    background-color: #3f3f46;
  `}
`;

const NavBrand = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.05em;
  color: #18181b;
  transition: color 0.25s;

  ${({ theme }) => theme === 'dark' && `
    color: #e4e4e7;
  `}
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #18181b;
  transition: transform 0.25s;

  ${({ theme }) => theme === 'dark' && `
    color: #e4e4e7;
  `}

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #f97316;
  }
`;

const CartBadge = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  color: #18181b;
  
  ${({ theme }) => theme === 'dark' && `
    color: #e4e4e7;
  `}
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #f97316;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 9999px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ cartCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavWrapper theme={theme}>
      <NavBrand theme={theme}>CDRockMania</NavBrand>
      <NavActions>
        <ThemeButton onClick={toggleTheme} aria-label="Alternar tema claro/escuro" theme={theme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </ThemeButton>
        <CartBadge theme={theme}>
          <span>🛒</span>
          <CartCount>{cartCount}</CartCount>
        </CartBadge>
      </NavActions>
    </NavWrapper>
  );
};

export default Navbar;