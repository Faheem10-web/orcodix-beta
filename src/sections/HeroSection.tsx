import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Animation Refs
  const pipelineRef = useRef<HTMLDivElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeXRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const beamGlowRef = useRef<SVGPathElement>(null);
  const beamCoreRef = useRef<SVGPathElement>(null);
  const beamGradientRef = useRef<SVGLinearGradientElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  // Manage body scroll when mobile menu is active
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuActive]);

  // RequestAnimationFrame Beam Animation Loop
  useEffect(() => {
    // Recompute path coordinate metrics
    const updatePath = () => {
      if (
        !pipelineRef.current ||
        !nodeStackRef.current ||
        !nodeXRef.current ||
        !nodeShieldRef.current
      )
        return;

      const pRect = pipelineRef.current.getBoundingClientRect();
      const sRect = nodeStackRef.current.getBoundingClientRect();
      const xRect = nodeXRef.current.getBoundingClientRect();
      const shRect = nodeShieldRef.current.getBoundingClientRect();

      const startX = sRect.left + sRect.width / 2 - pRect.left;
      const startY = sRect.top + sRect.height / 2 - pRect.top;

      const midX = xRect.left + xRect.width / 2 - pRect.left;
      const midY = xRect.top + xRect.height / 2 - pRect.top;

      const endX = shRect.left + shRect.width / 2 - pRect.left;
      const endY = shRect.top + shRect.height / 2 - pRect.top;

      const pathD = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`;

      if (beamGlowRef.current) beamGlowRef.current.setAttribute('d', pathD);
      if (beamCoreRef.current) beamCoreRef.current.setAttribute('d', pathD);
    };

    // Run initially & bind resize listener
    updatePath();
    window.addEventListener('resize', updatePath);

    // State machine setup
    let state: 'p1' | 'splash' | 'p2' | 'idle' = 'p1';
    let lastStateChange = Date.now();
    let animFrameId: number;

    const tick = () => {
      const elapsed = Date.now() - lastStateChange;

      switch (state) {
        case 'p1': {
          const duration = 800;
          const percentage = Math.min(elapsed / duration, 1);
          const p = percentage * 0.5; // ranges 0 -> 0.5

          // Animating the x1/x2 gradient stops along the path
          if (beamGradientRef.current) {
            const center = p * 100;
            beamGradientRef.current.setAttribute('x1', `${center - 5}%`);
            beamGradientRef.current.setAttribute('x2', `${center + 5}%`);
          }

          // Toggle node-stack glow status
          if (nodeStackRef.current) {
            if (p < 0.4) {
              nodeStackRef.current.classList.add('active');
            } else {
              nodeStackRef.current.classList.remove('active');
            }
          }

          if (elapsed >= duration) {
            state = 'splash';
            lastStateChange = Date.now();

            // Set beam opacity to 0
            if (beamGlowRef.current) beamGlowRef.current.style.opacity = '0';
            if (beamCoreRef.current) beamCoreRef.current.style.opacity = '0';

            // Trigger splash animation
            if (splashRef.current) splashRef.current.classList.add('animate');
            if (nodeStackRef.current) nodeStackRef.current.classList.remove('active');
          }
          break;
        }

        case 'splash': {
          const duration = 800;
          if (elapsed >= duration) {
            state = 'p2';
            lastStateChange = Date.now();

            // Restore beam opacity
            if (beamGlowRef.current) beamGlowRef.current.style.opacity = '1';
            if (beamCoreRef.current) beamCoreRef.current.style.opacity = '1';

            // Remove splash animation trigger
            if (splashRef.current) splashRef.current.classList.remove('animate');
          }
          break;
        }

        case 'p2': {
          const duration = 800;
          const percentage = Math.min(elapsed / duration, 1);
          const p = 0.5 + percentage * 0.5; // ranges 0.5 -> 1.0

          // Animating the x1/x2 gradient stops along the path
          if (beamGradientRef.current) {
            const center = p * 100;
            beamGradientRef.current.setAttribute('x1', `${center - 5}%`);
            beamGradientRef.current.setAttribute('x2', `${center + 5}%`);
          }

          // Toggle node-shield glow status
          if (nodeShieldRef.current) {
            if (p > 0.6) {
              nodeShieldRef.current.classList.add('active');
            } else {
              nodeShieldRef.current.classList.remove('active');
            }
          }

          if (elapsed >= duration) {
            state = 'idle';
            lastStateChange = Date.now();
            if (nodeShieldRef.current) nodeShieldRef.current.classList.remove('active');
          }
          break;
        }

        case 'idle': {
          const duration = 1000;
          if (elapsed >= duration) {
            state = 'p1';
            lastStateChange = Date.now();
          }
          break;
        }
      }

      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', updatePath);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="xero-hero-root">
      {/* 1. Navbar */}
      <nav className="xero-nav">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/Group 16.png" alt="Logo" className="nav-brand-logo" />
        </div>

        {/* Hamburger Menu Toggle */}
        <button
          className={`menu-toggle ${menuActive ? 'active' : ''}`}
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu Overlay */}
        <div className={`nav-menu ${menuActive ? 'active' : ''}`}>
          {/* Centered Pill Menu (Desktop only) */}
          <div className="nav-pill-menu">
            <a href="#root" className="pill-item active" onClick={() => setMenuActive(false)}>
              Home
            </a>
            <a href="#projects" className="pill-item" onClick={() => setMenuActive(false)}>
              Works
            </a>
            <a href="#services" className="pill-item" onClick={() => setMenuActive(false)}>
              Services
            </a>
            <a href="#about" className="pill-item" onClick={() => setMenuActive(false)}>
              About
            </a>
            <a href="#contact" className="pill-item" onClick={() => setMenuActive(false)}>
              Contact
            </a>
          </div>

          <div className="nav-actions">
            {/* Stacked menu links (Mobile only) */}
            <div className="mobile-links-only">
              <a href="#root" className="mobile-link" onClick={() => setMenuActive(false)}>
                Home
              </a>
              <a href="#projects" className="mobile-link" onClick={() => setMenuActive(false)}>
                Works
              </a>
              <a href="#services" className="mobile-link" onClick={() => setMenuActive(false)}>
                Services
              </a>
              <a href="#about" className="mobile-link" onClick={() => setMenuActive(false)}>
                About
              </a>
              <a href="#contact" className="mobile-link" onClick={() => setMenuActive(false)}>
                Contact
              </a>
            </div>

            {/* HOW TO START? Button */}
            <button
              onClick={() => {
                setMenuActive(false);
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-start"
            >
              <span className="dot"></span>
              <span>HOW TO START?</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Card */}
          <section className="hero-card">
            {/* Background Grid Pattern */}
            <div className="hero-grid"></div>

            {/* Center Animated Icon Pipeline */}
            <div className="icon-pipeline" ref={pipelineRef}>
              {/* Laser beam SVG overlay */}
              <svg className="beam-svg">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FE6903" stopOpacity="0" />
                    <stop offset="20%" stopColor="#FE6903" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="80%" stopColor="#FE6903" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FE6903" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Glowing outer beam path */}
                <path
                  ref={beamGlowRef}
                  stroke="url(#beam-gradient)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  style={{ opacity: 0.6, transition: 'opacity 0.2s ease' }}
                />
                {/* Core inner beam path */}
                <path
                  ref={beamCoreRef}
                  stroke="url(#beam-gradient)"
                  strokeWidth="0.8"
                  fill="none"
                  style={{ transition: 'opacity 0.2s ease' }}
                />
              </svg>

              {/* Left Node: Stack (Layers Icon) */}
              <div className="icon-node node-light-right" id="node-stack" ref={nodeStackRef}>
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>

              {/* Connection Line Left */}
              <div className="pipeline-line"></div>

              {/* Center node wrapper */}
              <div style={{ position: 'relative' }}>
                {/* Splash Glow */}
                <div className="splash" ref={splashRef}></div>

                {/* Center Node: Xero logo */}
                <div className="icon-node-center" id="node-x" ref={nodeXRef}>
                  <svg viewBox="0 0 40 40">
                    <path d="M11 9 L17 9 L29 31 L23 31 Z" fill="currentColor" />
                    <path d="M29 9 L23 9 L17 21 L20 26 Z" fill="currentColor" />
                    <path d="M14 26 L11 31 L17 31 L20 26 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Connection Line Right */}
              <div className="pipeline-line right"></div>

              {/* Right Node: Shield (Shield Check Icon) */}
              <div className="icon-node node-light-left" id="node-shield" ref={nodeShieldRef}>
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
            </div>

            {/* Glowing Widespread Radial Gradients (Wraps left, right, and bottom borders) */}
            <div className="glow-container select-none pointer-events-none"></div>

            {/* Content stack */}
            <div className="hero-content z-10">
              {/* Badge */}
              <div className="hero-badge">
                <span className="badge-text">WE ARE ORCODIX</span>
              </div>

              {/* Slogan locked to 2 lines, split typography colors */}
              <h1 className="hero-heading">
                Digital design <span className="text-orange">&amp;</span>
                <br />
                development <span className="text-orange">agency</span>
              </h1>

              {/* Secondary CTA Sub-text */}
              <p className="hero-subtext">
                WE HELP CLIENTS STRENGTHEN AND CONVERT DIGITAL EXPERIENCES THROUGH PREMIUM 3D CGI AND WEB DEVELOPMENT.
              </p>
            </div>
          </section>

          {/* 3. Brands Marquee */}
          <div className="brands-marquee-wrapper">
            <div className="brands-track">
              {[
                {
                  name: 'dribbble',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m-13.43-8.8C9.56 12 15.02 9.56 21.43 8.35m-18.27 7.23c5.38-2.03 10.02.58 13.43 5.67" />
                    </svg>
                  )
                },
                {
                  name: 'behance',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M6 9h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H6V9zm0 4h4.5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H6v-4z" />
                      <line x1="14" y1="9" x2="18" y2="9" />
                      <path d="M14 13.5a2.5 2.5 0 0 0 5 0" />
                    </svg>
                  )
                },
                {
                  name: (
                    <span>
                      HubSp<span className="hubspot-dot"></span>t
                    </span>
                  ),
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="15.5" cy="8.5" r="2.5" fill="currentColor" />
                      <circle cx="8.5" cy="8.5" r="2" />
                      <path d="M8.5 10.5 L8.5 16.5 C8.5 18.5, 15.5 18.5, 15.5 16.5 L15.5 11" />
                    </svg>
                  )
                },
                {
                  name: 'loom',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="3" x2="12" y2="21" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
                      <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
                    </svg>
                  )
                },
                {
                  name: 'dribbble',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m-13.43-8.8C9.56 12 15.02 9.56 21.43 8.35m-18.27 7.23c5.38-2.03 10.02.58 13.43 5.67" />
                    </svg>
                  )
                },
                {
                  name: 'behance',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M6 9h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H6V9zm0 4h4.5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H6v-4z" />
                      <line x1="14" y1="9" x2="18" y2="9" />
                      <path d="M14 13.5a2.5 2.5 0 0 0 5 0" />
                    </svg>
                  )
                },
                {
                  name: (
                    <span>
                      HubSp<span className="hubspot-dot"></span>t
                    </span>
                  ),
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="15.5" cy="8.5" r="2.5" fill="currentColor" />
                      <circle cx="8.5" cy="8.5" r="2" />
                      <path d="M8.5 10.5 L8.5 16.5 C8.5 18.5, 15.5 18.5, 15.5 16.5 L15.5 11" />
                    </svg>
                  )
                },
                {
                  name: 'loom',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="3" x2="12" y2="21" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
                      <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
                    </svg>
                  )
                }
              ].map((brand, idx) => (
                <div key={idx} className="brand-item">
                  {brand.icon}
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default HeroSection;
