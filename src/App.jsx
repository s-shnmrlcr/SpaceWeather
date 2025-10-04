import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Prologue from './components/Prologue';
import Characters from './components/Characters';
import Chapter1 from './components/Chapter1';
import AuroraCanvasSection from './components/AuroraCanvasSection';
import Epilogue from './components/Epilogue';
import Credits from './components/Credits';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Hero />
          <Prologue />
          <Characters />
          <Chapter1 />
          <AuroraCanvasSection />
          <Epilogue />
          <Credits />
        </>
      )}
    </div>
  );
}