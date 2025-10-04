import React from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';

const Prologue = () => {
  return (
    <StorySection 
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
      bgOverlay="linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
    >
      <div className="space-y-10 text-center" style={{ fontFamily: 'Audiowide' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-light leading-relaxed text-yellow-200"
        >
          The Sun gives life, light, and warmth. Sometimes it sends storms.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light leading-relaxed text-blue-200"
        >
          Invisible rivers of charged particles flow through space; Earth stands in their path.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl font-light leading-relaxed text-purple-200"
        >
          This is the story of one storm, told from the window of orbit.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-4xl font-light leading-relaxed text-pink-300 italic pt-6"
        >
          I am Commander Aria Vega. From up here the world speaks differently.
        </motion.p>
      </div>
    </StorySection>
  );
};

export default Prologue;