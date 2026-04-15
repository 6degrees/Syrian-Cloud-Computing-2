import { useEffect, useRef, useState } from 'react';
import { C } from '../theme';

// Custom cursor that uses direct DOM manipulation (no re-renders).
// Only activates on fine pointer devices where native cursor is hidden.
// Respects prefers-reduced-motion and pauses animation when tab is hidden.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      // Pause when tab is hidden to save CPU/battery
      if (document.hidden) {
        raf = requestAnimationFrame(animate);
        return;
      }
      ring.x += (mouse.x - ring.x) * 0.13;
      ring.y += (mouse.y - ring.y) * 0.13;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 16}px, ${ring.y - 16}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: C.gold,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: '1px solid rgba(211,185,136,0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
        }}
      />
    </>
  );
}
