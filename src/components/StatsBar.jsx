import { s } from '../styles';
import { useLang } from '../i18n/LanguageContext';

export default function StatsBar() {
  const { t } = useLang();
  // Latin/numeric values need explicit LTR direction so they render correctly
  // even when the document is RTL (Arabic).
  const stats = [
    { val: '99.99%', label: t.stats.uptimeLabel, ltr: true },
    { val: '10 Gbps', label: t.stats.networkLabel, ltr: true },
    { val: '24/7', label: t.stats.supportLabel, ltr: true },
    { val: t.stats.localValue, label: t.stats.localLabel, ltr: false },
  ];

  return (
    <div style={s.statsBar} className="stats-bar">
      <div style={s.statsInner} className="stats-grid">
        {stats.map((st, i) => (
          <div key={st.label} style={s.statItem(i)}>
            <div style={s.statVal} dir={st.ltr ? 'ltr' : undefined}>{st.val}</div>
            <div style={s.statLabel}>{st.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
