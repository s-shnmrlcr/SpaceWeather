import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reusable stagger timeline (used in components like Chapter3/Glossary for playful reveals - Yoichi Kobayashi inspiration)
export const createStaggerTimeline = (triggerId, targets, options = {}) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: `#${triggerId}`,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      ...options.scrollTrigger,
    },
  })
  .from(targets, {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'backOut',
    ...options.from,
  });
};

// Reusable zoom timeline (used in Hero/Epilogue for narrative zoom - Smooth Zoom Transition inspiration)
export const createZoomTimeline = (triggerId, targets, options = {}) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: `#${triggerId}`,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      ...options.scrollTrigger,
    },
  })
  .to(targets[0], { scale: 1.2, ease: 'none', ...options.to }, 0) // e.g., title zoom
  .to(targets[1], { yPercent: -30, scale: 1.1, ease: 'none', ...options.to }, 0); // e.g., background parallax
};

// Export for import in components (e.g., import { createStaggerTimeline } from './animations/timelines';)