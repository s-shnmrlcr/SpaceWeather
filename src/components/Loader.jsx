import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="text-white text-3xl md:text-4xl font-light mb-3 tracking-wide" style={{ fontFamily: 'Audiowide' }}>
            Through an Astronaut's Eyes
          </div>
          <div className="text-purple-300 text-sm tracking-widest uppercase" style={{fontFamily: 'Concert One'}}>Loading Experience</div>
        </motion.div>
        
        <div className="relative w-80 h-1.5 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-full shadow-lg shadow-purple-500/50"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-300 mt-8 text-lg tracking-widest font-light" style={{fontFamily: 'Concert One'}}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;