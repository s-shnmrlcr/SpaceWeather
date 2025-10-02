import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // For smooth scroll to hero
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `Epilogue: The Sky I Painted
As I drift away, my light begins to fade…
Children point and cheer.
Families take photos.
I may just be a tiny spark from the Sun,
but tonight, I was also a painter of skies.
And somewhere, far away,
a new flare is whispering:✨ "Maybe one day, I'll paint the sky too."`;

export default function Epilogue() {
  useGSAP(() => {
    // Fade zoom + particle orbit (Smooth Zoom + Faroe Narrative)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#epilogue',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .from('h2', { y: -50, opacity: 0, duration: 1, ease: 'backOut' }, 0)
    .to('.earth-glow', { scale: 1.5, opacity: 0.8, duration: 2, ease: 'none' }, 0.5) // Zoom Earth
    .from('p', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'backOut' }, 0)
    .to('.particle', { rotate: 360, duration: 5, repeat: -1, stagger: 0.5 }, 1); // Orbit particles (Simone 3D)
  });

  return (
    <section id="epilogue" className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-aurora-blue/10 to-aurora-purple relative overflow-hidden">
      {/* Glowing Earth with Aurora Rings (Aurora-1 + Blacknegative Immersive) */}
      <motion.div
        className="earth-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-white/20 relative z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1, ease: "backOut" }}
      >
        {/* Earth */}
        <div className="w-full h-full bg-gradient-to-br from-aurora-blue via-aurora-green to-aurora-blue rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-full"></div>
          <div className="absolute inset-0 bg-[url('/assets/earth.webp')] bg-cover bg-center opacity-80"></div>
        </div>
        
        {/* Aurora Rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              width: `${120 + i * 60}%`,
              height: `${120 + i * 60}%`,
              borderColor: i % 2 === 0 ? 'rgba(0, 255, 136, 0.3)' : 'rgba(170, 0, 255, 0.3)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Orbiting Particles (Simone 3D Space) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute w-2 h-2 bg-aurora-yellow rounded-full"
          style={{
            left: '50%',
            top: '50%',
            x: Math.cos(i * (Math.PI / 10)) * 150,
            y: Math.sin(i * (Math.PI / 10)) * 150,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 0.5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="text-center z-10 px-4 max-w-4xl">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 5 }}
        >
          Epilogue: The Sky I Painted
        </motion.h2>
        <motion.div
          className="text-xl space-y-4 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-aurora-blue/30 mb-12"
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
              transition={{ duration: 0.8, delay: i * 0.2, ease: "backOut" }}
              whileHover={{ scale: 1.02, color: 'var(--aurora-blue)' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* CTA Button (Switch Theme Style - Morph on Hover) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className="px-8 py-4 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-full text-xl font-cartapani hover:from-aurora-purple hover:to-aurora-pink transition-all duration-300 aurora-glow"
            whileHover={{ scale: 1.05, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Restart journey from beginning"
          >
            Paint the Sky Again ✨
          </Link>
        </motion.div>
      </div>
    </section>
  );
}