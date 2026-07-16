import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of creative and digital solutions, including custom 3D modeling, photorealistic rendering, high-impact motion graphics, branding systems, and responsive web design.',
  },
  {
    question: 'What is your typical project workflow?',
    answer: 'Our workflow starts with discovery and brief strategy to align on concepts. We then progress into raw structural drafting, asset modeling, texturing, high-resolution rendering, and feedback checks before final export.',
  },
  {
    question: 'How long does a standard project take?',
    answer: 'Timeline varies by project scale, but standard assets are typically delivered within 2 to 4 weeks. We work with strict timelines and provide milestone check-ins along the way.',
  },
  {
    question: 'Are revision rounds included in the scope?',
    answer: 'Yes! All standard contracts include up to three iterations to ensure the final outputs match your design standards and creative vision perfectly.',
  },
  {
    question: 'How can we get in touch and start?',
    answer: 'Click the "HOW TO START?" or "CONTACT ME" button, or drop us an email directly. We will set up a brief introductory call to discuss your assets, constraints, and timeline requirements.',
  },
];

export const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 relative z-10 w-full text-left"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left Side: Title */}
        <div className="w-full md:w-[35%] flex flex-col items-start md:sticky md:top-24 h-fit">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-extrabold uppercase leading-none tracking-tight"
              style={{ 
                fontSize: 'clamp(3rem, 10vw, 100px)',
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              FAQ
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20} className="mt-4">
            <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm uppercase tracking-widest leading-relaxed">
              Find answers to common questions about services, workflow, and operations.
            </p>
          </FadeIn>
        </div>

        {/* Right Side: Accordion List */}
        <div className="w-full md:w-[65%] flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <FadeIn
                key={index}
                delay={index * 0.08}
                y={20}
                className="border-b border-[rgba(215,226,234,0.12)] first:border-t"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-6 sm:py-7 flex flex-row justify-between items-center text-left gap-6 group cursor-pointer focus:outline-none bg-transparent border-none"
                >
                  <span className="text-[#D7E2EA] font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-[#FE6903]">
                    {item.question}
                  </span>
                  
                  {/* Neon Orange Icon indicator (Rotates on active) */}
                  <div 
                    className={`w-8 h-8 rounded-full border border-[rgba(254,105,3,0.3)] flex items-center justify-center text-[#FE6903] transition-all duration-300 ${
                      isOpen ? 'bg-[#FE6903] text-black border-[#FE6903]' : 'group-hover:border-[#FE6903]'
                    }`}
                    style={{ minWidth: '32px' }}
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 pb-6 sm:pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
