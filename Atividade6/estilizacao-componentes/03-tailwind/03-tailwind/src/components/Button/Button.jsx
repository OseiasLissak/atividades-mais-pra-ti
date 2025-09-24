// src/components/Button/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'solid', disabled, onClick, ...props }) => {
  const baseClasses = "py-3 px-4 font-bold rounded-md w-full transition-all duration-200 transform active:scale-95";

  const variants = {
    solid: "bg-orange-500 text-white border border-transparent hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500",
    outline: "bg-transparent text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900",
    ghost: "bg-transparent text-gray-900 dark:text-gray-100 border border-transparent hover:bg-gray-200 dark:hover:bg-zinc-700",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const buttonClasses = `${baseClasses} ${variants[variant]} ${disabled ? disabledClasses : ''}`;

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;