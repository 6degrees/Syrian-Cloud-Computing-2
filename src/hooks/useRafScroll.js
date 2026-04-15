import { useEffect } from 'react';

// Attaches a scroll listener throttled via requestAnimationFrame.
// The callback receives the latest window.scrollY at most once per frame.
export default function useRafScroll(callback) {
  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;

    const onScroll = () => {
      lastY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          callback(lastY);
          ticking = false;
        });
      }
    };

    callback(lastY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [callback]);
}
