import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      
      // Calculate coordinates of the center of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Mouse client coordinates
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Check if mouse is within the activation area: bounds expanded by padding
      const isWithinBounds = 
        clientX >= rect.left - padding &&
        clientX <= rect.right + padding &&
        clientY >= rect.top - padding &&
        clientY <= rect.bottom + padding;

      if (isWithinBounds) {
        // Calculate offset from center and apply strength divisor
        const offsetX = (clientX - centerX) / strength;
        const offsetY = (clientY - centerY) / strength;

        setTransition(activeTransition);
        setPosition({ x: offsetX, y: offsetY });
      } else {
        // Smoothly return to center
        setTransition(inactiveTransition);
        setPosition({ x: 0, y: 0 });
      }
    };

    // Attach passive mouse listener to the window
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
