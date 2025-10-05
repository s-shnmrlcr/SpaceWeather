import React, { useState, useEffect, useRef } from 'react';

const AuroraTrail = () => {
  const [trails, setTrails] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDrawing) {
        const newTrail = {
          id: trailIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          opacity: 1
        };
        
        setTrails(prev => [...prev, newTrail]);
      }
    };

    const handleMouseDown = () => {
      setIsDrawing(true);
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrawing]);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 2000));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-50">
      <defs>
        {/* Gradient for aurora effect - subtle version */}
        <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
        </linearGradient>
        
        {/* Blur filter for subtle glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Draw aurora paths */}
      {trails.length > 1 && (
        <>
          {trails.map((trail, index) => {
            if (index === 0) return null;
            
            const prevTrail = trails[index - 1];
            const age = Date.now() - trail.timestamp;
            const opacity = Math.max(0, 1 - age / 2000);
            
            // Create wavy effect
            const controlX = (trail.x + prevTrail.x) / 2;
            const controlY = (trail.y + prevTrail.y) / 2 - 30;
            
            return (
              <g key={trail.id}>
                {/* Subtle glow layer */}
                <path
                  d={`M ${prevTrail.x} ${prevTrail.y} Q ${controlX} ${controlY} ${trail.x} ${trail.y}`}
                  fill="none"
                  stroke="url(#auroraGradient)"
                  strokeWidth="35"
                  strokeLinecap="round"
                  opacity={opacity * 0.15}
                  filter="url(#glow)"
                />
                
                {/* Main aurora line - very subtle */}
                <path
                  d={`M ${prevTrail.x} ${prevTrail.y} Q ${controlX} ${controlY} ${trail.x} ${trail.y}`}
                  fill="none"
                  stroke="url(#auroraGradient)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  opacity={opacity * 0.4}
                />
                
                {/* Delicate center line */}
                <path
                  d={`M ${prevTrail.x} ${prevTrail.y} Q ${controlX} ${controlY} ${trail.x} ${trail.y}`}
                  fill="none"
                  stroke="#e0f2fe"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity={opacity * 0.3}
                />
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
};

export default AuroraTrail;