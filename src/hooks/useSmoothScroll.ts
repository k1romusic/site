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
      offset: -80,
      duration: 1.1,
      force: true,
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
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
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
  options: { immediate?: boolean; offset?: number; onComplete?: () => void } = {}
) {
  if (typeof window === 'undefined') return;

  if (typeof target === 'number') {
    scrollToPosition(target, options.immediate ?? false);
    return;
  }

  const selector = target.startsWith('#') ? target : `#${target}`;
  const offset = options.offset ?? -80;
  const immediate = options.immediate ?? false;

  const attemptScroll = (retryCount: number = 0) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) {
      if (retryCount < 10) {
        setTimeout(() => attemptScroll(retryCount + 1), 80);
      }
      return;
    }

    const lenis = window.__lenis;
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(el, {
        offset,
        immediate,
        duration: 1.1,
        force: true,
        onComplete: () => {
          options.onComplete?.();
        },
      });
    } else {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY + offset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: immediate ? 'instant' : 'smooth',
      });
      options.onComplete?.();
    }
  };

  requestAnimationFrame(() => attemptScroll(0));
}



export function useSmoothScroll(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with hardware-accelerated fluid settings
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const lenis = new Lenis({
      duration: isTouch ? 0.8 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // Don't force override native touch physics in Telegram webview
      touchMultiplier: 1.2,
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

