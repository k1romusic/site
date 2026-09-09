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
    lenis.resize();
    lenis.scrollTo(target, {
      immediate,
      offset: -70,
    });
  } else {
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: immediate ? ('instant' as ScrollBehavior) : 'smooth',
      });
    } else {
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({
          top: Math.max(0, top),
          behavior: immediate ? ('instant' as ScrollBehavior) : 'smooth',
        });
      }
    }
  }
}

export function scrollToTarget(
  target: string | number,
  options: { immediate?: boolean; offset?: number } = {}
) {
  if (typeof window === 'undefined') return;

  if (typeof target === 'number') {
    scrollToPosition(target, options.immediate ?? false);
    return;
  }

  const selector = target.startsWith('#') ? target : `#${target}`;
  const offset = options.offset ?? -70;
  const immediate = options.immediate ?? false;

  let attempts = 0;
  const maxAttempts = 15;

  const tryScroll = () => {
    attempts++;
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) {
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 100);
      }
      return;
    }

    const lenis = window.__lenis;
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(el, {
        offset,
        immediate: attempts === 1 ? immediate : false,
      });
    } else {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY + offset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: immediate && attempts === 1 ? 'instant' : 'smooth',
      });
    }

    // Continue verifying position as dynamic sections, fonts and images settle
    if (attempts < 6) {
      setTimeout(tryScroll, 150);
    }
  };

  requestAnimationFrame(tryScroll);
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

