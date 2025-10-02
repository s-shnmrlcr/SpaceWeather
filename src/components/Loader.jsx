import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 2 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center flex-col">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="aurora-glow"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="url(#flareGradient)"
          strokeWidth="4"
          pathLength="1"
          animate={{ r: [40, 80, 40], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="flareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--aurora-yellow)" />
            <stop offset="100%" stopColor="var(--aurora-pink)" />
          </linearGradient>
        </defs>
      </motion.svg>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-aurora-green rounded-full"
          style={{
            left: '50%',
            top: '50%',
            x: Math.cos(i * (Math.PI / 6)) * 100,
            y: Math.sin(i * (Math.PI / 6)) * 100,
          }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
        />
      ))}

      <motion.div
        className="mt-8 text-2xl font-cartapani text-playful"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Igniting Lira's Journey... {progress}%
      </motion.div>
    </div>
  );
}