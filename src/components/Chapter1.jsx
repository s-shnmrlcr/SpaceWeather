import React from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';

const Chapter1 = () => {
  return (
    <StorySection video="https://www.youtube.com/embed/czW6VNUpP30">
      <div className="space-y-8 text-center" style={{ fontFamily: 'Audiowide' }}>
        <motion.h3 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-4xl md:text-5xl font-light text-green-300 mb-12"
        >
          Chapter 1: The View Above
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="text-2xl md:text-4xl font-light leading-relaxed text-green-200"
        >
          Tonight the forecast is high—Auroras will paint the poles.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="text-2xl md:text-3xl font-light leading-relaxed text-emerald-200"
        >
          From orbit the aurora looks like curtains—alive and flowing.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="text-xl md:text-2xl font-light leading-relaxed text-cyan-300 italic"
        >
          Mission Control: "Front row seats tonight. Prepare cameras and logs."
        </motion.p>
      </div>
    </StorySection>
  );
};

export default Chapter1;