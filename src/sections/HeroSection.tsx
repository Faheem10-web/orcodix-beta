import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#root', active: true },
    { label: 'Works', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      className="min-h-screen w-full flex flex-col justify-between relative bg-[#EDEDED] text-black overflow-hidden select-none pb-4"
    >
      {/* 1. Navbar */}
      <header className="w-full px-6 md:px-12 pt-6 md:pt-8 flex justify-between items-center z-20">
        {/* Logo */}
        <FadeIn delay={0} y={-20} className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-5 sm:h-6 w-auto object-contain" />
        </FadeIn>

        {/* Pill Menu (Hidden on small mobile viewports) */}
        <FadeIn delay={0.1} y={-20} className="hidden md:flex bg-[#121212] p-1.5 rounded-xl border border-zinc-800 items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 ${link.active
                  ? 'bg-white text-black shadow-sm'
                  : 'text-[#E4E4E7] hover:text-white'
                }`}
            >
              {link.label}
            </a>
          ))}
        </FadeIn>

        {/* Right Buttons */}
        <FadeIn delay={0.2} y={-20} className="flex items-center gap-3">
          {/* HOW TO START? Button */}
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#FF5B22] text-black font-extrabold text-xs tracking-wider px-5 py-3.5 rounded-xl flex items-center gap-2 hover:bg-[#e04e1b] transition-all hover:scale-105 active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>HOW TO START?</span>
          </button>
        </FadeIn>
      </header>

      {/* 2. Centered Typography Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center z-10 w-full max-w-5xl mx-auto pt-8 pb-12">
        <FadeIn delay={0.25} y={40}>
          <h1 className="text-[10vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] text-center max-w-5xl">
            <span className="text-black">We Design</span><br />
            <span className="text-[#FF5B22]">Digital</span><br />
            <span className="text-black">Experiences</span>
          </h1>
        </FadeIn>
      </div>

    </section>
  );
};

export default HeroSection;
