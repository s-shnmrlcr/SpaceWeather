import React from 'react';
import { motion } from 'framer-motion';
import StorySection from './StorySection';

const Story = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,0.3) transparent',
      }}
    >
      {/* Custom scrollbar styles */}
      <style>
        {`
          /* thin custom scrollbar for Chrome, Edge, Safari */
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,0.5);
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          html {
            scrollbar-width: thin;
            scrollbar-color: rgba(255,255,255,0.3) transparent;
          }
        `}
      </style>

      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-500 rounded-full blur-[100px]"
        />
      </div>

      {/* Overlay + content */}
      <StorySection bgOverlay="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3))">
        <div className="space-y-10 text-center relative z-10 px-4" style={{ fontFamily: 'Audiowide' }}>
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl font-light leading-relaxed text-purple-200"
          >
            This is the story of one storm, told from the window of orbit.
          </motion.p>

          {/* Responsive iframe container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex justify-center w-full"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1200px',
              height: '80vh',
              borderRadius: '12px',
              overflow: 'auto', // allows scroll within iframe container
              boxShadow: '0 0 30px rgba(0,0,0,0.5)',
            }}
          >
            <iframe
              src="https://s-shnmrlcr.github.io/sandbox1337/"
              title="Aurora Sandbox"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '12px',
              }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </StorySection>
    </div>
  );
};

export default Story;
