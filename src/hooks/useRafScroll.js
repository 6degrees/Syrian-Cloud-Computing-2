import { useEffect, useRef } from 'react';

// Attaches a scroll listener throttled via requestAnimationFrame.
// The callback receives the latest window.scrollY at most once per frame.
// Uses a ref internally so the hook never re-subscribes when the callback changes.
export default function useRafScroll(callback) {
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;

    const onScroll = () => {
      lastY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          cbRef.current(lastY);
          ticking = false;
        });
      }
    };

    cbRef.current(lastY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
