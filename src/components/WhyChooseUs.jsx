import { s } from '../styles';
import useReveal from '../hooks/useReveal';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

// Light-theme overrides for the white background
const light = {
  section: { ...s.whySection, background: '#F1EDE6', borderTop: '1px solid #E0DBD3', borderBottom: '1px solid #E0DBD3' },
  eyebrow: { ...s.eyebrow, color: '#3A5F58' },
  h2: { ...s.h2, color: '#111' },
  subText: { ...s.subText, color: '#555', marginBottom: 32, maxWidth: 430 },
  whyCta: { ...s.whyCta, color: '#3A5F58', borderBottomColor: 'rgba(58,95,88,0.35)' },
  featureRow: (visible, i) => {
    const base = s.featureRow(visible, i);
    return { ...base, borderBottomColor: 'rgba(0,0,0,0.08)' };
  },
  featureNum: { ...s.featureNum, color: '#999' },
  featureTitle: { ...s.featureTitle, color: '#111' },
  featureDesc: { ...s.featureDesc, color: '#666' },
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
            <div style={light.eyebrow} className="eyebrow-line">{t.why.eyebrow}</div>
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
