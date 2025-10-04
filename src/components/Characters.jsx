import React from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';

const Characters = () => {
  return (
    <StorySection image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1920&q=80">
      <div className="space-y-8 text-center" style={{ fontFamily: 'Audiowide' }}>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-cyan-300 mb-12"
        >
          Characters
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }} 
          transition={{ duration: 0.8 }} 
          className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200"
        >
          I log the sky because it changes the lives below.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200"
        >
          Dr. Malik Chen keeps us steady and reminds me to breathe.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
          className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200"
        >
          Mission Control listens, learns, and relays the warnings we need.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="text-2xl md:text-3xl font-light leading-relaxed text-purple-300 italic"
        >
          Earth does not speak with words, but with shields, lights, and storms.
        </motion.p>
      </div>
    </StorySection>
  );
};

export default Characters;