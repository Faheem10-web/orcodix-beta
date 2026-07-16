import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 text-center overflow-hidden"
    >
      {/* 1. Decorative Corner Assets */}
      
      {/* Top Left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D Asset"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain orange-3d-asset"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Abstract 3D Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain orange-3d-asset"
          draggable="false"
        />
      </FadeIn>

      {/* Top Right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D Asset"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain orange-3d-asset"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Asset"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain orange-3d-asset"
          draggable="false"
        />
      </FadeIn>

      {/* 2. Main content stack */}
      <div className="flex flex-col items-center max-w-4xl z-10">
        {/* About Me Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-extrabold uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Heading to Paragraph Spacer */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Character reveal paragraph */}
        <AnimatedText
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Paragraph to Button Spacer */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button */}
        <FadeIn delay={0.1} y={20}>
          <ContactButton
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
