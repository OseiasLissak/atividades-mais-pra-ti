// src/components/Button/Button.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyles = {
  base: css`
    padding: 12px 16px;
    font-weight: bold;
    border-radius: 6px;
    width: 100%;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    &:active {
      transform: scale(0.95);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
  solid: css`
    background-color: #f97316;
    color: #fff;
    border: 1px solid transparent;
    &:hover {
      background-color: #ea580c;
    }
    &:focus {
      outline: 2px solid #f97316;
      outline-offset: 2px;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #18181b;
    border: 2px solid #18181b;
    &:hover {
      background-color: #18181b;
      color: #fff;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #18181b;
    border: 1px solid transparent;
    &:hover {
      background-color: #e5e7eb;
    }
  `,
};

// Lógica para aplicar os estilos de acordo com a variante
const StyledButton = styled.button`
  ${ButtonStyles.base}
  ${({ variant }) => ButtonStyles[variant]}

  // Estilos de tema para variantes que precisam
  ${({ theme, variant }) => variant === 'outline' && `
    color: ${theme.text};
    border-color: ${theme.text};
    &:hover {
      background-color: ${theme.text};
      color: ${theme.cardBackground};
    }
  `}

  ${({ theme, variant }) => variant === 'ghost' && `
    color: ${theme.text};
    &:hover {
      background-color: ${theme.background};
    }
  `}
`;

const Button = ({ children, variant = 'solid', disabled, onClick, ...props }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;