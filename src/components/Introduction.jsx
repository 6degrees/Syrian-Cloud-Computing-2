import { s } from '../styles';
import { C, SFText } from '../theme';
import useReveal from '../hooks/useReveal';
import { useLang } from '../i18n/LanguageContext';

export default function Introduction() {
  const [ref, visible] = useReveal(0.1);
  const { t } = useLang();
  return (
    <section style={s.introSection} id="intro">
      <div style={s.inner}>
        <div
          ref={ref}
          className="intro-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 56,
            alignItems: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div>
            <h2 style={{ ...s.h2, marginBottom: 20 }} className="section-h2">{t.intro.title}</h2>
            <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, fontFamily: SFText }} className="section-subtext">
              {t.intro.body}
            </p>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}` }}>
            <img
              src={`${import.meta.env.BASE_URL}SCCBanner.jpg`}
              alt={t.companyName}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
