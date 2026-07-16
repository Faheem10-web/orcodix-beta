import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #b33c00 7%, #FE6903 45%, #FE6903 75%, #ff8800 100%)',
        boxShadow: '0px 0px 20px rgba(254, 105, 3, 0.55), inset 0px 0px 12px rgba(255, 255, 255, 0.2)',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
