import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `Chapter 2: The Journey Through Space
Wooooosh! I race through the dark, silent sky.
It feels like flying on invisible wings. I am small but powerful, carrying the Sun's spark inside me.
I don't mean to cause trouble—I just can't help where I go. The solar wind carries me, pushing me closer and closer to… Earth! 🌍`;

export default function Chapter2() {
  useGSAP(() => {
    // Parallax + planet zoom (Blacknegative Immersive + Smooth Zoom)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#chapter2',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
    .to('#stars', { yPercent: -50, ease: 'none' }, 0)
    .to('.planet', { scale: 1.5, rotateY: 180, duration: 2, ease: 'backOut' }, 0.5) // 3D zoom (Simone)
    .from('p', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'backOut' }, 0); // Playful (Yoichi)
  });

  return (
    <section id="chapter2" className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Parallax Starfield (Faroe Narrative) */}
      <div id="stars" className="absolute inset-0 opacity-50">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Zooming Planet (Aurora Glow) */}
      <motion.div
        className="planet absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-aurora-blue rounded-full aurora-glow relative"
        style={{ backgroundImage: "url('/assets/earth.webp')", backgroundSize: 'cover' }}
        initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 2, delay: 1, ease: "backOut" }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-full"></div>
      </motion.div>

      <div className="text-center z-10 px-4 max-w-4xl">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 10 }}
        >
          Chapter 2: Journey Through Space
        </motion.h2>
        <motion.div
          className="text-xl space-y-4 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-aurora-blue/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {content.split('\n').map((line, i) => (
            <motion.p
              key={i}
              className="text-playful"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "backOut" }}
              whileHover={{ scale: 1.02, color: 'var(--aurora-blue)' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}