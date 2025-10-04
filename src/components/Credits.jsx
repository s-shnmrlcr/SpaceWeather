import React from 'react';
import { motion } from 'framer-motion';

const Credits = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80)', 
          filter: 'brightness(0.3)' 
        }} 
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 2 }} 
        className="text-center space-y-8 relative z-10 px-6" 
        style={{ fontFamily: 'Audiowide' }}
      >
        <p className="text-3xl md:text-4xl font-light text-gray-300">The End</p>
        <p className="text-xl text-gray-400 italic">Thank you for witnessing this journey</p>
        <div className="pt-16 text-sm text-gray-500 space-y-2">
          <p>Through an Astronaut's Eyes</p>
          <p>By:Sandbox1337</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Credits;