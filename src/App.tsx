import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import FaqSection from './sections/FaqSection';
import WorksPage from './sections/WorksPage';
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
  const [activeTab, setActiveTab] = useState<'home' | 'works'>('home');

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
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'home' ? (
        <>
          {/* 2. Marquee Section */}
          <MarqueeSection />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Services Section */}
          <ServicesSection />

          {/* 5. Projects Section */}
          <ProjectsSection onViewAll={() => { setActiveTab('works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

          {/* 6. FAQ Section */}
          <FaqSection />
        </>
      ) : (
        <WorksPage onBackToHome={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      )}

      {/* 7. Footer / Contact Section */}
      <footer
        id="contact"
        className="w-full bg-[#0C0C0C] pt-32 pb-16 px-6 md:px-10 border-t border-[rgba(215,226,234,0.06)] text-center flex flex-col items-center justify-center relative overflow-hidden z-20"
      >
        {/* Spotlight light beam beam from top-left */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.06)_0%,transparent_50%)] pointer-events-none z-0"></div>

        {/* 2 spots available indicator */}
        <FadeIn delay={0} y={-30} className="z-10 mb-8">
          <div className="flex items-center gap-4 text-[#D7E2EA]/40 text-xs sm:text-sm italic font-serif">
            <span className="w-12 h-[1px] bg-white/10"></span>
            <span>2 spots available</span>
            <span className="w-12 h-[1px] bg-white/10"></span>
          </div>
        </FadeIn>

        {/* Let's Connect Heading */}
        <FadeIn delay={0.1} y={-45} className="z-10">
          <h2
            className="font-extrabold tracking-tight mb-6 select-none"
            style={{ 
              fontSize: 'clamp(2.8rem, 8vw, 110px)',
              fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              color: '#ffffff'
            }}
          >
            Let&apos;s <span style={{ color: 'rgba(255,255,255,0.38)' }}>Connect</span>
          </h2>
        </FadeIn>
        
        {/* Subtext description */}
        <FadeIn delay={0.2} y={-30} className="z-10 mb-10">
          <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
            Feel free to contact me if having any questions.
            <br />
            I&apos;m available for new projects or just for chatting.
          </p>
        </FadeIn>

        {/* Book Call Pill Button */}
        <FadeIn delay={0.3} y={-20} className="z-10">
          <button 
            onClick={() => { window.location.href = 'mailto:jack@example.com'; }}
            className="border border-white/20 hover:border-white/40 text-white hover:bg-white/5 font-semibold text-xs sm:text-sm tracking-widest px-8 py-3.5 rounded-full flex items-center gap-3.5 transition-all hover:scale-105 active:scale-95 uppercase cursor-pointer"
          >
            <span>Book a free intro call</span>
            <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </FadeIn>

        {/* Bottom row metadata: Copyright tag & Social circle icon links */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between mt-28 pt-8 border-t border-white/5 gap-6 sm:gap-0 z-10">
          {/* Left Copyright tag box */}
          <div className="border-t border-b border-white/10 py-2 px-5 text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-mono select-none">
            &copy; Hanzo Studio, 2025
          </div>

          {/* Right Social circles */}
          <div className="flex flex-row items-center gap-3.5">
            {/* Email link */}
            <a 
              href="mailto:jack@example.com" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-white/40 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Email"
            >
              <span className="font-light text-base leading-none select-none">@</span>
            </a>

            {/* X/Twitter link */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-white/40 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Twitter X"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h3.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>

            {/* LinkedIn link */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-white/40 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn"
            >
              <div className="w-[17px] h-[17px] border border-current rounded-[3px] flex items-center justify-center text-[10px] font-bold leading-none font-sans" style={{ transform: 'translateY(-0.5px)' }}>
                in
              </div>
            </a>

            {/* Instagram link */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-white/40 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
