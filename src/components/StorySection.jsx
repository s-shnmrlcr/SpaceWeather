import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection = ({ children, image, video, bgOverlay = 'rgba(0,0,0,0.6)' }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center px-6 py-32 relative"
    >
      {image && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${image})`,
              filter: 'brightness(0.5) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0" style={{ background: bgOverlay }} />
        </div>
      )}
      
      <motion.div style={{ y, scale }} className="max-w-5xl relative z-10">
        {video && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(139, 92, 246, 0.4)' }}
          >
            <iframe
              width="100%"
              height="500"
              src={video}
              title="Space video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
          </motion.div>
        )}
        
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StorySection;