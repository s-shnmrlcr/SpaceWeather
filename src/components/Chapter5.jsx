import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `Chapter 5: Lessons from a Flare
Sometimes, my energy can make life a little tricky for Earthlings.
⦁ The Sun is alive and full of surprises.
⦁ Space and Earth are connected, like dance partners.
⦁ Even storms in space can create beauty on Earth.
I am just one little flare, but together with my Sun and the sky, I tell a story of light, science, and wonder.`;

const lessons = [
  'The Sun is alive and full of surprises.',
  'Space and Earth are connected, like dance partners.',
  'Even storms in space can create beauty on Earth.',
];

export default function Chapter5() {
  useGSAP(() => {
    // Floating stagger + zoom (Yoichi Playful + Smooth Zoom)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#chapter5',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .from('h2', { scale: 1.2, opacity: 0, duration: 1, ease: 'backOut' }, 0)
    .from('.bubble', { y: 100, opacity: 0, stagger: 0.3, duration: 1, ease: 'backOut' }, 0.5)
    .to('.bubble', { y: -20, rotation: 5, duration: 2, repeat: -1, yoyo: true }, 1); // Ongoing float (Faroe Narrative)
  });

  return (
    <section id="chapter5" className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-aurora-pink/10 to-aurora-purple relative overflow-hidden">
      {/* Floating Background Bubbles (Aurora Glow) */}
      {lessons.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 bg-aurora-pink/10 rounded-full blur-xl"
          style={{ left: `${20 + i * 30}%`, top: `${30 + i * 20}%` }}
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.5, ease: "easeInOut" }}
        />
      ))}

      <div className="text-center px-4 max-w-4xl mb-12 z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 10 }}
        >
          Chapter 5: Lessons from a Flare
        </motion.h2>
        <motion.div
          className="text-xl space-y-4 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-aurora-pink/30"
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
              whileHover={{ scale: 1.02, color: 'var(--aurora-pink)' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Floating Lesson Bubbles (Dichtm Cinematic Hovers) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {lessons.map((lesson, i) => (
          <motion.div
            key={i}
            className="bubble bg-aurora-pink/20 border border-aurora-pink rounded-2xl p-6 max-w-md text-center aurora-glow backdrop-blur-sm"
            initial={{ opacity: 0, y: 100, rotateY: 90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: i * 0.3, duration: 1, ease: "backOut" }}
            whileHover={{ scale: 1.1, rotateY: 15, boxShadow: '0 0 30px var(--aurora-pink)' }} // Cinematic burst
          >
            <div className="text-4xl mb-4">✨</div>
            <p className="text-lg font-cartapani text-playful leading-relaxed">{lesson}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}