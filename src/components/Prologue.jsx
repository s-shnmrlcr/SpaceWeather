import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `A Spark from the Sun
High above Earth, in the heart of the blazing Sun, tiny sparks were always born.
One day, a bright and curious flare named Lira stretched her golden arms and said:
✨ "I want to see the world beyond the Sun! What lies out there, among the stars?"
And so, Lira leapt into space—
not knowing that her journey would change the skies of Earth forever.`;

export default function Prologue() {
  useGSAP(() => {
    // Parallax zoom + stagger (Smooth Zoom + Projects Transitions)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#prologue',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
    .to('.sun-bg', { yPercent: -30, scale: 1.1, ease: 'none' }, 0) // Immersive parallax (Blacknegative)
    .from('p', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'backOut' }, 0); // Playful stagger (Yoichi)
  });

  return (
    <section id="prologue" className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-aurora-yellow/10 to-black">
      {/* Parallax Sun Background (Faroe Narrative + Simone 3D Depth) */}
      <motion.div
        className="absolute inset-0 sun-bg bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/sun.webp')" }} // Cosmic sun asset
        initial={{ scale: 1.2, rotateY: -10 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 15, repeat: Infinity, yoyo: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

      <div className="text-center z-10 px-4 max-w-4xl prose prose-invert">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 5 }} // 3D playful (Simone)
        >
          Prologue
        </motion.h2>
        <motion.div
          className="text-2xl leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {content.split('\n').map((line, i) => (
            <motion.p
              key={i}
              className="text-playful mb-4"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "backOut" }}
              whileHover={{ scale: 1.02, color: 'var(--aurora-yellow)' }} // Cinematic hover (Dichtm)
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}