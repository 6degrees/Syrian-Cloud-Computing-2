import { s } from '../styles';
import bgImage from '../assets/Background.jpg';
import useReveal from '../hooks/useReveal';
import { useLang } from '../i18n/LanguageContext';

export default function CTASection() {
  const [ref, visible] = useReveal(0.1);
  const { t, isRTL } = useLang();

  return (
    <section style={s.ctaSection} id="cta">
      {/* Background image — lazy-loaded to defer the ~570KB download */}
      <img
        src={bgImage}
        alt=""
        role="presentation"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Dark overlay to keep text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10,13,12,0.45) 0%, rgba(10,13,12,0.82) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        ref={ref}
        style={{
          ...s.inner,
          position: 'relative',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div style={{ ...s.eyebrow, justifyContent: 'center' }}>{t.cta.eyebrow}</div>
        <h2 style={s.ctaH2} className="section-h2">{t.cta.title}<br />{t.cta.titleLine2}</h2>
        <p style={s.ctaSub} className="section-subtext">{t.cta.sub}</p>
        <div style={{ marginBottom: 16 }}>
          <a href="mailto:hello@syriancloud.com" style={s.btnGold} className="btn-gold">
            {t.cta.primary}
          </a>
        </div>
        <a href="mailto:hello@syriancloud.com?subject=Technical%20inquiry" style={s.ctaSecondary} className="cta-secondary">
          {t.cta.secondary} {isRTL ? '←' : '→'}
        </a>
      </div>
    </section>
  );
}
