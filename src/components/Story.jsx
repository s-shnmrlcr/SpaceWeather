import React from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';

const Story = () => {
  return (
    <StorySection
      bgOverlay="linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
    >
      <div className="space-y-10 text-center" style={{ fontFamily: 'Audiowide' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl font-light leading-relaxed text-purple-200"
        >
          This is the story of one storm, told from the window of orbit.
        </motion.p>

        {/* ✅ Fullscreen Responsive Embedded Website */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-full flex justify-center"
          style={{ position: 'relative', width: '100%', height: '100vh' }} // Full viewport
        >
          <iframe
            src="https://s-shnmrlcr.github.io/sandbox1337/"
            title="Aurora Sandbox"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '0', // optional
            }}
            allowFullScreen
          />
        </motion.div>
      </div>
    </StorySection>
  );
};

export default Story;
