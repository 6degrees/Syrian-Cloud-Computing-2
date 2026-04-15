import { useEffect, useState } from 'react';

// Matches phones/tablets and coarse-pointer touch devices. Used to switch
// the hero gradient into autonomous motion since there is no cursor to
// track on these devices.
const QUERY = '(max-width: 768px), (hover: none), (pointer: coarse)';

export default function useIsMobileView() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return isMobile;
}
