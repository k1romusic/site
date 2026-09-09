import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function scrollToPosition(target: number | string, immediate: boolean = false) {
  if (typeof window === 'undefined') return;

  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { immediate });
  } else {
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: immediate ? ('instant' as ScrollBehavior) : 'smooth',
      });
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({
          behavior: immediate ? ('instant' as ScrollBehavior) : 'smooth',
          block: 'start',
        });
      }
    }
  }
}

export function useSmoothScroll(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, [enabled]);
}

