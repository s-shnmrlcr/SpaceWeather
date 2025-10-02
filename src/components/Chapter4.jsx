import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const content = `Chapter 4: My Beautiful Gift
But I have a secret.
I swirl my colors—green, purple, pink, and blue—like brushes on a cosmic canvas.
Humans call it the aurora borealis and aurora australis.
Children look up and gasp.
Artists sketch me.
It's my way of saying:
💫 "I'm here! And I bring beauty too."`;

// Aurora Ribbon Component (Custom Shader for Mouse-Painted Waves - Aurora VR Inspiration)
function AuroraRibbon({ mousePos }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const vertexShader = `
    uniform float time;
    uniform vec2 mouse;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float dist = distance(uv, mouse);
      pos.z += sin(pos.x * 10.0 + time) * 0.1 + (1.0 / (dist + 0.1)) * 0.5; // Mouse distortion for "painting"
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      vec3 color = vec3(0.0);
      color.r = sin(uv.y * 3.0 + time) * 0.5 + 0.5; // Pink wave
      color.g = sin(uv.x * 2.0 + time * 1.5) * 0.8; // Green wave
      color.b = sin(uv.y * 4.0 + time * 0.8) * 0.6; // Blue/Purple wave
      gl_FragColor = vec4(color, 1.0 - length(uv - 0.5) * 0.5); // Aurora glow fade
    }
  `;

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.mouse.value.set(mousePos.x, mousePos.y);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[15, 8]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          mouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        transparent
        side={THREE.DoubleSide}
        aurora-glow // CSS class for additional glow
      />
    </mesh>
  );
}

export default function Chapter4() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useGSAP(() => {
    // Canvas zoom reveal (Smooth Zoom + Projects Transitions)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#chapter4',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .from('h2', { scale: 0.8, opacity: 0, duration: 1, ease: 'backOut' }, 0)
    .to('.aurora-canvas', { scale: 1.2, duration: 2, ease: 'none' }, 0.5) // Narrative zoom
    .from('p', { y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'backOut' }, 0);
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: 1 - (e.clientY - rect.top) / rect.height, // Flip Y for Three.js
    });
  };

  return (
    <section id="chapter4" className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-aurora-purple/10 to-aurora-pink relative overflow-hidden">
      <div className="text-center z-10 px-4 max-w-4xl mb-8">
        <motion.h2
          className="text-5xl md:text-7xl font-cartapani text-playful mb-8 aurora-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ letterSpacing: '0.1em', rotateY: 5 }}
        >
          Chapter 4: My Beautiful Gift
        </motion.h2>
        <motion.div
          className="text-xl space-y-4 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-aurora-purple/30"
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
              whileHover={{ scale: 1.02, color: 'var(--aurora-purple)' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Interactive 3D Aurora Canvas (Aurora VR Immersion - Mouse Paints Waves) */}
      <div className="aurora-canvas w-full max-w-4xl h-80 md:h-96 relative rounded-2xl overflow-hidden border-2 border-aurora-purple/30" onMouseMove={handleMouseMove}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <AuroraRibbon mousePos={mousePos} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
        <motion.p
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-aurora-purple bg-black/50 px-3 py-1 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Move mouse to paint the aurora ✨ (ARIA: Interactive canvas for aurora simulation)
        </motion.p>
      </div>
    </section>
  );
}