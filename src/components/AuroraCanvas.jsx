import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AuroraCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [currentColor, setCurrentColor] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const colors = [
    { name: 'Aurora Green', gradient: ['#00ff88', '#00cc66', '#008844'], shadow: '#00ff88' },
    { name: 'Cosmic Purple', gradient: ['#a855f7', '#7c3aed', '#6d28d9'], shadow: '#a855f7' },
    { name: 'Stellar Blue', gradient: ['#3b82f6', '#2563eb', '#1e40af'], shadow: '#3b82f6' },
    { name: 'Nebula Pink', gradient: ['#ec4899', '#db2777', '#be185d'], shadow: '#ec4899' },
    { name: 'Arctic Cyan', gradient: ['#06b6d4', '#0891b2', '#0e7490'], shadow: '#06b6d4' }
  ];

  const initializeCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear everything first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0a0a1f');
    gradient.addColorStop(0.4, '#1a0a2e');
    gradient.addColorStop(0.7, '#0f0519');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars
    for (let i = 0; i < 150; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      const brightness = Math.random();
      ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8 + 0.2})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    setContext(ctx);
  };

  useEffect(() => {
    initializeCanvas();
  }, []);

  const getCoordinates = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    lastPos.current = { x, y };
    setIsDrawing(true);
    drawAurora(x, y, x, y);
  };

  const stopDrawing = () => setIsDrawing(false);

  const drawAurora = (x1, y1, x2, y2) => {
    if (!context) return;

    const color = colors[currentColor];
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const steps = Math.max(Math.floor(distance / 5), 1);

    context.globalCompositeOperation = 'lighter';
    context.lineCap = 'round';
    context.lineJoin = 'round';

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;

      // Thinner, more delicate aurora strokes
      for (let layer = 0; layer < 3; layer++) {
        const gradient = context.createRadialGradient(x, y, 0, x, y, 20 + layer * 15);
        gradient.addColorStop(0, color.gradient[0] + '70');
        gradient.addColorStop(0.4, color.gradient[1] + '40');
        gradient.addColorStop(0.7, color.gradient[2] + '20');
        gradient.addColorStop(1, color.gradient[2] + '00');
        
        context.fillStyle = gradient;
        const waveOffset = Math.sin(x * 0.02 + layer * 0.5) * 8;
        const flowOffset = Math.cos(y * 0.015 + layer) * 6;
        context.beginPath();
        context.arc(x + flowOffset, y + waveOffset, 15 + layer * 10, 0, Math.PI * 2);
        context.fill();
      }
    }
  };

  const handleMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    
    const { x, y } = getCoordinates(e);
    drawAurora(lastPos.current.x, lastPos.current.y, x, y);
    lastPos.current = { x, y };
  };

  const clearCanvas = () => {
    initializeCanvas();
  };

  const saveCanvas = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'my-aurora-creation.png';
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 flex gap-3 justify-center flex-wrap">
        {colors.map((color, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentColor(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full transition-all ${
              currentColor === idx
                ? 'bg-white text-black shadow-2xl'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            style={{ 
              fontFamily: 'Georgia, serif',
              boxShadow: currentColor === idx ? `0 0 30px ${color.shadow}80` : 'none'
            }}
          >
            {color.name}
          </motion.button>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)' }}
      >
        <canvas
          ref={canvasRef}
          width={1400}
          height={800}
          onMouseDown={startDrawing}
          onMouseMove={handleMove}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={handleMove}
          onTouchEnd={stopDrawing}
          className="w-full cursor-crosshair"
        />
      </motion.div>
      
      <div className="flex gap-4 mt-10 justify-center flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearCanvas}
          className="px-12 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all shadow-xl text-lg"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Clear Sky
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={saveCanvas}
          className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-500 hover:to-blue-500 transition-all shadow-xl text-lg"
          style={{ fontFamily: 'Georgia, serif', boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
        >
          Save Creation
        </motion.button>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-400 mt-8 text-base italic" 
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Draw flowing aurora curtains across the night sky • Choose colors above • Save your masterpiece
      </motion.p>
    </div>
  );
};

export default AuroraCanvas;