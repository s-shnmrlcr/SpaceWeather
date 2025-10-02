import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `Chapter 1: I Am Lira, a Solar Flare
Hello! 🌞 My name is Lira, and I'm a little solar flare.
That means I'm a big burst of light and energy that jumps out from the Sun.
Sometimes I travel with friends called coronal mass ejections (CMEs)—we're like glowing waves of plasma racing through space!
You might not see me zooming, but ohhh, you can feel me once I reach Earth.`;

export default function Chapter1() {
  useGSAP(() => {
    // Orbit + zoom reveal (Aurora VR Glow + Smooth Zoom)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#chapter1',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .to('.flare-orbit', { rotation: 360, duration: 3, ease: 'none', repeat: -1 }, 0)
    .from('h2', { x: -100, opacity: 0, duration: 1, ease: 'backOut' }, 0) // Playful slide (Yoichi)
    .from('p', { y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'backOut' }, 0.5);
  });

  return (
    <section id="chapter1" className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-aurora-orange/10 to-aurora-yellow relative overflow-hidden">
      {/* Orbiting Flare Particles (Faroe Space Program + Simone 3D) */}
      <motion.div
        className="flare-orbit absolute top-1/2 left-1/2 w-20 h-20 bg-aurora-yellow rounded-full aurora-glow"
        style={{ transformOrigin: 'center' }}
        initial={{ scale: 0, rotateY: -90 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-aurora-orange rounded-full"
            style={{
              left: '50%',
              top: '50%',
              x: Math.cos(i * (Math.PI / 3)) * 60,
              y: Math.sin(i * (Math.PI / 3)) * 60,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.2, ease: 'linear' }}
          />
        ))}
      </motion.div>

      <div className="text-center z-10 px-4 max-w-4xl">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 5 }}
        >
          Chapter 1: I Am Lira
        </motion.h2>
        <motion.div
          className="text-xl space-y-4 bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-aurora-yellow/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {content.split('\n').map((line, i) => (
            <motion.p
              key={i}
              className="text-playful"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "backOut" }}
              whileHover={{ scale: 1.05, color: 'var(--aurora-yellow)' }} // Cinematic (End Speciesism)
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}