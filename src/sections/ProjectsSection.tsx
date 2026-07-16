import React from 'react';
import { FadeIn } from '../components/FadeIn';

const projectImages = [
  'https://i.pinimg.com/736x/04/ac/39/04ac39cbf298261a4ef257a3f699f81c.jpg',
  'https://i.pinimg.com/1200x/f5/9c/db/f59cdb86fa2eb7c4279845c163cf6f84.jpg',
  'https://i.pinimg.com/736x/48/aa/3f/48aa3f9cfec5be2d9a1aa2959c1d3d92.jpg',
  'https://i.pinimg.com/1200x/08/83/7e/08837e6e89d1787a7e7308b8a2a0e494.jpg',
];

const projectTitles = [
  'Eco Shade',
  'Metallic Abstract',
  'Brutalist Space',
  'Studio Desk',
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-20 px-5 sm:px-8 md:px-10 relative z-10 w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading with VIEW ALL Button */}
        <div className="w-full flex flex-row items-center justify-between mb-12 sm:mb-16 px-2">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-extrabold uppercase leading-none tracking-tight text-left"
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Featured Projects
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1} y={30}>
            <button className="border border-[#FE6903] text-[#FE6903] hover:bg-[#FE6903]/10 text-[10px] md:text-xs font-bold tracking-widest px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase cursor-pointer">
              View All
            </button>
          </FadeIn>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projectImages.map((src, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              y={40}
              className="group relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:scale-[1.015] transition-all duration-300 cursor-pointer"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Project Image with hover zoom */}
              <img
                src={src}
                alt={projectTitles[index]}
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                draggable="false"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 sm:p-8">
                {/* Title */}
                <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base md:text-lg">
                  {projectTitles[index]}
                </span>

                {/* Circular Arrow Icon */}
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#FE6903] flex items-center justify-center text-[#FE6903] transition-all duration-300 hover:bg-[#FE6903] hover:text-black"
                  style={{ minWidth: '40px' }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
