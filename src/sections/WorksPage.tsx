import React from 'react';
import { FadeIn } from '../components/FadeIn';

const worksImages = [
  'https://i.pinimg.com/736x/04/ac/39/04ac39cbf298261a4ef257a3f699f81c.jpg',
  'https://i.pinimg.com/1200x/f5/9c/db/f59cdb86fa2eb7c4279845c163cf6f84.jpg',
  'https://i.pinimg.com/736x/48/aa/3f/48aa3f9cfec5be2d9a1aa2959c1d3d92.jpg',
  'https://i.pinimg.com/1200x/08/83/7e/08837e6e89d1787a7e7308b8a2a0e494.jpg',
  'https://i.pinimg.com/1200x/3d/53/5c/3d535ce9473376bb152d188316d49836.jpg',
  'https://i.pinimg.com/736x/f8/de/29/f8de29688c04d6a1f95032116fe6f8b4.jpg',
  'https://i.pinimg.com/736x/06/a0/2f/06a02fbb27a79d1230ac156fa98e659f.jpg',
];

const worksTitles = [
  'Eco Shade',
  'Metallic Abstract',
  'Brutalist Space',
  'Studio Desk',
  'Creative Workspace',
  'Glassmorphic Interior',
  'Architectural Draft',
];

interface WorksPageProps {
  onBackToHome?: () => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({ onBackToHome }) => {
  return (
    <section className="bg-[#0C0C0C] pt-32 pb-24 px-5 sm:px-8 md:px-10 min-h-screen w-full relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title Block */}
        <div className="w-full flex flex-col items-start mb-16 px-2">
          <FadeIn delay={0} y={30}>
            <span className="text-[#FE6903] text-xs font-bold tracking-widest uppercase mb-3">Portfolio</span>
          </FadeIn>
          <FadeIn delay={0.1} y={30}>
            <h1
              className="hero-heading font-extrabold uppercase leading-none tracking-tight text-left"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              All Works
            </h1>
          </FadeIn>
        </div>

        {/* 7-Project Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
          {worksImages.map((src, index) => {
            const isLast = index === worksImages.length - 1;
            return (
              <FadeIn
                key={index}
                delay={index * 0.1}
                y={40}
                className={`group relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:scale-[1.015] transition-all duration-300 cursor-pointer ${
                  isLast ? 'md:col-span-2' : ''
                }`}
                style={{ aspectRatio: isLast ? '21/9' : '4/3' }}
              >
                {/* Project Image */}
                <img
                  src={src}
                  alt={worksTitles[index]}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  draggable="false"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 sm:p-8">
                  <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base md:text-lg">
                    {worksTitles[index]}
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
            );
          })}
        </div>

        {/* Back to Home CTA */}
        <FadeIn delay={0.2} y={30}>
          <button
            onClick={onBackToHome}
            className="border border-[#FE6903] text-[#FE6903] hover:bg-[#FE6903] hover:text-black text-xs font-bold tracking-widest px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase cursor-pointer"
          >
            Back To Home
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default WorksPage;
