import React, { useEffect, useRef } from 'react';

const row1Original = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Original = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const row1Images = [...row1Original, ...row1Original, ...row1Original];
const row2Images = [...row2Original, ...row2Original, ...row2Original];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Calculate sectionTop relative to document body top
      const sectionTop = scrollY + rect.top;

      // Calculate scroll offset based on the exact formula:
      // (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (scrollY - sectionTop + window.innerHeight) * 0.3;

      // Directly update transform styling on rows bypass React virtual DOM re-renders
      if (row1Ref.current) {
        // Moves RIGHT on scroll: translateX(offset - 200)
        row1Ref.current.style.transform = `translate3d(${offset - 200}px, 0px, 0px)`;
      }
      if (row2Ref.current) {
        // Moves LEFT on scroll: translateX(-(offset - 200))
        row2Ref.current.style.transform = `translate3d(${-(offset - 200)}px, 0px, 0px)`;
      }
    };

    // Initialize position once
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 w-full overflow-hidden"
    >
      <div className="flex flex-col gap-3 select-none pointer-events-none w-full">
        {/* Row 1: moves RIGHT on scroll */}
        <div className="w-full overflow-hidden flex justify-center">
          <div
            ref={row1Ref}
            className="flex gap-3 will-change-transform"
            style={{ transform: 'translate3d(-200px, 0px, 0px)' }}
          >
            {row1Images.map((src, idx) => (
              <img
                key={`row1-${idx}`}
                src={src}
                alt={`Jack 3D Work ${idx + 1}`}
                loading="lazy"
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div className="w-full overflow-hidden flex justify-center">
          <div
            ref={row2Ref}
            className="flex gap-3 will-change-transform"
            style={{ transform: 'translate3d(200px, 0px, 0px)' }}
          >
            {row2Images.map((src, idx) => (
              <img
                key={`row2-${idx}`}
                src={src}
                alt={`Jack 3D Work ${idx + 12}`}
                loading="lazy"
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
