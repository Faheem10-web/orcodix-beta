import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress of the paragraph element with specified offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p ref={containerRef} className={className} style={style}>

      {chars.map((char, index) => {
        // Distribute progress across characters with a small overlap (step size + buffer) for visual smoothness
        const start = index / totalChars;
        const end = Math.min(1, (index + 2) / totalChars);
        
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  // Linearly map the scroll segment to opacity bounds [0.2, 1]
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      {/* Invisible layout placeholder */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolutely positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
