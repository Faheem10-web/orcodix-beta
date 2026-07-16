import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import { ContactButton } from './components/ContactButton';
import { FadeIn } from './components/FadeIn';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 bg-[#FF5B22] flex flex-col justify-center items-center select-none"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo wrapper inside glass card */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center justify-center p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        >
          <img src="/images/Group 16.png" alt="Logo" className="h-16 sm:h-20 w-auto object-contain" />
        </motion.div>
        
        {/* Premium loader progress line */}
        <div className="w-32 h-[3px] bg-black/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut',
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-white rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip text-[#D7E2EA] font-sans selection:bg-[#B600A8]/30 selection:text-[#white]">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

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
