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

      {/* 2. Main content area (Centered minimalist agency layout) */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center z-10 w-full max-w-5xl mx-auto pt-16 pb-12">
        {/* Heading */}
        <FadeIn delay={0.15} y={30} className="max-w-4xl mb-6">
          <h1 className="text-black text-[9.5vw] sm:text-[7vw] md:text-[6vw] lg:text-[5rem] font-bold tracking-tight leading-[1.08] text-center">
            Digital design &<br />
            development agency
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.25} y={25} className="mb-10 max-w-2xl">
          <p className="text-[#3A3A3C] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            We help companies build scalable digital products with thoughtful design systems and carefully crafted development.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.35} y={20} className="flex flex-row gap-4 mb-16">
          <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-md hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95">
            Schedule Call
          </button>
          <button className="bg-white border border-zinc-300 text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-sm hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95">
            © 2025 Work
          </button>
        </FadeIn>

        {/* Brand Logos Footer */}
        <FadeIn delay={0.55} y={20} className="z-10 w-full mt-auto flex flex-col items-center">
          <span className="text-zinc-400 text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase mb-5">
            Trusted by industry leaders & fast-growing startups
          </span>
          
          {/* Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-60 hover:opacity-85 transition-opacity duration-300 w-full max-w-4xl">
            {/* Nissan Logotype */}
            <span className="font-bold tracking-[0.2em] text-black text-sm md:text-base flex items-center gap-1.5 font-sans">
              <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[8px] font-bold">N</span> NISSAN
            </span>
            {/* YallaMotor Logotype */}
            <span className="font-black italic text-black text-sm md:text-base">
              YallaMotor
            </span>
            {/* Repurpose.io Logotype */}
            <span className="font-bold text-black text-sm md:text-base flex items-center gap-1">
              <span className="text-blue-500 font-extrabold">R</span> repurpose.io
            </span>
            {/* Handzhake Logotype */}
            <span className="font-extrabold text-black text-sm md:text-base tracking-tight">
              handzhake
            </span>
            {/* METUTORS Logotype */}
            <span className="font-black text-zinc-700 text-sm md:text-base tracking-wide">
              ME'TUTORS
            </span>
            {/* Tree Logotype */}
            <span className="font-bold text-green-700 text-sm md:text-base flex items-center gap-0.5">
              <span>tree</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
