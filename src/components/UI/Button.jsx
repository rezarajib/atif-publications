import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const base = 'btn font-medium rounded-2xl shadow-none border-none transition-all cursor-pointer';
  const variants = {
    primary: 'bg-[#1C2421] text-white hover:bg-[#2A3430]',
    secondary: 'bg-[#C85A32] text-white hover:bg-[#B04A26]',
    outline: 'bg-[#EFECE6] text-[#1C2421] hover:bg-[#EAE5DF]',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};