import React from 'react';

const Button = ({ children, variant = 'solid', disabled, ...props }) => {
  const buttonClass = `btn btn--${variant}`;

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;