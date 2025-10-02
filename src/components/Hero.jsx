import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })
    .to('h1', { scale: 1.2, ease: 'none' }, 0)
    .to('.title-text', { letterSpacing: '0.2em', ease: 'none' }, 0);
  });

  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-aurora-purple/20 to-aurora-blue"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="text-center z-10 px-4">
        <motion.h1
          className="text-7xl md:text-9xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "backOut" }}
        >
          Lira
        </motion.h1>
        <motion.div
          className="title-text text-3xl md:text-5xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
        >
          the Little Flare Who Painted the Sky
        </motion.div>
        <motion.button
          className="px-8 py-4 bg-aurora-purple text-white rounded-full text-xl font-cartapani hover:bg-aurora-pink transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Start journey"
        >
          Start Journey ✨
        </motion.button>
      </div>
    </section>
  );
}