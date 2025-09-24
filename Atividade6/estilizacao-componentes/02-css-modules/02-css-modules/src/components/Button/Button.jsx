import React from 'react';
import styles from './Button.module.css'; // Importando o módulo CSS

const Button = ({ children, variant = 'solid', disabled, ...props }) => {
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;