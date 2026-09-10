import React, { useEffect, useRef } from 'react';

const Particles = ({ count = 30, colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Tambahkan keyframes animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatParticle {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        25% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * -40}px) scale(1.2); opacity: 0.7; }
        50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40}px) scale(0.8); opacity: 0.5; }
        75% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * -30}px) scale(1.1); opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);

    // Buat particles
    const particleElements = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const size = Math.random() * 6 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        animation: floatParticle ${Math.random() * 8 + 4}s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
      `;
      
      container.appendChild(el);
      particleElements.push(el);
    }

    return () => {
      particleElements.forEach(el => el.remove());
      style.remove();
    };
  }, [count, colors]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default Particles;
