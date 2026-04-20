import { s } from '../styles';
import useReveal from '../hooks/useReveal';
import { useLang } from '../i18n/LanguageContext';

export default function CTASection() {
  const [ref, visible] = useReveal(0.1);
  const { t, isRTL } = useLang();

  return (
    <section style={s.ctaSection} id="cta">
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
        <h2 style={s.ctaH2} className="section-h2">{t.cta.title}<br />{t.cta.titleLine2}</h2>
        <p style={s.ctaSub} className="section-subtext">{t.cta.sub}</p>
        <div style={{ marginBottom: 16 }}>
          <a href="mailto:hello@syriancloud.com" style={s.btnGold} className="btn-gold">
            {t.cta.primary}
          </a>
        </div>
      </div>
    </section>
  );
}
