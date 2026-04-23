import { s } from '../styles';
import useReveal from '../hooks/useReveal';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

// Light-theme overrides for the white background
const light = {
  section: {
    ...s.whySection,
    background: '#0A0D0C',
    borderTop: 'none',
    borderBottom: 'none',
    marginTop: 40,
  },
  h2: { ...s.h2, color: '#f7f2e8' },
  subText: { ...s.subText, color: '#7a9490', marginBottom: 32, maxWidth: 430 },
  whyCta: { ...s.whyCta, color: '#d3b988', borderBottomColor: 'rgba(211,185,136,0.45)' },
  featureRow: (visible, i) => {
    const base = s.featureRow(visible, i);
    return { ...base, borderBottomColor: 'rgba(211,185,136,0.2)' };
  },
  featureNum: { ...s.featureNum, color: 'rgba(122,148,144,0.9)' },
  featureTitle: { ...s.featureTitle, color: '#f7f2e8' },
  featureDesc: { ...s.featureDesc, color: '#7a9490' },
};

function FeatureRow({ item, index, visible }) {
  return (
    <div style={light.featureRow(visible, index)}>
      <div style={light.featureNum} dir="ltr">{item.num}</div>
      <div>
        <div style={light.featureTitle}>{item.title}</div>
        <div style={light.featureDesc}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [leftRef, leftVisible] = useReveal(0.1);
  const [featRef, featVisible] = useReveal(0.05);
  const { t, isRTL } = useLang();

  return (
    <section style={light.section} id="why">
      <div style={s.inner}>
        <div style={s.whyGrid} className="why-grid">
          <div
            ref={leftRef}
            style={{
              ...s.whyLeft,
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'none' : 'translateY(32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
            className="why-left-sticky"
          >
            <h2 style={light.h2} className="section-h2">{t.why.title}<br />{t.why.titleLine2}</h2>
            <p style={light.subText} className="section-subtext">{t.why.body}</p>
            <a
              href="#cta"
              style={light.whyCta}
              className="why-cta"
              onClick={(e) => { e.preventDefault(); scrollToId('cta'); }}
            >
              {t.why.cta} {isRTL ? '←' : '→'}
            </a>
          </div>
          <div ref={featRef} style={{ display: 'flex', flexDirection: 'column' }}>
            {t.why.features.map((item, i) => (
              <FeatureRow key={item.num} item={item} index={i} visible={featVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
