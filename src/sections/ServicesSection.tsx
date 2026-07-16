import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: 'Web Development',
    description: 'Crafting high-performance, responsive, and search-optimized web applications using modern frameworks and clean, maintainable code.',
  },
  {
    number: '02',
    name: 'UI/UX Design',
    description: 'Creating intuitive, user-centric interfaces and interactive user experiences based on deep research, wireframing, and interactive prototyping.',
  },
  {
    number: '03',
    name: 'Mobile App Design',
    description: 'Designing beautiful, functional mobile application interfaces for iOS and Android, focusing on seamless user flows and platform guidelines.',
  },
  {
    number: '04',
    name: 'Branding',
    description: 'Crafting cohesive visual identities, logotypes, typography guidelines, and brand systems that make your business stand out.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full text-center relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Services Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-extrabold uppercase leading-none tracking-tight centered mb-16 sm:mb-20 md:mb-28"
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 160px)',
              fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services Grid (1 row = 2 services on desktop) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-2 sm:gap-y-4">
          {servicesData.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="flex flex-row items-start gap-5 sm:gap-8 py-6 sm:py-8 border-b border-[rgba(12,12,12,0.15)] w-full text-left"
            >
              {/* Left Number */}
              <span
                className="font-black leading-none text-[#0C0C0C] select-none min-w-[50px] sm:min-w-[90px]"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 90px)' }}
              >
                {item.number}
              </span>

              {/* Right: Title & Description */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3
                  className="font-semibold uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light text-[#0C0C0C]/60 leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
