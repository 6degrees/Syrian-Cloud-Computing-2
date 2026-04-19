import { useState } from 'react';
import { s } from '../styles';
import { icons } from './icons';
import useReveal from '../hooks/useReveal';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

function ServiceCard({ item, delay, learnMoreLabel }) {
  const [ref, visible] = useReveal(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      style={{
        ...s.card(hovered),
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease, background 0.25s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={s.cardTopBorder(hovered)} />
      <span style={s.cardNum} dir="ltr">{item.num}</span>
      <div style={s.cardIcon} aria-hidden="true">{icons[item.icon]}</div>
      <h3 style={s.cardTitle} className="card-title">{item.title}</h3>
      <div style={s.cardDesc} className="card-desc">{item.desc}</div>
      <a
        href="#cta"
        style={s.cardLink(hovered)}
        onClick={(e) => { e.preventDefault(); scrollToId('cta'); }}
        aria-label={`${learnMoreLabel} — ${item.title}`}
      >
        {learnMoreLabel} →
      </a>
    </div>
  );
}

export default function Services() {
  const { t } = useLang();
  return (
    <section style={s.servicesSection} id="services">
      <div style={s.inner}>
        <div style={s.servicesHeadWrap}>
          <div style={s.servicesHeadGrid} className="services-head-grid">
            <div>
              <div style={s.eyebrow} className="eyebrow-line">{t.services.eyebrow}</div>
              <h2 style={{ ...s.h2, marginBottom: 0 }} className="section-h2">
                {t.services.title}<br />{t.services.titleLine2}
              </h2>
            </div>
            <p style={s.servicesLead} className="section-subtext">{t.services.lead}</p>
          </div>
        </div>
      </div>
      <div style={s.inner}>
        <div style={s.servicesBodyWrap}>
          <div style={{ ...s.servicesGrid, marginTop: 0, borderTop: 'none' }} className="services-grid">
            {t.services.items.map((item, i) => (
              <ServiceCard
                key={item.num}
                item={item}
                delay={i * 0.07}
                learnMoreLabel={t.services.learnMore}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
