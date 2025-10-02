import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `Chapter 3: Meeting Earthlings
When I reach Earth, I notice so many different people!
⦁ Farmers look at the sky and wonder why their GPS tractors get confused.
⦁ Pilots hear static in their radios when I dance overhead.
⦁ Astronauts feel my sparks buzzing around them in space.
⦁ Power workers worry when I make electricity flicker.
I don't mean to scare them. I just want to say hello.`;

const scenes = [
  { icon: '🚜', label: 'Farmers & GPS', desc: 'GPS tractors get confused by solar interference.' },
  { icon: '✈️', label: 'Pilots & Radios', desc: 'Radio static dances with aurora overhead.' },
  { icon: '👩‍🚀', label: 'Astronauts', desc: 'Sparks buzz around brave space travelers.' },
  { icon: '⚡', label: 'Power Grids', desc: 'Electricity flickers like cosmic lightning.' },
];

export default function Chapter3() {
  const [activeScene, setActiveScene] = useState(null);

  useGSAP(() => {
    // Stagger + cinematic burst (Projects Transitions + Dichtm)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#chapter3',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .from('h2', { x: -50, opacity: 0, duration: 1, ease: 'backOut' }, 0)
    .from('.scene-card', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'backOut' }, 0.5);
  });

  return (
    <section id="chapter3" className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-aurora-green/10 to-aurora-blue relative py-20 overflow-hidden">
      {/* Earth Pattern Background (Aurora-1 Glow) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/earth.webp')] bg-cover bg-center"></div>

      <div className="text-center px-4 max-w-4xl mb-12 z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 10 }}
        >
          Chapter 3: Meeting Earthlings
        </motion.h2>
        <motion.div
          className="text-xl space-y-4 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-aurora-green/30"
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
              whileHover={{ scale: 1.02, color: 'var(--aurora-green)' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Interactive Grid (End Speciesism Activism Hovers) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
        {scenes.map((scene, i) => (
          <motion.div
            key={i}
            className="scene-card p-6 bg-aurora-green/10 rounded-lg cursor-pointer transition-all duration-300 hover:bg-aurora-pink/20"
            whileHover={{ scale: 1.1, rotateY: 15 }} // 3D cinematic (Simone)
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, ease: "backOut" }}
            onClick={() => setActiveScene(i === activeScene ? null : i)}
            onKeyDown={(e) => e.key === 'Enter' && setActiveScene(i === activeScene ? null : i)} // Keyboard support
            role="button"
            tabIndex={0}
            aria-label={`Toggle ${scene.label} details`}
          >
            <div className="text-4xl mb-2">{scene.icon}</div>
            <p className="font-cartapani text-playful text-sm">{scene.label}</p>
            {activeScene === i && (
              <motion.p
                className="text-xs mt-2 opacity-0"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                {scene.desc}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}