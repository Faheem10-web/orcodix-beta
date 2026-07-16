import React from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import { ContactButton } from './components/ContactButton';
import { FadeIn } from './components/FadeIn';

function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip text-[#D7E2EA] font-sans selection:bg-[#B600A8]/30 selection:text-[#white]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Footer / Contact Section */}
      <footer
        id="contact"
        className="w-full bg-[#0C0C0C] py-24 px-6 md:px-10 border-t border-[#D7E2EA]/10 text-center flex flex-col items-center justify-center relative z-20"
      >
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-extrabold uppercase leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s work together
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1} y={20} className="mb-12">
          <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base md:text-lg max-w-md uppercase tracking-wider leading-relaxed">
            driven by crafting striking and unforgettable projects. get in touch now.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={() => { window.location.href = 'mailto:jack@example.com'; }} />
        </FadeIn>

        <div className="mt-20 text-[#D7E2EA]/40 text-xs sm:text-sm tracking-widest uppercase font-light">
          &copy; {new Date().getFullYear()} Jack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
