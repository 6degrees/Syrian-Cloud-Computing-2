import { useEffect, useState } from 'react';

// Matches phones/tablets and coarse-pointer touch devices. Used to switch
// the hero gradient into autonomous motion since there is no cursor to
// track on these devices.
const QUERY = '(max-width: 768px), (hover: none), (pointer: coarse), (any-pointer: coarse)';

export default function useIsMobileView() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const media = window.matchMedia(QUERY);
    const hasTouch =
      typeof navigator !== 'undefined' &&
      (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
    const update = () => {
      // Touch capability should be treated as mobile interaction mode, even
      // when viewport/media query signals are inconsistent on some browsers.
      setIsMobile(media.matches || hasTouch);
    };
    update();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
    } else if (typeof media.addListener === 'function') {
      // Safari < 14 fallback
      media.addListener(update);
    }
    window.addEventListener('resize', update, { passive: true });
    window.addEventListener('orientationchange', update, { passive: true });

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', update);
      } else if (typeof media.removeListener === 'function') {
        media.removeListener(update);
      }
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  return isMobile;
}
