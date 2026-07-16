import React from 'react';
import { FadeIn } from '../components/FadeIn';

const projectImages = [
  'https://i.pinimg.com/1200x/49/ec/fa/49ecfa0b2a949a3f390301cfcb7ea9aa.jpg',
  'https://i.pinimg.com/1200x/11/56/19/11561960238a473eee818359e1d61711.jpg',
  'https://i.pinimg.com/1200x/9f/86/d3/9f86d3dc24d269d8cbb6a66c5b33bca2.jpg',
  'https://i.pinimg.com/1200x/20/b3/13/20b313c8068d5dd61f80066ecbab7d2f.jpg',
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-20 px-5 sm:px-8 md:px-10 relative z-10 w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading with VIEW ALL Button */}
        <div className="w-full flex flex-row items-center justify-between mb-12 sm:mb-16 relative px-2">
          {/* Empty left space to balance center heading alignment on desktop */}
          <div className="w-24 hidden md:block" />
          
          <FadeIn delay={0} y={30} className="flex-1 text-center">
            <h2
              className="hero-heading font-extrabold uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 4.5rem)' }}
            >
              Featured Projects
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1} y={30}>
            <button className="border border-[#EFFF00]/40 text-[#EFFF00] hover:bg-[#EFFF00]/10 text-[10px] md:text-xs font-bold tracking-wider px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-95 uppercase">
              View All
            </button>
          </FadeIn>
        </div>

        {/* 2 Column, 2 Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projectImages.map((src, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              y={40}
              className="w-full overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:scale-[1.015] transition-all duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Project Mockup ${index + 1}`}
                className="w-full h-auto object-cover select-none pointer-events-none"
                draggable="false"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
