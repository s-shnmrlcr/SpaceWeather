import React from 'react';
import { motion } from 'framer-motion';
import AuroraCanvas from './AuroraCanvas';

const AuroraCanvasSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-gradient-to-b from-black via-purple-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"
        />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide mb-8 text-center relative z-10" 
        style={{ fontFamily: 'Audiowide', textShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
      >
        Create Your Aurora
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.2, delay: 0.3 }} 
        className="text-lg sm:text-2xl text-purple-200 mb-16 text-center max-w-3xl italic leading-relaxed relative z-10" 
        style={{ fontFamily: 'Audiowide' }}
      >
        Paint your own celestial dance across the night sky
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        className="w-full relative z-10"
      >
        <AuroraCanvas />
      </motion.div>
    </div>
  );
};

export default AuroraCanvasSection;