import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80)',
          y: backgroundY
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="text-6xl sm:text-8xl md:text-9xl font-light tracking-wide mb-6 text-white"
          style={{ fontFamily: 'Audiowide', textShadow: '0 0 40px rgba(255,255,255,0.3)' }}
        >
          Through an
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.7 }}
          className="text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-white mb-12"
          style={{ fontFamily: 'Audiowide', textShadow: '0 0 40px rgba(255,255,255,0.3)' }}
        >
          Astronaut's Eyes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="text-2xl sm:text-3xl text-blue-200 italic max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Concert One' }}
        >
          A story of storms, shields, and wonder from the edge of space
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="mt-24"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-300 text-sm tracking-widest flex flex-col items-center gap-2"
          >
            <span className="text-lg">↓</span>
            <span>Scroll to begin the journey</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;