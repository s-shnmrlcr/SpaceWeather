import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Loader = lazy(() => import('./components/Loader'));
const Hero = lazy(() => import('./components/Hero'));
const Prologue = lazy(() => import('./components/Prologue'));
const Chapter1 = lazy(() => import('./components/Chapter1'));
const Chapter2 = lazy(() => import('./components/Chapter2'));
const Chapter3 = lazy(() => import('./components/Chapter3'));
const Chapter4 = lazy(() => import('./components/Chapter4'));
const Chapter5 = lazy(() => import('./components/Chapter5'));
const Epilogue = lazy(() => import('./components/Epilogue'));
const Glossary = lazy(() => import('./components/Glossary'));

const storySections = [
  { id: 'prologue', component: Prologue },
  { id: 'chapter1', component: Chapter1 },
  { id: 'chapter2', component: Chapter2 },
  { id: 'chapter3', component: Chapter3 },
  { id: 'chapter4', component: Chapter4 },
  { id: 'chapter5', component: Chapter5 },
  { id: 'epilogue', component: Epilogue },
  { id: 'glossary', component: Glossary },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    ScrollTrigger.refresh();
  });

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (!isLoaded) {
    return <Suspense fallback={<div>Loading...</div>}>
      <Loader />
    </Suspense>;
  }

  return (
    <div className={`min-h-screen overflow-hidden ${theme}`} role="main">
      <motion.button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 bg-aurora-purple/30 rounded-full aurora-glow hover:bg-aurora-pink/50 transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </motion.button>

      <motion.section id="hero" className="h-screen flex items-center justify-center relative">
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>
      </motion.section>

      <AnimatePresence mode="wait">
        {storySections.map(({ id, component: Component }) => (
          <Suspense key={id} fallback={<div className="h-screen flex items-center justify-center">Loading {id}...</div>}>
            <motion.section
              id={id}
              className="h-screen w-full relative zoom-section"
              layoutId={id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Component />
            </motion.section>
          </Suspense>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;