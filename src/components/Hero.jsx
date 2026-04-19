import { useRef, useState } from 'react';
import GradientBlinds from './GradientBlinds.jsx';
import { s } from '../styles';
import { HERO_GRADIENT_COLORS } from '../theme';
import useRafScroll from '../hooks/useRafScroll';
import useIsMobileView from '../hooks/useIsMobileView';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const isMobileView = useIsMobileView();
  const { t } = useLang();

  useRafScroll((y) => {
    if (contentRef.current) contentRef.current.style.transform = `translateY(${y * 0.18}px)`;
    if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
    setScrolled((prev) => {
      const next = y > 30;
      return prev === next ? prev : next;
    });
  });

  const goto = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section style={s.hero} id="hero">
      <div style={s.blindsWrap} ref={bgRef}>
        <GradientBlinds
          gradientColors={HERO_GRADIENT_COLORS}
          // Keep autonomous hover-like motion always on; desktop pointer
          // interaction naturally takes over once the user moves the cursor.
          autoAnimate
          mobileDynamicSpotlight={isMobileView}
          disablePointerInteraction={isMobileView}
          autoAnimateSpeed={0.45}
          autoAnimateRange={0.26}
          angle={-35}
          noise={0}
          blindCount={14}
          blindMinWidth={60}
          spotlightRadius={0.22}
          spotlightSoftness={1.6}
          spotlightOpacity={0.12}
          mouseDampening={0.11}
          distortAmount={0.4}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>
      <div style={s.vignette} />
      <div style={s.vignetteBottom} />

      <div style={s.heroContent} ref={contentRef}>
        <h1 style={s.h1} className="hero-h1">
          <span style={{ display: 'block', opacity: 0, transform: 'translateY(40px)' }} className="hero-line-1">
            {t.hero.line1}
          </span>
          <span style={{ display: 'block', opacity: 0, transform: 'translateY(40px)' }} className="hero-line-2">
            {t.hero.line2}
          </span>
        </h1>
        <p style={{ ...s.heroSub, opacity: 0, transform: 'translateY(20px)' }} className="hero-sub">
          {t.hero.sub}
        </p>
        <div style={{ ...s.heroBtns, opacity: 0, transform: 'translateY(20px)' }} className="hero-btns">
          <a href="#cta" style={s.btnPrimary} className="btn-primary" onClick={goto('cta')}>
            {t.hero.ctaPrimary}
          </a>
          <a href="#services" style={s.btnGhost} className="btn-ghost" onClick={goto('services')}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div
        style={{
          ...s.scrollInd,
          opacity: scrolled ? 0 : 1,
          visibility: scrolled ? 'hidden' : 'visible',
          transition: 'opacity 0.25s ease, visibility 0.25s ease',
        }}
        className={!scrolled ? 'scroll-ind' : ''}
        aria-hidden="true"
      >
        <span style={s.scrollLabel}>{t.hero.scroll}</span>
        <div style={s.scrollLine} className="scroll-line" />
      </div>
    </section>
  );
}
