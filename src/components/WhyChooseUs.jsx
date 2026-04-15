import { s } from '../styles';
import useReveal from '../hooks/useReveal';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

function FeatureRow({ item, index, visible }) {
  return (
    <div style={s.featureRow(visible, index)}>
      <div style={s.featureNum}>{item.num}</div>
      <div>
        <div style={s.featureTitle}>{item.title}</div>
        <div style={s.featureDesc}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [leftRef, leftVisible] = useReveal(0.1);
  const [featRef, featVisible] = useReveal(0.05);
  const { t, isRTL } = useLang();

  return (
    <section style={s.whySection} id="why">
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
            <div style={s.eyebrow} className="eyebrow-line">{t.why.eyebrow}</div>
            <h2 style={s.h2} className="section-h2">{t.why.title}<br />{t.why.titleLine2}</h2>
            <p style={{ ...s.subText, marginBottom: 32, maxWidth: 430 }} className="section-subtext">{t.why.body}</p>
            <a
              href="#cta"
              style={s.whyCta}
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
