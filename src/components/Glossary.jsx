import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const glossaryItems = [
  {
    term: "Solar Flare",
    definition: "A sudden burst of light and energy from the Sun—like me, Lira! 🌞✨",
    emoji: "🌞"
  },
  {
    term: "CME (Coronal Mass Ejection)",
    definition: "A giant bubble of hot gas and energy that shoots out of the Sun. It's like a big glowing wave racing through space. 🌊☀️",
    emoji: "🌊"
  },
  {
    term: "Space Weather",
    definition: "What happens in space when the Sun's energy and particles travel to Earth. Just like Earth has weather with rain and wind, space has storms too! 🌌⚡",
    emoji: "🌌"
  },
  {
    term: "Aurora (Northern & Southern Lights)",
    definition: "Colorful lights that dance in the sky near the North and South Poles. They happen when energy from the Sun meets Earth's atmosphere. 🌈🌠",
    emoji: "🌈"
  },
  {
    term: "GPS (Global Positioning System)",
    definition: "The satellites that help phones, cars, and tractors know where they are. Space weather can sometimes confuse them! 📡🚜",
    emoji: "📡"
  },
  {
    term: "Astronauts",
    definition: "Brave people who travel and live in space. They sometimes feel my sparks when I pass by! 👩‍🚀🚀",
    emoji: "👩‍🚀"
  },
  {
    term: "Power Grid",
    definition: "All the wires and machines that bring electricity to homes and cities. Strong space weather can make it flicker or shut down. 💡⚡",
    emoji: "💡"
  },
];

export default function Glossary() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  useGSAP(() => {
    // Staggered card reveal + 3D flip (Projects Transitions + Simone 3D)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#glossary',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .from('h2', { x: 50, opacity: 0, duration: 1, ease: 'backOut' }, 0)
    .from('.glossary-card', { y: 100, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'backOut' }, 0.5);
  });

  return (
    <section id="glossary" className="h-screen py-20 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-aurora-purple/10 to-black">
      {/* Cosmic Background (Aurora-1 Pattern) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/assets/stars.webp')] bg-cover bg-center"></div>

      <div className="text-center z-10 px-4 max-w-6xl">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-4 aurora-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 10 }}
        >
          Lira's Little Space Glossary
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Tap or press Enter to flip and learn more about space terms! (Keyboard accessible)
        </motion.p>

        {/* 3D Flip-Card Grid (Dichtm Cinematic Hovers + End Speciesism High-Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {glossaryItems.map((item, index) => (
            <motion.div
              key={index}
              className="glossary-card perspective-1000 relative w-80 h-48 cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, ease: "backOut" }}
              whileHover={{ scale: 1.05 }} // Cinematic scale burst
              role="button"
              tabIndex={0}
              aria-label={`Flip card for ${item.term}`}
              onClick={() => toggleFlip(index)}
              onKeyDown={(e) => e.key === 'Enter' && toggleFlip(index)}
            >
              {/* Card Container */}
              <motion.div
                className="relative w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "backOut" }}
              >
                {/* Front Side (Term + Emoji) */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-aurora-purple/20 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center items-center border border-aurora-purple/30 text-center aurora-glow"
                  style={{ backfaceVisibility: 'hidden' }}
                  whileHover={{ boxShadow: '0 0 20px var(--aurora-purple)' }} // High-contrast glow
                >
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-cartapani text-playful font-bold">{item.term}</h3>
                </motion.div>

                {/* Back Side (Definition) */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-aurora-pink/20 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center items-center border border-aurora-pink/30 text-center aurora-glow rotate-y-180"
                  style={{ backfaceVisibility: 'hidden' }}
                  whileHover={{ boxShadow: '0 0 20px var(--aurora-pink)' }}
                >
                  <p className="text-lg font-cartapani text-playful leading-relaxed">{item.definition}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}