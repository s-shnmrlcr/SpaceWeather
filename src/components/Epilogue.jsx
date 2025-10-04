import React from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';

const Epilogue = () => {
  return (
    <StorySection image="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=1920&q=80">
      <div className="space-y-8 text-center" style={{ fontFamily: 'Audiowide' }}>
        <motion.h3 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-4xl md:text-5xl font-light text-purple-200 mb-12"
        >
          Epilogue
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-3xl md:text-4xl font-light leading-relaxed text-gray-200"
        >
          Our shield is invisible and our world fragile.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }} 
          className="text-3xl md:text-4xl font-light leading-relaxed text-purple-300"
        >
          If we listen with curiosity and care, we can prepare—without fear, with wonder.
        </motion.p>
      </div>
    </StorySection>
  );
};

export default Epilogue;